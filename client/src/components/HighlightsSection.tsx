import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Cross-platform app development (Flutter, SvelteKit)',
  'Backend expertise (Golang, PostgreSQL, Redis, MQTT)',
  'Strong in real-time system design and stream handling',
  'Skilled in UI/UX and efficient code architecture',
];

export default function HighlightsSection() {
  return (
    <section id="highlights" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
          Highlights
        </h2>
        
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
