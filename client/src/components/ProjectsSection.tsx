import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

const projects = [
  {
    title: 'SKF Elixer Drier Application',
    date: 'August 2024',
    technologies: ['Golang', 'PostgreSQL', 'Docker', 'Postman', 'SvelteKit', 'Flutter', 'BLoC', 'EMQX'],
    highlights: [
      'Real-time rice drier monitoring system with Flutter.',
      'Handled multiple streams via BLoC.',
      'Integrated MQTT + EMQX PUB/SUB model.',
    ],
  },
  {
    title: 'VSENSE Biometric User Panel',
    date: 'March 2024',
    technologies: ['Golang', 'PostgreSQL', 'Docker', 'SvelteKit', 'Flutter', 'Redis'],
    highlights: [
      'Built Flutter Windows User Portal + Golang HTTP Server.',
      'Integrated USB serial communication for fingerprint registration.',
      'Automated Excel sheet generation with Golang.',
    ],
  },
  {
    title: 'NFC Reader Writer Bluetooth App',
    date: 'March 2024',
    technologies: ['Flutter', 'Golang'],
    highlights: [
      'Developed NFC Reader/Writer over Bluetooth.',
      'Built custom data exchange logic (Base64, Uint8List).',
    ],
  },
  {
    title: 'Bird Watchers Application',
    date: 'July 2022',
    technologies: ['Flutter', 'NodeJS', 'MongoDB', 'Docker', 'BLoC'],
    highlights: [
      'Designed UI in Flutter, integrated APIs, applied dependency injection.',
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 glow-blue-hover hover-elevate transition-all duration-300"
              data-testid={`card-project-${index}`}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-light">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm">{project.date}</span>
                </div>
                
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
