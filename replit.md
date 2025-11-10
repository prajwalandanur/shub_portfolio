# Portfolio Landing Page - Shubhanga C S

## Overview
A luxury minimal portfolio landing page featuring a pure white base with metallic gold (#D4AF37), deep black (#0B0B0B), and electric blue (#2563EB) accents. Built with React, TypeScript, and Tailwind CSS following an "Apple × Behance × Creative Agency" aesthetic.

## Design Theme
- **Primary Background**: Pure white (#FFFFFF) with 3% noise texture overlay
- **Accent Colors**:
  - **Gold (#D4AF37)**: Section dividers and strategic accents
  - **Deep Black (#0B0B0B)**: Section headings and strong contrast text
  - **Electric Blue (#2563EB)**: Interactive elements, buttons, hover states
- **Typography**: Clean, modern font hierarchy with generous spacing
- **Animation**: Slow gradient background (30-40s loops), scroll-based fade-ins, smooth transitions
- **Layout**: Center-aligned sections with generous spacing (100-150px between sections)

## Features

### Navigation
- Fixed navigation bar with responsive design
- Desktop: Horizontal menu with smooth scroll navigation
- Mobile: Hamburger menu with dropdown
- Dynamic background that appears on scroll

### Sections
1. **Hero Section**: Bold name with "Shubhanga" in deep black and "C S" in gold, animated gradient background
2. **About**: Personal introduction with contact information and social links
3. **Technical Skills**: Categorized technical skills with @iconify/react icons
   - Languages: Go, Dart, Java, C, Rust, Python, TypeScript, JavaScript
   - Frameworks: React, Flutter, Node.js, Echo
   - Version Control: Git, GitHub
   - Caching Systems: Redis, Memcached
   - Databases: MySQL, PostgreSQL, MongoDB
   - Message Brokers: MQTT, NATS
   - Queues: RabbitMQ
   - DevOps Tools: Docker, Kubernetes, GitHub Actions, Ansible
   - Cloud Platforms: AWS, Azure, GCP, DigitalOcean
   - Developer Tools & Soft Skills sections
4. **Experience**: 
   - Web Development Internship at Epicode (May 2024 – July 2024)
   - Ex Co-founder and CEO at Vithsutra Technologies (March 2024 – October 2025)
5. **Things I've Built**: 7 major projects in 2-card-per-row layout
   - VSENSE Biometric User Panel
   - Drive Routes – B2B Mobile Trading Platform
   - PayBazaar – Fintech Portal
   - EddoSwipe – Rural Fintech Integration Platform (Flagship)
   - Vithsutra RFID Telephony Application
   - CA Application
   - SKF Elixer Drier Application
6. **Highlights**: Key achievements and expertise areas
7. **Footer**: Social media links and copyright

### Interactive Elements
- Smooth scroll navigation between sections
- Scroll-triggered fade-in animations using IntersectionObserver
- Hover effects with blue glow on cards and buttons
- Animated gradient background with slow color shifts
- Fully responsive design for mobile, tablet, and desktop

## Technical Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn UI components (Button, Card, Badge)
- **Icons**: @iconify/react (simple-icons namespace)
- **Animations**: Custom CSS animations and IntersectionObserver API
- **Build Tool**: Vite
- **Backend**: Express.js (minimal, for static serving)

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx          # Fixed nav bar with mobile menu
│   │   ├── GradientBackground.tsx  # Animated gradient background
│   │   ├── HeroSection.tsx         # Main hero section
│   │   ├── AboutSection.tsx        # Personal intro
│   │   ├── SkillsSection.tsx       # Technical skills grid
│   │   ├── ExperienceSection.tsx   # Work experience
│   │   ├── ProjectsSection.tsx     # Project showcase
│   │   ├── HighlightsSection.tsx   # Key achievements
│   │   └── FooterSection.tsx       # Footer with links
│   ├── hooks/
│   │   └── useScrollAnimation.tsx  # Scroll-based animation hook
│   ├── pages/
│   │   └── Home.tsx                # Main page assembly
│   └── index.css                   # Custom styles and animations
```

## Color System
- Background: `hsl(0 0% 100%)` - Pure white
- Foreground: `hsl(0 0% 4%)` - Near black text
- Gold: `hsl(43 69% 52%)` - Metallic gold (#D4AF37)
- Deep Black: `hsl(0 0% 4%)` - Strong contrast (#0B0B0B)
- Primary (Electric Blue): `hsl(221 83% 53%)` - Interactive elements (#2563EB)
- Gray text: `hsl(0 0% 45%)` - Secondary text

## Custom Animations
- `.animate-float`: 6s floating animation for decorative elements
- `.animate-fade-in-up`: Fade in with upward motion
- `.glow-blue`: Blue glow shadow effect
- `.glow-blue-hover`: Enhanced blue glow on hover
- `.glow-gold`: Gold glow shadow effect
- `.gradient-slow-shift`: Animated gradient background (30s loop)
- **Noise texture**: 3% opacity SVG filter overlay for luxury feel

## Running the Project
```bash
npm run dev
```
Server runs on port 5000 with Vite HMR enabled.

## Contact Information
- **Name**: Shubhanga C S
- **Email**: developer.shubhangcs@gmail.com
- **Phone**: 8618245146
- **LinkedIn**: [Profile link]
- **GitHub**: [Profile link]

## Recent Changes (Nov 10, 2025)
- **Luxury Minimal Redesign**: Complete redesign to pure white base with gold/black/blue accents
- **Color Scheme Update**: Implemented gold (#D4AF37), deep black (#0B0B0B), electric blue (#2563EB)
- **Noise Texture**: Added 3% opacity noise overlay for luxury feel
- **Gradient Background**: Replaced particle system with slow CSS gradient animations (30-40s loops)
- **Icon System**: Migrated from CDN to @iconify/react for reliable icon rendering
- **Section Updates**: All section titles now use deep black with gold dividers
- **Hero Update**: Name displays as "Shubhanga" (deep black) + "C S" (gold)
- **Hover States**: Blue glow maintained for all interactive elements
- **File Cleanup**: Removed Education and Leadership sections per user request
- **Experience Reordering**: Web Dev Intern now appears before Ex Co-founder role
- **Design Philosophy**: Achieved "Apple × Behance × Creative Agency" aesthetic
