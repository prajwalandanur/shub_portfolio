import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FooterSection() {
  return (
    <footer id="contact" className="relative py-16 px-6 border-t border-border">
      <div className="absolute inset-0 gradient-radial-blue pointer-events-none opacity-50" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              variant="ghost" 
              size="lg"
              className="gap-2 hover:text-primary"
              onClick={() => window.open('https://linkedin.com', '_blank')}
              data-testid="button-footer-linkedin"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="gap-2 hover:text-primary"
              onClick={() => window.open('https://github.com', '_blank')}
              data-testid="button-footer-github"
            >
              <Github className="h-5 w-5" />
              GitHub
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="gap-2 hover:text-primary"
              onClick={() => window.open('mailto:developer.shubhangcs@gmail.com', '_blank')}
              data-testid="button-footer-email"
            >
              <Mail className="h-5 w-5" />
              Email
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="gap-2 hover:text-primary"
              onClick={() => window.open('tel:8618245146', '_blank')}
              data-testid="button-footer-phone"
            >
              <Phone className="h-5 w-5" />
              Call
            </Button>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-light">
              © 2025 Shubhanga C S. All rights reserved.
            </p>
            <p className="text-sm text-gray-light flex items-center justify-center gap-2">
              Designed & Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using Flutter & SvelteKit
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
