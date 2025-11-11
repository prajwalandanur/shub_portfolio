import { Card } from '@/components/ui/card';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="experience" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 md:py-32 px-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-deep-black text-center mb-4">
          Experience
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-16 glow-gold" />
        
        <div className="space-y-8">
          <Card className="p-8 border-l-4 border-l-primary glow-gold-hover transition-all duration-300" data-testid="card-experience-intern">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Briefcase className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground">
                    Web Development Intern
                  </h3>
                  <p className="text-xl text-primary font-semibold mt-1">
                    Epicode
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-gray-light">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Manipal, Karnataka</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-light">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>May 2024 – July 2024</span>
                </div>
              </div>
              
              <ul className="space-y-3 pt-4">
                <li className="flex gap-3 text-gray-light">
                  <span className="text-primary mt-1">•</span>
                  <span>Built a new CPaaS Portal using SvelteKit and Tailwind CSS.</span>
                </li>
                <li className="flex gap-3 text-gray-light">
                  <span className="text-primary mt-1">•</span>
                  <span>Designed a complete, responsive UI/UX with modern design principles.</span>
                </li>
                <li className="flex gap-3 text-gray-light">
                  <span className="text-primary mt-1">•</span>
                  <span>Collaborated on backend API integration and frontend optimization.</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-8 border-l-4 border-l-primary glow-gold-hover transition-all duration-300" data-testid="card-experience-cofounder">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Briefcase className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground">
                    Ex Co-founder and CEO
                  </h3>
                  <p className="text-xl text-primary font-semibold mt-1">
                    Vithsutra Technologies
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-gray-light">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Moodbidri, Karnataka</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-light">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>March 2024 – October 2025</span>
                </div>
              </div>
              
              <ul className="space-y-3 pt-4">
                <li className="flex gap-3 text-gray-light">
                  <span className="text-primary mt-1">•</span>
                  <span>Worked with a team of 12+ engineers on building scalable IoT and software solutions.</span>
                </li>
                <li className="flex gap-3 text-gray-light">
                  <span className="text-primary mt-1">•</span>
                  <span>Built a Flutter–Golang–Redis based biometric portal for seamless fingerprint registration.</span>
                </li>
                <li className="flex gap-3 text-gray-light">
                  <span className="text-primary mt-1">•</span>
                  <span>Developed an RFID-integrated telephony system using Go, Flutter, and MQTT.</span>
                </li>
                <li className="flex gap-3 text-gray-light">
                  <span className="text-primary mt-1">•</span>
                  <span>Led a 12+ member team, enhancing skills in strategy, innovation, and cross-functional management.</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
