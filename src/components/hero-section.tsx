'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Linkedin, ArrowDown, Film, Activity } from 'lucide-react';

export function HeroSection() {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Split Layout */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Pre-title */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="w-12 h-px bg-gradient-to-r from-primary to-accent" />
              <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium">
                HubSpot Security
              </span>
            </motion.div>

            {/* Main Name */}
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="block bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                BINIT
              </span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                SHRESTHA
              </span>
            </motion.h1>

            {/* Three Descriptors - Stacked Vertically */}
            <motion.div 
              className="space-y-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {[
                { label: "Tech Guy", color: "from-primary to-primary/60" },
                { label: "Marathoner", color: "from-accent to-accent/60" },
                { label: "Builder", color: "from-foreground to-muted-foreground" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                >
                  <motion.div 
                    className={`w-2 h-8 bg-gradient-to-b ${item.color} rounded-full`}
                    animate={{ scaleY: [1, 1.2, 1] }}
                    transition={{ delay: 1.5 + index * 0.3, duration: 2, repeat: Infinity }}
                  />
                  <span className="text-2xl md:text-3xl font-light tracking-wide text-muted-foreground">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                asChild
                className="group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500 px-8 py-4 h-auto font-medium shadow-lg hover:shadow-xl"
              >
                <a 
                  href="https://www.linkedin.com/in/binitrshrestha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="group border-2 border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 px-8 py-4 h-auto font-medium"
              >
                <a 
                  href="https://www.imdb.com/name/nm15282353/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Film className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  IMDB
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="group border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 px-8 py-4 h-auto font-medium"
              >
                <a 
                  href="https://www.strava.com/athletes/64573648" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Activity className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Strava
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Barcelona Beach Photo */}
        <div className="flex items-center justify-center p-8 lg:p-16">
          <motion.div
            className="relative w-full max-w-sm"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative">
              <motion.div
                className="relative overflow-hidden rounded-3xl shadow-2xl"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 1 }}
                />
                <motion.img
                  src="/images/hero-barcelona.jpg"
                  alt="Working from Barcelona Beach"
                  className="w-full h-[500px] lg:h-[600px] object-cover professional-image"
                  style={{
                    filter: 'brightness(1.05) contrast(1.08) saturate(1.05)'
                  }}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.6 }}
                  className="absolute bottom-6 left-6 bg-gradient-to-r from-card/90 via-card/95 to-card/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-border/50 z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
                    <div>
                      <div className="text-sm font-bold text-foreground">Barcelona Beach</div>
                      <div className="text-xs text-muted-foreground font-medium">Remote Work Life</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-border/50"
              >
                <div className="text-center">
                  <div className="text-lg font-black text-accent mb-1">💻</div>
                  <div className="text-xs text-muted-foreground font-medium">DIGITAL NOMAD</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.4, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-primary/30"
              >
                <div className="text-center">
                  <div className="text-lg font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">NYC</div>
                  <div className="text-xs text-muted-foreground font-medium">HOME BASE</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToExperience}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors duration-300">
          Explore
        </span>
        <motion.div
          className="p-3 rounded-full border border-border/50 group-hover:border-primary/50 transition-all duration-300"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </motion.div>
      </motion.button>
    </section>
  );
}