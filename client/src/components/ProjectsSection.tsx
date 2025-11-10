import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    title: 'VSENSE Biometric User Panel',
    technologies: ['Golang', 'PostgreSQL', 'Docker', 'Postman', 'SvelteKit', 'Flutter', 'Redis'],
    highlights: [
      'Built a complete User Portal for Windows using Flutter, backed by a Golang HTTP server.',
      'Integrated USB Serial communication with ESP-32 for fingerprint registration.',
      'Implemented automatic Excel sheet generation using Go Excel libraries.',
      'Used Redis-SON for faster biometric data handling and improved user experience.'
    ]
  },
  {
    title: 'Drive Routes – B2B Mobile Trading Platform',
    technologies: ['Flutter', 'Node.js', 'Golang'],
    highlights: [
      'Built a trading platform connecting wholesalers / distributors directly to customers.',
      'Reduced dependency on middle distributors by enabling direct digital trade.',
      'Currently has 250+ active users using the platform for daily trading operations.',
      'Delivered as an easily downloadable mobile app for seamless onboarding.'
    ]
  },
  {
    title: 'PayBazaar – Fintech Portal',
    technologies: ['Go', 'React', 'PostgreSQL', 'Redis', 'Docker'],
    highlights: [
      'Built a multi-service digital portal similar to PayTM / PhonePe.',
      'Users can book flight tickets, pay electricity bills, recharge mobiles and more.',
      'Designed as a scalable web-based fintech solution using robust backend architecture.',
      'Currently used by 500+ users for daily financial transactions.'
    ]
  },
  {
    title: 'EddoSwipe – Rural Fintech Integration Platform (Flagship)',
    technologies: ['Go', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'Kubernetes'],
    highlights: [
      'Built to support rural areas with low smartphone + internet penetration.',
      'Users can apply for government schemes, pay utility bills, and transfer bank funds.',
      'Integrated multiple bank APIs for seamless inter-bank transactions.',
      'Currently serving 100,000+ users, processing ~2,000 transactions per day.'
    ]
  },
  {
    title: 'Vithsutra RFID Telephony Application',
    technologies: ['Go', 'Flutter', 'MQTT', 'Docker', 'GitHub Actions'],
    highlights: [
      'Built telephony software for Vithsutra Technologies with RFID integration.',
      'Linked RFID-based device authentication with our remote management portal.',
      'Enabled secure data synchronization between hardware devices and backend services.',
      'Improved tracking, verification and system control through RFID event triggers.'
    ]
  },
  {
    title: 'CA Application',
    technologies: ['Flutter', 'Golang'],
    highlights: [
      'Built for a Chartered Accountant firm for both customer-facing and internal use.',
      'One section lets customers raise queries and get responses directly.',
      'Internal section allows employees to communicate and receive admin broadcasts.',
      'Enabled remote attendance marking using the mobile device\'s biometric sensor.'
    ]
  },
  {
    title: 'SKF Elixer Drier Application',
    technologies: ['Golang', 'PostgreSQL', 'Docker', 'Postman', 'SvelteKit', 'Flutter', 'BLoC', 'EMQX'],
    highlights: [
      'Built a real-time rice drier monitoring application using Flutter.',
      'Implemented Streams heavily and handled multiple streams using BLoC state management.',
      'Integrated MQTT with EMQX broker and implemented full pub-sub flow.',
      'Enabled real-time monitoring + control of drier parameters from the app.'
    ]
  }
];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="projects" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 md:py-32 px-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-deep-black text-center mb-4">
          Things I've Built
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-16 glow-gold" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 glow-gold-hover hover-elevate transition-all duration-300"
              data-testid={`card-project-${index}`}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <ul className="space-y-2 pt-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex gap-2 text-sm text-gray-light">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
