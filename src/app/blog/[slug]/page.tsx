'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<{
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    tags: string[];
    readingTime: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const slug = params?.slug as string;
    
    // For now, hardcode the blog post data
    if (slug === 'nfl-fantasy-spreadsheet-to-web') {
      setPost({
        slug: 'nfl-fantasy-spreadsheet-to-web',
        title: 'From Spreadsheet Chaos to Web Platform: Building NFL Playoff Fantasy',
        description: 'The story of building a fantasy football platform for NFL playoffs after discovering nothing like it exists. From complex Excel formulas to a full-stack web application.',
        date: '2025-01-22',
        author: 'Binit Shrestha',
        tags: ['React', 'Full-stack', 'Sports Data', 'Product Development', 'Node.js'],
        readingTime: '8 min read',
      });
    } else {
      setNotFound(true);
    }
    
    setIsLoading(false);
  }, [params?.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading post...</div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog">
              <Button variant="ghost" className="mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Thoughts
              </Button>
            </Link>

            <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              {post.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              <p className="text-xl leading-relaxed text-muted-foreground italic border-l-4 border-primary/30 pl-6 py-4 bg-primary/5 rounded-r-lg">
                &quot;There are no tools that let us do this nicely out there that I can see.&quot;
              </p>
              
              {/* Hero Image */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl my-12">
                <img
                  src="https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1200&h=600&fit=crop&crop=center"
                  alt="NFL stadium during playoffs - the excitement we want to capture in fantasy format"
                  className="w-full h-[400px] object-cover"
                  style={{
                    filter: 'brightness(0.7) contrast(1.2) saturate(1.1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm opacity-80">The playoffs: where legends are made, but fantasy tools disappear</p>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground flex items-center gap-4">
                <span className="text-4xl">🏈</span> The Annual Ritual
              </h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Every January, the same thing happens. My friends and I gather around (virtually these days) for our 
                favorite tradition: the <strong className="text-primary">NFL Playoff Fantasy Draft</strong>.
              </p>
              
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                Picture this: We jump in a group text thread and just start rattling off player names. &quot;I&apos;ll take Josh Allen!&quot; 
                &quot;Dibs on CMC!&quot; &quot;Is Mahomes still available?&quot; It&apos;s chaotic, it&apos;s fun, and it&apos;s completely unorganized.
              </p>

              {/* Group Chat Screenshot Mockup */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl border border-primary/20 my-8">
                <h4 className="font-bold text-lg mb-4 text-primary">📱 Our Draft &quot;Process&quot;</h4>
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-blue-500/10 p-3 rounded-lg border-l-4 border-blue-500">
                    <strong className="text-blue-400">Mike:</strong> I got Josh Allen first!
                  </div>
                  <div className="bg-green-500/10 p-3 rounded-lg border-l-4 border-green-500">
                    <strong className="text-green-400">Sarah:</strong> Wait who picked CMC?? 
                  </div>
                  <div className="bg-orange-500/10 p-3 rounded-lg border-l-4 border-orange-500">
                    <strong className="text-orange-400">Binit:</strong> Hold up let me check the spreadsheet...
                  </div>
                  <div className="bg-red-500/10 p-3 rounded-lg border-l-4 border-red-500">
                    <strong className="text-red-400">Jake:</strong> This is chaos lol
                  </div>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Then comes my job: taking this beautiful mess and somehow turning it into a functional fantasy league 
                using the most sophisticated tool known to mankind... <em>Microsoft Excel</em>.
              </p>
              
              <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground flex items-center gap-4">
                <span className="text-4xl">📊</span> Spreadsheet Hell
              </h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                What started as &quot;just track who has which players&quot; quickly evolved into a <strong className="text-primary">monster of Excel engineering</strong>. 
                We&apos;re talking multiple sheets, complex formulas, and enough conditional formatting to make a data analyst cry.
              </p>

              {/* Spreadsheet Breakdown */}
              <div className="grid md:grid-cols-2 gap-6 my-10">
                <div className="bg-muted/50 p-6 rounded-lg border">
                  <h4 className="font-bold text-primary mb-3">📋 Draft Tracker Sheet</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Player names manually typed from group chat</li>
                    <li>• Color-coded cells for each team owner</li>
                    <li>• Position tracking (QB, RB, WR, etc.)</li>
                    <li>• Draft order reconstruction</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg border">
                  <h4 className="font-bold text-primary mb-3">🎯 Scoring Rules Sheet</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Passing TD: 4 points</li>
                    <li>• Rushing/Receiving TD: 6 points</li>
                    <li>• Interceptions: -2 points</li>
                    <li>• Yards: 1 point per 10</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg border">
                  <h4 className="font-bold text-primary mb-3">📈 Performance Tracker</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Manual data entry after each game</li>
                    <li>• Individual player statistics</li>
                    <li>• Game-by-game breakdown</li>
                    <li>• We take turns updating this (painful!)</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg border">
                  <h4 className="font-bold text-primary mb-3">🏆 Leaderboard Sheet</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Live calculated team totals</li>
                    <li>• Ranking by total points</li>
                    <li>• Week-by-week progression</li>
                    <li>• Victory celebration zone</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg overflow-x-auto mb-8 border border-border relative">
                <div className="absolute top-2 right-2 text-xs text-muted-foreground bg-muted-foreground/10 px-2 py-1 rounded">
                  excel_nightmare.xlsx
                </div>
                <code className="text-sm font-mono text-primary block leading-relaxed">
                  =IF(AND(VLOOKUP(B2,PlayerStats!$A:$Z,15,FALSE)&gt;0,<br/>
                  &nbsp;&nbsp;VLOOKUP(B2,PlayerStats!$A:$Z,2,FALSE)=$C$1),<br/>
                  &nbsp;&nbsp;VLOOKUP(B2,PlayerStats!$A:$Z,15,FALSE)*<br/>
                  &nbsp;&nbsp;INDEX(ScoringRules!$D:$D,MATCH(&quot;TD&quot;,ScoringRules!$C:$C,0))+<br/>
                  &nbsp;&nbsp;(VLOOKUP(B2,PlayerStats!$A:$Z,12,FALSE)/10),<br/>
                  &nbsp;&nbsp;&quot;Player not active&quot;)
                </code>
              </div>
              
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground italic text-center">
                ↑ This is an actual formula from our spreadsheet. I&apos;m not proud of it, but it works.
              </p>
              
              <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground flex items-center gap-4">
                <span className="text-4xl">🔍</span> The Search for Sanity
              </h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Before deciding to build something from scratch, I did what any reasonable person would do: 
                I spent <em>hours</em> searching for existing solutions. Surely someone else has solved playoff fantasy football, right?
              </p>

              {/* Platform Comparison */}
              <div className="bg-gradient-to-br from-red-500/5 to-red-500/10 p-8 rounded-xl border border-red-500/20 my-8">
                <h4 className="font-bold text-xl mb-6 text-red-500 flex items-center gap-2">
                  <span>❌</span> The Great Platform Search
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between py-2 border-b border-red-500/20">
                    <strong className="text-red-600">DraftKings</strong>
                    <span className="text-sm text-muted-foreground">Regular season only</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-red-500/20">
                    <strong className="text-red-600">FanDuel</strong>
                    <span className="text-sm text-muted-foreground">Occasional contests</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-red-500/20">
                    <strong className="text-red-600">ESPN Fantasy</strong>
                    <span className="text-sm text-muted-foreground">Season ends pre-playoffs</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-red-500/20">
                    <strong className="text-red-600">Yahoo Fantasy</strong>
                    <span className="text-sm text-muted-foreground">Same story</span>
                  </div>
                </div>
                <p className="text-red-600 font-semibold mt-4 text-center">
                  Result: <span className="text-2xl">🤷‍♂️</span> NOTHING exists for playoff-specific fantasy
                </p>
              </div>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                This blew my mind. The NFL playoffs are the <strong className="text-primary">most exciting games of the year</strong>. 
                This is when casual fans tune in, when legendary performances happen, when careers are made. 
                Yet every major fantasy platform just... gives up?
              </p>
              
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 my-8">
                <h4 className="text-primary font-bold text-lg mb-3">💡 The Market Gap</h4>
                <p className="text-muted-foreground">
                  Most fantasy platforms end before playoffs begin, despite playoffs being when casual fans are 
                  most engaged and player performances are most memorable. This felt like a real opportunity.
                </p>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground flex items-center gap-4">
                <span className="text-4xl">⚔️</span> Why This Is Actually Hard
              </h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                &quot;Just build a fantasy app&quot; sounds simple until you realize what you&apos;re actually building. 
                This isn&apos;t just another CRUD app—there are some genuinely challenging technical problems here.
              </p>

              {/* Technical Challenges */}
              <div className="space-y-6 my-10">
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-600 mb-3 flex items-center gap-2">
                    <span>🕷️</span> Web Scraping Nightmare
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    Player data for individual games is surprisingly hard to get reliably. I tried scraping ESPN, NFL.com, 
                    and other sites, but they all use complex UUIDs for players that change unpredictably.
                  </p>
                  <div className="bg-muted/50 p-4 rounded font-mono text-sm">
                    <span className="text-muted-foreground">{'// What I expected:'}</span><br/>
                    <span className="text-green-400">/players/josh-allen/stats</span><br/><br/>
                    <span className="text-muted-foreground">{'// What I actually get:'}</span><br/>
                    <span className="text-red-400">/players/4e8f9a2b-c7d3-41a5-8f6e-2b1c9d8e7f3a/stats</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-600 mb-3 flex items-center gap-2">
                    <span>🔄</span> Real-time Draft Chaos
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    Building a socket-based draft application where multiple people can pick simultaneously, with draft timers, 
                    pick validation, and real-time updates. Oh, and it needs to work when someone&apos;s internet cuts out mid-draft.
                  </p>
                  <div className="bg-muted/50 p-4 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-muted-foreground">Mike is drafting... (15s remaining)</span>
                    </div>
                    <div className="text-sm text-muted-foreground">4 players connected • Draft pick 23/48</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                    <span>👥</span> User Management Hell
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    Every player needs to log in, see their team, make picks, view live scores, and trash talk. 
                    Plus playoff-specific UI considerations that regular season apps don&apos;t need.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <div className="bg-muted/30 p-3 rounded text-sm">
                      <strong className="text-green-600">Playoff Bracket View</strong><br/>
                      <span className="text-muted-foreground">Connect fantasy performance to actual playoff progression</span>
                    </div>
                    <div className="bg-muted/30 p-3 rounded text-sm">
                      <strong className="text-green-600">Elimination Tracking</strong><br/>
                      <span className="text-muted-foreground">Players get eliminated as teams lose—affects strategy</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground flex items-center gap-4">
                <span className="text-4xl">🚀</span> Building the Solution
              </h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                As a Senior Software Engineer at HubSpot, I know I can tackle these challenges. But this isn&apos;t just about 
                replacing a spreadsheet—it&apos;s about creating the playoff fantasy experience that <em>should</em> exist.
              </p>

              {/* Tech Stack */}
              <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 p-8 rounded-xl border border-primary/20 my-10">
                <h3 className="text-2xl font-bold mb-6 text-primary">🛠️ Technical Architecture</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Frontend Stack</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded border-l-4 border-blue-500">
                        <strong className="text-blue-600">React + TypeScript</strong>
                        <span className="text-muted-foreground">Component-based UI, type safety</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-purple-500/10 rounded border-l-4 border-purple-500">
                        <strong className="text-purple-600">Socket.IO Client</strong>
                        <span className="text-muted-foreground">Real-time draft & scoring</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded border-l-4 border-green-500">
                        <strong className="text-green-600">Tailwind CSS</strong>
                        <span className="text-muted-foreground">Responsive design</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Backend Stack</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-3 p-3 bg-yellow-500/10 rounded border-l-4 border-yellow-500">
                        <strong className="text-yellow-600">Node.js + Express</strong>
                        <span className="text-muted-foreground">API server, socket handling</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded border-l-4 border-blue-500">
                        <strong className="text-blue-600">PostgreSQL</strong>
                        <span className="text-muted-foreground">Relational data integrity</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded border-l-4 border-orange-500">
                        <strong className="text-orange-600">Sports Data API</strong>
                        <span className="text-muted-foreground">Real player statistics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Progress */}
              <div className="bg-muted/30 p-8 rounded-xl border my-10">
                <h3 className="text-2xl font-bold mb-6 text-foreground">📈 Current Progress</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-600 flex items-center gap-2">
                      <span>✅</span> Completed
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• User authentication & league creation</li>
                      <li>• Player database with NFL roster data</li>
                      <li>• Draft system with snake draft logic</li>
                      <li>• Basic team management interface</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-orange-600 flex items-center gap-2">
                      <span>🚧</span> In Progress
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Live scoring with sports data integration</li>
                      <li>• Real-time leaderboard updates</li>
                      <li>• Mobile-optimized draft interface</li>
                      <li>• Playoff bracket visualization</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground flex items-center gap-4">
                <span className="text-4xl">🎯</span> What&apos;s Next
              </h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                This is an active build that I&apos;m documenting as I go. My friends are the alpha users, but I&apos;m 
                designing it to work for any group that wants to make playoffs more engaging.
              </p>

              {/* Roadmap */}
              <div className="space-y-4 my-8">
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <span className="text-2xl">🎮</span>
                  <div>
                    <h4 className="font-bold text-primary">Next Post: Real-time Draft Architecture</h4>
                    <p className="text-sm text-muted-foreground">Deep dive into WebSocket implementation, handling disconnections, and draft timer logic</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h4 className="font-bold text-accent">Sports Data Integration Challenges</h4>
                    <p className="text-sm text-muted-foreground">How I solved the player stats problem and built reliable data pipelines</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-500/5 rounded-lg border-l-4 border-green-500">
                  <span className="text-2xl">👥</span>
                  <div>
                    <h4 className="font-bold text-green-600">User Testing with Real Friends</h4>
                    <p className="text-sm text-muted-foreground">What happened when we beta tested during actual playoffs</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl border border-primary/20 my-10">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-primary mb-4">Want to Join the Beta?</h4>
                  <p className="text-muted-foreground mb-6">
                    I&apos;m looking for groups who want to try playoff fantasy football the way it should be done. 
                    No more spreadsheet hell, no more manual data entry, no more chaos in group chats.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a 
                      href="https://www.linkedin.com/in/binitrshrestha" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <span>💬</span> Connect on LinkedIn
                    </a>
                    <a 
                      href="https://twitter.com/intent/tweet?text=Interested%20in%20beta%20testing%20NFL%20playoff%20fantasy%20football%20platform%20by%20@binitr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <span>🐦</span> Tweet Interest
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Thoughts on this post?</h3>
            <p className="text-muted-foreground mb-6">
              I&apos;d love to hear your feedback or discuss the technical details further.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild>
                <a href="https://www.linkedin.com/in/binitrshrestha" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/blog">
                  More Thoughts
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}