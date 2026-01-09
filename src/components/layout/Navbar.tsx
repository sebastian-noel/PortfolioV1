'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Linkedin, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { heroContent } from '@/data/personal';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { social } = heroContent;

  return (
    <nav className="sticky top-0 z-50 border-b border-secondary bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-all hover:scale-110 hover:-translate-y-0.5">
            SN
          </Link>

          {/* Navigation Links - Center */}
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-all text-foreground hover:text-accent hover:scale-105 hover:-translate-y-0.5',
                  pathname === link.href
                    ? 'text-accent border-b-2 border-accent'
                    : 'border-b-2 border-transparent'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links - Right */}
          <div className="flex items-center space-x-6">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-all hover:scale-110 hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-all hover:scale-110 hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-all hover:scale-110 hover:-translate-y-0.5"
              aria-label="Resume"
            >
              <FileText className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
