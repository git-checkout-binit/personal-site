'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BlogPage() {
  const [posts, setPosts] = useState<Array<{
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    tags: string[];
    readingTime: string;
  }>>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // For now, we'll hardcode the blog post data
    // In the future, this could be fetched from an API or CMS
    const hardcodedPosts = [
      {
        slug: 'muay-thai-bangkok-fight-camp',
        title: 'What I Learned Living in a Bangkok Muay Thai Fight Camp',
        description: 'How I accidentally joined a Muay Thai fight camp in Bangkok during a solo backpacking trip. Three lessons learned from training with real fighters in sweltering heat.',
        date: '2025-06-15',
        author: 'Binit Shrestha',
        tags: ['Travel', 'Martial Arts', 'Personal Growth', 'Bangkok', 'Challenge'],
        readingTime: '6 min read',
      },
      {
        slug: 'nfl-fantasy-spreadsheet-to-web',
        title: 'From Spreadsheet Chaos to Web Platform: Building NFL Playoff Fantasy',
        description: 'The story of building a fantasy football platform for NFL playoffs after discovering nothing like it exists. From complex Excel formulas to a full-stack web application.',
        date: '2025-03-08',
        author: 'Binit Shrestha',
        tags: ['React', 'Full-stack', 'Sports Data', 'Product Development', 'Node.js'],
        readingTime: '8 min read',
      }
    ];
    
    setPosts(hardcodedPosts);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading thoughts...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Cinematic Header */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="geometric-bg absolute inset-0 opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link href="/">
              <Button variant="ghost" className="mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Portfolio
              </Button>
            </Link>
            
            <div className="relative">
              {/* Floating background elements */}
              <div className="absolute -top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute -top-10 right-1/3 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse delay-1000" />
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-6 relative">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  THOUGHTS
                </span>
                <div className="absolute -right-4 -top-2 text-2xl animate-bounce delay-2000">💭</div>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              Stories from building things, breaking things, and learning stuff along the way
            </p>
            
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8">
              From spreadsheet chaos to Bangkok fight camps - the unexpected places where the best lessons happen
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm">
              <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-2 rounded-full border border-primary/20">
                <span className="text-lg">🏗️</span>
                <span className="text-primary font-medium">Building Things</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-green-500/5 px-4 py-2 rounded-full border border-green-500/20">
                <span className="text-lg">🌱</span>
                <span className="text-green-600 font-medium">Personal Growth</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-500/5 px-4 py-2 rounded-full border border-orange-500/20">
                <span className="text-lg">⚡</span>
                <span className="text-orange-600 font-medium">Unexpected Adventures</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-500/5 px-4 py-2 rounded-full border border-blue-500/20">
                <span className="text-lg">🧠</span>
                <span className="text-blue-600 font-medium">Hard-Won Lessons</span>
              </div>
            </div>
            
            {/* Creative quote section */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-muted/30 to-muted/10 p-6 rounded-xl border border-muted-foreground/10 relative">
                <div className="absolute -top-3 left-6 bg-background px-3 py-1 rounded-full border border-muted-foreground/20">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Currently Writing About</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-center mt-2">
                  How a TikTok led me to train with professional fighters in Bangkok, and why Excel formulas 
                  are somehow connected to everything I've learned about building software.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {posts.length > 0 ? (
            <div className="max-w-4xl mx-auto space-y-12">
              {posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-500 overflow-hidden border-2 hover:border-primary/20">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                      </div>
                      
                      <CardTitle className="text-2xl md:text-3xl group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </CardTitle>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed mt-3">
                        {post.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag: string) => (
                          <Badge key={tag} variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <Button asChild className="group/btn bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300">
                        <Link href={`/blog/${post.slug}`}>
                          Read Full Post
                          <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:scale-110 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse" />
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce">✨</div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Stories Loading...</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Putting together tales of spreadsheet battles, Bangkok training camps, 
                and the weird places where the best ideas come from.
              </p>
              
              <Button asChild variant="outline">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Main Story
                </Link>
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}