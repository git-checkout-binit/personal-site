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
    subtitle: "Brooklyn Experience"
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
    value: "3:23:35",
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
    time: "3:23:35",
    placement: "1,216 / 16,168 overall",
    category: "Marathon",
    link: "https://track.rtrt.me/e/MCM-2024#/dash/RHZKA38B"
  },
  {
    name: "Brooklyn Experience Half",
    year: "2024",
    time: "1:28:32", 
    placement: "315 / 24,590 overall",
    category: "Half Marathon",
    link: "https://nycruns.com/race-results?race=nycruns-brooklyn-experience-half-marathon-2025&result=2444284"
  },
  {
    name: "5th Ave Mile",
    year: "2024",
    time: "5:39",
    placement: "Mile PR",
    category: "1 Mile"
  },
  {
    name: "Brooklyn Experience Half (5K split)",
    year: "2024",
    time: "20:14",
    placement: "5K PR",
    category: "5K",
    link: "https://nycruns.com/race-results?race=nycruns-brooklyn-experience-half-marathon-2025&result=2444284"
  }
];

export function RunningSection() {
  return (
    <section id="running" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Running Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-bold tracking-wide">
            &quot;WHEN THE ENDING IS UNKNOWN AND THE DISTANCE IS UNKNOWN THAT&apos;S WHEN YOU KNOW WHO THE FUCK YOU ARE&quot;
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2 font-medium">
            - David Goggins
          </p>
        </motion.div>

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
              <p className="text-center text-muted-foreground font-medium">
                Relentless consistency across 365 days
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
                  <div className="text-xs text-muted-foreground mt-1">11.4 per month avg</div>
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