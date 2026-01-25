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

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[99%] max-w-[1400px]">
      <div className="bg-background/30 backdrop-blur-[4px] rounded-full border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.15)] px-6 sm:px-8 lg:px-10">
        <div className="flex md:grid md:grid-cols-3 justify-between items-center h-14">
          {/* Logo with gradient - Desktop only */}
          <div className="hidden md:block">
            <Link 
              href="/" 
              className="relative group inline-block text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              <span className="relative">
                SN
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links - Center */}
          <div className="flex md:items-center md:justify-center gap-4 md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative group font-medium transition-all duration-300',
                  pathname === link.href
                    ? 'text-base md:text-lg text-primary md:scale-115'
                    : 'text-sm md:text-base text-muted-foreground hover:text-foreground'
                )}
              >
                {link.label}
                {pathname === link.href ? (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent"></span>
                ) : (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Social Links - Right */}
          <div className="flex items-center justify-end gap-2 md:gap-3">
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
                <Icon className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
