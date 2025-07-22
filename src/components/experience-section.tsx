'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "HubSpot",
    position: "Senior Software Engineer I, Infrastructure Security",
    location: "Cambridge, MA",
    duration: "Nov 2023 - Present",
    description: "Engineering security automation and vulnerability management systems at scale.",
    technologies: ["Java", "Python", "AWS", "Brinqa", "Puppet", "Docker"],
    achievements: [
      "Built automation for 1.2M+ vulnerability analysis across 24K hosts",
      "Executed major migration updating 9.5K deployables",
      "Resolved 78+ high-risk vulnerabilities via infrastructure automation"
    ]
  },
  {
    company: "HubSpot",
    position: "Senior DevSecOps Engineer, Corporate Security",
    location: "Cambridge, MA", 
    duration: "Apr 2022 - Nov 2023",
    description: "Developed security pipelines and data ingestion systems for enterprise-scale monitoring.",
    technologies: ["Python", "Java", "Kafka", "Splunk", "AWS"],
    achievements: [
      "Built Chrome extension analysis pipeline for 5K+ machines",
      "Managed 1TB Splunk license data ingestion infrastructure",
      "Improved AWS security readiness from 75% to 95%"
    ]
  },
  {
    company: "HubSpot",
    position: "Security Software Engineer",
    location: "Cambridge, MA",
    duration: "Jun 2018 - Apr 2022", 
    description: "Built security microservices and automated threat detection systems.",
    technologies: ["Java", "Python", "Splunk", "GitHub API", "Microservices"],
    achievements: [
      "Established GitHub partnership for API key exposure prevention",
      "Deployed security microservices for incident response automation",
      "Created fraud detection and abuse prevention systems"
    ]
  },
  {
    company: "TripAdvisor",
    position: "Core Product Team Intern",
    location: "Needham, MA",
    duration: "Jun 2015 - Aug 2015",
    description: "Optimized product ranking algorithms for attraction booking platform.",
    technologies: ["Python", "Ranking Algorithms", "Data Analysis"],
    achievements: [
      "Developed Viator product ranking system",
      "Increased bookings by 15% through algorithm optimization",
      "Created technical documentation for future teams"
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