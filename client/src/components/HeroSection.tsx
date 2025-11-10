import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import profilePhoto from '@assets/WhatsApp Image 2025-01-12 at 12.41.08 PM_1762782243694.jpeg';

export default function HeroSection() {
  const handleContact = () => {
    console.log('Contact button clicked');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Name and Description */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-deep-black">Shubhanga</span>{' '}
              <span className="text-gold">C S</span>
            </h1>
            
            <div className="flex items-center gap-3 flex-wrap text-lg md:text-xl">
              <span className="font-medium text-foreground">Developer</span>
              <span className="text-primary">•</span>
              <span className="font-medium text-foreground">Designer</span>
              <span className="text-primary">•</span>
              <span className="font-medium text-foreground">Mentor</span>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-light leading-relaxed">Designer and Developer helping brands craft impactful digital experiences that merge creativity with technology</p>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 glow-gold-hover"
                onClick={handleContact}
                data-testid="button-get-in-touch"
              >
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right side - Profile Photo */}
          <div className="flex items-center justify-center">
            <div 
              className="w-full max-w-md aspect-square rounded-lg overflow-hidden border-4 border-white shadow-2xl"
              data-testid="profile-photo"
            >
              <img 
                src={profilePhoto} 
                alt="Shubhanga C S" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
