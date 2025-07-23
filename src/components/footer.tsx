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

// Custom IMDB Icon Component (Square Yellow Logo)
const IMDBIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0" y="0" width="24" height="24" rx="2" fill="#F5C518"/>
    <g fill="#000000">
      <rect x="3.5" y="6" width="1.5" height="12"/>
      <path d="M6.5 6h2.5l1.2 4.8L11.4 6H14v12h-1.5V9.5L11.2 18h-1.4L8.5 9.5V18H6.5V6z"/>
      <path d="M15.5 6h3.5c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2h-3.5V6zm1.5 1.5V16.5h2c0.3 0 0.5-0.2 0.5-0.5V8c0-0.3-0.2-0.5-0.5-0.5h-2z"/>
    </g>
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
                className="hover:text-[#0A66C2] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://www.instagram.com/binitshrestharealdeal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#C13584] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://www.strava.com/athletes/binit_shrestha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#FC4C02] transition-colors"
              >
                <StravaIcon className="w-6 h-6" />
              </a>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="/filmography" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
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