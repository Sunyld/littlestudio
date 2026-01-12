'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'littlestudio324@gmail.com',
    href: 'mailto:littlestudio324@gmail.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+258 87 300 3210',
    href: 'https://wa.me/258873003210',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'Chimoio, Moçambique',
    href: '#',
  },
];

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/littlestudiomz.01?igsh=d3RsZndrNzVpbTMy',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://facebook.com/littlestudio',
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen pt-20 sm:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-4 sm:mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contato
          </motion.h1>
          <motion.p
            className="text-center text-white/60 font-light mb-12 sm:mb-16 md:mb-20 text-sm sm:text-base px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Entre em contato conosco
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 border border-white/20 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-light text-white/60 mb-2">
                    {info.label}
                  </h3>
                  {info.label === 'Localização' ? (
                    <div className="text-lg font-light">
                      <div>{info.value}</div>
                      <div className="text-sm text-white/60 mt-1">Ao lado da Praça Ngungunhane</div>
                    </div>
                  ) : (
                    <Link
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      data-cursor="hover"
                      className="text-lg font-light hover:text-white/80 transition-colors duration-300"
                    >
                      {info.value}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8">
              Redes Sociais
            </h2>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/budget"
              data-cursor="hover"
              className="inline-block px-12 py-4 bg-white text-black hover:bg-white/90 transition-colors duration-300 text-sm font-light tracking-wider uppercase"
            >
              Solicitar Orçamento
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
