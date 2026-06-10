import { motion } from 'motion/react';
import { DEPOIMENTOS } from '../data';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 block">
            Voz de quem já comprou
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-gray-900">
            Recomendado por quem entende de Apple.
          </h2>
          <p className="mt-2 text-base text-gray-500 font-sans">
            Centenas de clientes em todo o Brasil já migraram para um novo patamar tecnológico com segurança e economia relevante.
          </p>
        </div>

        {/* Highlighted Reviews Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DEPOIMENTOS.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-3xl p-6 border border-gray-100 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
            >
              <div>
                {/* Visual rating stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-600 font-sans leading-relaxed italic">
                  "{test.comment}"
                </p>
              </div>

              {/* Author metadata footer */}
              <div className="mt-8 pt-5 border-t border-gray-100 flex items-center gap-3">
                {test.avatarUrl ? (
                  <img
                    src={test.avatarUrl}
                    alt={test.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover shrink-0 border border-gray-100 bg-gray-50"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {test.avatarText}
                  </div>
                )}
                <div>
                  <span className="block text-sm font-bold text-gray-900 font-sans leading-tight">
                    {test.name}
                  </span>
                  <span className="block text-[11px] text-gray-400 font-medium font-sans">
                    {test.role} • {test.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
