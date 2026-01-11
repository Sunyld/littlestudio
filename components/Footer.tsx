'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg sm:text-xl font-light mb-3 sm:mb-4">Little Studio</h3>
            <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
              Estúdio de fotografia profissional dedicado a transformar momentos especiais em memórias eternas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-light mb-3 sm:mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-light"
                  data-cursor="hover"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-light"
                  data-cursor="hover"
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-light"
                  data-cursor="hover"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-light"
                  data-cursor="hover"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/budget"
                  className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-light"
                  data-cursor="hover"
                >
                  Orçamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-light mb-3 sm:mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 sm:gap-3 text-white/60 text-xs sm:text-sm font-light">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:littlestudio324@gmail.com"
                  className="hover:text-white transition-colors duration-300 break-all"
                  data-cursor="hover"
                >
                  littlestudio324@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-white/60 text-xs sm:text-sm font-light">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:+258873003210"
                  className="hover:text-white transition-colors duration-300"
                  data-cursor="hover"
                >
                  +258 87 300 3210
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-white/60 text-xs sm:text-sm font-light">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div>
                  <div>Chimoio, Moçambique</div>
                  <div className="text-white/50 text-xs mt-1">Ao lado da Praça Ngungunhane</div>
                </div>
              </li>
            </ul>
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
              <Link
                href="https://www.instagram.com/littlestudiomz.01?igsh=d3RsZndrNzVpbTMy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors duration-300"
                data-cursor="hover"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://facebook.com/littlestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors duration-300"
                data-cursor="hover"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm font-light">
            © {currentYear} Little Studio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

