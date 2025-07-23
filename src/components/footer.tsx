'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
// Custom LinkedIn Icon Component (Brand Blue)
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="#0A66C2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Custom Instagram Icon Component (Brand Gradient Purple)
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#405de6" />
        <stop offset="25%" stopColor="#833ab4" />
        <stop offset="50%" stopColor="#c13584" />
        <stop offset="75%" stopColor="#e1306c" />
        <stop offset="100%" stopColor="#fd1d1d" />
      </linearGradient>
    </defs>
    <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// Custom Strava Icon Component (Brand Orange)
const StravaIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="#FC4C02"
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
                className="hover:scale-110 transition-transform"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://www.instagram.com/binitshrestharealdeal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://www.strava.com/athletes/64573648" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <StravaIcon className="w-6 h-6" />
              </a>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://www.imdb.com/name/nm15282353/" 
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
            <Link href="/calendar" className="ml-4 text-xs opacity-30 hover:opacity-100 transition-opacity">
              📅
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}