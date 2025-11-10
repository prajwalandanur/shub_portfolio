import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Layers, 
  Sparkles, 
  Video, 
  Rocket, 
  Cloud, 
  Network 
} from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    icon: Code,
    description: 'Modern, responsive web applications'
  },
  {
    title: 'App Development',
    icon: Smartphone,
    description: 'Native and cross-platform mobile apps'
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    description: 'Beautiful, intuitive user experiences'
  },
  {
    title: 'Full-Stack Product Development',
    icon: Layers,
    description: 'End-to-end product solutions'
  },
  {
    title: 'Branding & Visual Identity',
    icon: Sparkles,
    description: 'Memorable brand experiences'
  },
  {
    title: 'Content Creation',
    icon: Video,
    description: 'Engaging visual content'
  },
  {
    title: 'Startup & Product Consulting',
    icon: Rocket,
    description: 'Strategic guidance for growth'
  },
  {
    title: 'DevOps & Deployment',
    icon: Cloud,
    description: 'Automated CI/CD pipelines'
  },
  {
    title: 'System Architecture',
    icon: Network,
    description: 'Scalable infrastructure design'
  }
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="services" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 md:py-32 px-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-deep-black text-center mb-4">
          Services Offered
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-16 glow-gold" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-lg p-8 shadow-lg hover-elevate transition-all duration-300 hover:shadow-xl"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
                data-testid={`service-card-${index}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-16 h-16 mb-6 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: '#4169e1',
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-deep-black mb-3 font-sans">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 91, 255, 0.05) 0%, rgba(10, 10, 10, 0.05) 100%)',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
