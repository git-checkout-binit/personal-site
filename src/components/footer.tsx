'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram } from 'lucide-react';

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
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2025 Binit Shrestha. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}