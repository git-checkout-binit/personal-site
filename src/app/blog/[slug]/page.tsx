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
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground italic">
                Why I&apos;m building something that doesn&apos;t exist in the fantasy sports world
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                The Problem That Started It All
              </h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Every January, my friends and I face the same frustration. Regular fantasy football seasons are over, 
                but the most exciting part of the NFL season—the playoffs—is just beginning. We&apos;d watch these incredible 
                games with amazing individual performances, but had no way to compete against each other like we did 
                during the regular season.
              </p>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                So we did what engineers do: we built a spreadsheet.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                Spreadsheet Engineering at Its Peak
              </h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                What started as a simple scoring sheet quickly became a monster. Complex VLOOKUP formulas pulling 
                player stats from manually updated tables. Nested IF statements calculating point values based on 
                playoff round multipliers. Conditional formatting that would make Excel certification instructors weep.
              </p>
              
              <div className="bg-muted p-6 rounded-lg overflow-x-auto mb-6 border border-border">
                <code className="text-sm font-mono text-primary">
                  =IF(AND(VLOOKUP(B2,PlayerStats!$A:$Z,15,FALSE)&gt;0,<br/>
                  &nbsp;&nbsp;VLOOKUP(B2,PlayerStats!$A:$Z,2,FALSE)=GameWeek),<br/>
                  &nbsp;&nbsp;VLOOKUP(B2,PlayerStats!$A:$Z,15,FALSE)*<br/>
                  &nbsp;&nbsp;INDEX(Multipliers,MATCH(GameRound,RoundNames,0)),0)
                </code>
              </div>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground italic">
                Yes, this was a real formula from our spreadsheet.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                The Search for Alternatives
              </h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Before committing to building something from scratch, I spent hours researching existing solutions. 
                Surely someone had built fantasy football specifically for NFL playoffs?
              </p>
              
              <div className="space-y-2 mb-6">
                <p className="text-lg leading-relaxed text-muted-foreground"><strong className="font-bold text-primary">DraftKings</strong>: Regular season only</p>
                <p className="text-lg leading-relaxed text-muted-foreground"><strong className="font-bold text-primary">FanDuel</strong>: Occasional playoff contests, but nothing ongoing</p>
                <p className="text-lg leading-relaxed text-muted-foreground"><strong className="font-bold text-primary">ESPN Fantasy</strong>: Season ends before playoffs</p>
                <p className="text-lg leading-relaxed text-muted-foreground"><strong className="font-bold text-primary">Yahoo Fantasy</strong>: Same story</p>
                <p className="text-lg leading-relaxed text-muted-foreground"><strong className="font-bold text-primary">NFL.com</strong>: Regular season focused</p>
              </div>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                After searching extensively, <strong className="font-bold text-primary">nothing like this exists on the market</strong>. 
                Most fantasy platforms end before playoffs begin, despite playoffs being when casual fans are most engaged 
                and player performances are most memorable.
              </p>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                This felt like a real market gap.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                What&apos;s Next
              </h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                This is an active project that I&apos;m documenting as I build. The next posts will dive into technical 
                decisions, API integrations, and user feedback from my core group of friends who are alpha testing 
                the platform.
              </p>
              
              <div className="border-l-4 border-primary pl-6 py-4 my-6 bg-primary/5 rounded-r-lg">
                <p className="text-muted-foreground italic">
                  Want to try it when it&apos;s ready? Connect with me on{' '}
                  <a href="https://www.linkedin.com/in/binitrshrestha" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-primary hover:text-accent transition-colors underline font-medium">
                    LinkedIn
                  </a>{' '}
                  and I&apos;ll add you to the beta testing group.
                </p>
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