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
    <section id="home" className="min-h-screen flex items-center justify-center relative grain-effect geometric-bg">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-8 rounded-full" />
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-br from-foreground via-primary to-accent bg-clip-text text-transparent leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ fontVariant: 'small-caps' }}
          >
            Binit Shrestha
          </motion.h1>

          <motion.div 
            className="text-xl md:text-3xl text-muted-foreground mb-12 leading-relaxed cinematic-border py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="space-y-2 font-light tracking-wide">
              <p>Software Engineer</p>
              <p className="text-primary">•</p>
              <p>Endurance Runner</p>
              <p className="text-accent">•</p>
              <p>NYC Based</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 text-lg px-8 py-4 h-auto font-medium"
            >
              <Github className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              GitHub
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-4 h-auto font-medium"
            >
              <Linkedin className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              LinkedIn
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-2 border-accent/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 text-lg px-8 py-4 h-auto font-medium"
            >
              <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Contact
            </Button>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToExperience}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 p-4 rounded-full bg-card/80 backdrop-blur-md border-2 border-primary/20 hover:border-primary/40 hover:bg-card transition-all duration-300 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}