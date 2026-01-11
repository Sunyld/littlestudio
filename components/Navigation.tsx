'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Serviços', href: '/services' },
  // { name: 'Equipe', href: '/team' }, // Oculto temporariamente
  { name: 'Contato', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 sm:py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Little Studio"
              width={200}
              height={60}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain object-center"
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-cursor="hover"
                className={`text-sm font-light tracking-wider transition-colors duration-300 ${
                  pathname === item.href
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/budget"
              data-cursor="hover"
              className="px-6 py-2 border border-white/20 hover:border-white/40 transition-colors duration-300 text-sm font-light"
            >
              Orçamento
            </Link>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-cursor="hover"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-light tracking-wider transition-colors duration-300 ${
                  pathname === item.href
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/budget"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-2 border border-white/20 hover:border-white/40 transition-colors duration-300 text-sm font-light w-fit"
            >
              Orçamento
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

