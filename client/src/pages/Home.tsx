import Navigation from '@/components/Navigation';
import GradientBackground from '@/components/GradientBackground';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      <GradientBackground />
      
      <div className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FooterSection />
      </div>
    </div>
  );
}
