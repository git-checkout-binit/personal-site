'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function LogoReveal() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Expand when user has scrolled down at least 50px (reduced for mobile)
      const scrolled = window.scrollY > 50;
      console.log('Scroll position:', window.scrollY, 'Expanded:', scrolled); // Debug log
      setIsExpanded(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="font-black text-xl sm:text-2xl md:text-3xl cursor-pointer select-none transition-transform duration-300 hover:scale-105"
      onClick={handleClick}
    >
      <div className="relative">
        {/* Reserve space to prevent layout shift */}
        <div className="opacity-0 pointer-events-none whitespace-nowrap">
          binit shrestha, me
        </div>
        
        {/* Actual content */}
        <div className="absolute inset-0 flex items-center">
          {isExpanded ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="whitespace-nowrap"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                binit
              </span>
              <span className="mx-2 text-muted-foreground">·</span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                shrestha
              </span>
              <span className="text-muted-foreground/70 ml-1">
                , me
              </span>
            </motion.div>
          ) : (
            <motion.div
              animate={{ opacity: isExpanded ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="whitespace-nowrap"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                binshr.
              </span>
              <span className="text-muted-foreground/70">
                me
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}