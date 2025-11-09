import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Mapping of skills to their Simple Icons slugs
// Simple Icons CDN: https://cdn.simpleicons.org/[slug]/[color]
const skillsWithLogos = [
  // Languages
  { name: 'Go', slug: 'go', category: 'Languages' },
  { name: 'Dart', slug: 'dart', category: 'Languages' },
  { name: 'Java', slug: 'openjdk', category: 'Languages' },
  { name: 'C', slug: 'c', category: 'Languages' },
  { name: 'Rust', slug: 'rust', category: 'Languages' },
  { name: 'Python', slug: 'python', category: 'Languages' },
  { name: 'TypeScript', slug: 'typescript', category: 'Languages' },
  { name: 'JavaScript', slug: 'javascript', category: 'Languages' },
  
  // Frameworks
  { name: 'React', slug: 'react', category: 'Frameworks' },
  { name: 'Flutter', slug: 'flutter', category: 'Frameworks' },
  { name: 'Node.js', slug: 'nodedotjs', category: 'Frameworks' },
  { name: 'Echo', slug: 'go', category: 'Frameworks' },
  
  // Version Control
  { name: 'Git', slug: 'git', category: 'Version Control' },
  { name: 'GitHub', slug: 'github', category: 'Version Control' },
  
  // Caching Systems
  { name: 'Redis', slug: 'redis', category: 'Caching Systems' },
  { name: 'Memcached', slug: 'memcached', category: 'Caching Systems' },
  
  // Databases
  { name: 'MySQL', slug: 'mysql', category: 'Databases' },
  { name: 'PostgreSQL', slug: 'postgresql', category: 'Databases' },
  { name: 'MongoDB', slug: 'mongodb', category: 'Databases' },
  
  // Message Brokers
  { name: 'MQTT', slug: 'mqtt', category: 'Message Brokers' },
  { name: 'NATS', slug: 'nats', category: 'Message Brokers' },
  
  // Queues
  { name: 'RabbitMQ', slug: 'rabbitmq', category: 'Queues' },
  
  // DevOps Tools
  { name: 'Docker', slug: 'docker', category: 'DevOps Tools' },
  { name: 'Kubernetes', slug: 'kubernetes', category: 'DevOps Tools' },
  { name: 'GitHub Actions', slug: 'githubactions', category: 'DevOps Tools' },
  { name: 'Ansible', slug: 'ansible', category: 'DevOps Tools' },
  
  // Cloud Platforms
  { name: 'AWS', slug: 'amazonaws', category: 'Cloud Platforms' },
  { name: 'Azure', slug: 'microsoftazure', category: 'Cloud Platforms' },
  { name: 'GCP', slug: 'googlecloud', category: 'Cloud Platforms' },
  { name: 'DigitalOcean', slug: 'digitalocean', category: 'Cloud Platforms' },
];

// Developer Tools (text-based)
const developerTools = [
  'VS Code', 'Atom', 'Zed', 'AWS', 'Android Studio'
];

// Soft Skills (text-based)
const softSkills = [
  'Communication', 'Negotiation', 'Problem-Solving', 
  'Teamwork', 'Analytical Thinking', 'Adaptability'
];

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="skills" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 md:py-32 px-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
          Technical Skills
        </h2>
        
        {/* Main Skills Grid with Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {skillsWithLogos.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover-elevate glow-blue-hover"
              data-testid={`skill-${skill.slug}`}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img 
                  src={`https://cdn.simpleicons.org/${skill.slug}/007BFF`}
                  alt={`${skill.name} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback: try white color if blue fails
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('FFFFFF')) {
                      target.src = `https://cdn.simpleicons.org/${skill.slug}/FFFFFF`;
                    }
                  }}
                />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Developer Tools Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Developer Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {developerTools.map((tool, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-primary/50 hover:bg-primary/10 transition-colors"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Other Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-primary/50 hover:bg-primary/10 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
