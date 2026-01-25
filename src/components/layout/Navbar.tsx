'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Linkedin, FileText, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { heroContent } from '@/data/personal';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { social } = heroContent;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-background/30 backdrop-blur-[2px] rounded-full border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.15)] px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-14">
          {/* Logo with gradient */}
          <Link 
            href="/" 
            className="relative group text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            <span className="relative">
              SN
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>

          {/* Desktop Navigation Links - Center */}
          <div className="hidden md:flex items-center gap-2 bg-secondary/50 rounded-full px-2 py-2 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300',
                  pathname === link.href
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links - Right (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {[
              { href: social.github, icon: Github, label: 'GitHub' },
              { href: social.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: social.resume, icon: FileText, label: 'Resume' }
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 rounded-3xl border border-white/10 bg-background/30 backdrop-blur-[2px] shadow-[0_0_30px_rgba(255,255,255,0.15)] overflow-hidden">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300',
                  pathname === link.href
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-border/40">
              {[
                { href: social.github, icon: Github, label: 'GitHub' },
                { href: social.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: social.resume, icon: FileText, label: 'Resume' }
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
