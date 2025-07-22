'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Linkedin, ArrowDown, Film, Activity } from 'lucide-react';

export function HeroSection() {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen hero-section relative overflow-hidden">
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
            className="w-full h-full object-cover hero-mobile-position md:object-center"
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
      <div className="relative z-10 min-h-screen flex items-center py-6 md:py-8 lg:py-0">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 pb-28 sm:pb-32 md:pb-20 lg:pb-16">
          
          {/* Left Side Content */}
          <div className="max-w-3xl hero-content">
            
            {/* Pre-title with Film Aesthetic */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="w-16 h-px bg-gradient-to-r from-white/60 to-primary/60" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/70 font-bold">
                CREATOR BASED IN BROOKLYN, NYC
              </span>
            </motion.div>

            {/* Cinematic Name Display with Letter Animation */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[0.85] mb-6 md:mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="block text-white drop-shadow-2xl">
                {/* First name animation: BIN -> BINIT */}
                {"BIN".split("").map((letter, index) => (
                  <motion.span
                    key={`first-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 0.3 }}
                  >
                    {letter}
                  </motion.span>
                ))}
                {/* Expanding letters for BINIT */}
                {"IT".split("").map((letter, index) => (
                  <motion.span
                    key={`first-expand-${index}`}
                    initial={{ opacity: 0, width: 0, display: 'inline-block' }}
                    animate={{ opacity: 1, width: 'auto' }}
                    transition={{ delay: 2.2 + index * 0.15, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-lg">
                {/* Last name animation: SHR -> SHRESTHA */}
                {"SHR".split("").map((letter, index) => (
                  <motion.span
                    key={`last-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 + index * 0.1, duration: 0.3 }}
                  >
                    {letter}
                  </motion.span>
                ))}
                {/* Expanding letters for SHRESTHA */}
                {"ESTHA".split("").map((letter, index) => (
                  <motion.span
                    key={`last-expand-${index}`}
                    initial={{ opacity: 0, width: 0, display: 'inline-block' }}
                    animate={{ opacity: 1, width: 'auto' }}
                    transition={{ delay: 2.6 + index * 0.12, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Artistic Descriptors */}
            <motion.div 
              className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 mb-6 md:mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { label: "ENGINEER", accent: "primary" },
                { label: "PROBLEM SOLVER", accent: "accent" },
                { label: "MARATHONER", accent: "white" }
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
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.15em] md:tracking-[0.2em] text-white/90">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons with Cinematic Style */}
            <motion.div
              className="flex flex-wrap gap-3 md:gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                asChild
                className="group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500 px-6 md:px-10 py-3 md:py-5 h-auto font-bold shadow-2xl hover:shadow-primary/50 border border-primary/30 text-sm md:text-base"
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
                className="group border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-accent transition-all duration-300 px-6 md:px-10 py-3 md:py-5 h-auto font-bold text-white text-sm md:text-base"
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
                className="group border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-primary transition-all duration-300 px-6 md:px-10 py-3 md:py-5 h-auto font-bold text-white text-sm md:text-base"
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
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3 group z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/60 group-hover:text-primary transition-colors duration-300 font-bold">
          EXPLORE WORK
        </span>
        <motion.div
          className="p-3 md:p-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
          animate={{ y: [0, 8, 0] }}
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