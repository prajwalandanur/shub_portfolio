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
    <section id="home" className="relative min-h-screen flex items-center px-6 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Name and Description */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-deep-black">Shubhanga</span>{' '}
              <span className="text-gold">C S</span>
            </h1>
            
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-primary/20 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-gold"></div>
                <span className="text-sm font-semibold text-deep-black">Developer</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-primary/20 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-gold"></div>
                <span className="text-sm font-semibold text-deep-black">Designer</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-primary/20 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-gold"></div>
                <span className="text-sm font-semibold text-deep-black">Mentor</span>
              </div>
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

          {/* Right side - Photo placeholder */}
          <div className="flex items-center justify-center">
            <div 
              className="w-full max-w-md aspect-square rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center"
              data-testid="photo-placeholder"
            >
              <p className="text-gray-light text-center px-6">
                Photo placeholder
                <br />
                <span className="text-sm">(Add your photo here later)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
