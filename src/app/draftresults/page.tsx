'use client';

import { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { COMPLETE_DRAFT_DATA, YAHOO_ADP_DATA } from '@/lib/draft-data';
import Image from 'next/image';

export default function DraftResults() {
  const spendingByOwner = useMemo(() => {
    const spending = COMPLETE_DRAFT_DATA.reduce((acc, pick) => {
      acc[pick.owner] = (acc[pick.owner] || 0) + pick.salary;
      return acc;
    }, {} as Record<string, number>);
    return Object.entries(spending).sort((a, b) => b[1] - a[1]);
  }, []);

  const ownerAnalysis = useMemo(() => {
    return spendingByOwner.map(([owner, spent]) => {
      const picks = COMPLETE_DRAFT_DATA.filter(p => p.owner === owner);
      const totalValue = picks.reduce((sum, pick) => {
        const yahooValue = YAHOO_ADP_DATA[pick.player] || 0;
        return sum + yahooValue;
      }, 0);

      return {
        owner,
        spent,
        totalValue,
        efficiency: totalValue - spent,
        picks: picks.length,
        valueScore: Math.round(((totalValue / spent) * 100) * 10) / 10
      };
    });
  }, [spendingByOwner]);

  const getDraftGrade = (efficiency: number, valueScore: number) => {
    if (efficiency >= 15 && valueScore >= 110) return { grade: 'A+', color: 'text-green-700' };
    if (efficiency >= 8 && valueScore >= 105) return { grade: 'A', color: 'text-green-600' };
    if (efficiency >= 3 && valueScore >= 100) return { grade: 'A-', color: 'text-green-500' };
    if (efficiency >= -2 && valueScore >= 95) return { grade: 'B+', color: 'text-blue-600' };
    if (efficiency >= -8 && valueScore >= 90) return { grade: 'B', color: 'text-blue-500' };
    if (efficiency >= -15 && valueScore >= 85) return { grade: 'B-', color: 'text-yellow-600' };
    if (efficiency >= -25 && valueScore >= 80) return { grade: 'C+', color: 'text-orange-600' };
    if (efficiency >= -35) return { grade: 'C', color: 'text-orange-500' };
    return { grade: 'D', color: 'text-red-600' };
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-b border-amber-200 dark:border-amber-800">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            The 2025 Fantasy Football Draft Deep Dive
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            A comprehensive, research-backed analysis of our August 2025 auction draft with expert insights, player evaluations, and data-driven predictions
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-500">
            <span>📅 Draft Date: August 2025</span>
            <span>💰 $200 Budget</span>
            <span>🏈 Full PPR Scoring</span>
            <span>👥 12 Teams</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        
        {/* Market Context */}
        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">2025 Fantasy Market Landscape</h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg leading-relaxed text-blue-800 dark:text-blue-200">
              <strong>Expert Consensus:</strong> The 2025 fantasy season is defined by unprecedented rookie talent and veteran uncertainty. 
              Ja&apos;Marr Chase is the overwhelming consensus #1 overall pick, while rookie RB Ashton Jeanty is being drafted 
              ahead of established stars like Christian McCaffrey in many leagues.
            </p>
          </div>

          <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 w-full h-full flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">🏈</div>
                <div className="text-xl font-bold">2025 Fantasy Football</div>
                <div className="text-sm">The Year of the Rookie</div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Picks Analysis */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Premium Pick Analysis: The Big Money Moves</h2>
          
          <div className="space-y-8">
            
            {/* Top 5 Most Expensive */}
            <Card className="border border-amber-200 dark:border-amber-700">
              <CardHeader>
                <CardTitle className="text-2xl">🔥 The Elite Tier ($50+ Investments)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-xl font-bold text-red-600">1. Bijan Robinson - $71 (Joey)</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      <strong>Market Analysis:</strong> At $71, this is a massive bet on the Falcons&apos; sophomore back. Expert consensus has Bijan at $66-70, 
                      making this a slight overpay. However, Bijan led all RBs in Expected Fantasy Points (305) with 304 carries and 72 targets, 
                      finishing as RB3 in PPR despite playing behind a suspect offensive line.
                    </p>
                    <p className="text-sm text-red-600 font-medium mt-2">
                      VERDICT: Ceiling play with championship upside, but the price demands RB1 overall production.
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h3 className="text-xl font-bold text-yellow-600">2. Ja&apos;Marr Chase - $66 (Sean)</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      <strong>Market Analysis:</strong> Actually a discount! Chase is the consensus #1 overall pick in 2025, with experts valuing him at $68-72. 
                      Chase outscored the #2 WR by 85.5 fantasy points last season and has the safest floor of any skill position player.
                    </p>
                    <p className="text-sm text-green-600 font-medium mt-2">
                      VERDICT: The draft&apos;s best value at the elite tier. Championship foundation piece.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-bold text-blue-600">3. CeeDee Lamb - $62 (John)</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      <strong>Market Analysis:</strong> Fair market value for the Cowboys&apos; WR1. Lamb&apos;s 135 receptions led the NFL, but concerns about 
                      Dallas&apos;s offensive regression and Dak Prescott&apos;s contract situation create uncertainty.
                    </p>
                    <p className="text-sm text-blue-600 font-medium mt-2">
                      VERDICT: Solid WR1 pick, though the Cowboys&apos; chaos factor adds risk.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-bold text-green-600">4. Justin Jefferson - $62 (Binit)</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      <strong>Market Analysis:</strong> Exceptional value for a player many consider the NFL&apos;s best receiver. Jefferson&apos;s consistency 
                      and target share make him one of the safest picks in fantasy football. Vikings&apos; improved offense with J.J. McCarthy adds upside.
                    </p>
                    <p className="text-sm text-green-600 font-medium mt-2">
                      VERDICT: Draft steal. Jefferson at $62 is championship equity.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-bold text-purple-600">5. Saquon Barkley - $60 (Sean)</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      <strong>Market Analysis:</strong> The move to Philadelphia&apos;s superior offensive line is fantasy gold. Barkley&apos;s 2005 rushing yards 
                      behind the Giants&apos; awful line suggests massive upside in Philly&apos;s system. However, his 482 total touches (including playoffs) 
                      raises workload concerns.
                    </p>
                    <p className="text-sm text-orange-600 font-medium mt-2">
                      VERDICT: High-reward pick with legitimate RB1 overall upside in Philadelphia.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rookie Analysis */}
            <Card className="border border-green-200 dark:border-green-700">
              <CardHeader>
                <CardTitle className="text-2xl">🌟 The Rookie Revolution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h3 className="text-xl font-bold text-green-700">Ashton Jeanty - $50 (Nicky)</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      The Raiders&apos; 6th overall pick is being drafted ahead of Christian McCaffrey in many leagues. ESPN&apos;s expert rankings have Jeanty 
                      as high as RB5 overall, with his Rookie Super Model score of 91 ranking among the highest since 2017. Pete Carroll&apos;s 
                      run-heavy philosophy and Jeanty&apos;s college dominance (2,601 yards) suggest immediate impact.
                    </p>
                    <p className="text-sm text-green-600 font-medium mt-2">
                      ANALYSIS: $50 is actually below market consensus. This could be the draft&apos;s biggest steal.
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-700">Malik Nabers - $51 (Grossy)</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      The Giants&apos; 6th overall pick is ranked WR5 overall in dynasty formats and made the Pro Bowl as a rookie. 
                      However, $51 is a premium price that demands immediate WR1 production in a questionable Giants offense.
                    </p>
                    <p className="text-sm text-yellow-600 font-medium mt-2">
                      ANALYSIS: Talented player, but the price assumes everything goes right in New York.
                    </p>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <h3 className="text-xl font-bold text-orange-700">Travis Hunter - $8 (Dave)</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      The Jaguars&apos; 2nd overall pick is the most intriguing prospect ever as a two-way player. At $8, this is excellent value 
                      for a player with WR2 upside, especially with Christian Kirk&apos;s departure opening 80-100 targets.
                    </p>
                    <p className="text-sm text-green-600 font-medium mt-2">
                      ANALYSIS: Outstanding value pick. Hunter&apos;s Super Model score of 93 projects game-breaking ability.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Value Plays & Steals */}
            <Card className="border border-blue-200 dark:border-blue-700">
              <CardHeader>
                <CardTitle className="text-2xl">💎 Hidden Gems & Value Plays</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  
                  <div>
                    <h3 className="text-lg font-bold text-green-600 mb-3">🎯 Steals of the Draft</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <p><strong>Brock Purdy - $7 (Dave):</strong> Coming off 20.5 PPG despite injuries. With CMC returning, elite QB2 upside.</p>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <p><strong>DeVonta Smith - $13 (Pat):</strong> Consensus rankings have him $18-25. Elite target share with Hurts.</p>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <p><strong>Nick Chubb - $1 (Colby):</strong> Health concerns, but potential RB1 upside if recovered.</p>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <p><strong>Joe Mixon - $1 (Nicky):</strong> Texans&apos; backfield could unlock his ceiling again.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-red-600 mb-3">⚠️ Questionable Overpays</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded">
                        <p><strong>Drake London - $42 (Bryan):</strong> Market value ~$25-30. Falcons&apos; target distribution unclear with rookie QB.</p>
                      </div>
                      <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded">
                        <p><strong>Ladd McConkey - $32 (Bryan):</strong> Rookie WR in unproven Chargers offense. Market suggests $18-25 range.</p>
                      </div>
                      <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded">
                        <p><strong>Ka&apos;imi Fairbairn - $6 (Joey):</strong> Kickers at $6 rarely provide value over $1-2 alternatives.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Position Breakdowns */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Position-by-Position Expert Analysis</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            <Card className="border border-red-200 dark:border-red-700">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">🏃‍♂️ Running Back Landscape</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                    <h4 className="font-bold text-green-700">Winners:</h4>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• <strong>De&apos;Von Achane $43 (Binit):</strong> Elite usage in Miami&apos;s offense</li>
                      <li>• <strong>Bucky Irving $39 (Binit):</strong> Tampa Bay&apos;s ascending backfield star</li>
                      <li>• <strong>Jonathan Taylor $38 (Nicky):</strong> Bounce-back candidate in Indy</li>
                      <li>• <strong>Josh Jacobs $37 (Colby):</strong> Perfect fit in Green Bay&apos;s system</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded">
                    <h4 className="font-bold text-red-700">Concerns:</h4>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• <strong>Austin Ekeler $15 (Nicky):</strong> Age and declining efficiency</li>
                      <li>• <strong>Cam Skattebo $14 (Grossy):</strong> Giants&apos; offensive line issues</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-green-200 dark:border-green-700">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">🎯 Wide Receiver Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                    <h4 className="font-bold text-green-700">Elite Investments:</h4>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• <strong>Ja&apos;Marr Chase $66:</strong> Consensus #1 overall pick</li>
                      <li>• <strong>Justin Jefferson $62:</strong> Safest WR1 in fantasy</li>
                      <li>• <strong>Amon-Ra St. Brown $54 (Zack):</strong> Lions&apos; target monster</li>
                      <li>• <strong>Nico Collins $54 (Zack):</strong> Texans&apos; emerging WR1</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                    <h4 className="font-bold text-blue-700">Breakout Candidates:</h4>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• <strong>Rome Odunze $11 (John):</strong> Bears&apos; offensive upgrade</li>
                      <li>• <strong>Xavier Worthy $14 (Pat):</strong> Chiefs&apos; speed element</li>
                      <li>• <strong>Keon Coleman $1 (Nicky):</strong> Bills projecting breakout season</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-purple-200 dark:border-purple-700">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">🎯 Quarterback Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                    <h4 className="font-bold text-green-700">Premium Plays:</h4>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• <strong>Josh Allen $36 (Colby):</strong> Elite floor/ceiling combination</li>
                      <li>• <strong>Lamar Jackson $35 (Pat):</strong> Rushing upside remains elite</li>
                      <li>• <strong>Jayden Daniels $28 (Bryan):</strong> Sophomore leap candidate</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                    <h4 className="font-bold text-blue-700">Value Targets:</h4>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• <strong>Brock Purdy $7 (Dave):</strong> Elite QB2 with QB1 weeks</li>
                      <li>• <strong>Drake Maye $4 (Bryan):</strong> Patriots&apos; franchise QB development</li>
                      <li>• <strong>C.J. Stroud $4 (Nicky):</strong> Texans&apos; improved supporting cast</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-orange-200 dark:border-orange-700">
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">🎯 Tight End Hierarchy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                    <h4 className="font-bold text-green-700">Premium Tier:</h4>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• <strong>Brock Bowers $32 (Pat):</strong> Raiders&apos; target vacuum</li>
                      <li>• <strong>Trey McBride $27 (Binit):</strong> Cardinals&apos; consistent producer</li>
                      <li>• <strong>George Kittle $23 (Colby):</strong> 49ers&apos; proven commodity</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
                    <h4 className="font-bold text-yellow-700">Value Plays:</h4>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• <strong>Sam LaPorta $11 (Colby):</strong> Lions&apos; red zone threat</li>
                      <li>• <strong>Tyler Warren $9 (Nicky):</strong> Colts&apos; versatile weapon</li>
                      <li>• <strong>Colston Loveland $7 (Dave):</strong> Bears&apos; rookie upside</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spending Analysis */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Draft Spending Breakdown</h2>
          
          <Card className="border border-gray-200 dark:border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Total Spending by Manager</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {spendingByOwner.map(([owner, amount], index) => {
                  const analysis = ownerAnalysis.find(a => a.owner === owner);
                  const { grade, color } = getDraftGrade(analysis?.efficiency || 0, analysis?.valueScore || 0);
                  
                  return (
                    <div key={owner} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                          #{index + 1}
                        </span>
                        <div>
                          <span className="font-semibold text-lg">{owner}</span>
                          <div className="flex items-center gap-3 mt-1">
                            <span className={`font-bold text-lg px-2 py-1 rounded ${color} bg-gray-100 dark:bg-gray-800`}>
                              {grade}
                            </span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              Value Score: {analysis?.valueScore}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-xl">${amount}</div>
                        <div className={`text-sm font-medium ${analysis && analysis.efficiency > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {analysis && analysis.efficiency > 0 ? '+' : ''}${analysis?.efficiency} value
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Winners and Losers */}
        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Final Verdict: Draft Winners & Concerns</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">🏆 Championship Contenders</h3>
              <div className="space-y-4">
                
                <div>
                  <h4 className="font-bold text-green-700">1. Binit - Grade: A</h4>
                  <p className="text-sm text-green-600">
                    The draft&apos;s clear winner. Justin Jefferson at $62 is a steal, De&apos;Von Achane at $43 is perfect value, 
                    and his depth picks like Trey McBride provide consistency. This roster has both championship ceiling and high floor.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-green-700">2. Sean - Grade: A-</h4>
                  <p className="text-sm text-green-600">
                    Star-heavy approach paid off. Ja&apos;Marr Chase at $66 is actually below consensus value, and Saquon in Philadelphia 
                    could be league-winning. Thin depth is the only concern for this ceiling play.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-green-700">3. Kevin - Grade: B+</h4>
                  <p className="text-sm text-green-600">
                    Most balanced roster construction. Christian McCaffrey and Derrick Henry give elite RB depth, 
                    while Joe Burrow provides QB1 upside at reasonable cost. Fundamentally sound team building.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Uphill Battles</h3>
              <div className="space-y-4">
                
                <div>
                  <h4 className="font-bold text-red-700">Bryan - Grade: C+</h4>
                  <p className="text-sm text-red-600">
                    Systematic overspending created major value deficits. Drake London at $42 and Ladd McConkey at $32 
                    are significant reaches that limit roster flexibility. Needs multiple breakouts to compete.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-red-700">Zack - Grade: C</h4>
                  <p className="text-sm text-red-600">
                    Strong WR foundation with ARSB and Nico Collins, but RB room is concerning. Too many $1 flyers 
                    without mid-tier stability. WR strength can&apos;t overcome positional imbalance.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-red-700">Joey - Grade: B-</h4>
                  <p className="text-sm text-red-600">
                    Bijan at $71 is a massive bet that demands perfection. While talented, the price leaves little 
                    room for error. Ka&apos;imi Fairbairn at $6 for a kicker shows auction management issues.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-200 mb-4">🔮 2025 Season Predictions</h3>
            <div className="text-amber-700 dark:text-amber-300 space-y-4">
              <p>
                <strong>Championship Favorite:</strong> Binit&apos;s combination of elite talent and exceptional value gives him the best 
                path to a title. His roster has both the ceiling to win weeks and the floor to avoid disasters.
              </p>
              <p>
                <strong>Dark Horse:</strong> Dave&apos;s stars-and-scrubs approach could pay huge dividends if Jahmyr Gibbs stays healthy 
                and his late-round flyers hit. Brock Purdy at $7 might be the draft&apos;s best value.
              </p>
              <p>
                <strong>Boom-or-Bust:</strong> Joey&apos;s Bijan investment will define his season. If Bijan delivers RB1 overall production, 
                this team competes for championships. If not, the lack of depth will be exposed quickly.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-600 dark:text-gray-400 text-lg">
            <p>
              <strong>The Bottom Line:</strong> This draft showcased the 2025 fantasy landscape perfectly - rookie talent commanding premium prices, 
              veteran uncertainty creating opportunities, and the importance of value identification in auction formats. 
              The teams that balanced stars with value will compete for championships, while those who chased names at inflated prices 
              face uphill battles in what promises to be a highly competitive season.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p>🤫 Fantasy Football Draft Analysis • Secret Page</p>
          <p className="mt-2">Analysis based on August 2025 expert consensus, SportsLine modeling, and ESPN rankings</p>
          <p className="mt-1 text-xs">Research sources: CBS Sports, ESPN Fantasy, NFL.com, FantasyPros</p>
        </footer>

      </div>
    </div>
  );
}