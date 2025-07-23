'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Timer, Trophy, Target, Activity } from 'lucide-react';

const runningStats = [
  {
    icon: Trophy,
    label: "Half Marathon PR",
    value: "1:28:32",
    subtitle: "Brooklyn Experience Half 2025"
  },
  {
    icon: Target,
    label: "Half Marathon Ranking",
    value: "Top 1.3%",
    subtitle: "315 / 24,590 overall"
  },
  {
    icon: Timer,
    label: "Marathon PR",
    value: "3:26:20",
    subtitle: "Marine Corps Marathon 2024"
  },
  {
    icon: Target,
    label: "Marathon Ranking",
    value: "Top 8%",
    subtitle: "1,216 / 16,168 overall"
  }
];

const races = [
  {
    name: "Marine Corps Marathon",
    year: "2024", 
    time: "3:26:20",
    placement: "1,216 / 16,168 overall",
    category: "Marathon",
    link: "https://track.rtrt.me/e/MCM-2024#/dash/RHZKA38B"
  },
  {
    name: "Brooklyn Experience Half",
    year: "2025",
    time: "1:28:32", 
    placement: "315 / 24,590 overall",
    category: "Half Marathon",
    link: "https://nycruns.com/race-results?race=nycruns-brooklyn-experience-half-marathon-2025&result=2444284"
  },
  {
    name: "Brooklyn Experience Half (5K split)",
    year: "2025",
    time: "20:14",
    placement: "5K PR",
    category: "5K",
    link: "https://nycruns.com/race-results?race=nycruns-brooklyn-experience-half-marathon-2025&result=2444284"
  },
  {
    name: "5th Ave Mile",
    year: "2024",
    time: "5:39",
    placement: "Mile PR",
    category: "1 Mile"
  }
];

export function RunningSection() {
  return (
    <section id="running" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Hero Section with Professional Photo */}
      <div className="relative mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-8 lg:pr-8"
            >
              <div>
                <motion.div
                  className="w-12 h-1 bg-gradient-to-r from-primary to-accent mb-6 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight leading-[0.9]">
                  <span className="block bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    RUNNING
                  </span>
                  <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    JOURNEY
                  </span>
                </h2>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-4"
              >
                <blockquote className="text-xl md:text-2xl font-bold tracking-wide leading-tight">
                  <span className="text-primary">&quot;</span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    WHEN THE ENDING IS UNKNOWN AND THE DISTANCE IS UNKNOWN THAT&apos;S WHEN YOU KNOW WHO THE{' '}
                    <span className="text-primary font-black">
                      F*CK
                    </span>
                    {' '}YOU ARE
                  </span>
                  <span className="text-accent">&quot;</span>
                </blockquote>
                <p className="text-muted-foreground/80 font-medium tracking-widest text-sm">
                  — DAVID GOGGINS
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side - Professional Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  className="relative overflow-hidden rounded-3xl shadow-2xl professional-image mobile-optimized"
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 z-10 md:block hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                  />
                  <motion.img
                    src="/images/running-1.jpg"
                    alt="Binit Shrestha marathon runner training - Brooklyn NYC runner with 3:26:20 marathon PR and Brooklyn Half Marathon 1:28:32 PR"
                    className="w-full h-[500px] lg:h-[600px] object-cover running-mobile-position md:object-center mobile-reduce-effects"
                    style={{
                      filter: 'brightness(1.08) contrast(1.15) saturate(1.1) sharpen(1px)',
                      imageRendering: 'crisp-edges',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      WebkitTransform: 'translateZ(0)',
                      transform: 'translateZ(0)'
                    }}
                    initial={{ scale: 1.02 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    loading="eager"
                    decoding="async"
                  />
                </motion.div>
                
                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-br from-card via-card to-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-border/50"
                >
                  <div className="text-center">
                    <div className="text-2xl font-black text-primary mb-1">3:26:20</div>
                    <div className="text-xs text-muted-foreground font-medium">MARATHON PR</div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -top-6 -right-6 bg-gradient-to-br from-card via-card to-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-border/50"
                >
                  <div className="text-center">
                    <div className="text-2xl font-black text-accent mb-1">1,697</div>
                    <div className="text-xs text-muted-foreground font-medium">MILES 2024</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">

        {/* Running Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {runningStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    <stat.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.subtitle}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Race Results */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Recent Race Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {races.map((race, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full flex"
              >
                <Card className={`h-full w-full group transition-all duration-300 ${race.link ? 'hover:shadow-lg cursor-pointer' : 'hover:shadow-md'}`}>
                  {race.link ? (
                    <a href={race.link} target="_blank" rel="noopener noreferrer" className="block">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {race.name}
                          </CardTitle>
                          <Badge variant="outline">{race.category}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-2xl font-bold text-primary">
                              {race.time}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {race.year} • {race.placement}
                            </div>
                          </div>
                          <div className="text-right">
                            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-1" />
                          </div>
                        </div>
                      </CardContent>
                    </a>
                  ) : (
                    <>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {race.name}
                          </CardTitle>
                          <Badge variant="outline">{race.category}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-2xl font-bold text-primary">
                              {race.time}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {race.year} • {race.placement}
                            </div>
                          </div>
                          <div className="text-right">
                            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-1" />
                          </div>
                        </div>
                      </CardContent>
                    </>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 2024 Strava Stats - Elite Level Performance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-6xl mx-auto relative"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl blur-3xl" />
          <div className="absolute top-4 right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          
          <Card className="relative bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-sm border-2 border-gradient-to-r border-primary/30 shadow-2xl overflow-hidden">
            
            {/* Header with animated elements */}
            <CardHeader className="relative pb-8">
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  className="w-16 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full mr-4"
                  animate={{ scaleX: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <CardTitle className="text-3xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent tracking-wide">
                  2024 PERFORMANCE DATA
                </CardTitle>
                <motion.div
                  className="w-16 h-1 bg-gradient-to-r from-accent via-primary to-accent rounded-full ml-4"
                  animate={{ scaleX: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
              <p className="text-center text-muted-foreground font-medium px-4 sm:px-6 text-sm sm:text-base leading-relaxed">
                <span className="block sm:inline">Relentless consistency</span>
                <span className="hidden sm:inline"> </span>
                <span className="block sm:inline">across 365 days</span>
              </p>
            </CardHeader>
            
            <CardContent className="pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Activities */}
                <motion.div 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative mb-4">
                    <motion.div
                      className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Activity className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
                  <div className="text-4xl font-black text-primary mb-2">276</div>
                  <div className="text-sm font-bold tracking-wide text-muted-foreground">ACTIVITIES</div>
                  <div className="text-xs text-muted-foreground mt-1">23 per month avg</div>
                </motion.div>

                {/* Distance */}
                <motion.div 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative mb-4">
                    <motion.div
                      className="w-20 h-20 mx-auto bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                      animate={{ y: [0, -5, 0, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Target className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
                  <div className="text-4xl font-black text-accent mb-2">1,697</div>
                  <div className="text-sm font-bold tracking-wide text-muted-foreground">MILES</div>
                  <div className="text-xs text-muted-foreground mt-1">4.6 miles daily avg</div>
                </motion.div>

                {/* Time */}
                <motion.div 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative mb-4">
                    <motion.div
                      className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <Timer className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
                  <div className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">269</div>
                  <div className="text-sm font-bold tracking-wide text-muted-foreground">HOURS</div>
                  <div className="text-xs text-muted-foreground mt-1">44 min daily avg</div>
                </motion.div>

                {/* Elevation */}
                <motion.div 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative mb-4">
                    <motion.div
                      className="w-20 h-20 mx-auto bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Trophy className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
                  <div className="text-4xl font-black text-accent mb-2">39.4K</div>
                  <div className="text-sm font-bold tracking-wide text-muted-foreground">ELEVATION FT</div>
                  <div className="text-xs text-muted-foreground mt-1">7.5 Empire State Buildings</div>
                </motion.div>

              </div>
              
              {/* Bottom accent */}
              <motion.div
                className="mt-8 h-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}