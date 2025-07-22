'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Linkedin, ArrowDown, Film, Activity } from 'lucide-react';

export function HeroSection() {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        {/* Black and white background image */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src="/images/hero-bg.jpg"
            alt="Behind the scenes"
            className="w-full h-full object-cover"
            style={{
              filter: 'contrast(1.1) brightness(0.65) saturate(0.1)'
            }}
          />
        </motion.div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        
        {/* Film grain effect */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.15) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}
          animate={{ 
            backgroundPosition: ['0px 0px', '20px 20px'],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-8 md:px-16">
          
          {/* Left Side Content */}
          <div className="max-w-3xl">
            
            {/* Pre-title with Film Aesthetic */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="w-16 h-px bg-gradient-to-r from-white/60 to-primary/60" />
              <span className="text-sm uppercase tracking-[0.4em] text-white/70 font-bold">
                EXECUTIVE PRODUCER • ENGINEER • MARATHONER
              </span>
            </motion.div>

            {/* Cinematic Name Display */}
            <motion.h1 
              className="text-7xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-12"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="block text-white drop-shadow-2xl">
                BINIT
              </span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-lg">
                SHRESTHA
              </span>
            </motion.h1>

            {/* Artistic Descriptors */}
            <motion.div 
              className="space-y-6 mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { label: "SECURITY ARCHITECT", accent: "primary" },
                { label: "CREATIVE PRODUCER", accent: "accent" },
                { label: "ENDURANCE ATHLETE", accent: "white" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.15, duration: 0.6 }}
                >
                  <motion.div 
                    className={`w-1 h-12 ${
                      item.accent === 'primary' ? 'bg-primary' :
                      item.accent === 'accent' ? 'bg-accent' : 'bg-white'
                    } shadow-lg`}
                    animate={{ scaleY: [1, 1.3, 1] }}
                    transition={{ 
                      delay: 1.5 + index * 0.3, 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="text-xl md:text-2xl font-light tracking-[0.2em] text-white/90">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons with Cinematic Style */}
            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                asChild
                className="group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500 px-10 py-5 h-auto font-bold shadow-2xl hover:shadow-primary/50 border border-primary/30"
              >
                <a 
                  href="https://www.linkedin.com/in/binitrshrestha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  CONNECT
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="group border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-accent transition-all duration-300 px-10 py-5 h-auto font-bold text-white"
              >
                <a 
                  href="https://www.imdb.com/name/nm15282353/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Film className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  FILMOGRAPHY
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="group border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-primary transition-all duration-300 px-10 py-5 h-auto font-bold text-white"
              >
                <a 
                  href="https://www.strava.com/athletes/64573648" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Activity className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  TRAINING
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cinematic Scroll Indicator */}
      <motion.button
        onClick={scrollToExperience}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 group"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-white/60 group-hover:text-primary transition-colors duration-300 font-bold">
          EXPLORE WORK
        </span>
        <motion.div
          className="p-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-white/80 group-hover:text-primary transition-colors duration-300" />
        </motion.div>
      </motion.button>

      {/* Film-style corner elements */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-white/30" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-white/30" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-white/30" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-white/30" />
    </section>
  );
}