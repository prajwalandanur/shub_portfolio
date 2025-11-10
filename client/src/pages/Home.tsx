import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import HighlightsSection from '@/components/HighlightsSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      <ParticleBackground />
      
      <div className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <HighlightsSection />
        <FooterSection />
      </div>
    </div>
  );
}
