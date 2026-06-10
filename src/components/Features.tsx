import { motion } from 'motion/react';
import { DIFERENCIAIS } from '../data';
import { ShieldCheck, ClipboardCheck, Award, Sparkles, UserCheck, HeartHandshake } from 'lucide-react';

// Map icon strings to components for maximum compile-time safety
const IconMap: { [key: string]: any } = {
  ShieldCheck: ShieldCheck,
  ClipboardCheck: ClipboardCheck,
  Award: Award,
  Sparkles: Sparkles,
  UserCheck: UserCheck,
  HeartHandshake: HeartHandshake,
};

export default function Features() {
  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3"
          >
            Diferenciais de Autoridade
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-gray-900"
          >
            Por que escolher a BM Imports?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base text-gray-500 font-sans leading-relaxed"
          >
            Oferecemos as melhores soluções do mercado tecnológico através de uma experiência baseada em transparência, qualidade garantida e suporte especializado próximo.
          </motion.p>
        </div>

        {/* Bento Grid layout for premium look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFERENCIAIS.map((diff, index) => {
            const IconComponent = IconMap[diff.iconName] || ShieldCheck;
            return (
              <motion.div
                key={diff.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-gray-50/50 hover:bg-gray-50 rounded-3xl p-8 border border-gray-100 transition-all duration-300 group fle flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-2xs flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-black" />
                  </div>
                  
                  <h3 className="mt-6 text-lg font-bold font-sans text-gray-900">
                    {diff.title}
                  </h3>
                  
                  <p className="mt-3 text-sm text-gray-500 font-sans leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center text-xs font-semibold text-gray-400 group-hover:text-black transition-colors">
                  <span>Padrão BM Imports</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
