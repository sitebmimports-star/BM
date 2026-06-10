import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Search, ShieldCheck, FileCheck2, Cpu, HeartHandshake, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TrustSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const criteria = [
    {
      id: 'c1',
      title: 'Procedência dos Aparelhos',
      icon: FileCheck2,
      subtitle: 'Histórico 100% transparente',
      description: 'Asseguramos que todos os aparelhos do nosso portfólio possuem procedência legítima e histórico verificado.',
      tips: [
        'Consulta de IMEI limpo e sem qualquer impedimento nos sistemas da Anatel.',
        'Certificação de histórico antes mesmo do recebimento do aparelho pela BM Imports.'
      ]
    },
    {
      id: 'c2',
      title: 'Verificação dos Produtos',
      icon: Cpu,
      subtitle: 'Rigores de Hardware e Software',
      description: 'Cada dispositivo seminovo passa por um checklist técnico rigoroso conduzido por especialistas.',
      tips: [
        'Validação completa dos sensores biométricos (Face ID e Touch ID) e visor True Tone.',
        'Análise da integridade da carcaça, resposta ao toque e percentuais reais de saúde da bateria.'
      ]
    },
    {
      id: 'c3',
      title: 'Garantias Disponíveis',
      icon: ShieldCheck,
      subtitle: 'Proteção sólida assegurada',
      description: 'Oferecemos total cobertura de garantia clara para seu conforto e segurança continuada.',
      tips: [
        'Todos os aparelhos lacrados (Novos) da Apple possuem 1 ano de Garantia Oficial Apple direto de fábrica.',
        'Os aparelhos seminovos (seminovos/usados) possuem 3 meses de garantia contratual pela BM Imports.'
      ]
    },
    {
      id: 'c4',
      title: 'Atendimento Pós-Venda',
      icon: HeartHandshake,
      subtitle: 'Suporte humanizado e ágil',
      description: 'Nossa parceria não termina na venda. Apoiamos sua adaptação ao novo dispositivo.',
      tips: [
        'Apoio prioritário na migração segura de todos seus dados, fotos e contas do aparelho antigo.',
        'Linha direta de WhatsApp disponível para solucionar dúvidas operacionais e de usabilidade.'
      ]
    },
    {
      id: 'c5',
      title: 'Processo de Compra Seguro',
      icon: Search,
      subtitle: 'Relação comercial baseada na confiança',
      description: 'Garantimos tranquilidade do primeiro contato à entrega física de suas soluções de tecnologia.',
      tips: [
        'Possibilidade de entrega em mãos com testagem prévia completa para regiões selecionadas.',
        'Envios nacionais monitorados com seguro total declarado contra furto ou extravio.'
      ]
    }
  ];

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      if (clientWidth > 0) {
        // Find nearest child element index currently snap-centered or visible
        const children = containerRef.current.children;
        let closestIndex = 0;
        let minDiff = Infinity;
        
        for (let i = 0; i < children.length; i++) {
          const child = children[i] as HTMLElement;
          const diff = Math.abs(child.offsetLeft - containerRef.current.offsetLeft - scrollLeft);
          if (diff < minDiff) {
            minDiff = diff;
            closestIndex = i;
          }
        }
        
        setActiveIndex(closestIndex);
      }
    }
  };

  const slideTo = (index: number) => {
    if (containerRef.current) {
      const children = containerRef.current.children;
      if (children && children[index]) {
        const child = children[index] as HTMLElement;
        const targetScroll = child.offsetLeft - containerRef.current.offsetLeft;
        containerRef.current.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
        setActiveIndex(index);
      }
    }
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % criteria.length;
    slideTo(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + criteria.length) % criteria.length;
    slideTo(prevIdx);
  };

  return (
    <section id="confianca" className="py-20 sm:py-28 bg-white border-y border-gray-150">
      {/* Scope CSS to hide standard scrollbar in swiper */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title with integrated Slider Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3"
            >
              Nossos Valores e Métodos
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-gray-900"
            >
              Transparência em cada detalhe.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-base text-gray-500 font-sans leading-relaxed"
            >
              Acreditamos que tecnologia deve inspirar segurança. Veja as diretrizes essenciais que aplicamos para prover uma experiência ética e transparente aos nossos clientes.
            </motion.p>
          </div>

          {/* Slider controls (Chevrons) - Always visible and highly usable */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-gray-200 bg-white hover:bg-gray-50 active:bg-gray-100 flex items-center justify-center text-gray-700 hover:text-black transition-colors focus:outline-none cursor-pointer shadow-3xs"
              aria-label="Tópico anterior"
            >
              <ChevronLeft className="w-5 h-5 shrink-0" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-gray-200 bg-white hover:bg-gray-50 active:bg-gray-100 flex items-center justify-center text-gray-700 hover:text-black transition-colors focus:outline-none cursor-pointer shadow-3xs"
              aria-label="Próximo tópico"
            >
              <ChevronRight className="w-5 h-5 shrink-0" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            ref={containerRef}
            onScroll={handleScroll}
            className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 px-1"
          >
            {criteria.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="w-[85vw] sm:w-[420px] md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] shrink-0 snap-center bg-gray-50/50 rounded-[32px] p-8 sm:p-10 border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-3xs flex items-center justify-center text-black">
                        <Icon className="w-5 h-5 shrink-0" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.subtitle}</span>
                        <h3 className="text-lg font-bold font-sans text-gray-950 leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 font-sans leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-6 space-y-3.5">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-900">Como é feito:</h4>
                      {item.tips.map((tip, tIdx) => (
                        <div key={tIdx} className="flex gap-2.5 items-start">
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-1.5 shrink-0" />
                          <p className="text-xs text-gray-500 leading-relaxed font-sans">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">BM Imports Garantido</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Slider Pagination Dots at the bottom */}
          <div className="flex justify-center items-center gap-2.5 mt-8">
            {criteria.map((_, index) => (
              <button
                key={index}
                onClick={() => slideTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
                  activeIndex === index 
                    ? 'w-7 bg-black' 
                    : 'w-2.5 bg-gray-200 hover:bg-gray-350'
                }`}
                aria-label={`Ir para tópico ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
