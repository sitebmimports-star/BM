import { useState, useMemo, useEffect } from 'react';
import { PRODUTOS, CATEGORIAS } from '../data';
import { Product } from '../types';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { Search, SlidersHorizontal, Layers, ChevronRight, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function Products({ selectedCategory, onSelectCategory }: ProductsProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Dynamic search suggestions / placeholder changes based on category selected
  const getSearchPlaceholder = () => {
    switch (selectedCategory) {
      case 'iphone':
        return 'Buscar por IPhone 15, Pro Max, 14, 13...';
      case 'ipad':
        return 'Buscar por IPad Pro, IPad Air, 10ª Geração...';
      case 'macbook':
        return 'Buscar por MacBook Pro 14", M3 Pro, Air, iMac, Mac Mini...';
      case 'watch':
        return 'Buscar por Watch Ultra 2, Series 9, SE...';
      case 'airpods':
        return 'Buscar por AirPods Pro, Max, JBL Boombox 3...';
      case 'acessorios':
        return 'Buscar por PlayStation 5, carregador, cabo, capinha...';
      default:
        return 'Buscar por aparelhos em estoque (ex: IPhone 15, M2, Pro Max...)';
    }
  };

  const allCategories = useMemo(() => {
    return [
      {
        id: 'todos',
        name: 'Todos os Produtos',
        description: 'Explore todo o nosso catálogo de aparelhos Apple e periféricos premium.',
        imageUrl: '/src/assets/images/todos apple.png',
      },
      ...CATEGORIAS,
    ];
  }, []);

  const getCategoryDetails = (id: string) => {
    switch (id) {
      case 'todos':
        return {
          title: 'Todos os Aparelhos Disponíveis',
          description: 'Navegue por todo o catálogo ativo da BM Imports de novos e seminovos em estoque.',
          badge: 'Ecossistema Completo',
        };
      case 'iphone':
        return {
          title: 'IPhones Novos & Seminovos de Elite',
          description: 'Aparelhos rigorosamente inspecionados com 100% de autenticidade garantida. Peça já o seu próximo IPhone!',
          badge: 'Linha Premium IPhone',
        };
      case 'ipad':
        return {
          title: 'IPad - Produtividade & Tela Infinita',
          description: 'Potência definitiva para estudos, criação artística ou negócios em qualquer lugar com telas impecáveis.',
          badge: 'Linha Inteligente IPad',
        };
      case 'macbook':
        return {
          title: 'Mac & MacBook - Desempenho Extremo',
          description: 'Computadores de alta velocidade equipados com os revolucionários chips Apple Silicon M2, M3 e M4 Pro.',
          badge: 'Máquinas Profissionais Mac',
        };
      case 'watch':
        return {
          title: 'Apple Watch - Conectividade & Saúde',
          description: 'Monitore seus batimentos, exercícios físicos e conexões direto no seu pulso com a maior durabilidade do mercado.',
          badge: 'Saúde e Esporte Watch',
        };
      case 'airpods':
        return {
          title: 'AirPods & Som - Áudio Imersivo',
          description: 'Experiência sonora sem distorções, com abafamento inteligente de ruído e as melhores caixas acústicas originais.',
          badge: 'Áudio de Alta Resolução',
        };
      case 'acessorios':
        return {
          title: 'Acessórios & Consoles Oficiais',
          description: 'Películas, capinhas magnéticas com padrão de qualidade militar, fontes homologadas rápido e console PS5 Slim.',
          badge: 'Acessórios & Videogames',
        };
      default:
        return {
          title: 'Produtos Selecionados',
          description: 'Explore nossos produtos catalogados de alto nível.',
          badge: 'Seleção Exclusiva',
        };
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUTOS.filter((product) => {
      // 1. Category check
      const matchCategory =
        selectedCategory === 'todos' || product.category === selectedCategory;

      // 2. Search query check
      const matchSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specs.some((spec) =>
          spec.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeCategoryMeta = getCategoryDetails(selectedCategory);

  // Freeze background scrolling when a category modal is open
  const isModalOpen = selectedCategory && selectedCategory !== '';
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <section id="categorias" className="py-20 sm:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading for unified Category catalog */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3] mb-3 block">
            Catálogo Oficial Elegante
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-gray-900"
          >
            Navegue por Categoria
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-gray-500 font-sans"
          >
            Selecione uma linha de produtos abaixo para ver imediatamente o estoque de modelos, especificações e condições disponíveis.
          </motion.p>
        </div>

        {/* Categories Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-5 mb-6">
          {allCategories.map((category, index) => {
            const isActive = selectedCategory === category.id;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => {
                  onSelectCategory(category.id);
                  setSearchQuery(''); // clear query on category switch
                }}
                className={`relative rounded-3xl overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 border flex flex-col justify-between cursor-pointer group min-h-[220px] ${
                  isActive
                    ? 'border-black ring-4 ring-black/10 scale-[1.03] shadow-md bg-neutral-950 text-white'
                    : 'bg-white text-gray-900 border-gray-100 hover:border-gray-200'
                }`}
              >
                {/* Active Indicator Badge */}
                {isActive && (
                  <div className="absolute top-3 left-3 bg-white text-black px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase z-20 flex items-center gap-1 shadow-xs">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                    <span>Selecionado</span>
                  </div>
                )}

                {/* Aspect ratio image background wrapper */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100 shrink-0">
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className={`absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-60 ${
                    isActive ? 'from-black/80' : 'from-black/40'
                  }`} />
                </div>

                {/* Card description and Action label */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className={`text-base font-bold font-sans transition-colors ${
                      isActive ? 'text-white' : 'text-gray-900 group-hover:text-black'
                    }`}>
                      {category.name}
                    </h3>
                    <p className={`mt-1.5 text-[11px] font-sans line-clamp-2 leading-relaxed ${
                      isActive ? 'text-neutral-300' : 'text-gray-500'
                    }`}>
                      {category.description}
                    </p>
                  </div>
                  
                  <div className={`mt-4 pt-3.5 border-t flex items-center text-xs font-bold transition-colors ${
                    isActive 
                      ? 'border-neutral-800 text-white' 
                      : 'border-gray-100 text-neutral-800 group-hover:text-black'
                  }`}>
                    <span>{isActive ? 'Selecionado' : 'Ver ofertas'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ml-1 transform transition-transform ${
                      isActive ? 'rotate-90 translate-x-0.5' : 'group-hover:translate-x-1'
                    }`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Elegant Category Products Popup Modal overlay */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden">
              {/* Blur backdrop backing the panel */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => onSelectCategory('')}
                className="absolute inset-0 bg-neutral-950/85 backdrop-blur-md cursor-pointer"
              />

              {/* Central Card with scrollable custom showcase */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', duration: 0.45, bounce: 0.1 }}
                className="relative w-full max-w-6xl bg-white rounded-[32px] border border-gray-100 shadow-2xl flex flex-col max-h-[88vh] sm:max-h-[85vh] overflow-hidden z-10"
              >
                {/* Dismiss X button */}
                <button
                  onClick={() => onSelectCategory('')}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-black transition-colors z-20 cursor-pointer shadow-xs"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="px-5 sm:px-8 pt-7 pb-4 border-b border-gray-100 shrink-0 select-none bg-gray-50/50">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-black text-white rounded-full text-[9px] font-bold tracking-widest uppercase mb-2">
                    {activeCategoryMeta?.badge || '💎 Premium'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-gray-900 pr-10">
                    {activeCategoryMeta?.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 font-sans leading-relaxed">
                    {activeCategoryMeta?.description}
                  </p>
                </div>

                {/* Modal Scrollable Body */}
                <div className="flex-grow overflow-y-auto px-5 sm:px-8 py-5">
                  
                  {/* Warranty and Trust bar inside the dialog */}
                  <div className="mb-6 bg-neutral-50 text-gray-900 rounded-[24px] p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative border border-gray-200/60 shadow-xs">
                    <div className="relative z-1 max-w-xl">
                      <span className="inline-flex items-center gap-1 bg-neutral-200/80 text-neutral-700 text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2">
                        Garantia Ativa Oficial & Certificada
                      </span>
                      <h4 className="text-base font-extrabold font-sans tracking-tight text-gray-950">
                        Produtos com procedência e responsabilidade da BM Imports
                      </h4>
                      <p className="mt-1 text-[11px] text-gray-500 font-sans leading-relaxed">
                        • <strong className="text-gray-800">Novos (Lacrados):</strong> 1 ano de Garantia Oficial Apple direto de fábrica.<br />
                        • <strong className="text-gray-800">Seminovos:</strong> Inspecionados minuciosamente com 3 meses de garantia interna pela BM Imports.
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-2 relative z-1 w-full md:w-auto h-auto">
                      <div className="bg-white border border-gray-200/80 rounded-xl p-3 flex flex-col items-center text-center flex-grow md:w-24 shadow-sm">
                        <span className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">Lacrados</span>
                        <span className="text-[11px] font-extrabold text-[#0071e3] mt-0.5 whitespace-nowrap">1 ano Apple</span>
                      </div>
                      <div className="bg-white border border-gray-200/80 rounded-xl p-3 flex flex-col items-center text-center flex-grow md:w-24 shadow-sm">
                        <span className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">Seminovos</span>
                        <span className="text-[11px] font-extrabold text-gray-950 mt-0.5 whitespace-nowrap">3 meses Loja</span>
                      </div>
                    </div>
                  </div>

                  {/* Search and counting controllers */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6 pb-2">
                    <div className="relative w-full sm:max-w-md">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                        <Search className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        placeholder={getSearchPlaceholder()}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-11 pr-14 py-2.5 bg-gray-50 border border-gray-150 focus:border-gray-300 outline-none text-xs sm:text-sm font-sans font-medium rounded-2xl transition-all focus:bg-white focus:ring-4 focus:ring-black/2"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery('')}
                          className="absolute inset-y-0 right-0 flex items-center pr-4 text-xs font-bold text-gray-400 hover:text-black cursor-pointer uppercase tracking-wider font-sans"
                        >
                          Limpar
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 self-start sm:self-center text-[10px] text-gray-400 font-bold uppercase tracking-wider font-sans">
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      <span>{filteredProducts.length} itens encontrados</span>
                    </div>
                  </div>

                  {/* Product Grid inside Modal */}
                  <AnimatePresence mode="popLayout">
                    {filteredProducts.length > 0 ? (
                      <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                      >
                        {filteredProducts.map((product) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                            onConsult={(p) => setActiveProduct(p)}
                          />
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center py-14 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200 p-6"
                      >
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto text-gray-400 mb-4">
                          <Layers className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 font-sans">Nenhum aparelho corresponde à busca</h3>
                        <p className="mt-1.5 text-xs text-gray-400 font-sans max-w-sm mx-auto leading-relaxed">
                          Tente digitar outros termos ou mude para outra linha. Temos reposições quase diárias de aparelhos.
                        </p>
                        <button
                          onClick={() => {
                            onSelectCategory('todos');
                            setSearchQuery('');
                          }}
                          className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-full text-[10px] font-bold uppercase tracking-widest cursor-pointer font-sans"
                        >
                          Redefinir Filtros
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Modular Product Specifications detailed popup Drawer */}
        <ProductDetailModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
        />
      </div>
    </section>
  );
}
