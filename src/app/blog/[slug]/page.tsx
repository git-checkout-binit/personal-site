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
        title: 'What I Learned Living in a Bangkok Muay Thai Fight Camp',
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
                      src="/images/muay-thai-belts.jpg"
                      alt="At Bangkok Muay Thai fight camp with championship belts"
                      className="w-full h-[400px] object-cover"
                      style={{
                        filter: 'brightness(0.8) contrast(1.2) saturate(1.1)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-sm opacity-80">Training with real fighters at a Bangkok Muay Thai camp</p>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground flex items-center gap-4">
                    <span className="text-4xl">🥊</span> How This Happened
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    In the summer of 2023, I joined a Muay Thai fight camp in Bangkok. I was backpacking solo through Southeast Asia 
                    with zero real Muay Thai experience, in 95-degree heat with brutal humidity. I&apos;d seen these camps on TikTok 
                    and thought it looked intense enough to be worth trying. So I decided to go all in and train alongside 
                    some of the most dangerous fighters in the world.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    I have a black belt in Taekwondo and run marathons, but none of that prepares you for Muay Thai. 
                    The cab driver taking me to the camp kept shaking his head and muttering in Thai. He pulled out Google Translate 
                    and showed me his phone: &quot;You are going to die.&quot;
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                    When I got there, they gave me a schedule and a room. I was doing the same training as people 
                    who fight professionally. They thought it was funny, but I kept showing up.
                  </p>

                  {/* Daily Schedule */}
                  <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 p-8 rounded-xl border border-orange-500/20 my-8">
                    <h4 className="font-bold text-xl mb-4 text-orange-600 flex items-center gap-2">
                      <span>⏰</span> The Reality: What Every Day Actually Looked Like
                    </h4>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      This wasn&apos;t a tourist class. Here&apos;s the actual schedule they handed me - the same one the professional fighters followed:
                    </p>
                    
                    <div className="relative rounded-lg overflow-hidden shadow-lg mb-6">
                      <img
                        src="/images/muay-thai-schedule-new.jpg"
                        alt="Daily training schedule at Bangkok Muay Thai fight camp"
                        className="w-full object-cover border border-border"
                      />
                    </div>
                    
                    <h5 className="font-bold text-lg mb-4 text-orange-600">HOW MY DAYS ACTUALLY WENT</h5>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between py-2 border-b border-orange-500/20">
                        <span className="font-semibold">5:30 AM</span>
                        <span className="text-muted-foreground">Wake up, still sore from the day before</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-orange-500/20">
                        <span className="font-semibold">6:00 AM</span>
                        <span className="text-muted-foreground">Already running outside, I&apos;m half asleep</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-orange-500/20">
                        <span className="font-semibold">7:45 AM</span>
                        <span className="text-muted-foreground">Sprinting with tires filled with rocks tied to us</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-orange-500/20">
                        <span className="font-semibold">8:00 AM</span>
                        <span className="text-muted-foreground">Sparring drills and ab workouts</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-orange-500/20">
                        <span className="font-semibold">9:00 AM</span>
                        <span className="text-muted-foreground">Stretch, breakfast, then sleep (too hot to do anything)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-orange-500/20">
                        <span className="font-semibold">2:30 PM</span>
                        <span className="text-muted-foreground">Running in the hot Bangkok sun (shorter than AM)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-orange-500/20">
                        <span className="font-semibold">3:00 PM</span>
                        <span className="text-muted-foreground">Intense pad sessions (they&apos;d beat you with a stick if you mess up)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-orange-500/20">
                        <span className="font-semibold">4:00 PM</span>
                        <span className="text-muted-foreground">Crazy sparring sessions (watched from sidelines, thank god)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-orange-500/20">
                        <span className="font-semibold">5:00 PM</span>
                        <span className="text-muted-foreground">Done for the day, some of us get dinner together</span>
                      </div>
                    </div>
                    
                    <p className="text-orange-600 font-medium mt-6 leading-relaxed">
                      The hardest part wasn&apos;t the physical training. It was realizing that while I was there for a week-long adventure, 
                      most of these fighters were doing this every single day to survive. That perspective shift hit different.
                    </p>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground">
                    What I Learned
                  </h2>
                  
                  <div className="space-y-12 my-10">
                    <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-8 rounded-xl border-l-4 border-red-500">
                      <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-3">
                        <span className="text-3xl">💪</span> 1. Sweat Now, Bleed Later
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        These fighters weren&apos;t training for fun. Many were doing this to escape poverty. 
                        Their survival literally depended on their discipline. The mentality was simple: put in the brutal work now 
                        so you don&apos;t pay the price later.
                      </p>
                      
                      <div className="relative rounded-lg overflow-hidden shadow-lg my-6">
                        <img
                          src="/images/muay-thai-morning-run.jpg"
                          alt="Morning run with Muay Thai fighters in Bangkok"
                          className="w-full h-[300px] object-cover border border-border"
                        />
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Day one, I asked how far we were running. They said 50 kilometers. I thought they were messing with me. 
                        Turned out to be closer to 10 km, but their point was clear: they wanted to see if I&apos;d break. 
                        I stuck with them the whole way. That consistency earned their respect more than any technique ever could.
                      </p>
                      <div className="bg-red-500/5 p-4 rounded-lg border border-red-500/20 mt-4">
                        <p className="font-semibold text-red-600">The Reality:</p>
                        <p className="text-muted-foreground text-sm mt-1">
                          Front-load the suffering. Do the work when you don&apos;t want to, so when it matters, you&apos;re ready. 
                          Most people wait until they need to be tough to start getting tough. That&apos;s too late.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 p-8 rounded-xl border-l-4 border-green-500">
                      <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-3">
                        <span className="text-3xl">❤️</span> 2. Strength and Kindness Go Together
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        The toughest person at the camp was also the nicest. 
                        <a href="https://www.onefc.com/athletes/petchmorakot/" target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold underline hover:text-green-700">Petchmorakot Petchyindee</a>, 
                        a former #1 ranked ONE Championship fighter, trained with us every day.
                      </p>
                      
                      <div className="relative rounded-lg overflow-hidden shadow-lg my-6">
                        <img
                          src="/images/muay-thai-group.jpg"
                          alt="Group photo with Muay Thai fighters including Petchmorakot Petchyindee"
                          className="w-full object-cover border border-border"
                        />
                        <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm">
                          Petchmorakot is two people to my left in this photo
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        On morning runs, he&apos;d wave and say hello to every person we passed. In the gym, he was focused but helpful. 
                        After training, they&apos;d invite me to dinner. Made me feel like part of the group instead of just a tourist. 
                        Still talk to some of them today.
                      </p>
                      <div className="bg-green-500/5 p-4 rounded-lg border border-green-500/20 mt-4">
                        <p className="font-semibold text-green-600">The Reality:</p>
                        <p className="text-muted-foreground text-sm mt-1">
                          Being dangerous and being kind aren&apos;t opposites. The most capable people I met were also the most generous. 
                          Strength without character is just violence.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-xl border-l-4 border-blue-500">
                      <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-3">
                        <span className="text-3xl">🎯</span> 3. Set Your Fight Date
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Every fighter had a specific date on the calendar. A real fight they were preparing for. 
                        That date made everything urgent. Every morning run, every sparring session, every meal mattered 
                        because it was building toward something real.
                      </p>
                      
                      <div className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 p-6 rounded-lg border border-blue-500/20 my-6">
                        <p className="text-blue-600 font-semibold mb-2 flex items-center gap-2">
                          <span>🥊</span> Training Reality Check
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          During light sparring sessions, I quickly learned the difference between having a black belt in Taekwondo 
                          and actually knowing how to fight. These guys were patient with me, but the skill gap was humbling.
                        </p>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        I started setting artificial deadlines for my own goals after this. Marathon dates, project launch dates, 
                        presentation dates. Having something real on the calendar changes how you prepare. 
                        It makes the daily work feel like it actually matters.
                      </p>
                      <div className="bg-blue-500/5 p-4 rounded-lg border border-blue-500/20 mt-4">
                        <p className="font-semibold text-blue-600">The Reality:</p>
                        <p className="text-muted-foreground text-sm mt-1">
                          Pick your date and work backward. Without a real deadline, preparation feels optional. 
                          With one, every day of training becomes necessary.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  
                  <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground flex items-center gap-4">
                    <span className="text-4xl">🥋</span> Why This Mattered
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    I went to Bangkok planning to backpack around Southeast Asia. I ended up living with professional fighters 
                    for a week and learning more about discipline and character than I had in years.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                    The experience changed how I approach hard things. When I&apos;m training for a marathon or working on a difficult project, 
                    I think about those 5:30 AM wake-ups and remember that the hardest part is just showing up.
                  </p>
                  
                  {/* Gym Details */}
                  <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 p-6 rounded-lg border border-orange-500/20 my-8">
                    <h4 className="text-orange-600 font-bold text-lg mb-3 flex items-center gap-2">
                      <span>🏟️</span> The Gym
                    </h4>
                    <p className="text-muted-foreground mb-3">
                      This all happened at <a href="https://www.instagram.com/petchyindee/?hl=en" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold underline hover:text-orange-700">Petchyindee Kingdom</a> in Bangkok. 
                      Real fighters, real training, real champions. If you&apos;re serious about experiencing authentic Muay Thai, this is the place.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      📍 36/36 Charan Sanitwong 34 Alley, Arun Amarin, Bangkok Noi, Bangkok 10700, Thailand
                    </p>
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
                      <span className="text-sm text-muted-foreground">Sean is drafting... (15s remaining)</span>
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
                Here&apos;s the thing: this isn&apos;t just about replacing our spreadsheet. It&apos;s about building the playoff fantasy 
                experience that should have existed all along.
              </p>
              
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                I&apos;ve been sketching out what this could look like. Picture opening an app in January and seeing a clean, 
                intuitive draft interface. No more group chat chaos. Real-time scoring that updates as games happen. 
                Leaderboards that actually make sense. A playoff bracket that shows which of your players are still alive.
              </p>

              {/* Vision Section */}
              <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 p-8 rounded-xl border border-primary/20 my-10">
                <h3 className="text-2xl font-bold mb-6 text-primary">💡 The Vision</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Draft Like Pros</h4>
                      <p className="text-muted-foreground text-sm">
                        Clean interface, timer-based picks, real-time updates. No more &quot;wait, who picked who?&quot;
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Live Everything</h4>
                      <p className="text-muted-foreground text-sm">
                        Scores update automatically. Leaderboards refresh in real-time. No more manual spreadsheet hell.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Playoff-First Design</h4>
                      <p className="text-muted-foreground text-sm">
                        Built specifically for playoff dynamics. Elimination tracking, bracket integration, the works.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                I&apos;m targeting January 2026 for launch. That gives me almost a year to build something that actually works well. 
                My friends will be the beta testers, but the goal is to create something any group can use.
              </p>

              {/* Reality Check */}
              <div className="bg-muted/30 p-8 rounded-xl border my-10">
                <h3 className="text-2xl font-bold mb-6 text-foreground">🎯 The Reality</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  I haven&apos;t written the first line of code yet. But I&apos;ve spent enough time researching the technical challenges 
                  to know it&apos;s doable. The hardest parts will be reliable sports data integration and handling real-time draft coordination.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The market research is done (turns out, it really doesn&apos;t exist). The user research is done (me and my friends, 
                  suffering through spreadsheets for years). Now it&apos;s time to build.
                </p>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground flex items-center gap-4">
                <span className="text-4xl">📈</span> What Success Looks Like
              </h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Success isn&apos;t competing with DraftKings. Success is next January when my friends open the app instead 
                of starting a group text. When other friend groups discover it and realize playoff fantasy doesn&apos;t have to suck.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                If I can solve this problem well for 50 groups in year one, that&apos;s a win. If it grows from there, even better. 
                But first, I need to build something that actually works.
              </p>

              {/* Follow the Journey */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl border border-primary/20 my-10">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-primary mb-4">Follow the Build</h4>
                  <p className="text-muted-foreground mb-6">
                    I&apos;m documenting this entire process. The technical decisions, the setbacks, the breakthroughs. 
                    If you&apos;re interested in the journey, let&apos;s connect.
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