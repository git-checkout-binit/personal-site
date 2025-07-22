'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LogoReveal } from '@/components/logo-reveal';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Running', href: '#running' },
  { name: 'Projects', href: '#projects' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && 
            scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="mobile-nav-sticky bg-card/95 backdrop-blur-xl border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <LogoReveal />
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <Button
                  variant={activeSection === item.href.slice(1) ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative font-medium transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground'
                      : 'hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}