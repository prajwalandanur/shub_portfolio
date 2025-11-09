import { Card } from '@/components/ui/card';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function EducationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="education" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 md:py-32 px-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
          Education
          <div className="w-24 h-1 bg-primary mx-auto mt-4 glow-blue" />
        </h2>
        
        <Card className="p-8 glow-blue-hover transition-all duration-300" data-testid="card-education">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Bachelor of Technology in Computer Science
                </h3>
                <p className="text-lg text-gray-light mt-2">
                  Alva's Institute of Engineering and Technology
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-light">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Moodbidri, Karnataka</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-light">
                <Calendar className="h-5 w-5 text-primary" />
                <span>2021 – 2025</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
