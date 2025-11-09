import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Hi, I'm <span className="text-primary">Shubhanga C S</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-foreground font-medium">
          Designer <span className="text-primary">•</span> Developer <span className="text-primary">•</span> Content Creator
        </p>
        
        <p className="text-lg md:text-xl text-gray-light max-w-3xl mx-auto leading-relaxed">
          Passionate about building elegant digital solutions that blend design and technology.
          I specialize in creating visually striking, performance-driven applications using{' '}
          <span className="text-primary font-semibold">Flutter</span>,{' '}
          <span className="text-primary font-semibold">SvelteKit</span>, and{' '}
          <span className="text-primary font-semibold">Golang</span>.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
          <a 
            href="tel:8618245146" 
            className="flex items-center gap-2 text-gray-light hover:text-primary transition-colors"
            data-testid="link-phone"
          >
            <Phone className="h-5 w-5" />
            <span>8618245146</span>
          </a>
          
          <a 
            href="mailto:developer.shubhangcs@gmail.com" 
            className="flex items-center gap-2 text-gray-light hover:text-primary transition-colors"
            data-testid="link-email"
          >
            <Mail className="h-5 w-5" />
            <span>developer.shubhangcs@gmail.com</span>
          </a>
        </div>
        
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2"
            onClick={() => window.open('https://linkedin.com', '_blank')}
            data-testid="button-linkedin"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2"
            onClick={() => window.open('https://github.com', '_blank')}
            data-testid="button-github"
          >
            <Github className="h-5 w-5" />
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
