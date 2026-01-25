'use client';

import { ArrowUp } from 'lucide-react';
import { heroContent } from '@/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background/50 backdrop-blur-sm border-t border-white/10 overflow-visible shadow-[0_-8px_16px_rgba(255,255,255,0.09)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center gap-2">
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group text-muted-foreground transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6 group-hover:text-primary group-hover:scale-125 transition-all duration-300" />
          </button>
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Sebastian Noel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
