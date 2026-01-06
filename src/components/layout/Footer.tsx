import { Github, Linkedin, FileText } from 'lucide-react';
import { heroContent } from '@/data';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  resume: FileText,
};

export default function Footer() {
  return (
    <footer className="border-t border-secondary bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            {Object.entries(heroContent.social).map(([key, url]) => {
              const Icon = socialIcons[key as keyof typeof socialIcons];
              if (!Icon) return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                  aria-label={key}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-(--color-text)/80">
            © {new Date().getFullYear()} {heroContent.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
