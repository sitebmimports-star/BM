import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { COMPANHIA_WHATSAPP_NUMBER, COMPANHIA_WHATSAPP_DEFAULT_MSG } from '../data';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';

interface HeaderProps {
  onNavigate: (sectionId: string, categoryId?: string) => void;
  activeSection: string;
  activeCategory?: string;
}

export default function Header({ onNavigate, activeSection, activeCategory }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'iPhone', id: 'produtos', category: 'iphone' },
    { label: 'iPad', id: 'produtos', category: 'ipad' },
    { label: 'MacBook', id: 'produtos', category: 'macbook' },
    { label: 'Apple Watch', id: 'produtos', category: 'watch' },
    { label: 'AirPods', id: 'produtos', category: 'airpods' },
    { label: 'Acessórios', id: 'produtos', category: 'acessorios' },
    { label: 'Contato', id: 'contato' },
  ];

  const encodedText = encodeURIComponent(COMPANHIA_WHATSAPP_DEFAULT_MSG);
  const whatsappUrl = `https://wa.me/${COMPANHIA_WHATSAPP_NUMBER}?text=${encodedText}`;

  const handleMenuClick = (id: string, category?: string) => {
    onNavigate(id, category);
    setIsOpen(false);
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs'
          : 'bg-white border-b border-gray-100/50 shadow-2xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => handleMenuClick('inicio')}
          >
            <Logo className="h-9" />
          </div>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => {
              const isActive = item.category
                ? activeSection === 'produtos' && activeCategory === item.category
                : activeSection === item.id;

              return (
                <button
                  key={`${item.label}-${item.id}`}
                  onClick={() => handleMenuClick(item.id, item.category)}
                  className={`text-[14px] font-medium transition-colors cursor-pointer relative py-2 ${
                    isActive
                      ? 'text-black font-semibold'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden md:flex">
            <a
              id="btn-whatsapp-header"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-tight text-white bg-black hover:bg-gray-800 transition-colors uppercase rounded-full shadow-xs gap-1.5 focus:ring-2 focus:ring-offset-2 focus:ring-black cursor-pointer group"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-50 focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={`${item.label}-${item.id}-mobile`}
                  onClick={() => handleMenuClick(item.id, item.category)}
                  className="block w-full text-left py-3 px-3 rounded-lg text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 px-3">
                <a
                  id="btn-whatsapp-header-mobile"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-black hover:bg-gray-850 rounded-xl gap-2 transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Mandar Mensagem</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
