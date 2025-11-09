import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="about" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 md:py-32 px-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
    </section>
  );
}
