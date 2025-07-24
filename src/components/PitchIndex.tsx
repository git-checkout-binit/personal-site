'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Pitch {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: 'concept' | 'prototype' | 'development' | 'deployed';
  route: string;
  icon: string;
  color: string;
}

const pitches: Pitch[] = [
  {
    id: 'imy',
    title: 'IMY - Private Travel Calendar',
    description: 'A privacy-focused travel calendar app for sharing your location with close friends via secure tokens.',
    tags: ['Mobile', 'Privacy', 'Social', 'Travel', 'React', 'FastAPI'],
    status: 'concept',
    route: '/pitch/imy',
    icon: '🗺️',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'ff-playoff',
    title: 'NFL Playoff Fantasy Platform',
    description: 'The first dedicated fantasy football platform for NFL playoffs—replacing spreadsheet chaos with real-time scoring.',
    tags: ['Sports', 'Real-time', 'React', 'Node.js', 'First-to-Market'],
    status: 'development',
    route: '/pitch/ff',
    icon: '🏈',
    color: 'from-green-500 to-blue-600'
  }
];

const tagColors: Record<string, string> = {
  'Mobile': 'bg-blue-100 text-blue-800',
  'Privacy': 'bg-purple-100 text-purple-800',
  'Social': 'bg-pink-100 text-pink-800',
  'Travel': 'bg-indigo-100 text-indigo-800',
  'React': 'bg-cyan-100 text-cyan-800',
  'FastAPI': 'bg-green-100 text-green-800',
  'Sports': 'bg-orange-100 text-orange-800',
  'Gaming': 'bg-red-100 text-red-800',
  'Algorithm': 'bg-yellow-100 text-yellow-800',
  'Web App': 'bg-gray-100 text-gray-800',
  'Fantasy': 'bg-emerald-100 text-emerald-800',
  'Real-time': 'bg-red-100 text-red-800',
  'Node.js': 'bg-green-100 text-green-800',
  'First-to-Market': 'bg-yellow-100 text-yellow-800'
};

const statusColors: Record<string, string> = {
  'concept': 'bg-gray-100 text-gray-800',
  'prototype': 'bg-yellow-100 text-yellow-800',
  'development': 'bg-blue-100 text-blue-800',
  'deployed': 'bg-green-100 text-green-800'
};

export function PitchIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Header Navigation */}
      <div className="border-b border-slate-200/50 bg-white/95 backdrop-blur-md sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-medium text-gray-900 flex items-center space-x-2">
              <span>💡</span>
              <span>Project Pitches</span>
            </h1>
          </div>
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-3 py-1 rounded-lg hover:bg-gray-100 flex items-center space-x-1"
          >
            <span>←</span>
            <span>Back to Site</span>
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🚀</span>
            <span>Concept & Innovation Hub</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Project<br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Pitch Deck
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of app concepts, business pitches, and technical specifications 
            for innovative digital products and platforms.
          </p>
        </motion.div>

        {/* Pitch Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {pitches.map((pitch, index) => (
            <motion.div
              key={pitch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={pitch.route}>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  {/* Header with Gradient */}
                  <div className={`bg-gradient-to-r ${pitch.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{pitch.icon}</span>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[pitch.status]}`}>
                        {pitch.status.charAt(0).toUpperCase() + pitch.status.slice(1)}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{pitch.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {pitch.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pitch.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 rounded-md text-xs font-medium ${tagColors[tag] || 'bg-gray-100 text-gray-800'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                      <span>View Full Pitch</span>
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Portfolio Overview</h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">{pitches.length}</div>
              <div className="text-gray-600">Total Concepts</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {pitches.filter(p => p.status === 'deployed').length}
              </div>
              <div className="text-gray-600">Deployed</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {pitches.filter(p => p.status === 'development').length}
              </div>
              <div className="text-gray-600">In Development</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {new Set(pitches.flatMap(p => p.tags)).size}
              </div>
              <div className="text-gray-600">Technologies</div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            🤫 This pitch collection is private and not linked from the main site
          </p>
        </div>
      </div>
    </div>
  );
}