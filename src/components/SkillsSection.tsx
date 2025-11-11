import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Icon } from '@iconify/react';

// Organized skills by category with their Iconify icon names (using logos: for original brand colors)
// Note: MQTT uses simple-icons with official brand color (#660066) as no colored logo exists in logos collection
const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Go', icon: 'logos:go' },
      { name: 'Dart', icon: 'logos:dart' },
      { name: 'Java', icon: 'logos:java' },
      { name: 'C', icon: 'logos:c' },
      { name: 'Rust', icon: 'logos:rust' },
      { name: 'Python', icon: 'logos:python' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'JavaScript', icon: 'logos:javascript' },
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'React', icon: 'logos:react' },
      { name: 'Flutter', icon: 'logos:flutter' },
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Echo', icon: 'logos:go' },
    ]
  },
  {
    title: 'Version Control',
    skills: [
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'GitHub', icon: 'logos:github-icon' },
    ]
  },
  {
    title: 'Caching Systems',
    skills: [
      { name: 'Redis', icon: 'logos:redis' },
      { name: 'Memcached', icon: 'devicon:memcached' },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'logos:mysql' },
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'MongoDB', icon: 'logos:mongodb-icon' },
    ]
  },
  {
    title: 'Message Brokers',
    skills: [
      { name: 'MQTT', icon: 'simple-icons:mqtt' },
      { name: 'NATS', icon: 'logos:nats-icon' },
    ]
  },
  {
    title: 'Queues',
    skills: [
      { name: 'RabbitMQ', icon: 'logos:rabbitmq-icon' },
    ]
  },
  {
    title: 'DevOps Tools',
    skills: [
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'Kubernetes', icon: 'logos:kubernetes' },
      { name: 'GitHub Actions', icon: 'logos:github-actions' },
      { name: 'Ansible', icon: 'logos:ansible' },
    ]
  },
  {
    title: 'Cloud Platforms',
    skills: [
      { name: 'AWS', icon: 'logos:aws' },
      { name: 'Azure', icon: 'logos:azure-icon' },
      { name: 'GCP', icon: 'logos:google-cloud' },
      { name: 'DigitalOcean', icon: 'logos:digital-ocean' },
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
        <h2 className="text-4xl md:text-5xl font-bold text-deep-black text-center mb-4">
          Tech Stack
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-16 glow-gold" />
        
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
                    className="flex flex-col items-center justify-center p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover-elevate glow-gold-hover"
                    data-testid={`skill-${skill.name.toLowerCase()}-${skillIndex}`}
                  >
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      <Icon 
                        icon={skill.icon}
                        className="w-full h-full"
                        style={skill.name === 'MQTT' ? { color: '#660066' } : undefined}
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
