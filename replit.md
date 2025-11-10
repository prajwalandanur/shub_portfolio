# Portfolio Landing Page - Shubhanga C S

## Overview
A modern, tech-driven portfolio landing page featuring a dark theme with vivid blue accents. Built with React, TypeScript, and Tailwind CSS following a black and blue color scheme inspired by modern digital agency aesthetics.

## Design Theme
- **Primary Background**: Deep matte black (#0A0A0A)
- **Accent Color**: Vivid blue (#007BFF)
- **Typography**: Poppins/Inter fonts with bold hierarchy
- **Animation**: Floating blue particles, scroll-based fade-ins, smooth transitions
- **Layout**: Center-aligned sections with generous spacing (100-150px between sections)

## Features

### Navigation
- Fixed navigation bar with responsive design
- Desktop: Horizontal menu with smooth scroll navigation
- Mobile: Hamburger menu with dropdown
- Dynamic background that appears on scroll

### Sections
1. **Hero Section**: Bold "Our Work. Your Way." typography with animated particle background
2. **About**: Personal introduction with contact information and social links
3. **Education**: B.Tech Computer Science details from Alva's Institute
4. **Technical Skills**: Categorized technical skills with Simple Icons logos
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
5. **Experience**: 
   - Ex Co-founder and CEO at Vithsutra Technologies (March 2024 – October 2025)
   - Web Development Internship at Epicode (May 2024 – July 2024)
6. **Things I've Built**: 7 major projects in 2-card-per-row layout
   - VSENSE Biometric User Panel
   - Drive Routes – B2B Mobile Trading Platform
   - PayBazaar – Fintech Portal
   - EddoSwipe – Rural Fintech Integration Platform (Flagship)
   - Vithsutra RFID Telephony Application
   - CA Application
   - SKF Elixer Drier Application
7. **Leadership**: Edwin's Lab Open Source coordinator role
8. **Highlights**: Key achievements and expertise areas
9. **Footer**: Social media links and copyright

### Interactive Elements
- Smooth scroll navigation between sections
- Scroll-triggered fade-in animations using IntersectionObserver
- Hover effects with blue glow on cards and buttons
- Animated floating particle background
- Fully responsive design for mobile, tablet, and desktop

## Technical Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn UI components (Button, Card, Badge)
- **Animations**: Custom CSS animations and IntersectionObserver API
- **Build Tool**: Vite
- **Backend**: Express.js (minimal, for static serving)

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx          # Fixed nav bar with mobile menu
│   │   ├── ParticleBackground.tsx  # Animated blue particles
│   │   ├── HeroSection.tsx         # Main hero section
│   │   ├── AboutSection.tsx        # Personal intro
│   │   ├── EducationSection.tsx    # Education details
│   │   ├── SkillsSection.tsx       # Technical skills grid
│   │   ├── ExperienceSection.tsx   # Work experience
│   │   ├── ProjectsSection.tsx     # Project showcase
│   │   ├── LeadershipSection.tsx   # Leadership role
│   │   ├── HighlightsSection.tsx   # Key achievements
│   │   └── FooterSection.tsx       # Footer with links
│   ├── hooks/
│   │   └── useScrollAnimation.tsx  # Scroll-based animation hook
│   ├── pages/
│   │   └── Home.tsx                # Main page assembly
│   └── index.css                   # Custom styles and animations
```

## Color System
- Background: `hsl(0 0% 4%)` - Deep black
- Foreground: `hsl(0 0% 98%)` - White text
- Primary: `hsl(211 100% 50%)` - Vivid blue (#007BFF)
- Gray text: `#B3B3B3` - Light gray for secondary text

## Custom Animations
- `.animate-float`: 6s floating animation for decorative elements
- `.animate-fade-in-up`: Fade in with upward motion
- `.glow-blue`: Blue glow shadow effect
- `.glow-blue-hover`: Enhanced blue glow on hover
- `.gradient-radial-blue`: Radial blue gradient background

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

## Recent Changes (Nov 9, 2025)
- Created complete portfolio design with all sections
- Implemented navigation system with smooth scrolling
- Added scroll-based fade-in animations for sections
- Built responsive mobile menu
- Added floating particle background animation
- Reorganized Skills Section with categorized subsections (Languages, Frameworks, Databases, etc.)
- Integrated Simple Icons CDN with original brand colors for all technology logos
- Updated Projects Section to "Things I've Built" with 7 new projects
- Removed timeline/dates from projects section
- Maintained 2-card-per-row layout for projects
- Added data-testid attributes for all interactive elements
