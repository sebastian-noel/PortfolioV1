import { Github, Linkedin, FileText } from 'lucide-react';
import { heroContent } from '@/data';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  resume: FileText,
};

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-secondary)] bg-[color:var(--color-background)] text-[color:var(--color-text)]">
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
                  className="text-[color:var(--color-text)] hover:text-[color:var(--color-accent)] transition-colors"
                  aria-label={key}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-[color:var(--color-text)]/80">
            © {new Date().getFullYear()} {heroContent.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
