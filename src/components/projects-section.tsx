'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Medford High School Class of 2014 Reunion",
    description: "Organized my high school reunion, created this site using Netlify, Cloudflare, and simple JS/HTML. Helped organize the venue, used Mailchimp to collect and send messaging, did it all for free and made +$10k in profit for the venue for the night.",
    image: "/api/placeholder/400/250",
    technologies: ["HTML", "JavaScript", "Netlify", "Cloudflare", "Mailchimp"],
    githubUrl: null,
    liveUrl: "https://mhs2014reunion.com/",
    featured: true
  },
  {
    title: "Cyber Security Business Podcast - Episode 4",
    description: "Featured as a guest in 2019 discussing the security environment through the eyes of emerging security professionals alongside Chris McLellan (CSO, HubSpot).",
    image: "/api/placeholder/400/250",
    technologies: ["Public Speaking", "Cybersecurity", "Professional Development"],
    githubUrl: null,
    liveUrl: "https://www.klogixsecurity.com/blog/episode-4-binit-shrestha-chris-mclellan-hubspot",
    featured: true
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Some of the projects I&apos;ve worked on, showcasing different technologies and problem-solving approaches
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-lg font-medium opacity-60">
                      {project.title}
                    </span>
                  </motion.div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                      {project.featured && (
                        <Badge className="ml-2" variant="default">Featured</Badge>
                      )}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" variant="outline" className={`${project.githubUrl ? 'flex-1' : 'w-full'}`} asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {project.githubUrl ? 'Live Demo' : 'View Project'}
                        </a>
                      </Button>
                    )}
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