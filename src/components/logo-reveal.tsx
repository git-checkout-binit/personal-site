'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function LogoReveal() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [touchTimeout, setTouchTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTouchStart = () => {
    setIsExpanded(true);
    if (touchTimeout) clearTimeout(touchTimeout);
    const timeout = setTimeout(() => setIsExpanded(false), 2500);
    setTouchTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (touchTimeout) clearTimeout(touchTimeout);
    };
  }, [touchTimeout]);

  return (
    <div 
      className="font-black text-xl sm:text-2xl md:text-3xl cursor-pointer select-none transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
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
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="whitespace-nowrap"
            >
              {/* Simple reveal without complex animations for stability */}
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
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            >
              binshr.me
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}