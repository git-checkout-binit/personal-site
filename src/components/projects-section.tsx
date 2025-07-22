'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A modern task management application with AI-powered prioritization and smart scheduling features.",
    image: "/api/placeholder/400/250",
    technologies: ["Next.js", "TypeScript", "OpenAI", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.com",
    featured: true
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Dashboard for monitoring key business metrics with real-time updates and interactive visualizations.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "D3.js", "WebSocket", "Node.js", "Redis"],
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://project2.com",
    featured: true
  },
  {
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
    image: "/api/placeholder/400/250",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://project3.com",
    featured: false
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment processing and inventory management.",
    image: "/api/placeholder/400/250",
    technologies: ["Vue.js", "Express", "MongoDB", "Stripe API"],
    githubUrl: "https://github.com/yourusername/project4",
    liveUrl: "https://project4.com",
    featured: false
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
                    <Button size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}