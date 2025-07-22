'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Timer, Trophy, Target, Activity } from 'lucide-react';

const runningStats = [
  {
    icon: Timer,
    label: "Marathon PR",
    value: "3:23:35",
    subtitle: "Marine Corps Marathon 2024"
  },
  {
    icon: Activity,
    label: "2024 Distance",
    value: "1,697 mi",
    subtitle: "276 activities"
  },
  {
    icon: Trophy,
    label: "Half Marathon PR",
    value: "1:28:32",
    subtitle: "Brooklyn Experience"
  },
  {
    icon: Target,
    label: "Next Goal",
    value: "Sub 3:00",
    subtitle: "Chicago Marathon 2025"
  }
];

const races = [
  {
    name: "Marine Corps Marathon",
    year: "2024", 
    time: "3:23:35",
    placement: "Personal Best",
    category: "Marathon"
  },
  {
    name: "Brooklyn Experience Half",
    year: "2024",
    time: "1:28:32", 
    placement: "PR",
    category: "Half Marathon"
  },
  {
    name: "5th Ave Mile",
    year: "2024",
    time: "5:39",
    placement: "Mile PR",
    category: "1 Mile"
  },
  {
    name: "5K Personal Best",
    year: "2024",
    time: "20:14",
    placement: "5K PR",
    category: "5K"
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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about endurance running and constantly pushing personal limits
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
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
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
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 2024 Strava Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-card via-card/90 to-card/70 border-2 border-primary/20">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                2024 Strava Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-black text-primary mb-1">276</div>
                  <div className="text-sm text-muted-foreground">Activities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-accent mb-1">1,697 mi</div>
                  <div className="text-sm text-muted-foreground">Distance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-primary mb-1">268h 43m</div>
                  <div className="text-sm text-muted-foreground">Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-accent mb-1">39,442 ft</div>
                  <div className="text-sm text-muted-foreground">Elevation</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Training Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Training Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                &quot;Consistency over intensity. Chasing the sub-3:00 marathon through disciplined training 
                and smart recovery. Running teaches patience, resilience, and the power of incremental progress - 
                lessons that translate directly to solving complex problems in security engineering.&quot;
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}