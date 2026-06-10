import { Product } from '../types';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onConsult: (product: Product) => void;
  key?: string;
}

export default function ProductCard({ product, onConsult }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="bg-white text-gray-900 border border-gray-150/80 shadow-2xs hover:border-gray-250 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] rounded-[28px] overflow-hidden flex flex-col justify-between group transition-all duration-300 cursor-pointer h-full relative aspect-[3/3.8] sm:aspect-auto sm:min-h-[460px]"
      onClick={() => onConsult(product)}
    >
      {/* Container holding the image and background glow */}
      <div className={`absolute inset-x-0 top-0 overflow-hidden bg-white ${
        ['ipad', 'acessorios', 'airpods', 'watch', 'macbook'].includes(product.category)
          ? 'h-[58%] flex items-center justify-center p-6 sm:p-8 mt-2'
          : 'inset-0 flex items-center justify-center'
      }`}>
        {/* Soft radial background glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-radial from-gray-50 to-transparent" />
        
        <img
          src={product.imageUrl}
          alt={product.name}
          referrerPolicy="no-referrer"
          className={`transition-transform duration-500 ease-out group-hover:scale-[1.04] z-1 ${
            ['ipad', 'acessorios', 'airpods', 'watch', 'macbook'].includes(product.category)
              ? 'max-h-full max-w-full object-contain'
              : 'w-full h-full object-cover'
          }`}
        />
      </div>

      {/* Dynamic smooth shadow overlay (esfumaçado de sombra na parte de baixo) */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none z-10" />

      {/* Content overlaid at the bottom */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end z-20 text-white pointer-events-auto">
        <h3 className="text-lg sm:text-xl md:text-2xl font-black font-sans tracking-tight text-white leading-tight drop-shadow-sm">
          {product.name}
        </h3>
        <p className="mt-1 text-[11px] sm:text-xs text-white/85 font-sans font-medium leading-relaxed drop-shadow-sm">
          {product.category === 'iphone'
            ? 'Temos todas as capacidades'
            : 'Procura outro modelo específico? Toque para nos chamar no WhatsApp'}
        </p>

        <div className="mt-3 sm:mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onConsult(product);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 sm:py-3 px-4 sm:px-6 bg-black text-white hover:bg-neutral-800 rounded-xl text-[10px] sm:text-xs font-bold transition-all shadow-2xs hover:shadow-md cursor-pointer font-sans"
          >
            <span>Consultar Disponibilidade</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

