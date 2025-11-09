import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Organized skills by category with their Simple Icons slugs
const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Go', slug: 'go' },
      { name: 'Dart', slug: 'dart' },
      { name: 'Java', slug: 'openjdk' },
      { name: 'C', slug: 'c' },
      { name: 'Rust', slug: 'rust' },
      { name: 'Python', slug: 'python' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'JavaScript', slug: 'javascript' },
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'React', slug: 'react' },
      { name: 'Flutter', slug: 'flutter' },
      { name: 'Node.js', slug: 'nodedotjs' },
      { name: 'Echo', slug: 'go' },
    ]
  },
  {
    title: 'Version Control',
    skills: [
      { name: 'Git', slug: 'git' },
      { name: 'GitHub', slug: 'github' },
    ]
  },
  {
    title: 'Caching Systems',
    skills: [
      { name: 'Redis', slug: 'redis' },
      { name: 'Memcached', slug: 'memcached' },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', slug: 'mysql' },
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'MongoDB', slug: 'mongodb' },
    ]
  },
  {
    title: 'Message Brokers',
    skills: [
      { name: 'MQTT', slug: 'mqtt' },
      { name: 'NATS', slug: 'nats' },
    ]
  },
  {
    title: 'Queues',
    skills: [
      { name: 'RabbitMQ', slug: 'rabbitmq' },
    ]
  },
  {
    title: 'DevOps Tools',
    skills: [
      { name: 'Docker', slug: 'docker' },
      { name: 'Kubernetes', slug: 'kubernetes' },
      { name: 'GitHub Actions', slug: 'githubactions' },
      { name: 'Ansible', slug: 'ansible' },
    ]
  },
  {
    title: 'Cloud Platforms',
    skills: [
      { name: 'AWS', slug: 'amazonaws' },
      { name: 'Azure', slug: 'microsoftazure' },
      { name: 'GCP', slug: 'googlecloud' },
      { name: 'DigitalOcean', slug: 'digitalocean' },
    ]
  },
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
        
        {/* Skills organized by category */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center justify-center p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover-elevate glow-blue-hover"
                    data-testid={`skill-${skill.slug}-${skillIndex}`}
                  >
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      <img 
                        src={`https://cdn.simpleicons.org/${skill.slug}`}
                        alt={`${skill.name} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
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
            </div>
          ))}
        </div>

        {/* Developer Tools Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Developer Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {developerTools.map((tool, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-primary/50 hover:bg-primary/10 transition-colors"
                data-testid={`developer-tool-${index}`}
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-primary/50 hover:bg-primary/10 transition-colors"
                data-testid={`soft-skill-${index}`}
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
