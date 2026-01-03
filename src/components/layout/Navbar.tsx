'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/organizations', label: 'Organizations' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-[color:var(--color-secondary)] bg-[color:var(--color-background)]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link href="/" className="text-xl font-bold text-[color:var(--color-text)] hover:text-[color:var(--color-primary)] transition-colors">
            Sebastian Noel
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors text-[color:var(--color-text)] hover:text-[color:var(--color-accent)]',
                  pathname === link.href
                    ? 'text-[color:var(--color-accent)] border-b-2 border-[color:var(--color-accent)]'
                    : 'border-b-2 border-transparent'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
