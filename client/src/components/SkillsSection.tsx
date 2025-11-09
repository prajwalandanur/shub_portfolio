import { Card } from '@/components/ui/card';
import { Code2, Database, Wrench, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming & Frameworks',
    icon: Code2,
    skills: ['Golang', 'Flutter', 'SvelteKit', 'Node.js'],
  },
  {
    title: 'Databases & Messaging',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MQTT / EMQX'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Docker', 'AWS', 'VS Code', 'Android Studio', 'Atom', 'Zed'],
  },
  {
    title: 'Other Technologies',
    icon: Layers,
    skills: ['Linux', 'GitHub', 'Streams'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 hover-elevate glow-blue-hover transition-all duration-300"
              data-testid={`card-skill-${index}`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <category.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <span className="text-gray-light">{skill}</span>
                      {skillIndex < category.skills.length - 1 && (
                        <span className="text-primary mx-2">•</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
