'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 bg-background border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Contact Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Let&apos;s Connect</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Always interested in discussing new opportunities, 
              collaboration, or just chatting about technology and running.
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <Button size="lg" className="group">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get in Touch
              </Button>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Social Links & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using Next.js & TypeScript</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 Binit Shrestha. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}