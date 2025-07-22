'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export function HeroSection() {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <Badge variant="outline" className="mb-4">
              Available for opportunities
            </Badge>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Binit Shrestha
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Software Engineer, Runner, Problem Solver
            <br />
            Building exceptional digital experiences
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button size="lg" className="group">
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              GitHub
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Contact
            </Button>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToExperience}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-background/20 backdrop-blur-sm border hover:bg-background/40 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
}