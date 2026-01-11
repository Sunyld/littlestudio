'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { ChevronDown } from 'lucide-react';

const budgetSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  service_type: z.string().min(1, 'Selecione um tipo de serviço'),
  event_date: z.string().optional(),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type BudgetFormData = z.infer<typeof budgetSchema>;

const serviceTypes = [
  'Casamento',
  'Noivado',
  'Gestante',
  'Ensaios Fotográficos',
  'Ensaios Fotográficos ao Ar Livre',
  'Outro',
];

export default function Budget() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BudgetFormData>({
    resolver: zodResolver(budgetSchema),
  });

  const onSubmit = async (data: BudgetFormData) => {
    setIsSubmitting(true);
    try {
      // Preparar mensagem para WhatsApp
      const phoneNumber = '+258873003210'; // Número oficial do estúdio
      const message = `*Nova Solicitação de Orçamento*\n\n` +
        `*Nome:* ${data.name}\n` +
        `*Email:* ${data.email}\n` +
        `*Telefone:* ${data.phone}\n` +
        `*Tipo de Serviço:* ${data.service_type}\n` +
        `${data.event_date ? `*Data do Evento:* ${data.event_date}\n` : ''}` +
        `*Mensagem:*\n${data.message}`;
      
      // Codificar mensagem para URL
      const encodedMessage = encodeURIComponent(message);
      
      // Abrir WhatsApp
      const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      
      toast.success('Redirecionando para WhatsApp...');
      
      // Salvar no localStorage como backup
        const requests = JSON.parse(localStorage.getItem('budget_requests') || '[]');
        requests.push({ ...data, created_at: new Date().toISOString() });
        localStorage.setItem('budget_requests', JSON.stringify(requests));
        
      reset();
    } catch (error) {
      console.error('Error submitting budget request:', error);
      toast.error('Erro ao enviar orçamento. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-20 sm:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 sm:mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Solicitar Orçamento
          </motion.h1>
          <motion.p
            className="text-center text-white/60 font-light mb-10 sm:mb-12 md:mb-16 text-sm sm:text-base px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Preencha o formulário abaixo e entraremos em contato em breve
          </motion.p>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-light mb-2">
                Nome *
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                className="w-full bg-white/5 border border-white/20 px-4 py-3 focus:outline-none focus:border-white/40 transition-colors duration-300 font-light"
                placeholder="Seu nome completo"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-light mb-2">
                Email *
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full bg-white/5 border border-white/20 px-4 py-3 focus:outline-none focus:border-white/40 transition-colors duration-300 font-light"
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-light mb-2">
                Telefone *
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                className="w-full bg-white/5 border border-white/20 px-4 py-3 focus:outline-none focus:border-white/40 transition-colors duration-300 font-light"
                placeholder="(+258) 84 123 4567"
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-400">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="service_type" className="block text-sm font-light mb-2">
                Tipo de Serviço *
              </label>
              <div className="relative">
              <select
                id="service_type"
                {...register('service_type')}
                  className="w-full bg-black/50 border border-white/20 px-4 py-3 pr-10 focus:outline-none focus:border-white/40 transition-colors duration-300 font-light text-white appearance-none cursor-pointer"
                  style={{
                    color: '#ffffff',
                  }}
              >
                  <option value="" style={{ background: '#1a1a1a', color: '#ffffff' }}>
                    Selecione um serviço
                  </option>
                {serviceTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                      style={{ background: '#1a1a1a', color: '#ffffff' }}
                    >
                    {type}
                  </option>
                ))}
              </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60 pointer-events-none" />
              </div>
              {errors.service_type && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.service_type.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="event_date" className="block text-sm font-light mb-2">
                Data do Evento (opcional)
              </label>
              <input
                id="event_date"
                type="date"
                {...register('event_date')}
                className="w-full bg-white/5 border border-white/20 px-4 py-3 focus:outline-none focus:border-white/40 transition-colors duration-300 font-light"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-light mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                {...register('message')}
                rows={6}
                className="w-full bg-white/5 border border-white/20 px-4 py-3 focus:outline-none focus:border-white/40 transition-colors duration-300 font-light resize-none"
                placeholder="Conte-nos mais sobre seu projeto..."
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              data-cursor="hover"
              className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white text-black hover:bg-white/90 transition-colors duration-300 text-xs sm:text-sm font-light tracking-wider uppercase disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}

