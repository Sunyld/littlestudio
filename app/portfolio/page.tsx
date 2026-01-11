'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { getAllPortfolioItems, getPhotosByService } from '@/lib/photos';
import { FlipReveal, FlipRevealItem } from '@/components/ui/flip-reveal';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import SafeImage from '@/components/SafeImage';

// Obter todos os itens do portfólio das fotos organizadas
const portfolioItems = getAllPortfolioItems();

// Obter categorias disponíveis baseadas nas pastas
const allCategories = Object.keys(getPhotosByService());
const categories = ['Todos', ...allCategories];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Converter "Todos" para "all" para o FlipReveal
  const flipKey = selectedCategory === 'Todos' ? 'all' : selectedCategory;
  const flipKeys = [flipKey];

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
            Portfólio
          </motion.h1>
          <motion.p
            className="text-center text-white/60 font-light mb-10 sm:mb-12 md:mb-16 text-sm sm:text-base px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore nossa coleção de trabalhos
          </motion.p>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ToggleGroup
              type="single"
              className="bg-transparent rounded-md border border-white/20 p-1 flex-wrap"
              value={selectedCategory}
              onValueChange={(value) => value && setSelectedCategory(value)}
          >
            {categories.map((category) => (
                <ToggleGroupItem
                key={category}
                  value={category}
                  className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-light tracking-wider border-0 data-[state=on]:bg-white/10 data-[state=on]:text-white text-white/60 hover:text-white hover:bg-white/5"
              >
                {category}
                </ToggleGroupItem>
            ))}
            </ToggleGroup>
          </motion.div>

          {/* Portfolio Grid */}
          <FlipReveal
            keys={flipKeys}
            showClass="block"
            hideClass="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
          >
            {portfolioItems.map((item, index) => (
              <FlipRevealItem
                key={item.id}
                flipKey={item.category}
                className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
              >
                <SafeImage
                  src={item.image_url}
                  alt={item.title}
                  fill
                  className="object-cover image-hover"
                  priority={index < 6}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-white/60 text-xs sm:text-sm">{item.category}</p>
                </div>
              </FlipRevealItem>
            ))}
          </FlipReveal>
        </div>
      </section>
    </main>
  );
}




