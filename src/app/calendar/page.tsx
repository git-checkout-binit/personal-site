'use client';

import './calendar.css';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CalendarView } from '@/components/CalendarView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Lock, Calendar as CalendarIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import calendarData from '../../../data/calendar.json';

const CALENDAR_KEY = 'binit2025'; // Hardcoded for personal use

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
  location: string;
  note: string;
  color: string;
}

export default function CalendarPage() {
  const searchParams = useSearchParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [keyInput, setKeyInput] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check URL parameter first
    const urlKey = searchParams.get('key');
    if (urlKey === CALENDAR_KEY) {
      setIsAuthenticated(true);
      return;
    }

    // Check sessionStorage for already authenticated users
    const sessionKey = sessionStorage.getItem('calendar_authenticated');
    if (sessionKey === 'true') {
      setIsAuthenticated(true);
    }
  }, [searchParams]);

  const handleKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyInput === CALENDAR_KEY) {
      setIsAuthenticated(true);
      sessionStorage.setItem('calendar_authenticated', 'true');
      setError('');
    } else {
      setError('👀 nope.');
      setKeyInput('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('calendar_authenticated');
    setKeyInput('');
    // Update URL without key parameter
    window.history.replaceState({}, '', '/calendar');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Lock className="w-10 h-10 text-primary" />
            </motion.div>
            <h1 className="text-3xl font-bold mb-2">Private Calendar</h1>
            <p className="text-muted-foreground">
              Enter the access key to view Binit's schedule
            </p>
          </div>

          <form onSubmit={handleKeySubmit} className="space-y-4">
            <div className="relative">
              <Input
                type={showKey ? 'text' : 'password'}
                placeholder="Access key..."
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                className="pr-12"
                autoFocus
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                onClick={() => setShowKey(!showKey)}
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
            
            {error && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm text-center font-medium"
              >
                {error}
              </motion.p>
            )}
            
            <Button type="submit" className="w-full">
              <CalendarIcon className="w-4 h-4 mr-2" />
              Access Calendar
            </Button>
          </form>

          <div className="mt-8 text-center text-xs text-muted-foreground">
            <p>This calendar is private and requires authentication</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                <CalendarIcon className="w-8 h-8 text-primary" />
                Binit's Calendar
              </h1>
              <p className="text-muted-foreground mt-1">
                Where I'll be and what I'm up to
              </p>
            </motion.div>
            
            <Button variant="outline" onClick={handleLogout} size="sm">
              <Lock className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Calendar Content */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CalendarView events={calendarData as CalendarEvent[]} />
        </motion.div>
      </div>
    </div>
  );
}