'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "NFL Playoff Fantasy Draft Platform",
    description: "Building a head-to-head fantasy football platform specifically for NFL playoffs. After searching extensively, nothing like this exists on the market - most fantasy platforms end before playoffs begin. Moving beyond complex spreadsheet formulas to create a dynamic draft system where friends compete with real-time player performance data and leaderboards.",
    image: "/images/nfl-fantasy-pff.webp",
    technologies: ["React", "Node.js", "Sports Data API", "Real-time Updates", "PostgreSQL"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
    status: "Work in Progress",
    comingSoon: true
  },
  {
    title: "Help, I'm Smiling! (Executive Producer)",
    description: "Executive producer for this 15-minute 2023 short film. After captivating the nation with a viral dance-challenge, a millennial daughter takes advantage of her aging father to seek out clout and internet stardom.",
    image: "https://i.ytimg.com/vi/QrTM3MWyRMQ/maxresdefault.jpg",
    technologies: ["Film Production", "Executive Producer", "Short Film", "Comedy"],
    githubUrl: null,
    liveUrl: "https://www.youtube.com/watch?v=QrTM3MWyRMQ",
    featured: true
  },
  {
    title: "Medford High School Class of 2014 Reunion",
    description: "Organized my high school reunion, created this site using Netlify, Cloudflare, and simple JS/HTML. Helped organize the venue, used Mailchimp to collect and send messaging, did it all for free and made +$10k in profit for the venue for the night.",
    image: "/images/reunion-website.png",
    technologies: ["HTML", "JavaScript", "Netlify", "Cloudflare", "Mailchimp"],
    githubUrl: null,
    liveUrl: "https://mhs2014reunion.com/",
    featured: true
  },
  {
    title: "Cyber Security Business Podcast - Episode 4",
    description: "Featured as a guest in 2019 discussing the security environment through the eyes of emerging security professionals alongside Chris McLellan (CSO, HubSpot).",
    image: "/images/podcast-thumbnail.png",
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
            Creative endeavors spanning film production, community organizing, and thought leadership in cybersecurity
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
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover professional-image"
                    style={{
                      filter: 'brightness(1.05) contrast(1.08) saturate(1.05)'
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.status && (
                      <Badge variant="secondary" className="ml-2 bg-accent/20 text-accent border-accent/30">
                        {project.status}
                      </Badge>
                    )}
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
                    {project.comingSoon ? (
                      <Button size="sm" variant="outline" className="w-full" disabled>
                        <div className="w-4 h-4 mr-2 rounded-full bg-accent animate-pulse" />
                        Coming Soon
                      </Button>
                    ) : (
                      <>
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
                      </>
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