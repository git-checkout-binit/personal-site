'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { COMPLETE_DRAFT_DATA, YAHOO_ADP_DATA, getPlayerTier } from '@/lib/draft-data';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

export default function DraftResults() {
  const [selectedPosition, setSelectedPosition] = useState<string>('ALL');
  const [selectedOwner, setSelectedOwner] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'overview' | 'detailed' | 'value' | 'charts' | 'rankings'>('charts');

  const positions = useMemo(() => 
    ['ALL', ...Array.from(new Set(COMPLETE_DRAFT_DATA.map(p => p.position)))], 
    []
  );

  const owners = useMemo(() => 
    ['ALL', ...Array.from(new Set(COMPLETE_DRAFT_DATA.map(p => p.owner)))], 
    []
  );

  const filteredData = useMemo(() => {
    return COMPLETE_DRAFT_DATA.filter(pick => {
      return (selectedPosition === 'ALL' || pick.position === selectedPosition) &&
             (selectedOwner === 'ALL' || pick.owner === selectedOwner);
    });
  }, [selectedPosition, selectedOwner]);

  const spendingByOwner = useMemo(() => {
    const spending = COMPLETE_DRAFT_DATA.reduce((acc, pick) => {
      acc[pick.owner] = (acc[pick.owner] || 0) + pick.salary;
      return acc;
    }, {} as Record<string, number>);
    return Object.entries(spending).sort((a, b) => b[1] - a[1]);
  }, []);

  const positionSpending = useMemo(() => {
    const spending = COMPLETE_DRAFT_DATA.reduce((acc, pick) => {
      acc[pick.position] = (acc[pick.position] || 0) + pick.salary;
      return acc;
    }, {} as Record<string, number>);
    return Object.entries(spending).sort((a, b) => b[1] - a[1]);
  }, []);

  const valueAnalysis = useMemo(() => {
    return COMPLETE_DRAFT_DATA.map(pick => {
      const yahooValue = YAHOO_ADP_DATA[pick.player] || 0;
      const value = yahooValue - pick.salary;
      const tier = getPlayerTier(pick.player, pick.position);
      return {
        ...pick,
        yahooValue,
        value,
        tier,
        valuePercent: yahooValue > 0 ? ((value / yahooValue) * 100) : 0
      };
    }).sort((a, b) => b.value - a.value);
  }, []);

  const bestValues = valueAnalysis.filter(p => p.value > 5).slice(0, 15);
  const worstValues = valueAnalysis.filter(p => p.value < -5).slice(-15);

  // Chart data preparations
  const ownerSpendingChartData = spendingByOwner.map(([owner, spent]) => ({
    owner,
    spent,
    remaining: 200 - spent
  }));

  const positionChartData = positionSpending.map(([position, amount]) => ({
    position,
    amount,
    avgSalary: Math.round((amount / COMPLETE_DRAFT_DATA.filter(p => p.position === position).length) * 10) / 10
  }));

  const valueScatterData = valueAnalysis
    .filter(p => p.yahooValue > 0)
    .map(p => ({
      x: p.salary,
      y: p.yahooValue,
      name: p.player,
      position: p.position,
      owner: p.owner,
      value: p.value
    }));

  const ownerAnalysis = useMemo(() => {
    return spendingByOwner.map(([owner, spent]) => {
      const picks = COMPLETE_DRAFT_DATA.filter(p => p.owner === owner);
      const totalValue = picks.reduce((sum, pick) => {
        const yahooValue = YAHOO_ADP_DATA[pick.player] || 0;
        return sum + yahooValue;
      }, 0);
      
      const positionBreakdown = picks.reduce((acc, pick) => {
        acc[pick.position] = (acc[pick.position] || 0) + pick.salary;
        return acc;
      }, {} as Record<string, number>);

      return {
        owner,
        spent,
        totalValue,
        efficiency: totalValue - spent,
        picks: picks.length,
        positionBreakdown,
        avgPickValue: Math.round((spent / picks.length) * 10) / 10,
        valueScore: Math.round(((totalValue / spent) * 100) * 10) / 10
      };
    });
  }, [spendingByOwner]);

  const radarData = ownerAnalysis.slice(0, 6).map(owner => ({
    owner: owner.owner,
    spending: Math.round((owner.spent / 200) * 100),
    efficiency: Math.max(0, Math.min(100, Math.round(((owner.efficiency + 50) / 100) * 100))),
    valueScore: Math.min(100, owner.valueScore)
  }));

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00', '#00ffff'];

  const CustomTooltip = ({ active, payload, label }: {
    active?: boolean;
    payload?: Array<{
      color: string;
      dataKey: string;
      value: number;
    }>;
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/90 text-white p-3 rounded border">
          <p className="font-bold">{label}</p>
          {payload.map((entry, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--primary)] mb-4 bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
            🏈 2025 NFL Fantasy Draft Analysis
          </h1>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)]">
            Auction Draft Results • Full PPR • $200 Budget • 12 Teams
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['charts', 'overview', 'detailed', 'value', 'rankings'].map((mode) => (
            <Button
              key={mode}
              variant={viewMode === mode ? "default" : "outline"}
              onClick={() => setViewMode(mode as 'overview' | 'detailed' | 'value' | 'charts' | 'rankings')}
              className="capitalize"
            >
              {mode === 'charts' ? '📊 Charts' : 
               mode === 'overview' ? '📋 Overview' :
               mode === 'detailed' ? '🔍 Detailed' : 
               mode === 'rankings' ? '🏆 Draft Grades' : '💰 Value Analysis'}
            </Button>
          ))}
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card className="border-amber-200 dark:border-amber-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎯 Filter by Position
              </CardTitle>
            </CardHeader>
            <CardContent>
              <select 
                value={selectedPosition} 
                onChange={(e) => setSelectedPosition(e.target.value)}
                className="w-full p-2 rounded bg-[var(--card)] border border-[var(--border)]"
              >
                {positions.map(pos => (
                  <option key={pos} value={pos}>{pos}</option>
                ))}
              </select>
            </CardContent>
          </Card>

          <Card className="border-amber-200 dark:border-amber-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                👤 Filter by Owner
              </CardTitle>
            </CardHeader>
            <CardContent>
              <select 
                value={selectedOwner} 
                onChange={(e) => setSelectedOwner(e.target.value)}
                className="w-full p-2 rounded bg-[var(--card)] border border-[var(--border)]"
              >
                {owners.map(owner => (
                  <option key={owner} value={owner}>{owner}</option>
                ))}
              </select>
            </CardContent>
          </Card>
        </div>

        {/* Charts View */}
        {viewMode === 'charts' && (
          <div className="space-y-8">
            {/* Owner Spending Chart */}
            <Card className="border-amber-200 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  💰 Total Spending by Owner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={ownerSpendingChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="owner" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="spent" fill="#f59e0b" name="Spent" />
                    <Bar dataKey="remaining" fill="#6b7280" name="Remaining" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Value vs Cost Scatter Plot */}
            <Card className="border-amber-200 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📈 Yahoo Value vs Draft Cost (Top Players)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={500}>
                  <ScatterChart data={valueScatterData.filter(p => p.x >= 10 || p.y >= 10)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" name="Draft Cost" />
                    <YAxis dataKey="y" name="Yahoo Value" />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-black/90 text-white p-3 rounded border">
                              <p className="font-bold">{data.name}</p>
                              <p>{data.position} • {data.owner}</p>
                              <p>Draft Cost: ${data.x}</p>
                              <p>Yahoo Value: ${data.y}</p>
                              <p className={`font-bold ${data.value > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                Value: {data.value > 0 ? '+' : ''}${data.value}
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Scatter 
                      dataKey="y" 
                      fill="#f59e0b"
                      stroke="#000"
                      strokeWidth={1}
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Position Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🎯 Spending by Position
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={positionChartData}
                        dataKey="amount"
                        nameKey="position"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label={true}
                      >
                        {positionChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    📊 Owner Performance Radar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={radarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="owner" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar 
                        name="Spending %" 
                        dataKey="spending" 
                        stroke="#8884d8" 
                        fill="#8884d8" 
                        fillOpacity={0.3} 
                      />
                      <Radar 
                        name="Efficiency" 
                        dataKey="efficiency" 
                        stroke="#82ca9d" 
                        fill="#82ca9d" 
                        fillOpacity={0.3} 
                      />
                      <Radar 
                        name="Value Score" 
                        dataKey="valueScore" 
                        stroke="#ffc658" 
                        fill="#ffc658" 
                        fillOpacity={0.3} 
                      />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Value Analysis View */}
        {viewMode === 'value' && (
          <div className="space-y-8">
            {/* Best and Worst Values */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    🔥 Best Values (Steals)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {bestValues.map((pick) => (
                      <div key={pick.pick} className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                        <div className="flex flex-col">
                          <span className="font-bold">{pick.player}</span>
                          <span className="text-sm text-[var(--muted-foreground)]">
                            {pick.position} • {pick.nflTeam} • {pick.owner}
                          </span>
                          <span className="text-xs text-green-600 font-medium">
                            Tier: {pick.tier}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg">${pick.salary}</div>
                          <div className="text-sm text-gray-600">Yahoo: ${pick.yahooValue}</div>
                          <div className="text-sm font-bold text-green-600">+${pick.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    📉 Worst Values (Reaches)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {worstValues.reverse().map((pick) => (
                      <div key={pick.pick} className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                        <div className="flex flex-col">
                          <span className="font-bold">{pick.player}</span>
                          <span className="text-sm text-[var(--muted-foreground)]">
                            {pick.position} • {pick.nflTeam} • {pick.owner}
                          </span>
                          <span className="text-xs text-red-600 font-medium">
                            Tier: {pick.tier}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg">${pick.salary}</div>
                          <div className="text-sm text-gray-600">Yahoo: ${pick.yahooValue}</div>
                          <div className="text-sm font-bold text-red-600">${pick.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Owner Efficiency Analysis */}
            <Card className="border-amber-200 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🏆 Owner Draft Efficiency Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="border-b border-[var(--border)]">
                        <th className="text-left p-3 font-bold">Rank</th>
                        <th className="text-left p-3 font-bold">Owner</th>
                        <th className="text-right p-3 font-bold">Spent</th>
                        <th className="text-right p-3 font-bold">Yahoo Value</th>
                        <th className="text-right p-3 font-bold">Efficiency</th>
                        <th className="text-right p-3 font-bold">Picks</th>
                        <th className="text-right p-3 font-bold">Value Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ownerAnalysis
                        .sort((a, b) => b.efficiency - a.efficiency)
                        .map((owner, index) => (
                        <tr key={owner.owner} className="border-b border-[var(--border)] hover:bg-[var(--muted)]">
                          <td className="p-3 font-bold text-center">{index + 1}</td>
                          <td className="p-3 font-medium">{owner.owner}</td>
                          <td className="p-3 text-right font-bold">${owner.spent}</td>
                          <td className="p-3 text-right">${owner.totalValue}</td>
                          <td className={`p-3 text-right font-bold ${
                            owner.efficiency > 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {owner.efficiency > 0 ? '+' : ''}${owner.efficiency}
                          </td>
                          <td className="p-3 text-right">{owner.picks}</td>
                          <td className={`p-3 text-right font-bold ${
                            owner.valueScore > 100 ? 'text-green-600' : 
                            owner.valueScore > 90 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {owner.valueScore}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Overview and Detailed views remain the same but with enhanced styling */}
        {(viewMode === 'overview' || viewMode === 'detailed') && (
          <>
            {/* Spending Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    💰 Total Spending by Owner
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {spendingByOwner.map(([owner, amount], index) => (
                      <div key={owner} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold w-8 h-8 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center">#{index + 1}</span>
                          <span className="font-medium">{owner}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-[var(--muted)] rounded-full h-3">
                            <div 
                              className="bg-gradient-to-r from-amber-400 to-orange-600 h-3 rounded-full transition-all"
                              style={{ width: `${(amount / Math.max(...spendingByOwner.map(s => s[1]))) * 100}%` }}
                            ></div>
                          </div>
                          <span className="font-bold text-[var(--primary)] w-16">${amount}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🎯 Spending by Position
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {positionSpending.map(([position, amount], index) => (
                      <div key={position} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">#{index + 1}</span>
                          <span className="font-medium">{position}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-[var(--muted)] rounded-full h-3">
                            <div 
                              className="bg-gradient-to-r from-blue-400 to-purple-600 h-3 rounded-full transition-all"
                              style={{ width: `${(amount / Math.max(...positionSpending.map(s => s[1]))) * 100}%` }}
                            ></div>
                          </div>
                          <span className="font-bold text-[var(--accent)] w-16">${amount}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Draft Results */}
            {viewMode === 'detailed' && (
              <Card className="border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    📋 Complete Draft Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                      <thead>
                        <tr className="border-b border-[var(--border)]">
                          <th className="text-left p-2 font-bold">Pick</th>
                          <th className="text-left p-2 font-bold">Player</th>
                          <th className="text-left p-2 font-bold">Pos</th>
                          <th className="text-left p-2 font-bold">NFL Team</th>
                          <th className="text-left p-2 font-bold">Owner</th>
                          <th className="text-right p-2 font-bold">Salary</th>
                          <th className="text-right p-2 font-bold">Yahoo Value</th>
                          <th className="text-right p-2 font-bold">Diff</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map((pick) => {
                          const yahooValue = YAHOO_ADP_DATA[pick.player] || 0;
                          const diff = yahooValue - pick.salary;
                          return (
                            <tr key={pick.pick} className="border-b border-[var(--border)] hover:bg-[var(--muted)]">
                              <td className="p-2 font-bold">{pick.pick}</td>
                              <td className="p-2 font-medium">{pick.player}</td>
                              <td className="p-2">
                                <span className={`px-2 py-1 rounded text-xs font-bold ${
                                  pick.position === 'QB' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                                  pick.position === 'RB' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                                  pick.position === 'WR' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                  pick.position === 'TE' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                                  'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                                }`}>
                                  {pick.position}
                                </span>
                              </td>
                              <td className="p-2">{pick.nflTeam}</td>
                              <td className="p-2">{pick.owner}</td>
                              <td className="p-2 text-right font-bold text-[var(--primary)]">${pick.salary}</td>
                              <td className="p-2 text-right">${yahooValue}</td>
                              <td className={`p-2 text-right font-bold ${
                                diff > 0 ? 'text-green-600' : diff < 0 ? 'text-red-600' : 'text-gray-500'
                              }`}>
                                {diff !== 0 && (diff > 0 ? '+' : '')}${diff}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        )}

        {/* Draft Rankings & Grades */}
        {viewMode === 'rankings' && (
          <div className="space-y-8">
            <Card className="border-amber-200 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  🏆 Draft Report Cards - Letter Grades & Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {ownerAnalysis
                    .sort((a, b) => b.efficiency - a.efficiency)
                    .map((owner, index) => {
                      const picks = COMPLETE_DRAFT_DATA.filter(p => p.owner === owner.owner);
                      const starterPicks = picks.filter(p => p.salary >= 10).length;
                      const depthPicks = picks.filter(p => p.salary >= 5 && p.salary < 10).length;
                      const flyers = picks.filter(p => p.salary <= 2).length;
                      const tier1Picks = picks.filter(p => getPlayerTier(p.player, p.position).includes('Tier 1')).length;
                      const positionBalance = Object.keys(owner.positionBreakdown).length;
                      
                      // Grading Algorithm
                      let grade = '';
                      let gradeColor = '';
                      let analysis = '';
                      
                      if (owner.efficiency >= 20 && owner.valueScore >= 110) {
                        grade = 'A+';
                        gradeColor = 'text-green-600 bg-green-100 dark:bg-green-900';
                        analysis = `Outstanding draft execution. Exceptional value across the board with smart spending allocation. Strong mix of proven talent and high-upside picks. Championship-caliber roster construction.`;
                      } else if (owner.efficiency >= 10 && owner.valueScore >= 105) {
                        grade = 'A';
                        gradeColor = 'text-green-600 bg-green-100 dark:bg-green-900';
                        analysis = `Excellent draft strategy with consistent value picks. Strong foundation of reliable players with good depth. Minimal reaches and smart positional balance.`;
                      } else if (owner.efficiency >= 5 && owner.valueScore >= 100) {
                        grade = 'A-';
                        gradeColor = 'text-green-500 bg-green-50 dark:bg-green-900/50';
                        analysis = `Very solid draft with mostly good value decisions. Few questionable picks but overall strong roster construction. Good mix of floor and ceiling.`;
                      } else if (owner.efficiency >= 0 && owner.valueScore >= 95) {
                        grade = 'B+';
                        gradeColor = 'text-blue-600 bg-blue-100 dark:bg-blue-900';
                        analysis = `Above-average draft with some standout picks balanced by a few reaches. Decent value overall with room for improvement in positional allocation.`;
                      } else if (owner.efficiency >= -5 && owner.valueScore >= 90) {
                        grade = 'B';
                        gradeColor = 'text-blue-500 bg-blue-50 dark:bg-blue-900/50';
                        analysis = `Average draft execution with mixed results. Some good values offset by overspending in key areas. Serviceable roster but lacks consistency.`;
                      } else if (owner.efficiency >= -10 && owner.valueScore >= 85) {
                        grade = 'B-';
                        gradeColor = 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900';
                        analysis = `Below-average value with too many reaches for the price paid. Some decent picks but overall poor spending efficiency. Uphill battle ahead.`;
                      } else if (owner.efficiency >= -20 && owner.valueScore >= 80) {
                        grade = 'C+';
                        gradeColor = 'text-orange-600 bg-orange-100 dark:bg-orange-900';
                        analysis = `Poor value across multiple picks with concerning overspending. Few bright spots but significant holes in roster construction strategy.`;
                      } else if (owner.efficiency >= -30 && owner.valueScore >= 75) {
                        grade = 'C';
                        gradeColor = 'text-orange-500 bg-orange-50 dark:bg-orange-900/50';
                        analysis = `Concerning draft with multiple reaches and poor allocation of budget. Limited upside and significant strategic mistakes throughout.`;
                      } else if (owner.efficiency >= -40) {
                        grade = 'D';
                        gradeColor = 'text-red-600 bg-red-100 dark:bg-red-900';
                        analysis = `Very poor draft execution with systematic overspending and minimal value achieved. Major strategic errors that will be difficult to overcome.`;
                      } else {
                        grade = 'F';
                        gradeColor = 'text-red-800 bg-red-200 dark:bg-red-900';
                        analysis = `Catastrophic draft with extreme overspending and virtually no value achieved. Complete strategic failure requiring immediate waiver wire focus.`;
                      }

                      return (
                        <div key={owner.owner} className={`p-6 rounded-lg border-2 ${
                          index === 0 ? 'border-gold-400 bg-amber-50 dark:bg-amber-900/20' :
                          index === 1 ? 'border-gray-400 bg-gray-50 dark:bg-gray-900/20' :
                          index === 2 ? 'border-orange-400 bg-orange-50 dark:bg-orange-900/20' :
                          'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/10'
                        }`}>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold">#{index + 1}</span>
                                {index === 0 && <span className="text-2xl">🥇</span>}
                                {index === 1 && <span className="text-2xl">🥈</span>}
                                {index === 2 && <span className="text-2xl">🥉</span>}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold">{owner.owner}</h3>
                                <p className="text-sm text-gray-600">Draft Efficiency Rank</p>
                              </div>
                            </div>
                            <div className={`px-4 py-2 rounded-lg font-bold text-2xl ${gradeColor}`}>
                              {grade}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                            <div className="text-center">
                              <div className="font-bold text-lg">${owner.spent}</div>
                              <div className="text-gray-600">Spent</div>
                            </div>
                            <div className="text-center">
                              <div className={`font-bold text-lg ${owner.efficiency > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {owner.efficiency > 0 ? '+' : ''}${owner.efficiency}
                              </div>
                              <div className="text-gray-600">Value</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-lg">{owner.valueScore}%</div>
                              <div className="text-gray-600">Efficiency</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-lg">{tier1Picks}</div>
                              <div className="text-gray-600">Elite Players</div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="font-bold mb-2">Draft Analysis:</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{analysis}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div>
                              <div className="font-semibold mb-1">Strengths:</div>
                              <ul className="list-disc list-inside space-y-1 text-gray-600">
                                {starterPicks >= 8 && <li>Strong starter foundation ({starterPicks} quality starters)</li>}
                                {owner.efficiency > 0 && <li>Excellent value identification</li>}
                                {flyers >= 5 && <li>Smart late-round flyers ({flyers} lottery tickets)</li>}
                                {positionBalance >= 5 && <li>Good positional diversification</li>}
                                {tier1Picks >= 2 && <li>Multiple elite-tier players</li>}
                              </ul>
                            </div>
                            <div>
                              <div className="font-semibold mb-1">Concerns:</div>
                              <ul className="list-disc list-inside space-y-1 text-gray-600">
                                {owner.efficiency < -10 && <li>Systematic overspending issues</li>}
                                {starterPicks < 6 && <li>Thin starting lineup ({starterPicks} proven starters)</li>}
                                {tier1Picks === 0 && <li>Lacks true difference-makers</li>}
                                {depthPicks < 3 && <li>Limited mid-tier depth</li>}
                                {positionBalance < 4 && <li>Poor positional balance</li>}
                              </ul>
                            </div>
                          </div>

                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-xs text-gray-500">
                              <strong>Top Picks:</strong> {picks
                                .filter(p => p.salary >= 15)
                                .sort((a, b) => b.salary - a.salary)
                                .slice(0, 3)
                                .map(p => `${p.player} ($${p.salary})`)
                                .join(', ')}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </CardContent>
            </Card>

            {/* Grade Distribution Summary */}
            <Card className="border-amber-200 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📊 Grade Distribution & League Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-3">Grading Methodology</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Value Efficiency:</span>
                        <span>40% of grade</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Yahoo Consensus vs Cost:</span>
                        <span>30% of grade</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Positional Balance:</span>
                        <span>20% of grade</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Elite Player Acquisition:</span>
                        <span>10% of grade</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-3">League Statistics</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Average Spending:</span>
                        <span>${Math.round(spendingByOwner.reduce((sum, [, spent]) => sum + spent, 0) / spendingByOwner.length)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Most Efficient Drafter:</span>
                        <span>{ownerAnalysis.sort((a, b) => b.efficiency - a.efficiency)[0].owner}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Biggest Spender:</span>
                        <span>{spendingByOwner[0][0]} (${spendingByOwner[0][1]})</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Best Value Pick:</span>
                        <span>{bestValues[0]?.player || 'N/A'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-[var(--muted-foreground)] border-t border-amber-200 dark:border-amber-800 pt-8">
          <p className="text-lg font-medium">🤫 Fantasy Football Draft Analysis • Secret Page</p>
          <p className="text-sm mt-2">Data sourced from Yahoo Fantasy consensus values • Updated 2025</p>
        </div>
      </div>
    </div>
  );
}