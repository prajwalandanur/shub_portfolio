import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const handleContact = () => {
    console.log('Contact button clicked');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 gradient-radial-blue pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
          <span className="text-primary">Our</span>{' '}
          <span className="text-foreground">Work.</span>
          <br />
          <span className="text-foreground">Your</span>{' '}
          <span className="text-primary">Way.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-light max-w-2xl mx-auto">
          I turn ideas into impactful digital experiences.
        </p>
        
        <p className="text-2xl md:text-3xl text-primary italic font-medium">
          Design. Build. Scale.
        </p>
        
        <div className="pt-6">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 glow-blue-hover"
            onClick={handleContact}
            data-testid="button-get-in-touch"
          >
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
