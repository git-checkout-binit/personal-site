'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { COMPLETE_DRAFT_DATA, YAHOO_ADP_DATA, getPlayerTier, POSITION_TIERS } from '@/lib/draft-data';

export default function DraftResults() {
  const [selectedPosition, setSelectedPosition] = useState<string>('ALL');
  const [selectedOwner, setSelectedOwner] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'overview' | 'detailed' | 'value'>('overview');

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

  const topValues = useMemo(() => {
    return COMPLETE_DRAFT_DATA
      .filter(p => p.salary >= 20)
      .sort((a, b) => b.salary - a.salary)
      .slice(0, 20);
  }, []);

  const steals = useMemo(() => {
    return COMPLETE_DRAFT_DATA
      .filter(p => p.salary <= 3 && ['WR', 'RB', 'TE', 'QB'].includes(p.position))
      .sort((a, b) => a.salary - b.salary)
      .slice(0, 15);
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

  const ownerAnalysis = useMemo(() => {
    const analysis = spendingByOwner.map(([owner, spent]) => {
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
        avgPickValue: spent / picks.length
      };
    });
    return analysis;
  }, [spendingByOwner]);

  const positionAnalysis = useMemo(() => {
    const positions = ['QB', 'RB', 'WR', 'TE'];
    return positions.map(pos => {
      const picks = COMPLETE_DRAFT_DATA.filter(p => p.position === pos);
      const totalSpent = picks.reduce((sum, p) => sum + p.salary, 0);
      const avgSalary = totalSpent / picks.length;
      const topPick = picks.sort((a, b) => b.salary - a.salary)[0];
      
      return {
        position: pos,
        picks: picks.length,
        totalSpent,
        avgSalary,
        topPick,
        topSalary: topPick?.salary || 0
      };
    });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-4">
            2025 NFL Fantasy Draft Results
          </h1>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)]">
            Auction Draft Analysis • Full PPR • $200 Budget
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Filter by Position</CardTitle>
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

          <Card>
            <CardHeader>
              <CardTitle>Filter by Owner</CardTitle>
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

        {/* Spending Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Spending by Owner</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {spendingByOwner.map(([owner, amount], index) => (
                  <div key={owner} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold w-6">#{index + 1}</span>
                      <span className="font-medium">{owner}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-[var(--muted)] rounded-full h-2">
                        <div 
                          className="bg-[var(--primary)] h-2 rounded-full transition-all"
                          style={{ width: `${(amount / Math.max(...spendingByOwner.map(s => s[1]))) * 100}%` }}
                        ></div>
                      </div>
                      <span className="font-bold text-[var(--primary)] w-12">${amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Spending by Position</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {positionSpending.map(([position, amount], index) => (
                  <div key={position} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold w-6">#{index + 1}</span>
                      <span className="font-medium">{position}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-[var(--muted)] rounded-full h-2">
                        <div 
                          className="bg-[var(--accent)] h-2 rounded-full transition-all"
                          style={{ width: `${(amount / Math.max(...positionSpending.map(s => s[1]))) * 100}%` }}
                        ></div>
                      </div>
                      <span className="font-bold text-[var(--accent)] w-12">${amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Values & Steals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Highest Value Picks ($20+)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topValues.map((pick, index) => (
                  <div key={pick.pick} className="flex items-center justify-between p-3 bg-[var(--muted)] rounded-lg">
                    <div className="flex flex-col">
                      <span className="font-bold">{pick.player}</span>
                      <span className="text-sm text-[var(--muted-foreground)]">
                        {pick.position} • {pick.team} • {pick.owner}
                      </span>
                    </div>
                    <span className="font-bold text-[var(--primary)] text-lg">${pick.salary}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Potential Steals ($5 or less)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {steals.map((pick, index) => (
                  <div key={pick.pick} className="flex items-center justify-between p-3 bg-[var(--muted)] rounded-lg">
                    <div className="flex flex-col">
                      <span className="font-bold">{pick.player}</span>
                      <span className="text-sm text-[var(--muted-foreground)]">
                        {pick.position} • {pick.team} • {pick.owner}
                      </span>
                    </div>
                    <span className="font-bold text-green-600 text-lg">${pick.salary}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Draft Results */}
        <Card>
          <CardHeader>
            <CardTitle>Complete Draft Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left p-2">Pick</th>
                    <th className="text-left p-2">Player</th>
                    <th className="text-left p-2">Pos</th>
                    <th className="text-left p-2">Team</th>
                    <th className="text-left p-2">Owner</th>
                    <th className="text-right p-2">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((pick) => (
                    <tr key={pick.pick} className="border-b border-[var(--border)] hover:bg-[var(--muted)]">
                      <td className="p-2 font-bold">{pick.pick}</td>
                      <td className="p-2 font-medium">{pick.player}</td>
                      <td className="p-2">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                          pick.position === 'QB' ? 'bg-red-100 text-red-800' :
                          pick.position === 'RB' ? 'bg-blue-100 text-blue-800' :
                          pick.position === 'WR' ? 'bg-green-100 text-green-800' :
                          pick.position === 'TE' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {pick.position}
                        </span>
                      </td>
                      <td className="p-2">{pick.team}</td>
                      <td className="p-2">{pick.owner}</td>
                      <td className="p-2 text-right font-bold text-[var(--primary)]">${pick.salary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-[var(--muted-foreground)]">
          <p>Fantasy Football Draft Analysis • Secret Page</p>
        </div>
      </div>
    </div>
  );
}