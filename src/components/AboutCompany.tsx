import { motion } from 'motion/react';
import { Compass, Lightbulb, TrendingUp } from 'lucide-react';

export default function AboutCompany() {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-gray-50/55 relative overflow-hidden">
      {/* Light design details to enrich typography structure */}
      <div className="absolute -left-16 bottom-0 w-80 h-80 bg-gray-100 rounded-full blur-3xl pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Editorial Title, Copy & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3"
              >
                Nosso Propósito
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-gray-900 leading-tight"
              >
                Mais do que vender tecnologia.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="text-base sm:text-lg text-gray-650 leading-relaxed font-sans font-normal"
            >
              Na <strong className="text-gray-950 font-semibold">BM Imports</strong> acreditamos que tecnologia deve facilitar a vida das pessoas. Por isso selecionamos cuidadosamente cada produto, acompanhamos as tendências do mercado e oferecemos atendimento próximo para ajudar nossos clientes a fazer escolhas seguras e inteligentes.
            </motion.p>

            {/* Micro Pillars related to the strategy */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200/60">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-2 text-gray-900">
                  <Compass className="w-4 h-4 text-neutral-500" />
                  <span className="text-xs font-bold uppercase tracking-wider">Curadoria</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Busca ativa por produtos de alta qualidade técnica e física.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-2 text-gray-900">
                  <TrendingUp className="w-4 h-4 text-neutral-500" />
                  <span className="text-xs font-bold uppercase tracking-wider">Inovação</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Sempre em sintonia com os próximos passos do mercado global.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-2 text-gray-900">
                  <Lightbulb className="w-4 h-4 text-neutral-500" />
                  <span className="text-xs font-bold uppercase tracking-wider">Clareza</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Relação ética e honesta de precificação e estado real de uso.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Column 2: Dynamic Large Brand Image */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="aspect-square sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-gray-150 bg-white"
            >
              <img
                src="https://pbs.twimg.com/media/HJ0NmF4XsAAr8nV?format=jpg&name=large"
                alt="BM Imports - Nosso Propósito"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
              />
            </motion.div>
            {/* Subtle decorative back border/shadow shape */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gray-200/50 rounded-3xl -z-10 bg-gray-50/10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
