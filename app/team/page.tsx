'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Mock data - será substituído por dados do Supabase
const teamMembers = [
  {
    id: '1',
    name: 'Ana Silva',
    role: 'Fotógrafa Principal',
    bio: 'Com mais de 10 anos de experiência, Ana especializa-se em fotografia de casamentos e eventos. Sua abordagem cinematográfica e atenção aos detalhes resultam em imagens que contam histórias únicas.',
    photo_url: 'https://images.unsplash.com/photo-1494790008375-3c0d4e4e0c0a?w=600&q=80',
  },
  {
    id: '2',
    name: 'Carlos Mendes',
    role: 'Fotógrafo Corporativo',
    bio: 'Carlos é especialista em fotografia corporativa e de produtos. Sua expertise técnica e visão criativa ajudam empresas a comunicar sua identidade visual de forma impactante.',
    photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    id: '3',
    name: 'Mariana Costa',
    role: 'Editora e Retocadora',
    bio: 'Mariana é responsável pela pós-produção e edição de todas as imagens. Com um olhar apurado para cores e composição, ela garante que cada foto alcance seu potencial máximo.',
    photo_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
  },
  {
    id: '4',
    name: 'Rafael Santos',
    role: 'Assistente de Fotografia',
    bio: 'Rafael trabalha ao lado da equipe principal, garantindo que cada sessão fotográfica seja executada com perfeição. Sua atenção aos detalhes e conhecimento técnico são fundamentais para o sucesso de cada projeto.',
    photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
  },
];

export default function Team() {
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
            Equipe
          </motion.h1>
          <motion.p
            className="text-center text-white/60 font-light mb-12 sm:mb-16 md:mb-20 text-sm sm:text-base px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Conheça os profissionais por trás das lentes
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative aspect-square mb-4 sm:mb-6 overflow-hidden">
                  <Image
                    src={member.photo_url}
                    alt={member.name}
                    fill
                    className="object-cover image-hover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-2">
                  {member.name}
                </h2>
                <p className="text-white/60 font-light mb-3 sm:mb-4 text-sm sm:text-base">{member.role}</p>
                <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}



