import { Card } from '@/components/ui/card';
import { Users, Award } from 'lucide-react';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
          Leadership
        </h2>
        
        <Card className="p-8 glow-blue-hover transition-all duration-300" data-testid="card-leadership">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Coordinator – Edwin's Lab Open Source
                </h3>
                <p className="text-lg text-gray-light mt-1">2023 – 2024</p>
              </div>
            </div>
            
            <ul className="space-y-3 pt-4">
              <li className="flex gap-3 text-gray-light">
                <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Built and led a strong open-source team.</span>
              </li>
              <li className="flex gap-3 text-gray-light">
                <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Conducted workshops, training sessions, and guest talks.</span>
              </li>
              <li className="flex gap-3 text-gray-light">
                <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Organized multiple events around emerging technologies.</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
}
