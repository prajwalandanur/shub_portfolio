import { CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const highlights = [
  'Cross-platform app development (Flutter, SvelteKit)',
  'Backend expertise (Golang, PostgreSQL, Redis, MQTT)',
  'Strong in real-time system design and stream handling',
  'Skilled in UI/UX and efficient code architecture',
];

export default function HighlightsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="highlights" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 md:py-32 px-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-deep-black text-center mb-4">
          Highlights
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-16 glow-gold" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="flex gap-4 items-start p-6 rounded-md bg-card/50 hover-elevate transition-all duration-300"
              data-testid={`highlight-${index}`}
            >
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-light">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
