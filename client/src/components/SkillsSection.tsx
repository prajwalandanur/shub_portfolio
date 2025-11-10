import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Icon } from '@iconify/react';

// Organized skills by category with their Iconify icon names
const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Go', icon: 'simple-icons:go' },
      { name: 'Dart', icon: 'simple-icons:dart' },
      { name: 'Java', icon: 'simple-icons:openjdk' },
      { name: 'C', icon: 'simple-icons:c' },
      { name: 'Rust', icon: 'simple-icons:rust' },
      { name: 'Python', icon: 'simple-icons:python' },
      { name: 'TypeScript', icon: 'simple-icons:typescript' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'React', icon: 'simple-icons:react' },
      { name: 'Flutter', icon: 'simple-icons:flutter' },
      { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
      { name: 'Echo', icon: 'simple-icons:go' },
    ]
  },
  {
    title: 'Version Control',
    skills: [
      { name: 'Git', icon: 'simple-icons:git' },
      { name: 'GitHub', icon: 'simple-icons:github' },
    ]
  },
  {
    title: 'Caching Systems',
    skills: [
      { name: 'Redis', icon: 'simple-icons:redis' },
      { name: 'Memcached', icon: 'simple-icons:memcached' },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'simple-icons:mysql' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
      { name: 'MongoDB', icon: 'simple-icons:mongodb' },
    ]
  },
  {
    title: 'Message Brokers',
    skills: [
      { name: 'MQTT', icon: 'simple-icons:mqtt' },
      { name: 'NATS', icon: 'simple-icons:natsdotio' },
    ]
  },
  {
    title: 'Queues',
    skills: [
      { name: 'RabbitMQ', icon: 'simple-icons:rabbitmq' },
    ]
  },
  {
    title: 'DevOps Tools',
    skills: [
      { name: 'Docker', icon: 'simple-icons:docker' },
      { name: 'Kubernetes', icon: 'simple-icons:kubernetes' },
      { name: 'GitHub Actions', icon: 'simple-icons:githubactions' },
      { name: 'Ansible', icon: 'simple-icons:ansible' },
    ]
  },
  {
    title: 'Cloud Platforms',
    skills: [
      { name: 'AWS', icon: 'simple-icons:amazonaws' },
      { name: 'Azure', icon: 'simple-icons:microsoftazure' },
      { name: 'GCP', icon: 'simple-icons:googlecloud' },
      { name: 'DigitalOcean', icon: 'simple-icons:digitalocean' },
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
          Technical Skills
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
                    <div className="w-16 h-16 mb-4 flex items-center justify-center text-foreground">
                      <Icon 
                        icon={skill.icon}
                        className="w-full h-full"
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
