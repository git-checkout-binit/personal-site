# Binit Shrestha Personal Website

A modern, cinematic personal portfolio website built with Next.js 15, showcasing professional experience, creative projects, and athletic achievements.

**Live Site**: [binshr.me](https://binshr.me) (pending domain setup) | [Cloudflare Pages URL](https://personal-site.pages.dev)

## 🎬 Design Philosophy

**Cinematic Aesthetic**: Features dramatic black-and-white photography, sophisticated typography, and subtle animations that create a film-like experience.

**Color Palette**: Shifted from generic blue/green to a sophisticated cinematic neutral palette:
- **Primary**: Warm amber/gold (`oklch(0.7 0.15 80)`)
- **Accent**: Deep copper/bronze (`oklch(0.55 0.12 50)`)
- **Background**: Warm off-white/cream tones
- **Text**: Rich charcoal instead of pure black

## 🏗️ Architecture & Tech Stack

### Core Technologies
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system
- **Framer Motion** for cinematic animations
- **Shadcn/ui** component library
- **Lucide React** for icons

### Deployment
- **Hosting**: Cloudflare Pages
- **Domain**: binshr.me (pending DNS configuration)
- **Repository**: GitHub with automatic deployments
- **Build**: Static site generation (`output: 'export'`)

### Performance Considerations
⚠️ **Known Issue**: Site experiences significant lag and slow performance on mobile devices (and occasionally desktop). This is a **HIGH PRIORITY** issue to investigate and resolve in future sessions.

## 📱 Responsive Design

### Mobile Optimizations Applied
- **Hero Background**: Positioned `object-right` on mobile to show subject on right side of panoramic photo
- **Running Photo**: Positioned `object-left` on mobile to show subject on left side
- **Typography**: Responsive scaling from `text-5xl` on mobile to prevent overflow
- **Button Overlap**: Fixed "Explore Work" button z-index and spacing issues
- **Layout**: Proper mobile padding and spacing throughout

### Remaining Mobile Issues
- Performance lag (requires optimization)
- Potential image loading optimization needed

## 🎨 Sections & Features

### 1. Hero Section (`src/components/hero-section.tsx`)
**Design**: Cinematic full-screen background with dramatic B&W panoramic photo
- **Background Image**: `/images/hero-bg.jpg` (behind-the-scenes film production photo)
- **Tagline**: "BUILDER BASED IN BROOKLYN, NYC"
- **Descriptors**: ENGINEER • CREATOR • MARATHONER
- **Interactive Elements**: LinkedIn, IMDB, Strava links with hover animations
- **Effects**: Film grain, gradient overlays, corner frame elements

### 2. Experience Section (`src/components/experience-section.tsx`)
**Real Career Data**: HubSpot security roles (2018-present) and Tufts education
- **Interactive Company Links**: HubSpot → hubspot.com, TripAdvisor → tripadvisor.com, Tufts → tufts.edu
- **Company Logos**: Local logo assets with proper styling
- **Achievements**: Quantified accomplishments and technologies used
- **Animation**: Staggered card reveals with hover effects

### 3. Running Section (`src/components/running-section.tsx`)
**Athletic Achievements**: Professional race results and training data
- **Hero Photo**: `/images/running-1.jpg` (professional running photoshoot)
- **Race Results**: Real data from Marine Corps Marathon, Brooklyn Half, etc.
- **2024 Stats**: 276 activities, 1,697 miles, 269 hours, 39.4K elevation
- **Inspirational Quote**: David Goggins quote with cinematic styling

### 4. Projects Section (`src/components/projects-section.tsx`)
**Creative Portfolio**: Film production, community organizing, thought leadership
- **"Help, I'm Smiling!" (2023)**: Executive producer credit with YouTube thumbnail
- **Medford High School Reunion**: Community organizing and website development
- **Cybersecurity Podcast**: Thought leadership appearance with HubSpot CSO
- **Description**: "Creative endeavors spanning film production, community organizing, and thought leadership in cybersecurity"

### 5. Footer (`src/components/footer.tsx`)
**Minimalist**: LinkedIn-only footer per user preference

## 🖼️ Asset Management

### Image Assets (`/public/images/`)
- **hero-bg.jpg**: B&W panoramic behind-the-scenes photo (film production)
- **running-1.jpg**: Professional running photoshoot
- **reunion-website.png**: High school reunion website screenshot
- **podcast-thumbnail.png**: Cybersecurity podcast appearance thumbnail
- **Company Logos**: `/images/logos/` (hubspot.png, tripadvisor-full.png, tufts.png)

### External Images
- **Film Thumbnail**: YouTube maxres thumbnail for "Help, I'm Smiling!"

## 🎭 Animation & Interactions

### Framer Motion Features
- **Page Load Animations**: Staggered reveals with cinematic timing
- **Scroll Animations**: `whileInView` triggers for section entrances
- **Hover Effects**: Subtle transforms and color transitions
- **Film Grain**: Animated background texture for authentic film feel
- **Custom Easing**: `[0.25, 0.1, 0.25, 1]` for sophisticated motion

### Interactive Elements
- **Smooth Scrolling**: Navigation between sections
- **Button Hovers**: Scale transforms and color changes
- **Card Interactions**: Lift effects and gradient overlays
- **External Links**: Professional profile integrations

## 📋 Development History

### Key Iterations
1. **Initial Setup**: Next.js 15 with basic structure
2. **Cinematic Aesthetic**: Film-inspired design direction established
3. **Real Data Integration**: Authentic personal/professional information
4. **Photo Integration**: Multiple rounds of image optimization
5. **Color Scheme Overhaul**: Blue/green → cinematic amber/copper
6. **Mobile Optimization**: Responsive fixes for image positioning
7. **Content Refinement**: Messaging and copy improvements

### User Feedback Integration
- Hero section redesigns (multiple iterations)
- Running section photo simplification (2 photos → 1 photo)
- Footer minimization (multiple links → LinkedIn only)
- Messaging authenticity ("Executive Producer" → "CREATOR")
- Project description improvements

## 🚀 Deployment Pipeline

### Current Setup
1. **Development**: Local Next.js development server
2. **Build**: `npm run build` generates static export
3. **Git**: Push to GitHub main branch
4. **Auto-Deploy**: Cloudflare Pages deploys automatically
5. **Domain**: Pending `binshr.me` DNS configuration

### Domain Configuration (Pending)
- **Registrar**: Domain managed elsewhere, needs CNAME setup
- **CDN**: Cloudflare Pages with automatic SSL
- **Performance**: Global edge deployment

## 🔧 Configuration Files

### Key Files
- **`next.config.ts`**: Static export configuration
- **`src/app/globals.css`**: Custom color variables and cinematic effects
- **`postcss.config.mjs`**: Tailwind CSS processing
- **`eslint.config.mjs`**: Code quality rules

### CSS Custom Properties
Cinematic color system using OKLCH color space for better perceptual uniformity and professional color matching.

## ✅ Recent Accomplishments

### SEO Optimization (Completed January 2025)
- **Comprehensive Meta Tags**: Strategic keyword targeting for "Brooklyn Software Engineer", "HubSpot Security Engineer"
- **Structured Data (JSON-LD)**: Person schema with entity linking across LinkedIn, IMDB, Strava, Instagram
- **Geographic SEO**: Brooklyn/NYC local search optimization with coordinates and local business schema
- **Social Media Optimization**: Open Graph and Twitter Cards for professional sharing
- **Technical SEO**: XML sitemap, robots.txt, and crawler optimization for all major search engines

### Performance Optimization (Completed January 2025) 
- **Mobile Performance**: Hardware acceleration with `translateZ(0)` for all animated elements
- **Selective Complexity**: Removed film grain effect on mobile, simplified filters for better GPU performance
- **Animation Optimization**: Reduced scale animations from 1.05→1 to 1.02→1, faster durations for reduced motion
- **Scrolling Performance**: `-webkit-overflow-scrolling: touch` and font smoothing optimizations

### User Experience Enhancements
- **Header Logo Animation**: Scroll-triggered expansion from "binshr.me" to "binit shrestha, me" 
- **Content Accuracy**: Updated race information, marathon PRs, work experience details
- **Image Quality**: Enhanced running photo with sharpening and contrast optimization
- **Social Integration**: Added Instagram to footer alongside LinkedIn
- **Alt Text Optimization**: SEO-rich descriptions for all images with professional context

## 🎯 Strategic Roadmap - Value vs. Effort Analysis

*As your tech advisor: Focus on high-impact, low-maintenance wins that advance your career and personal brand.*

### 🚀 **HIGHEST VALUE** - Quick Wins (1-2 weeks effort)

**1. Project Portfolio Expansion** 
- **Value**: 🔥🔥🔥🔥🔥 Direct career impact, showcases expertise breadth
- **Effort**: 🔧🔧 Low-Medium (content creation, no new tech)
- **Why**: Content is king - more projects = more keyword diversity + demonstrates versatility
- **ROI**: Immediate improvement in recruiter/networking conversations

**2. Contact Form Integration**
- **Value**: 🔥🔥🔥🔥 Direct networking/opportunity pipeline 
- **Effort**: 🔧 Low (Formspree or Netlify Forms)
- **Why**: Converts website visitors into actual connections/opportunities
- **ROI**: One good connection pays for itself 10x

**3. Analytics Implementation** 
- **Value**: 🔥🔥🔥 Data-driven optimization decisions
- **Effort**: 🔧 Low (Google Analytics 4 + Search Console)
- **Why**: Understand what content resonates, which pages convert
- **ROI**: Guides future content strategy effectively

### 📈 **HIGH VALUE** - Medium Investment (3-4 weeks effort)

**4. Technical Blog Platform**
- **Value**: 🔥🔥🔥🔥🔥 Thought leadership, SEO longtail keywords, demonstrates expertise
- **Effort**: 🔧🔧🔧 Medium (MDX integration, routing, CMS)
- **Why**: "Brooklyn Software Engineer cybersecurity blog" = SEO goldmine + credibility
- **ROI**: Positions you as thought leader, generates ongoing organic traffic

**5. Case Study Deep Dives**
- **Value**: 🔥🔥🔥🔥 Shows problem-solving process, technical depth
- **Effort**: 🔧🔧 Medium (content creation + interactive elements)
- **Why**: Recruiters/hiring managers want to see thinking process, not just results
- **ROI**: Higher-quality conversations with senior roles

**6. Performance Monitoring Dashboard**
- **Value**: 🔥🔥🔥 Professional polish, prevents regression
- **Effort**: 🔧🔧 Medium (Core Web Vitals, uptime monitoring)
- **Why**: Maintains competitive advantage from recent optimizations
- **ROI**: Ensures site never becomes a liability in your personal brand

### 🎯 **MEDIUM VALUE** - Longer Term (1-2 months effort)

**7. Email Newsletter/Updates**
- **Value**: 🔥🔥🔥 Direct relationship building, stays top-of-mind
- **Effort**: 🔧🔧🔧 Medium-High (automation, content strategy, legal compliance)
- **Why**: Maintains warm connections with your network over time
- **ROI**: Long-term relationship building for career opportunities

**8. Advanced Accessibility (WCAG AA)**
- **Value**: 🔥🔥 Professional standard, shows attention to detail
- **Effort**: 🔧🔧🔧 Medium (testing, remediation, ongoing compliance)
- **Why**: Demonstrates inclusive design thinking, technical thoroughness
- **ROI**: Table stakes for senior engineering roles

### ⚠️ **AVOID - LOW ROI** or **HIGH MAINTENANCE**

**❌ Custom CMS** 
- **Why Avoid**: Over-engineering for a personal site, creates maintenance burden
- **Better Alternative**: Simple headless CMS (Sanity, ContentfulPrimary) if needed

**❌ Real-time Features** 
- **Why Avoid**: Complex infrastructure, limited value for portfolio site
- **Better Alternative**: Focus on static content that showcases expertise

**❌ Complex Interactive Demos**
- **Why Avoid**: High maintenance, potential performance regression
- **Better Alternative**: Video demos or live hosted examples

**❌ Social Features (Comments, etc.)**
- **Why Avoid**: Moderation overhead, spam management, limited engagement
- **Better Alternative**: Direct visitors to LinkedIn/professional networks

### 📊 **Success Metrics to Track**

1. **SEO Performance**: Organic traffic growth, keyword rankings for "Binit Shrestha" + professional terms
2. **Conversion Metrics**: Contact form submissions, LinkedIn connection requests from website
3. **Professional Impact**: Recruiters/opportunities citing website as discovery source
4. **Content Performance**: Blog post engagement, case study time-on-page, social shares

**Bottom Line**: Focus on content over technology. Your website should generate opportunities, not consume development time.

## 👥 Collaboration Notes

### For Future Claude Sessions
- Project follows cinematic aesthetic principles (inspiration remains confidential)
- User prefers authentic, non-corporate language ("CREATOR" vs "Builder", etc.)
- Brooklyn-based identity is central to personal brand and SEO strategy
- SEO optimization and mobile performance have been comprehensively addressed (Jan 2025)
- Focus on content expansion over technical complexity for maximum ROI
- Header logo animation and binshr.me domain concept are key branding elements

### For Other Developers
- Tailwind CSS with extensive custom properties
- Framer Motion throughout with consistent easing
- Component-based architecture with TypeScript
- Static site generation for optimal performance
- Cloudflare ecosystem integration

## 🛠️ Getting Started

### Development Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files
npm run build && npm run export
```

### Local Development
- Open [http://localhost:3000](http://localhost:3000)
- Edit components in `src/components/`
- Hot reload enabled for development

## 📞 Contact & Links

- **LinkedIn**: [binitrshrestha](https://www.linkedin.com/in/binitrshrestha)
- **Instagram**: [binitshrestharealdeal](https://www.instagram.com/binitshrestharealdeal/)
- **IMDB**: [nm15282353](https://www.imdb.com/name/nm15282353/)
- **Strava**: [64573648](https://www.strava.com/athletes/64573648)
- **GitHub**: Repository with automatic Cloudflare deployment

---

*Built with Next.js 15 and deployed on Cloudflare Pages. Designed for authentic personal branding with comprehensive SEO optimization, mobile-first performance, and a sophisticated cinematic aesthetic. Optimized for Brooklyn/NYC market visibility and professional networking.*
