'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function FantasyFootballPitchPresentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header Navigation */}
      <div className="border-b border-slate-200/50 bg-white/95 backdrop-blur-md sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-medium text-gray-900 flex items-center space-x-2">
              <span>🏈</span>
              <span>NFL Playoff Fantasy Platform</span>
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <Link
              href="/pitch"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-3 py-1 rounded-lg hover:bg-gray-100 flex items-center space-x-1"
            >
              <span>←</span>
              <span>All Pitches</span>
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-3 py-1 rounded-lg hover:bg-gray-100 flex items-center space-x-1"
            >
              <span>🏠</span>
              <span>Home</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Marketing Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>🏆</span>
              <span>Sports Platform & Market Gap Solution</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Fantasy Football<br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                For NFL Playoffs
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The first dedicated fantasy football platform for NFL playoffs—because the most 
              exciting part of football season deserves better than spreadsheet chaos.
            </p>
          </div>

          {/* Problem Statement */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="bg-red-100 rounded-lg p-3">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>Fantasy football ends right when the NFL gets most exciting.</strong> Every January, 
                  friend groups watch incredible playoff performances with no way to compete like they did 
                  during the regular season. The solution? Complex Excel spreadsheets with nightmare formulas.
                </p>
                <div className="bg-red-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700 font-mono bg-gray-100 p-3 rounded mb-3">
                    =IF(AND(VLOOKUP(B2,PlayerStats!$A:$Z,15,FALSE)&gt;0,
                    VLOOKUP(B2,PlayerStats!$A:$Z,2,FALSE)=GameWeek),
                    VLOOKUP(B2,PlayerStats!$A:$Z,15,FALSE)*
                    INDEX(Multipliers,MATCH(GameRound,RoundNames,0)),0)
                  </p>
                  <p className="text-xs text-gray-500 italic">Actual formula from our friend group&apos;s spreadsheet</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-700"><strong>ESPN, Yahoo, FanDuel</strong>: Regular season only</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-700"><strong>DraftKings</strong>: No ongoing playoff competition</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-700"><strong>NFL.com</strong>: Season ends before playoffs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Gap Insight */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 mb-12 border border-yellow-200">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-lg p-3 w-fit mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Gap Discovery</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>After extensive research, nothing like this exists.</strong> Major fantasy platforms end 
                before playoffs begin, despite playoffs being when casual fans are most engaged and player 
                performances are most memorable. This is a genuine first-to-market opportunity.
              </p>
            </div>
          </div>

          {/* Value Proposition Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="bg-green-100 rounded-lg p-3 w-fit mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Target Audience</h3>
              <p className="text-gray-700 leading-relaxed">
                Friend groups who want to extend their fantasy competition into the most exciting part of the NFL season. 
                Ideal for existing fantasy leagues, casual fans who get more engaged during playoffs, and anyone frustrated 
                by the fantasy football &ldquo;dead period&rdquo; in January.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Unique Solution</h3>
              <p className="text-gray-700 leading-relaxed">
                A dedicated NFL playoff fantasy platform with <strong>snake draft system</strong>, 
                <strong>real-time scoring</strong>, and <strong>playoff round multipliers</strong>. 
                No more spreadsheet chaos—just pure playoff fantasy competition with live updates and beautiful UX.
              </p>
            </div>
          </div>

          {/* Competitive Advantages */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Platform Advantages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-lg p-4 w-fit mx-auto mb-3">
                  <span className="text-2xl">🥇</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">First-to-Market</h4>
                <p className="text-gray-600 text-sm">No existing platforms serve playoff fantasy—complete market gap</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-lg p-4 w-fit mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Real-Time Integration</h4>
                <p className="text-gray-600 text-sm">Live scoring updates as playoff games progress—no manual updates</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-lg p-4 w-fit mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Snake Draft System</h4>
                <p className="text-gray-600 text-sm">Strategic playoff player selection with timer and pick tracking</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 rounded-lg p-4 w-fit mx-auto mb-3">
                  <span className="text-2xl">📈</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Playoff Multipliers</h4>
                <p className="text-gray-600 text-sm">Later rounds worth more points—strategic depth and excitement</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 rounded-lg p-4 w-fit mx-auto mb-3">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Bracket Integration</h4>
                <p className="text-gray-600 text-sm">Visual connection between real playoff games and fantasy performance</p>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-100 rounded-lg p-4 w-fit mx-auto mb-3">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Mobile-First Design</h4>
                <p className="text-gray-600 text-sm">Responsive draft experience and live leaderboards optimized for mobile</p>
              </div>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Intended Impact</h3>
            <p className="text-xl font-medium mb-2">Transform playoff watching from passive to competitive.</p>
            <p className="text-green-100 leading-relaxed">
              Give friend groups the fantasy football experience they actually want during the most exciting 
              part of the NFL season. No more spreadsheet engineering—just pure playoff competition with 
              the polish of a dedicated platform.
            </p>
          </div>
        </motion.section>

        {/* Technical Specification Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-200 pt-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>⚙️</span>
              <span>Technical Specification & Development Progress</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NFL Playoff Fantasy Platform</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive technical breakdown of the full-stack platform currently in MVP development.
            </p>
          </div>

          {/* Core Features & Progress */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Features & Development Status</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-green-900 mb-4 flex items-center space-x-2">
                  <span>✅</span>
                  <span>Completed Features</span>
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600 mt-1">✓</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">User Authentication</h5>
                      <p className="text-sm text-gray-600">Secure login and league creation system</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600 mt-1">✓</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">Player Database</h5>
                      <p className="text-sm text-gray-600">Real-time NFL roster data integration</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600 mt-1">✓</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">Draft System</h5>
                      <p className="text-sm text-gray-600">Snake draft with timer and pick tracking</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-900 mb-4 flex items-center space-x-2">
                  <span>🚧</span>
                  <span>In Development</span>
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-600 mt-1">⚡</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">Live Scoring Engine</h5>
                      <p className="text-sm text-gray-600">Integration with sports data APIs for real-time updates</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-600 mt-1">📊</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">Dynamic Leaderboards</h5>
                      <p className="text-sm text-gray-600">Real-time ranking with playoff bracket context</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                    <span className="text-orange-600 mt-1">📱</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">Mobile Optimization</h5>
                      <p className="text-sm text-gray-600">Responsive design polish for draft day experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Architecture */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Architecture</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="border border-blue-400 rounded-xl p-6 bg-blue-50/30">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Frontend</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span><strong>React</strong> with TypeScript</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span><strong>Component-based UI</strong> for leaderboards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span><strong>Real-time updates</strong> via WebSocket</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span><strong>Mobile-responsive</strong> design</span>
                  </li>
                </ul>
              </div>

              <div className="border border-green-400 rounded-xl p-6 bg-green-50/30">
                <h4 className="text-xl font-semibold text-green-900 mb-4">Backend</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span><strong>Node.js</strong> with Express</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span><strong>Sports data APIs</strong> integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span><strong>Real-time scoring</strong> algorithms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span><strong>WebSocket</strong> for live updates</span>
                  </li>
                </ul>
              </div>

              <div className="border border-purple-400 rounded-xl p-6 bg-purple-50/30">
                <h4 className="text-xl font-semibold text-purple-900 mb-4">Database</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span><strong>PostgreSQL</strong> for relational data</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span><strong>ACID guarantees</strong> for competitive scoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span><strong>Complex relationships</strong> for playoffs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span><strong>Real-time queries</strong> optimization</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">🔧 Architecture Insights</h4>
              <div className="space-y-3 text-gray-700">
                <p><strong>Tech Stack Rationale:</strong> React/Node.js chosen for rapid development and JavaScript ecosystem advantages with sports data APIs. TypeScript ensures data integrity across complex sports statistics.</p>
                <p><strong>Playoff Modeling Challenge:</strong> Unlike regular fantasy with consistent rules, playoffs have variable game counts, performance multipliers, and player elimination logic requiring sophisticated data architecture.</p>
                <p><strong>Real-time Scoring:</strong> WebSocket integration enables live updates as games progress, eliminating the manual spreadsheet update problem that sparked this project.</p>
              </div>
            </div>
          </div>

          {/* Data Models */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Models & Playoff Logic</h3>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Entities</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-blue-900 mb-2">League</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• id (PK)</li>
                    <li>• name</li>
                    <li>• commissioner_id</li>
                    <li>• draft_date</li>
                    <li>• scoring_settings</li>
                    <li>• playoff_year</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-green-900 mb-2">DraftPick</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• id (PK)</li>
                    <li>• league_id (FK)</li>
                    <li>• user_id (FK)</li>
                    <li>• player_id (FK)</li>
                    <li>• pick_number</li>
                    <li>• round_number</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-orange-900 mb-2">PlayoffGame</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• id (PK)</li>
                    <li>• game_date</li>
                    <li>• round (&ldquo;wild_card&rdquo;, &ldquo;divisional&rdquo;)</li>
                    <li>• home_team</li>
                    <li>• away_team</li>
                    <li>• multiplier (1x, 1.5x, 2x)</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-purple-900 mb-2">PlayerStats</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• id (PK)</li>
                    <li>• player_id (FK)</li>
                    <li>• game_id (FK)</li>
                    <li>• fantasy_points</li>
                    <li>• adjusted_points</li>
                    <li>• is_eliminated</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">🏈 Playoff-Specific Challenges</h4>
              <div className="space-y-3 text-gray-700">
                <p><strong>Variable Game Count:</strong> Unlike regular fantasy, some players get eliminated early while others advance to Super Bowl. System must handle dynamic player availability.</p>
                <p><strong>Performance Multipliers:</strong> Later playoff rounds worth more points (Wild Card 1x, Divisional 1.5x, Championship 2x, Super Bowl 2.5x) requiring complex scoring algorithms.</p>
                <p><strong>Draft Strategy Depth:</strong> Do you pick safe veterans likely to advance or high-upside players on underdog teams? Creates unique strategic decision-making.</p>
                <p><strong>Real-time Elimination Logic:</strong> When a team loses, all their players become worthless instantly—requires immediate database updates and user notifications.</p>
              </div>
            </div>
          </div>

          {/* Development Roadmap */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Development Roadmap & Launch Strategy</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-400 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">2025 Beta Launch (Current)</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Core MVP with friend group as alpha users</li>
                  <li>• Manual scoring validation alongside automated system</li>
                  <li>• Focus on draft experience and basic scoring</li>
                  <li>• Gather user feedback and iterate quickly</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">2026 Platform Launch</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Full real-time scoring with sports data APIs</li>
                  <li>• Advanced analytics and player projections</li>
                  <li>• Social features: trash talk, achievements, stats</li>
                  <li>• Mobile app optimization for broader adoption</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Future Expansion</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• NBA playoffs fantasy (March-June coverage)</li>
                  <li>• MLB playoffs integration (October)</li>
                  <li>• Corporate league management tools</li>
                  <li>• Advanced betting integration and DFS features</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">💰 Monetization Strategy</h4>
              <div className="space-y-3 text-gray-700">
                <p><strong>Freemium Model:</strong> Basic playoff fantasy free for small leagues, premium features (advanced analytics, larger leagues, historical data) subscription-based.</p>
                <p><strong>First-to-Market Advantage:</strong> Establish brand and user base before competitors enter this overlooked market segment.</p>
                <p><strong>Community-Driven Growth:</strong> Friend groups naturally invite more friends—viral coefficient built into the core use case.</p>
                <p><strong>Corporate Expansion:</strong> Office leagues during playoffs could become significant revenue stream with team management features.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}