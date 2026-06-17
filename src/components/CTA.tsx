import { COMPANHIA_WHATSAPP_NUMBER, COMPANHIA_WHATSAPP_DEFAULT_MSG } from '../data';
import { motion } from 'motion/react';
import WhatsAppIcon from './WhatsAppIcon';

export default function CTA() {
  const encodedText = encodeURIComponent(COMPANHIA_WHATSAPP_DEFAULT_MSG);
  const whatsappUrl = `https://wa.me/${COMPANHIA_WHATSAPP_NUMBER}?text=${encodedText}`;

  return (
    <section id="contato" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background subtle mesh effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-neutral-900 rounded-full blur-[120px] opacity-80 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Tag */}
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 block">
            Atendimento Exclusivo BM Imports
          </span>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-white leading-tight">
            Sua próxima experiência em tecnologia começa aqui.
          </h2>

          {/* Description */}
          <p className="mt-6 text-sm sm:text-base text-neutral-450 leading-relaxed font-sans max-w-xl mx-auto">
            Estamos prontos para ajudar você a encontrar o produto ideal com segurança, transparência e atendimento especializado.
          </p>

          {/* Large dynamic conversion button */}
          <div className="mt-10">
            <a
              id="btn-whatsapp-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-sm sm:text-base font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-100 transition-all rounded-full gap-3 cursor-pointer shadow-lg active:scale-98 select-none"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* Micro assurance list */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              Resposta em até 5 minutos
            </span>
            <span className="hidden sm:inline text-neutral-800">•</span>
            <span>Simulações sem compromisso</span>
            <span className="hidden sm:inline text-neutral-800">•</span>
            <span>Estoque atualizado em tempo real</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
