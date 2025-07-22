'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "Your Current Company",
    position: "Senior Software Engineer",
    location: "Remote / San Francisco, CA",
    duration: "2022 - Present",
    description: "Leading frontend development initiatives and mentoring junior developers. Built scalable React applications serving millions of users.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "GraphQL"],
    achievements: [
      "Improved application performance by 40%",
      "Led a team of 5 developers",
      "Architected microservices infrastructure"
    ]
  },
  {
    company: "Previous Company",
    position: "Software Engineer",
    location: "Boston, MA",
    duration: "2020 - 2022",
    description: "Developed full-stack web applications and contributed to product architecture decisions.",
    technologies: ["JavaScript", "Python", "Docker", "PostgreSQL", "Redis"],
    achievements: [
      "Built real-time data processing pipeline",
      "Reduced deployment time by 60%",
      "Implemented automated testing suite"
    ]
  },
  {
    company: "First Company",
    position: "Junior Developer",
    location: "New York, NY",
    duration: "2018 - 2020",
    description: "Started career focusing on frontend development and learning best practices.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Git"],
    achievements: [
      "Delivered 15+ client projects",
      "Learned modern development practices",
      "Contributed to open source projects"
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            EXPERIENCE
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Crafting digital experiences that push boundaries and solve real-world problems
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                        <div>
                          <CardTitle className="text-2xl md:text-3xl font-black tracking-tight group-hover:text-primary transition-colors duration-300">
                            {exp.position}
                          </CardTitle>
                          <p className="text-xl font-light text-muted-foreground mt-1">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 relative z-10">
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed font-light">
                    {exp.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold mb-4 text-lg tracking-wide">KEY ACHIEVEMENTS</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.1, duration: 0.5 }}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="font-medium">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <Separator className="my-6 bg-gradient-to-r from-transparent via-border to-transparent" />
                  
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, idx) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.3 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="px-3 py-1 font-medium bg-gradient-to-r from-secondary to-secondary/80 hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}