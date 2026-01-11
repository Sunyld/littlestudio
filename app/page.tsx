'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import ScrollIndicator from '@/components/ScrollIndicator';

import { getServiceImage, getAllPortfolioItems, getPhotosByService, encodeImagePath, getServicePhotos } from '@/lib/photos';
import Footer from '@/components/Footer';
import { Map, MapMarker, MarkerContent } from '@/components/ui/map';
import SafeImage from '@/components/SafeImage';

// Obter portfólio destacado - primeiras 3 fotos de diferentes categorias
const allPhotos = getPhotosByService();
const featuredPortfolio = [
  {
    id: '1',
    title: 'Casamento',
    image_url: allPhotos['Casamento']?.[0] ? encodeImagePath(allPhotos['Casamento'][0]) : '',
    category: 'Casamento',
  },
  {
    id: '2',
    title: 'Gestante',
    image_url: allPhotos['Gestante']?.[0] ? encodeImagePath(allPhotos['Gestante'][0]) : '',
    category: 'Gestante',
  },
  {
    id: '3',
    title: 'Noivado',
    image_url: allPhotos['Noivado']?.[0] ? encodeImagePath(allPhotos['Noivado'][0]) : '',
    category: 'Noivado',
  },
];

// Serviços baseados nas pastas disponíveis
const services = [
  {
    id: '1',
    title: 'Casamento',
    description: 'Capturando o momento mais especial da sua vida com elegância e sensibilidade.',
    images: getServicePhotos('Casamento').slice(0, 5), // Pegar primeiras 5 fotos
  },
  {
    id: '2',
    title: 'Gestante',
    description: 'Celebre este momento único com sessões fotográficas delicadas e artísticas.',
    images: getServicePhotos('Gestante').slice(0, 5),
  },
  {
    id: '3',
    title: 'Ensaios Fotográficos',
    description: 'Sessões personalizadas para retratos individuais, casais e famílias.',
    images: getServicePhotos('Ensaios Fotográficos').slice(0, 5),
  },
];

// Componente de slideshow para os cards de serviços
function ServiceCardSlideshow({ images, title }: { images: string[]; title: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Trocar a cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="relative aspect-square overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`${title} ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            unoptimized={image.includes('🎉') || image.includes('🥂') || image.includes('🎆') || image.includes(' ')}
          />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/heroimage.jpg"
            alt="Hero"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Gradiente dark nas bordas, especialmente na parte inferior */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
        </div>
        <motion.div
          className="relative z-10 text-center px-6 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.div
            className="mb-6 sm:mb-8 flex justify-center w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SafeImage
              src="/logo.png"
              alt="Little Studio"
              width={350}
              height={105}
              className="w-full max-w-md sm:max-w-xl md:max-w-2xl h-auto object-contain object-center mx-auto"
              priority
            />
          </motion.div>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/95 font-light max-w-4xl mx-auto mb-8 sm:mb-12 px-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transformando momentos em memórias eternas desde 2023
          </motion.p>
          <Link
            href="/portfolio"
            data-cursor="hover"
            className="inline-block px-8 py-4 border border-white/30 hover:border-white/60 transition-colors duration-300 text-sm font-light tracking-wider uppercase"
          >
            Ver Portfólio
          </Link>
        </motion.div>
        <ScrollIndicator />
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Sobre o Estúdio
          </motion.h2>
          <motion.div
            className="space-y-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed px-4">
              Somos especialistas em capturar os momentos mais importantes da sua vida. 
              Oferecemos serviços de fotografia e vídeo para casamentos, noivados, 
              gestantes e ensaios fotográficos. Com uma abordagem minimalista e 
              cinematográfica, transformamos cada momento especial em memórias eternas 
              através de imagens e vídeos que contam histórias únicas e emocionantes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/60 text-sm sm:text-base font-light">
              <p>
                <span className="text-white/80">Fundado em:</span> 14 de Julho de 2023
              </p>
              <span className="hidden sm:inline">•</span>
              <p>
                <span className="text-white/80">Localização:</span> Chimoio, Moçambique
              </p>
            </div>
            <p className="text-sm sm:text-base text-white/60 font-light">
              Ao lado da Praça Ngungunhane
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="https://wa.me/258873003210"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-colors duration-300 text-sm font-light tracking-wider uppercase"
            >
              <MessageCircle className="w-4 h-4" />
              Saber mais
            </a>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 sm:mb-12 md:mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Portfólio
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {featuredPortfolio.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative aspect-[4/5] overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <SafeImage
                  src={item.image_url}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover image-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-light mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/portfolio"
              data-cursor="hover"
              className="inline-block px-8 py-4 border border-white/30 hover:border-white/60 transition-colors duration-300 text-sm font-light tracking-wider uppercase"
            >
              Ver Todo o Portfólio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 sm:mb-12 md:mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Serviços
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="mb-6">
                  <ServiceCardSlideshow images={service.images} title={service.title} />
                </div>
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/services"
              data-cursor="hover"
              className="inline-block px-8 py-4 border border-white/30 hover:border-white/60 transition-colors duration-300 text-sm font-light tracking-wider uppercase"
            >
              Ver Todos os Serviços
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Pronto para começar?
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/70 font-light mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Entre em contato e solicite um orçamento personalizado
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
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

      {/* Map Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Localização
          </motion.h2>
          <motion.div
            className="h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Map
              center={[33.47960662841797, -19.110435485839844]}
              zoom={17}
            >
              <MapMarker
                longitude={33.47960662841797}
                latitude={-19.110435485839844}
              >
                <MarkerContent>
                  <div className="text-3xl">📍</div>
                </MarkerContent>
              </MapMarker>
            </Map>
          </motion.div>
          <motion.p
            className="text-center text-white/60 font-light mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Chimoio, Mozambique
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
