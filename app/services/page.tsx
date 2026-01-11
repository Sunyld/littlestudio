'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { getServiceImage } from '@/lib/photos';

// Serviços baseados nas pastas de fotos disponíveis
const services = [
  {
    id: '1',
    title: 'Casamento',
    description:
      'Capturamos cada momento especial do seu grande dia com sensibilidade e elegância. Desde a preparação até a última dança, criamos um registro cinematográfico único que preserva as emoções e detalhes mais importantes.',
    image_url: getServiceImage('Casamento'),
  },
  {
    id: '2',
    title: 'Noivado',
    description:
      'Registramos o momento especial do seu noivado com estilo e romantismo. Sessões fotográficas que capturam a conexão e o amor do casal antes do grande dia.',
    image_url: getServiceImage('Noivado'),
  },
  {
    id: '3',
    title: 'Gestante',
    description:
      'Celebre este momento único da sua vida com sessões fotográficas delicadas e sensíveis. Capturamos a beleza e a magia da maternidade de forma artística e emocionante.',
    image_url: getServiceImage('Gestante'),
  },
  {
    id: '4',
    title: 'Ensaios Fotográficos',
    description:
      'Sessões personalizadas para retratos individuais, casais, famílias ou gestantes. Criamos um ambiente descontraído onde você se sente à vontade para ser você mesmo.',
    image_url: getServiceImage('Ensaios Fotográficos'),
  },
  {
    id: '5',
    title: 'Ensaios Fotográficos ao Ar Livre',
    description:
      'Ensaios fotográficos em ambientes externos, aproveitando a luz natural e cenários ao ar livre. Criamos imagens únicas que combinam a beleza natural com a sua personalidade.',
    image_url: getServiceImage('Ensaios Fotográficos ar lento'),
  },
];

export default function Services() {
  return (
    <main className="min-h-screen pt-20 sm:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-4 sm:mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Serviços
          </motion.h1>
          <motion.p
            className="text-center text-white/60 font-light mb-12 sm:mb-16 md:mb-20 text-sm sm:text-base px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Oferecemos uma gama completa de serviços fotográficos
          </motion.p>

          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-full lg:flex-1 relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image_url}
                    alt={service.title}
                    fill
                    className="object-cover image-hover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized={service.image_url.includes('🎉') || service.image_url.includes('🥂') || service.image_url.includes('🎆')}
                  />
                </div>
                <div className="w-full lg:flex-1 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6">
                    {service.title}
                  </h2>
                  <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed mb-6 sm:mb-8">
                    {service.description}
                  </p>
                  <Link
                    href="/budget"
                    data-cursor="hover"
                    className="inline-block px-6 sm:px-8 py-3 sm:py-4 border border-white/30 hover:border-white/60 transition-colors duration-300 text-xs sm:text-sm font-light tracking-wider uppercase"
                  >
                    Solicitar Orçamento
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}




