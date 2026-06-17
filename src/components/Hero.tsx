import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { COMPANHIA_WHATSAPP_NUMBER, COMPANHIA_WHATSAPP_DEFAULT_MSG } from '../data';
import WhatsAppIcon from './WhatsAppIcon';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const encodedText = encodeURIComponent(COMPANHIA_WHATSAPP_DEFAULT_MSG);
  const whatsappUrl = `https://wa.me/${COMPANHIA_WHATSAPP_NUMBER}?text=${encodedText}`;

  return (
    <section id="inicio" className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-white">
      {/* Subtle light gray accent circles behind for Apple premium depth */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-radial from-gray-50/70 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gray-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              BM Imports • Experiência Premium
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-3xl xl:text-5xl font-sans font-bold tracking-tight text-gray-900 leading-tight"
            >
              Tecnologia que conecta você ao que realmente importa.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Produtos selecionados, atendimento especializado e uma experiência de compra construída com confiança, transparência e inovação.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => onNavigate('produtos')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-white bg-black hover:bg-gray-800 transition-all rounded-full shadow-md gap-2 cursor-pointer active:scale-98"
              >
                <span>Conhecer produtos</span>
                <ArrowDown className="w-4 h-4 text-white/80" />
              </a>

              <a
                id="btn-whatsapp-hero"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all rounded-full gap-2 cursor-pointer shadow-xs active:scale-98"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Falar com especialista</span>
              </a>
            </motion.div>

            {/* Micro stats under CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4"
            >
              <div>
                <span className="block text-2xl font-bold text-gray-900">42+</span>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Itens Avaliados</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-900">1 Ano</span>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Garantia Apple</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-900">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Original Apple</span>
              </div>
            </motion.div>
          </div>

          {/* Premium Device Image */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative mx-auto max-w-lg lg:max-w-none flex justify-center items-center"
            >
              {/* Soft reflection glowing behind product */}
              <div className="absolute -inset-4 bg-radial from-gray-100/50 to-transparent blur-3xl pointer-events-none rounded-full" />
              
              <img
                src="/images/foto de capa bm imports.png"
                alt="iStore Premium Apple Selection"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback in case there's any file access glitch in some sandboxes
                  e.currentTarget.src = "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1200&auto=format&fit=crop";
                }}
                className="relative rounded-2xl max-w-full h-auto object-cover max-h-[480px] drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
