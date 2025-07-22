'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function LogoReveal() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="font-black text-xl sm:text-2xl md:text-3xl cursor-pointer select-none transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={handleClick}
      onTouchStart={() => setIsExpanded(true)}
      onTouchEnd={() => setTimeout(() => setIsExpanded(false), 2000)}
    >
      <motion.div 
        className="relative overflow-hidden"
        initial={false}
        animate={{ width: isExpanded ? "auto" : "auto" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Contracted State: binshr.me */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            >
              binshr.me
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded State: binit shrestha, me */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 whitespace-nowrap"
            >
              {/* Staggered letter reveals */}
              <span className="inline-block">
                {['b', 'i', 'n', 'i', 't'].map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: i * 0.05,
                      ease: [0.25, 0.1, 0.25, 1] 
                    }}
                    className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              
              <motion.span 
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mx-2 text-muted-foreground"
              >
                ·
              </motion.span>
              
              <span className="inline-block">
                {['s', 'h', 'r', 'e', 's', 't', 'h', 'a'].map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.4 + i * 0.04,
                      ease: [0.25, 0.1, 0.25, 1] 
                    }}
                    className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="text-muted-foreground/70 ml-1 text-lg"
              >
                , me
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}