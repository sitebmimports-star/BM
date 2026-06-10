import { useState } from 'react';
import { PERGUNTAS_FREQUENTES } from '../data';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(PERGUNTAS_FREQUENTES[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 block">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-gray-900">
            Perguntas Frequentes.
          </h2>
          <p className="mt-2 text-base text-gray-500 font-sans">
            Tem alguma dúvida sobre garantia, envio ou autenticidade? Reunimos as principais respostas sobre nosso modelo de negócio transparente.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {PERGUNTAS_FREQUENTES.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-gray-100 rounded-3xl overflow-hidden transition-all duration-305 bg-gray-50/50 hover:bg-gray-50"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left font-semibold text-gray-950 hover:text-black cursor-pointer select-none"
                >
                  <span className="text-base font-sans tracking-tight pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-black' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-gray-500 font-sans leading-relaxed border-t border-gray-100/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
