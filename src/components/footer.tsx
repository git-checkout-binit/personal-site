'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram } from 'lucide-react';

// Custom Strava Icon Component
const StravaIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.172"/>
  </svg>
);

// Custom IMDB Icon Component  
const IMDBIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.017 0H1.983C.888 0 0 .888 0 1.983v20.034C0 23.112.888 24 1.983 24h20.034c1.095 0 1.983-.888 1.983-1.983V1.983C24 .888 23.112 0 22.017 0zM4.642 18.668V5.988h2.137v12.68H4.642zm6.728 0l-1.374-5.032L8.642 18.668H6.505V5.988h2.137l1.354 4.957 1.374-4.957h2.137v12.68h-2.137zm7.851 0V5.988h2.137v12.68h-2.137z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://www.linkedin.com/in/binitrshrestha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://www.instagram.com/binitshrestharealdeal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://www.strava.com/athletes/binit_shrestha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                <StravaIcon className="w-6 h-6" />
              </a>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://www.imdb.com/name/nm_binit_shrestha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors"
              >
                <IMDBIcon className="w-6 h-6" />
              </a>
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2025 Binit Shrestha. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}