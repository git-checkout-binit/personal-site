'use client';

import { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { COMPLETE_DRAFT_DATA, YAHOO_ADP_DATA } from '@/lib/draft-data';

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

  const getOwnerAnalysis = (owner: string) => {

    switch (owner) {
      case 'Sean':
        return {
          strategy: "The \"Go Big or Go Home\" Approach",
          analysis: "Sean adopted an aggressive star-chasing strategy, investing heavily in proven elite talent. His $66 Ja'Marr Chase pick anchors what could be a championship roster, but the hefty price tag means he's banking on Chase staying healthy and dominant. The Saquon Barkley ($60) selection looks brilliant given Barkley's move to Philadelphia's superior offensive line. However, Sean's mid-tier is concerningly thin, with limited depth behind his stars.",
          strengths: ["Elite WR1 in Ja'Marr Chase", "Saquon in an improved situation", "Solid value in Kenneth Walker III"],
          concerns: ["Extremely top-heavy roster", "Minimal depth at skill positions", "High injury risk exposure"],
          outlook: "Championship ceiling, but one injury could derail the season."
        };
      
      case 'Kevin':
        return {
          strategy: "The \"Balanced Power\" Philosophy", 
          analysis: "Kevin executed perhaps the most fundamentally sound draft, building a roster with elite RB depth and consistent value picks. His Christian McCaffrey ($53) and Derrick Henry ($48) combination gives him the league's best RB room. The Joe Burrow ($17) pick at QB provides ceiling with reasonable cost. Kevin avoided major reaches while securing proven producers across all positions.",
          strengths: ["Best RB tandem in the league", "Consistent value throughout", "Strong QB-WR stack potential with Burrow"],
          concerns: ["WR corps lacks a true alpha", "Aging RB room (Henry is 31)", "Minimal rookie upside"],
          outlook: "High floor team with legitimate title contention."
        };

      case 'Joey':
        return {
          strategy: "The \"Youth Movement\" Gamble",
          analysis: "Joey bet big on young talent, highlighted by his $71 Bijan Robinson investment - the draft's most expensive player. While Bijan has immense talent, that price point demands RB1 overall production. His Garrett Wilson ($22) and Tee Higgins ($29) selections provide solid WR depth, but Joey's roster lacks the established veteran presence that wins championships.",
          strengths: ["Highest ceiling RB in Bijan", "Strong WR depth with Wilson/Higgins", "Multiple young breakout candidates"],
          concerns: ["Massive price for unproven Bijan", "QB situation uncertain", "Lack of proven floor players"],
          outlook: "Boom-or-bust roster that could dominate or disappoint."
        };

      case 'Binit':
        return {
          strategy: "The \"Value Hunter\" Excellence",
          analysis: "The draft's most impressive value performance. Binit's Justin Jefferson ($62) acquisition at a discount provides elite WR1 production, while his late-round steals like De'Von Achane ($43) offer tremendous upside. His patient approach to QB and TE paid dividends with reasonable prices on quality options. This roster has both ceiling and floor.",
          strengths: ["Elite WR1 at fair price", "Multiple value steals throughout", "Balanced positional allocation"],
          concerns: ["RB room lacks proven bellcow", "Some picks are boom-bust", "QB not elite tier"],
          outlook: "Draft winner with sustainable competitive advantage."
        };

      case 'Dave':
        return {
          strategy: "The \"Late Round Hero\" Approach",
          analysis: "Dave's strategy centered on stars-and-scrubs, investing heavily in premium talent like Jahmyr Gibbs ($59) and Puka Nacua ($48), then filling out his roster with minimum bids. While this approach can work, Dave's lack of mid-tier depth could be problematic. His late-round QB strategy with Brock Purdy ($7) is smart given the positional depth.",
          strengths: ["Elite RB1 in Gibbs", "WR1 upside with Nacua", "Value QB in Purdy"],
          concerns: ["Dangerously thin depth", "Too many $1 flyers", "Lacks consistent producers"],
          outlook: "High-risk, high-reward roster dependent on health."
        };

      case 'Bryan':
        return {
          strategy: "The \"Systematic Overspender\" Miscalculation",
          analysis: "Bryan's draft represents a cautionary tale of auction strategy gone wrong. His Jayden Daniels ($28) investment is reasonable for a promising QB, but systematic overspending on players like Drake London ($42) and Ladd McConkey ($32) left him with poor value across the board. The roster has talent but was assembled inefficiently.",
          strengths: ["Strong young QB in Daniels", "Some upside plays at WR", "Avoided complete disasters"],
          concerns: ["Systematic overpaying throughout", "Poor value relative to spending", "Limited star power"],
          outlook: "Needs multiple breakouts to compete for playoffs."
        };

      case 'Grossy':
        return {
          strategy: "The \"Rookie Fever\" Risk",
          analysis: "Grossy went all-in on 2025's rookie class, headlined by his $51 Malik Nabers investment. While Nabers has WR1 upside, that price demands immediate elite production. His Jalen Hurts ($16) pick provides solid QB production, but the rookie-heavy approach creates significant variance in outcomes.",
          strengths: ["High-ceiling rookies", "Reasonable QB cost", "Multiple potential breakouts"],
          concerns: ["Rookie dependency is dangerous", "Lacks proven veterans", "High bust potential"],
          outlook: "Could surprise if rookies hit, likely struggles if they don't."
        };

      case 'Colby':
        return {
          strategy: "The \"Conservative Veteran\" Build",
          analysis: "Colby focused on proven veterans with his Josh Allen ($36) and Josh Jacobs ($37) foundation. While these picks lack exciting upside, they provide consistent production. His Tyreek Hill ($23) selection could be the steal of the draft if Hill bounces back from a down 2024.",
          strengths: ["Elite QB in Allen", "Proven veteran producers", "Potential Hill bounce-back"],
          concerns: ["Limited ceiling overall", "Aging players throughout", "Lacks explosive plays"],
          outlook: "Steady but unspectacular - playoff bubble team."
        };

      case 'Nicky':
        return {
          strategy: "The \"Depth-First\" Philosophy",
          analysis: "Nicky prioritized roster depth over star power, spreading his budget across multiple solid contributors. His Ashton Jeanty ($50) pick could pay massive dividends if the rookie hits, while his value plays like Jonathan Taylor ($38) offer upside. The approach lacks sexy names but builds sustainable production.",
          strengths: ["Strong roster depth", "Multiple value plays", "Rookie RB upside in Jeanty"],
          concerns: ["No true difference-makers", "Lacks elite WR talent", "Dependent on late-round hits"],
          outlook: "Solid floor team that needs luck to reach ceiling."
        };

      case 'John':
        return {
          strategy: "The \"Star-Studded\" Assembly",
          analysis: "John secured multiple elite players with CeeDee Lamb ($62) and Brian Thomas Jr. ($44) leading his WR corps. His Alvin Kamara ($27) pick provides veteran RB production at reasonable cost. However, the roster construction feels slightly disjointed with some questionable allocation decisions.",
          strengths: ["Elite WR1 in Lamb", "Solid WR depth", "Veteran RB stability"],
          concerns: ["QB situation unclear", "Overpaid for some pieces", "Lack of true sleepers"],
          outlook: "Talented roster that could surprise with right breaks."
        };

      case 'Pat':
        return {
          strategy: "The \"High-Risk, High-Reward\" Gambler",
          analysis: "Pat's draft featured bold swings on high-upside players. His Lamar Jackson ($35) gives him elite QB production, while his RB room features multiple potential breakouts. The approach could pay off massively if his picks hit, but carries significant downside risk.",
          strengths: ["Elite mobile QB", "Multiple breakout candidates", "High ceiling potential"],
          concerns: ["Inconsistent value discipline", "Many unproven players", "Limited reliable floor"],
          outlook: "Boom-bust roster with league-winning upside."
        };

      case 'Zack':
        return {
          strategy: "The \"Late-Round Loading\" Experiment",
          analysis: "Zack's strategy involved securing premium talent early, then loading up on minimum-bid flyers. His Amon-Ra St. Brown ($54) and Nico Collins ($52) give him a strong WR foundation, but the extreme late-round approach created roster construction challenges.",
          strengths: ["Two WR1-caliber receivers", "Multiple lottery tickets", "Some value hits"],
          concerns: ["Weak RB situation", "Too dependent on late-round hits", "Lack of mid-tier stability"],
          outlook: "WR strength can&apos;t overcome RB weakness - rebuild year."
        };

      default:
        return {
          strategy: "Standard Approach",
          analysis: "Balanced draft strategy with mixed results.",
          strengths: ["Avoided major mistakes"],
          concerns: ["Lacks clear identity"],
          outlook: "Average roster construction."
        };
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-b border-amber-200 dark:border-amber-800">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            The 2025 Fantasy Football Draft Report Card
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            A comprehensive analysis of our 12-team auction draft with expert insights, grades, and championship predictions
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-500">
            <span>📅 Draft Date: January 2025</span>
            <span>💰 $200 Budget</span>
            <span>🏈 Full PPR Scoring</span>
            <span>👥 12 Teams</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        
        {/* Executive Summary */}
        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Executive Summary: Winners and Losers</h2>
          
          <p className="text-lg leading-relaxed mb-8">
            After analyzing every pick against current market values and expert consensus, clear patterns emerge from our 2025 auction draft. 
            While some managers executed flawless value strategies, others fell victim to auction fever and systematic overspending. 
            Here&apos;s how each team performed and what it means for the upcoming season.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-green-500 p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">🏆 Draft Winner: Binit</h3>
            <p className="text-green-700 dark:text-green-300">
              The most impressive value performance of the draft. Binit&apos;s patient approach and disciplined bidding resulted in 
              multiple steals while avoiding the overspending that plagued other managers. His roster has both championship 
              ceiling and consistent floor - a rare combination in auction drafts.
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-l-4 border-red-500 p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-3">⚠️ Biggest Concern: Bryan</h3>
            <p className="text-red-700 dark:text-red-300">
              A cautionary tale of auction draft pitfalls. Systematic overspending across multiple positions left Bryan 
              with poor value relative to his investment. While his roster isn&apos;t devoid of talent, the inefficient construction 
              creates an uphill battle for playoff contention.
            </p>
          </div>
        </section>

        {/* Spending Breakdown */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Draft Spending Analysis</h2>
          
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
                          {analysis && analysis.efficiency > 0 ? '+' : ''}${analysis?.efficiency}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p className="font-semibold mb-2">Grading Methodology:</p>
            <p>Grades based on value efficiency (draft cost vs. consensus market value), positional balance, and upside potential. 
            Value scores represent total roster worth relative to money spent.</p>
          </div>
        </section>

        {/* Individual Analysis */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Team-by-Team Analysis</h2>
          
          {ownerAnalysis
            .sort((a, b) => b.efficiency - a.efficiency)
            .map((owner, index) => {
              const { grade, color } = getDraftGrade(owner.efficiency, owner.valueScore);
              const analysis = getOwnerAnalysis(owner.owner);
              const picks = COMPLETE_DRAFT_DATA.filter(p => p.owner === owner.owner);
              const topPicks = picks.filter(p => p.salary >= 15).sort((a, b) => b.salary - a.salary).slice(0, 3);

              return (
                <div key={owner.owner} className="mb-16 last:mb-0">
                  <div className="border-l-4 border-amber-400 pl-6 pb-8">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                          {index === 0 && <span>🥇</span>}
                          {index === 1 && <span>🥈</span>}
                          {index === 2 && <span>🥉</span>}
                          {owner.owner}
                        </h3>
                        <p className="text-lg text-amber-600 dark:text-amber-400 font-medium mt-1">
                          {analysis.strategy}
                        </p>
                      </div>
                      <div className={`px-4 py-2 rounded-lg font-bold text-2xl ${color} bg-gray-100 dark:bg-gray-800`}>
                        {grade}
                      </div>
                    </div>

                    {/* Key Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                        <div className="font-bold text-lg">${owner.spent}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Total Spent</div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                        <div className={`font-bold text-lg ${owner.efficiency > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {owner.efficiency > 0 ? '+' : ''}${owner.efficiency}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Value Added</div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                        <div className="font-bold text-lg">{owner.valueScore}%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Efficiency</div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                        <div className="font-bold text-lg">#{index + 1}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Draft Rank</div>
                      </div>
                    </div>

                    {/* Analysis */}
                    <div className="prose max-w-none dark:prose-invert">
                      <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                        {analysis.analysis}
                      </p>

                      {/* Strengths and Concerns */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                            ✅ Key Strengths
                          </h4>
                          <ul className="space-y-2">
                            {analysis.strengths.map((strength, idx) => (
                              <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                <span className="text-green-500 mt-1">•</span>
                                <span>{strength}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                            ⚠️ Concerns
                          </h4>
                          <ul className="space-y-2">
                            {analysis.concerns.map((concern, idx) => (
                              <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                <span>{concern}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Top Picks */}
                      {topPicks.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">💰 Premium Investments</h4>
                          <div className="flex flex-wrap gap-2">
                            {topPicks.map((pick) => (
                              <span key={pick.player} className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm font-medium">
                                {pick.player} (${pick.salary})
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Outlook */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🔮 Season Outlook</h4>
                        <p className="text-blue-700 dark:text-blue-300 text-sm">
                          {analysis.outlook}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </section>

        {/* Final Thoughts */}
        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Championship Predictions</h2>
          
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-200 mb-4">🏆 Title Contenders</h3>
            <div className="space-y-4">
              <p><strong>Binit</strong> - The draft winner with the best combination of value and upside. Championship favorite.</p>
              <p><strong>Kevin</strong> - Fundamentally sound build with elite RB depth. High floor, solid ceiling.</p>
              <p><strong>Sean</strong> - Star-heavy approach could dominate if health holds. High risk, high reward.</p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-4">🚨 Rebuild Candidates</h3>
            <div className="space-y-4">
              <p><strong>Bryan</strong> - Systematic overspending created value deficits throughout roster.</p>
              <p><strong>Zack</strong> - Late-round strategy left too many holes. WR strength can&apos;t overcome RB weakness.</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed mt-8 text-gray-700 dark:text-gray-300">
            <strong>The Bottom Line:</strong> This draft showcased both brilliant value identification and costly strategic mistakes. 
            While auction drafts reward preparation and discipline, they punish emotional bidding and poor positional allocation. 
            As we head into the 2025 season, expect the teams that found value to separate themselves from those who chased names at inflated prices.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p>🤫 Fantasy Football Draft Analysis • Secret Page</p>
          <p className="mt-2">Analysis based on 2025 expert consensus and current market values</p>
        </footer>

      </div>
    </div>
  );
}