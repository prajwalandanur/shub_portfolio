import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import LeadershipSection from '@/components/LeadershipSection';
import HighlightsSection from '@/components/HighlightsSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleBackground />
      
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <LeadershipSection />
        <HighlightsSection />
        <FooterSection />
      </div>
    </div>
  );
}
