'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CalendarView } from '@/components/CalendarView';
import { Input } from '@/components/ui/input';
import calendarData from '../../data/calendar.json';

const CALENDAR_KEY = process.env.NEXT_PUBLIC_CALENDAR_KEY;

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
  location: string;
  note: string;
  color: string;
  display?: string;
  type?: 'race' | 'volunteer';
}

function CalendarAuthContent() {
  const searchParams = useSearchParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputKey, setInputKey] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check URL parameter first
    const urlKey = searchParams.get('key');
    if (urlKey === CALENDAR_KEY) {
      setIsAuthenticated(true);
      sessionStorage.setItem('calendar_authenticated', 'true');
      return;
    }

    // Check sessionStorage for already authenticated users
    const sessionKey = sessionStorage.getItem('calendar_authenticated');
    if (sessionKey === 'true') {
      setIsAuthenticated(true);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputKey === CALENDAR_KEY) {
      setIsAuthenticated(true);
      sessionStorage.setItem('calendar_authenticated', 'true');
      setError('');
    } else {
      setError('Nice try! 😅 That\'s not it...');
      setInputKey('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          {/* Main Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
            {/* Header with emoji */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🕵️‍♂️</div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Hold up there, detective...
              </h1>
              <p className="text-xl text-purple-200 font-medium">
                So you think you really know Binit like that? 🤔
              </p>
            </div>

            {/* Funny description */}
            <div className="bg-black/20 rounded-2xl p-6 mb-6 border border-white/10">
              <p className="text-lg text-white text-center leading-relaxed">
                <span className="block text-purple-300 font-semibold">
                  What&apos;s the passcode to see his private calendar? 🗓️
                </span>
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Enter the secret code..."
                  value={inputKey}
                  onChange={(e) => setInputKey(e.target.value)}
                  className="w-full h-12 bg-white/20 border-white/40 text-white placeholder-white/80 text-lg rounded-xl backdrop-blur-sm focus:border-purple-400 focus:ring-purple-400"
                  autoFocus
                />
              </div>
              
              <button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Unlock Binit&apos;s Schedule 🔓
              </button>
              
              {error && (
                <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-3">
                  <p className="text-red-200 text-center font-medium">
                    {error}
                  </p>
                </div>
              )}
            </form>

          </div>

          {/* Decorative elements */}
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    );
  }

  const handleSignOut = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('calendar_authenticated');
    setInputKey('');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Navigation */}
      <div className="border-b border-purple-200/50 bg-gradient-to-r from-white/95 via-purple-50/30 to-pink-50/30 backdrop-blur-md sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-xl md:text-2xl font-medium text-gray-900 flex items-center space-x-2">
              <span>🗓️</span>
              <span>Binit&apos;s Calendar</span>
            </h1>
          </div>
          <div className="flex items-center space-x-1 md:space-x-3">
            <Link
              href="/"
              className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 md:px-3 py-1 rounded-lg hover:bg-gray-100 flex items-center space-x-1"
            >
              <span>←</span>
              <span className="hidden sm:inline">Back to Site</span>
              <span className="sm:hidden">Back</span>
            </Link>
            <button
              onClick={handleSignOut}
              className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 md:px-3 py-1 rounded-lg hover:bg-gray-100"
            >
              <span className="hidden sm:inline">Sign Out</span>
              <span className="sm:hidden">Exit</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Calendar Content */}
      <div className="p-6">
        <CalendarView events={calendarData as CalendarEvent[]} />
      </div>
    </div>
  );
}

export function CalendarAuth() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading calendar...</div>
      </div>
    }>
      <CalendarAuthContent />
    </Suspense>
  );
}