# Binit Shrestha Personal Website

A modern, cinematic personal portfolio website built with Next.js 15, showcasing professional experience, creative projects, and athletic achievements.

**Live Site**: [binshr.me](https://binshr.me) (pending domain setup) | [Cloudflare Pages URL](https://personal-site.pages.dev)

## 🎬 Design Philosophy

**A24-Inspired Cinematic Aesthetic**: The site draws inspiration from A24's visual storytelling, featuring dramatic black-and-white photography, sophisticated typography, and subtle animations that create a film-like experience.

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
2. **A24 Aesthetic**: Cinematic design direction established
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

## 📈 Performance Notes

### Current Issues ⚠️
- **Mobile Performance**: Significant lag and slow loading
- **Desktop Performance**: Occasional slow response
- **Suspected Causes**: Large image assets, complex animations, or bundle size

### Optimization Opportunities
- Image optimization (Next.js Image component integration)
- Bundle analysis and code splitting
- Animation performance profiling
- Lazy loading implementation
- Critical CSS extraction

## 🎯 Future Roadmap

### High Priority
1. **Performance Investigation**: Address mobile lag issues
2. **Domain Setup**: Complete binshr.me DNS configuration
3. **Image Optimization**: Implement Next.js Image components
4. **SEO Optimization**: Meta tags, structured data, sitemap

### Medium Priority
- **Accessibility Audit**: WCAG compliance review
- **Analytics Integration**: User behavior tracking
- **Content Management**: Easy content updates
- **Browser Testing**: Cross-browser compatibility

### Low Priority
- **Dark Mode**: Complete dark theme implementation
- **Additional Sections**: Blog, detailed case studies
- **Internationalization**: Multi-language support

## 👥 Collaboration Notes

### For Future Claude Sessions
- Project follows A24 cinematic aesthetic principles
- User prefers authentic, non-corporate language
- Brooklyn-based identity is central to messaging
- Performance issues are known and high priority
- Mobile-first responsive design is critical

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
- **IMDB**: [nm15282353](https://www.imdb.com/name/nm15282353/)
- **Strava**: [64573648](https://www.strava.com/athletes/64573648)
- **GitHub**: Repository with automatic Cloudflare deployment

---

*Built with Next.js 15 and deployed on Cloudflare Pages. Designed for authentic personal branding with a cinematic aesthetic inspired by A24's visual storytelling approach.*
