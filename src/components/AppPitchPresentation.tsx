'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function AppPitchPresentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Navigation */}
      <div className="border-b border-slate-200/50 bg-white/95 backdrop-blur-md sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-medium text-gray-900 flex items-center space-x-2">
              <span>🗺️</span>
              <span>IMY - Private Travel Calendar</span>
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
        {/* Marketing Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>🚀</span>
              <span>App Concept & Business Pitch</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Share Your Journey<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Way
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A privacy-focused travel calendar that lets you share your location and plans 
              with close friends—without oversharing with the world.
            </p>
          </div>

          {/* Problem Statement */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="bg-red-100 rounded-lg p-3">
                <span className="text-2xl">❗</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Traveling and want close friends or family to know where you are—but not the whole world?</strong> 
                  Current calendar and social sharing solutions are either too public, complicated, or invasive.
                </p>
              </div>
            </div>
          </div>

          {/* Value Proposition Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Target Audience</h3>
              <p className="text-gray-700 leading-relaxed">
                Privacy-conscious travelers, frequent movers, and anyone who wants a simple, 
                beautiful way to securely share their location with an invite-only circle. 
                Perfect for professionals on the move, expats, event-hoppers, or privacy-minded sharers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="bg-purple-100 rounded-lg p-3 w-fit mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Unique Value Proposition</h3>
              <p className="text-gray-700 leading-relaxed">
                Share <em>only</em> with who you want, when you want. Build a private, elegant 
                travel calendar and share real-time and upcoming locations with up to 10 selected 
                people via secure, personal invite links—no downloads, no registrations for friends.
              </p>
            </div>
          </div>

          {/* Competitive Advantages */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Competitive Advantages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-lg p-4 w-fit mx-auto mb-3">
                  <span className="text-2xl">🔐</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Granular Privacy</h4>
                <p className="text-gray-600 text-sm">No "friends of friends", no public feeds—just your chosen ten</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-lg p-4 w-fit mx-auto mb-3">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Effortless Sharing</h4>
                <p className="text-gray-600 text-sm">Works via SMS, WhatsApp, or iMessage with clean mobile web design</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 rounded-lg p-4 w-fit mx-auto mb-3">
                  <span className="text-2xl">🎫</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Token-Based Control</h4>
                <p className="text-gray-600 text-sm">Control who sees your plans and revoke access anytime</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-lg p-4 w-fit mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Minimal Setup</h4>
                <p className="text-gray-600 text-sm">No registration needed for viewers, no social network required</p>
              </div>
              
              <div className="text-center">
                <div className="bg-pink-100 rounded-lg p-4 w-fit mx-auto mb-3">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Admin Analytics</h4>
                <p className="text-gray-600 text-sm">See when and how often your private page is viewed</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-100 rounded-lg p-4 w-fit mx-auto mb-3">
                  <span className="text-2xl">🌍</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Geo-Features</h4>
                <p className="text-gray-600 text-sm">Optional location tracking for added context and fun</p>
              </div>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Intended Impact</h3>
            <p className="text-xl font-medium mb-2">Reclaim privacy, while staying in touch with those who matter.</p>
            <p className="text-blue-100 leading-relaxed">
              Whether it's family wanting to know you're safe, friends finding you on the road, 
              or simply coordinating events, this app puts sharing back in <em>your</em> hands—private, 
              secure, and beautifully simple.
            </p>
          </div>
        </motion.section>

        {/* Technical Specification Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-200 pt-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>⚙️</span>
              <span>Technical Specification & Engineering Analysis</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">MVP Technical Architecture</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive technical breakdown with engineering insights and implementation recommendations.
            </p>
          </div>

          {/* User Roles */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">User Roles & Core Features</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-blue-200 rounded-xl p-6 bg-blue-50/50">
                <h4 className="text-xl font-semibold text-blue-900 mb-4 flex items-center space-x-2">
                  <span>👤</span>
                  <span>Admin User (Calendar Owner)</span>
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Registers account (username, password)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Sets homebase (default location)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Manages up to 10 events/trips (CRUD operations)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Generates up to 10 shareable access tokens</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Views analytics (lifetime views, 7-day stats, timestamps)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Can revoke tokens for access control</span>
                  </li>
                </ul>
              </div>

              <div className="border border-green-200 rounded-xl p-6 bg-green-50/50">
                <h4 className="text-xl font-semibold text-green-900 mb-4 flex items-center space-x-2">
                  <span>👥</span>
                  <span>Viewer User (Token Holder)</span>
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Accesses special link with token</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Views current location and future events</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>No registration required</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Read-only access with mobile optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Architecture */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Models & Database Architecture</h3>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Entity Relationship Overview</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-blue-900 mb-2">AdminUser</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• id (PK)</li>
                    <li>• username</li>
                    <li>• hashed_password</li>
                    <li>• homebase</li>
                    <li>• created_at</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-green-900 mb-2">Event</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• id (PK)</li>
                    <li>• admin_user_id (FK)</li>
                    <li>• location</li>
                    <li>• start_date</li>
                    <li>• end_date</li>
                    <li>• description</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-purple-900 mb-2">Token</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• id (PK)</li>
                    <li>• admin_user_id (FK)</li>
                    <li>• token_string</li>
                    <li>• created_at</li>
                    <li>• revoked</li>
                    <li>• last_viewed</li>
                    <li>• view_count</li>
                    <li>• view_count_7d</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-orange-900 mb-2">TokenAudit</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• id (PK)</li>
                    <li>• token_id (FK)</li>
                    <li>• timestamp</li>
                    <li>• viewer_ip</li>
                    <li>• geo_location</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">Optional for MVP</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">🔧 Engineering Analysis</h4>
              <div className="space-y-3 text-gray-700">
                <p><strong>Database Choice:</strong> PostgreSQL recommended over SQLite for production due to better concurrent access handling and JSON column support for flexible event metadata.</p>
                <p><strong>Indexing Strategy:</strong> Critical indexes on <code className="bg-white px-2 py-1 rounded text-sm">token_string</code>, <code className="bg-white px-2 py-1 rounded text-sm">admin_user_id</code>, and <code className="bg-white px-2 py-1 rounded text-sm">start_date</code> for fast lookups.</p>
                <p><strong>Data Validation:</strong> Enforce 10-item limits at both application and database constraint levels to prevent data corruption.</p>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Mobile Architecture & Technology Stack</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-react-blue rounded-xl p-6 bg-blue-50/30">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Frontend</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span><strong>React</strong> with responsive design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span><strong>TailwindCSS</strong> for styling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span><strong>PWA support</strong> for mobile</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span><strong>Open Graph</strong> meta tags</span>
                  </li>
                </ul>
              </div>

              <div className="border border-green-400 rounded-xl p-6 bg-green-50/30">
                <h4 className="text-xl font-semibold text-green-900 mb-4">Backend</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span><strong>Python (FastAPI)</strong> preferred</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span><strong>RESTful API</strong> design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span><strong>JWT authentication</strong></span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Alternative: <strong>Java Spring Boot</strong></span>
                  </li>
                </ul>
              </div>

              <div className="border border-purple-400 rounded-xl p-6 bg-purple-50/30">
                <h4 className="text-xl font-semibold text-purple-900 mb-4">Hosting</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span><strong>Frontend:</strong> Vercel/Netlify</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span><strong>Backend:</strong> Render/Railway</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span><strong>Database:</strong> Supabase/Railway</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span><strong>Analytics:</strong> PostHog</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-orange-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-orange-900 mb-3">🔧 Engineering Analysis</h4>
              <div className="space-y-3 text-gray-700">
                <p><strong>FastAPI Choice:</strong> Excellent for MVP with automatic OpenAPI docs, async support, and fast development cycles. Python ecosystem provides rich libraries for auth, validation, and testing.</p>
                <p><strong>PWA Strategy:</strong> Critical for mobile adoption—enables "Add to Home Screen" and offline caching. Consider service worker for basic offline functionality.</p>
                <p><strong>Deployment Concerns:</strong> Railway/Render offer zero-config deployments but consider Docker containers for consistency across environments.</p>
              </div>
            </div>
          </div>

          {/* Security & Privacy */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Security & Privacy Considerations</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-red-900 mb-4 flex items-center space-x-2">
                  <span>🔐</span>
                  <span>Security Measures</span>
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Bcrypt password hashing with salt rounds ≥12</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Cryptographically secure token generation (32+ bytes)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>JWT with short expiration times and refresh tokens</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>HTTPS enforcement with HSTS headers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Rate limiting on auth and token endpoints</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center space-x-2">
                  <span>🛡️</span>
                  <span>Privacy Measures</span>
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>No user PII shared publicly</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Token access tracking with consent</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Optional GeoIP with privacy disclosure</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Data minimization principles</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>User data deletion on account closure</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-red-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-red-900 mb-3">⚠️ Security Engineering Notes</h4>
              <div className="space-y-3 text-gray-700">
                <p><strong>Token Security:</strong> Use <code className="bg-white px-2 py-1 rounded text-sm">secrets.token_urlsafe(32)</code> for token generation. Consider time-based token expiry for enhanced security.</p>
                <p><strong>Authentication Flow:</strong> Implement proper session management with secure httpOnly cookies for admin sessions. Avoid storing sensitive data in localStorage.</p>
                <p><strong>API Security:</strong> Implement CORS properly, validate all inputs, and use parameterized queries to prevent SQL injection.</p>
              </div>
            </div>
          </div>

          {/* Scalability */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Future Scalability & Technical Roadmap</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-400 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Performance Optimization</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Redis caching for frequently accessed calendars</li>
                  <li>• CDN deployment for static assets</li>
                  <li>• Database connection pooling and query optimization</li>
                  <li>• Rate limiting with sliding window counters</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-400 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Infrastructure Scaling</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Containerization with Docker and Kubernetes</li>
                  <li>• Auto-scaling groups for traffic spikes</li>
                  <li>• Load balancing with health checks</li>
                  <li>• Database read replicas for geographic distribution</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Feature Extensions</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Native mobile apps with React Native/Capacitor</li>
                  <li>• Account recovery workflows and 2FA</li>
                  <li>• Advanced analytics dashboard with charts</li>
                  <li>• Microservices architecture for complex features</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">🏗️ Architecture Evolution Strategy</h4>
              <p className="text-gray-700 leading-relaxed">
                Start with a monolithic FastAPI application for rapid MVP development, then gradually extract services 
                as usage patterns emerge. Consider event-driven architecture for real-time features and implement 
                proper monitoring with OpenTelemetry for observability at scale.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}