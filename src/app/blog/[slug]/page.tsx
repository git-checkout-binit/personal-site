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
    if (slug === 'muay-thai-bangkok-fight-camp') {
      setPost({
        slug: 'muay-thai-bangkok-fight-camp',
        title: 'From Marathons to Muay Thai: One Week of Pain, Sweat, and Noodles',
        description: 'How I accidentally joined a Muay Thai fight camp in Bangkok during a solo backpacking trip. Three lessons learned from training with real fighters in sweltering heat.',
        date: '2025-06-15',
        author: 'Binit Shrestha',
        tags: ['Travel', 'Martial Arts', 'Personal Growth', 'Bangkok', 'Challenge'],
        readingTime: '6 min read',
      });
    } else if (slug === 'nfl-fantasy-spreadsheet-to-web') {
      setPost({
        slug: 'nfl-fantasy-spreadsheet-to-web',
        title: 'From Spreadsheet Chaos to Web Platform: Building NFL Playoff Fantasy',
        description: 'The story of building a fantasy football platform for NFL playoffs after discovering nothing like it exists. From complex spreadsheet formulas to a possible full-stack web application.',
        date: '2025-03-08',
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
              {post?.slug === 'muay-thai-bangkok-fight-camp' && (
                <>
                  <p className="text-xl leading-relaxed text-muted-foreground italic border-l-4 border-primary/30 pl-6 py-4 bg-primary/5 rounded-r-lg">
                    &quot;You are going to die.&quot; - My cab driver, Google Translated
                  </p>
                  
                  {/* Hero Image */}
                  <div className="relative rounded-xl overflow-hidden shadow-2xl my-12">
                    <img
                      src="https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1200&h=600&fit=crop&crop=center"
                      alt="Muay Thai training in Bangkok - intense martial arts workout in sweltering heat"
                      className="w-full h-[400px] object-cover"
                      style={{
                        filter: 'brightness(0.7) contrast(1.3) saturate(1.1)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-sm opacity-80">Training at a Bangkok Muay Thai camp: where marathon endurance meets combat reality</p>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground flex items-center gap-4">
                    <span className="text-4xl">🥊</span> How This Happened
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    This summer I joined a Muay Thai fight camp in Bangkok. I was traveling solo, had no real Muay Thai experience, 
                    and it was incredibly hot. But I wanted to try something hard while I was there.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                    I do have a black belt in Taekwondo and I run marathons, but that doesn&apos;t really translate to Muay Thai. 
                    The cab driver taking me to the camp couldn&apos;t believe where I was going. He Google Translated 
                    something that said &quot;You are going to die.&quot;
                  </p>

                  {/* Daily Schedule */}
                  <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 p-8 rounded-xl border border-orange-500/20 my-8">
                    <h4 className="font-bold text-xl mb-6 text-orange-600 flex items-center gap-2">
                      <span>⏰</span> What a Day Looked Like
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b border-orange-500/20">
                          <span className="font-semibold">6:00 AM</span>
                          <span className="text-muted-foreground">Wake up, light breakfast</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-orange-500/20">
                          <span className="font-semibold">6:30 AM</span>
                          <span className="text-muted-foreground">50km morning run</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-orange-500/20">
                          <span className="font-semibold">9:00 AM</span>
                          <span className="text-muted-foreground">Breakfast and rest</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-orange-500/20">
                          <span className="font-semibold">3:00 PM</span>
                          <span className="text-muted-foreground">Pad work and technique</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b border-orange-500/20">
                          <span className="font-semibold">4:00 PM</span>
                          <span className="text-muted-foreground">Heavy bag training</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-orange-500/20">
                          <span className="font-semibold">5:00 PM</span>
                          <span className="text-muted-foreground">Sparring</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-orange-500/20">
                          <span className="font-semibold">6:00 PM</span>
                          <span className="text-muted-foreground">Conditioning and stretching</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-orange-500/20">
                          <span className="font-semibold">8:00 PM</span>
                          <span className="text-muted-foreground">Dinner and recovery</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-orange-600 font-medium mt-4 text-center">
                      This wasn&apos;t a tourist class. I was doing the real fighter schedule.
                    </p>
                  </div>
                  
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    When I got there, they gave me a schedule and a room. I was doing the same training as people 
                    who fight professionally. They thought it was funny, but I kept showing up.
                  </p>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground">
                    What I Learned
                  </h2>
                  
                  <div className="space-y-12 my-10">
                    <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-8 rounded-xl border-l-4 border-red-500">
                      <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-3">
                        <span className="text-3xl">💪</span> 1. Put in the Work Early
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        These fighters weren&apos;t training for fun. Many were doing this to get out of poverty. 
                        Their lives actually depended on being disciplined about training.
                      </p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        The training was hard. On day one I asked how far we were running. They said 50 kilometers. 
                        I thought they were joking. They weren&apos;t. During those runs I realized how different our situations were. 
                        But showing up consistently earned their respect.
                      </p>
                      <div className="bg-red-500/5 p-4 rounded-lg border border-red-500/20 mt-4">
                        <p className="font-semibold text-red-600">The Point:</p>
                        <p className="text-muted-foreground text-sm mt-1">
                          Do the hard work before you need it. Whatever you&apos;re preparing for, front-load the effort 
                          so when it matters, you&apos;re ready.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 p-8 rounded-xl border-l-4 border-green-500">
                      <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-3">
                        <span className="text-3xl">❤️</span> 2. Strength and Kindness Go Together
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        These were some of the toughest people I&apos;ve met, but also some of the kindest. 
                        <strong className="text-green-600"> Petch Morakot</strong>, a former #1 ranked fighter, 
                        trained with us every day.
                      </p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        On runs he&apos;d greet everyone we passed. In the gym he was serious but helpful. 
                        They invited me to dinner after training. They made me feel included. I still talk to some of them.
                      </p>
                      <div className="bg-green-500/5 p-4 rounded-lg border border-green-500/20 mt-4">
                        <p className="font-semibold text-green-600">The Point:</p>
                        <p className="text-muted-foreground text-sm mt-1">
                          Being strong doesn&apos;t mean being mean. The strongest people I met were also the most generous.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-xl border-l-4 border-blue-500">
                      <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-3">
                        <span className="text-3xl">📅</span> 3. Have a Date in Mind
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Every fighter there was training for a specific fight date. That date made their training 
                        urgent and focused. I realized most of us need something like that.
                      </p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        It could be a race, a deadline, a presentation. But having a specific date gives your preparation 
                        meaning. Since then I try to set dates for things I&apos;m working on and treat the prep seriously.
                      </p>
                      <div className="bg-blue-500/5 p-4 rounded-lg border border-blue-500/20 mt-4">
                        <p className="font-semibold text-blue-600">The Point:</p>
                        <p className="text-muted-foreground text-sm mt-1">
                          Having a date on the calendar makes your preparation real. Pick your date, then train accordingly.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Photo section */}
                  <div className="bg-muted/30 p-8 rounded-xl border my-10">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-4 text-foreground">Training with Real Fighters</h4>
                      <div className="relative rounded-lg overflow-hidden shadow-lg mb-4">
                        <img
                          src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=800&h=500&fit=crop&crop=center"
                          alt="Muay Thai fighters training - the brotherhood of the ring"
                          className="w-full h-[300px] object-cover"
                          style={{
                            filter: 'brightness(0.8) contrast(1.1) sepia(0.3)'
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        Training with champions like Petch Morakot showed me that being tough and being kind aren&apos;t opposites
                      </p>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground flex items-center gap-4">
                    <span className="text-4xl">🥋</span> Taking It Home
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    I went there as a tourist trying something hard. I left feeling like I understood something about 
                    what real preparation looks like. You don&apos;t need to be in a fight camp to apply this stuff.
                  </p>
                  
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl border border-primary/20 my-8">
                    <h4 className="text-xl font-bold text-primary mb-4">The Three Things</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">1.</span>
                        <span><strong>Do the work early:</strong> Prepare before you need it</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">2.</span>
                        <span><strong>Strength includes kindness:</strong> The toughest people can be the most generous</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">3.</span>
                        <span><strong>Set your date:</strong> Give your effort a specific target</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 p-6 rounded-lg border border-orange-500/20 my-8">
                    <h4 className="text-orange-600 font-bold text-lg mb-3 flex items-center gap-2">
                      <span>✈️</span> If You Want to Try This
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Start running now. The cardio is brutal.</li>
                      <li>• Learn basic Thai. &quot;Thank you&quot; (kob khun) helps a lot.</li>
                      <li>• Bring extra gear: wraps, shorts, electrolytes.</li>
                      <li>• Don&apos;t expect to be good. Expect to get humbled. Show up anyway.</li>
                      <li>• The heat is serious. Drink more water than you think you need.</li>
                    </ul>
                  </div>
                </>
              )}
              
              {post?.slug === 'nfl-fantasy-spreadsheet-to-web' && (
                <>
                  <p className="text-xl leading-relaxed text-muted-foreground italic border-l-4 border-primary/30 pl-6 py-4 bg-primary/5 rounded-r-lg">
                    &quot;There are no tools that let us do this nicely out there that I can see.&quot;
                  </p>
              
              {/* Hero Image */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl my-12">
                <img
                  src="/images/nfl-fantasy-pff.webp"
                  alt="Pro Football Focus fantasy football analytics - the data-driven approach we're building"
                  className="w-full h-[400px] object-cover"
                  style={{
                    filter: 'brightness(0.8) contrast(1.1) saturate(1.05)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm opacity-80">Fantasy football analytics: the data-driven experience we&apos;re building</p>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground flex items-center gap-4">
                <span className="text-4xl">🏈</span> The Annual Ritual
              </h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Every January, the same thing happens. My friends and I gather around (virtually) for one of 
                our favorite traditions: the NFL Playoff Fantasy Draft.
              </p>
              
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                Picture this: We jump in a group chat and just start rattling off player names. &quot;I&apos;ll take Josh Allen!&quot; 
                &quot;Dibs on CMC!&quot; &quot;Is Mahomes still available?&quot; It&apos;s chaotic, it&apos;s fun, and it&apos;s completely unorganized.
              </p>

              {/* Group Chat Screenshot Mockup */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl border border-primary/20 my-8">
                <h4 className="font-bold text-lg mb-4 text-primary">📱 Our Draft &quot;Process&quot;</h4>
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-blue-500/10 p-3 rounded-lg border-l-4 border-blue-500">
                    <strong className="text-blue-400">Zack:</strong> I got Josh Allen first!
                  </div>
                  <div className="bg-green-500/10 p-3 rounded-lg border-l-4 border-green-500">
                    <strong className="text-green-400">Sean:</strong> Wait who picked CMC?? 
                  </div>
                  <div className="bg-orange-500/10 p-3 rounded-lg border-l-4 border-orange-500">
                    <strong className="text-orange-400">Binit:</strong> Hold up let me check the spreadsheet...
                  </div>
                  <div className="bg-red-500/10 p-3 rounded-lg border-l-4 border-red-500">
                    <strong className="text-red-400">Nate:</strong> This is chaos and I&apos;m a dad lol
                  </div>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Then comes my job: taking this beautiful mess and somehow turning it into a functional fantasy league 
                using the most sophisticated tool known to mankind... Google Sheets.
              </p>
              
              <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground flex items-center gap-4">
                <span className="text-4xl">📊</span> Spreadsheet Hell
              </h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                What started as &quot;just track who has which players&quot; quickly evolved into a monster of spreadsheet engineering. 
                We&apos;re talking multiple sheets, complex formulas, and enough conditional formatting to make a data analyst cry.
              </p>

              {/* Spreadsheet Breakdown */}
              <div className="space-y-8 my-10">
                <div className="bg-muted/50 p-6 rounded-lg border">
                  <h4 className="font-bold text-primary mb-3">📋 Draft Tracker Sheet</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Player names manually typed from group chat</li>
                    <li>• Draft order reconstruction</li>
                    <li>• Funny meme of Zack</li>
                  </ul>
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/images/fantasy-draft.png"
                      alt="Fantasy football draft tracking spreadsheet"
                      className="w-full object-cover border border-border"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/50 p-6 rounded-lg border">
                    <h4 className="font-bold text-primary mb-3">🎯 Scoring Sheet + Leaderboard Sheet</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Scoring formulas for each player performance</li>
                      <li>• Live calculated team totals</li>
                      <li>• Ranking by total points</li>
                      <li>• Week-by-week progression</li>
                      <li>• Victory celebration zone</li>
                    </ul>
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/images/fantasy-scores.png"
                      alt="Fantasy football scoring and leaderboard spreadsheet"
                      className="w-full object-cover border border-border"
                    />
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg border">
                  <h4 className="font-bold text-primary mb-3">📈 Performance Tracker</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Manual data entry after each game</li>
                    <li>• Individual player statistics</li>
                    <li>• Game-by-game breakdown</li>
                    <li>• We take turns updating this (painful!)</li>
                  </ul>
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/images/fantasy-data.png"
                      alt="Fantasy football player data tracking spreadsheet"
                      className="w-full object-cover border border-border"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg overflow-x-auto mb-8 border border-border relative">
                <div className="absolute top-2 right-2 text-xs text-muted-foreground bg-muted-foreground/10 px-2 py-1 rounded">
                  excel_nightmare.xlsx
                </div>
                <code className="text-sm font-mono text-primary block leading-relaxed">
                  ===(E39*&apos;Main Page&apos;!$B$8)+(F39*&apos;Main Page&apos;!$B$9)+(G39*&apos;Main Page&apos;!$B$10)+(H39*&apos;Main Page&apos;!$B$11)+(I39*&apos;Main Page&apos;!$B$12)+(J39*&apos;Main Page&apos;!$B$13)+(K39*&apos;Main Page&apos;!$B$14)+(L39*&apos;Main Page&apos;!$B$15)+(M39*&apos;Main Page&apos;!$B$16)+(N39*&apos;Main Page&apos;!$B$17)+(2*O39)
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
                I spent hours searching for existing solutions. Surely someone else has solved playoff fantasy football, right?
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
                This blew my mind. The NFL playoffs are the most exciting games of the year. 
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
                This isn&apos;t just another CRUD app and there are some genuinely challenging technical problems here.
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
                      <span className="text-muted-foreground">Players get eliminated as teams lose affects strategy</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground flex items-center gap-4">
                <span className="text-4xl">🚀</span> Building the Solution
              </h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                This isn&apos;t just about replacing a spreadsheet... it&apos;s about creating the playoff fantasy experience that should exist.
              </p>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Go into detail about how we can tackle it but be broad. First, we need a way to have a service that can get 
                performance of a player, once we have that we can create a UI that can pull on this information. I want a possible 
                solution, but I haven&apos;t started yet and I am far from it. I want to have something by next fantasy playoffs season.
              </p>

              {/* Tech Stack */}
              <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 p-8 rounded-xl border border-primary/20 my-10">
                <h3 className="text-2xl font-bold mb-6 text-primary">🛠️ What I&apos;m Building With</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Frontend</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded border-l-4 border-blue-500">
                        <strong className="text-blue-600">React + TypeScript</strong>
                        <span className="text-muted-foreground">Good for real-time UIs</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-purple-500/10 rounded border-l-4 border-purple-500">
                        <strong className="text-purple-600">Socket.IO</strong>
                        <span className="text-muted-foreground">Live draft updates</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded border-l-4 border-green-500">
                        <strong className="text-green-600">Tailwind CSS</strong>
                        <span className="text-muted-foreground">Quick styling</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Backend</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-3 p-3 bg-yellow-500/10 rounded border-l-4 border-yellow-500">
                        <strong className="text-yellow-600">Node.js + Express</strong>
                        <span className="text-muted-foreground">API and websockets</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded border-l-4 border-blue-500">
                        <strong className="text-blue-600">PostgreSQL</strong>
                        <span className="text-muted-foreground">Reliable data storage</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded border-l-4 border-orange-500">
                        <strong className="text-orange-600">Sports Data API</strong>
                        <span className="text-muted-foreground">Player stats</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Progress */}
              <div className="bg-muted/30 p-8 rounded-xl border my-10">
                <h3 className="text-2xl font-bold mb-6 text-foreground">📈 Where I&apos;m At</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-600 flex items-center gap-2">
                      <span>✅</span> Working
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• User authentication and league creation</li>
                      <li>• Player database with current NFL rosters</li>
                      <li>• Draft system with snake draft logic</li>
                      <li>• Basic team management interface</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-orange-600 flex items-center gap-2">
                      <span>🚧</span> Building Now
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Live scoring with sports data API</li>
                      <li>• Real-time leaderboard updates</li>
                      <li>• Mobile-friendly draft interface</li>
                      <li>• Playoff bracket view</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground flex items-center gap-4">
                <span className="text-4xl">🎯</span> What&apos;s Next
              </h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                I&apos;m building this in the open and documenting what I learn. My friend group is testing it, 
                but it should work for anyone who wants better playoff fantasy.
              </p>

              {/* Roadmap */}
              <div className="space-y-4 my-8">
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <span className="text-2xl">🎮</span>
                  <div>
                    <h4 className="font-bold text-primary">Next Post: Real-time Draft System</h4>
                    <p className="text-sm text-muted-foreground">How WebSockets work for live drafting, handling disconnections, and timer logic</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h4 className="font-bold text-accent">Solving the Player Stats Problem</h4>
                    <p className="text-sm text-muted-foreground">How I got reliable sports data working properly</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-500/5 rounded-lg border-l-4 border-green-500">
                  <span className="text-2xl">👥</span>
                  <div>
                    <h4 className="font-bold text-green-600">Testing with Real Users</h4>
                    <p className="text-sm text-muted-foreground">What we learned when my friends used it during actual playoffs</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl border border-primary/20 my-10">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-primary mb-4">Want to Try It?</h4>
                  <p className="text-muted-foreground mb-6">
                    Looking for groups interested in better playoff fantasy. No more spreadsheets, 
                    no more manual updates, no more chaos in group chats.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a 
                      href="https://www.linkedin.com/in/binitrshrestha" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <span>💬</span> Message me on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
                </>
              )}
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
              I&apos;d love to hear your feedback or discuss the technical details further. Or do you want a copy of my spreadsheet for your own league.
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