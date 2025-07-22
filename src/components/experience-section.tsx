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
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building impactful software solutions across different industries
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {exp.position}
                      </CardTitle>
                      <p className="text-lg font-semibold text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <Separator className="my-4" />
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
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