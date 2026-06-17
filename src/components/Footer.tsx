import React from 'react';
import { Instagram, MapPin, HelpCircle } from 'lucide-react';
import { COMPANHIA_WHATSAPP_NUMBER, COMPANHIA_WHATSAPP_DEFAULT_MSG } from '../data';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';

interface FooterProps {
  onNavigate: (sectionId: string, categoryId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const encodedText = encodeURIComponent(COMPANHIA_WHATSAPP_DEFAULT_MSG);
  const whatsappUrl = `https://wa.me/${COMPANHIA_WHATSAPP_NUMBER}?text=${encodedText}`;

  const handleLinkClick = (e: React.MouseEvent, id: string, cat?: string) => {
    e.preventDefault();
    onNavigate(id, cat);
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100 text-gray-600 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Logo & Manifesto Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center cursor-pointer" onClick={() => onNavigate('inicio')}>
              <Logo className="h-9" />
            </div>
            
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Uma empresa de tecnologia moderna e especializada em conectar você às melhores soluções digitais, com transparência, segurança contratual de procedência e suporte dedicado.
            </p>

            {/* Social Media Link Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-gray-150 flex items-center justify-center text-gray-400 hover:text-black hover:border-gray-300 transition-colors cursor-pointer"
                aria-label="Acompanhe no Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="btn-whatsapp-footer"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-gray-150 flex items-center justify-center hover:border-gray-300 transition-colors cursor-pointer"
                aria-label="Fale direto no WhatsApp"
              >
                <WhatsAppIcon className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-gray-950 uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#inicio" onClick={(e) => handleLinkClick(e, 'inicio')} className="hover:text-black transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" onClick={(e) => handleLinkClick(e, 'produtos')} className="hover:text-black transition-colors">
                  Todos os Produtos
                </a>
              </li>
              <li>
                <a href="#diferenciais" onClick={(e) => handleLinkClick(e, 'diferenciais')} className="hover:text-black transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#confianca" onClick={(e) => handleLinkClick(e, 'confianca')} className="hover:text-black transition-colors">
                  Checklist de Segurança
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleLinkClick(e, 'faq')} className="hover:text-black transition-colors">
                  FAQ / Dúvidas
                </a>
              </li>
            </ul>
          </div>

          {/* Categories Quick Link Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-gray-950 uppercase tracking-widest">Categorias</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#produtos" onClick={(e) => handleLinkClick(e, 'produtos', 'iphone')} className="hover:text-black transition-colors">
                  iPhone
                </a>
              </li>
              <li>
                <a href="#produtos" onClick={(e) => handleLinkClick(e, 'produtos', 'watch')} className="hover:text-black transition-colors">
                  Apple Watch
                </a>
              </li>
              <li>
                <a href="#produtos" onClick={(e) => handleLinkClick(e, 'produtos', 'airpods')} className="hover:text-black transition-colors">
                  AirPods
                </a>
              </li>
              <li>
                <a href="#produtos" onClick={(e) => handleLinkClick(e, 'produtos', 'macbook')} className="hover:text-black transition-colors">
                  MacBook
                </a>
              </li>
              <li>
                <a href="#produtos" onClick={(e) => handleLinkClick(e, 'produtos', 'acessorios')} className="hover:text-black transition-colors">
                  Acessórios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-gray-950 uppercase tracking-widest">Contato e Local</h4>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  R. da Paz, 1601 - Sala 712 - Chácara Santo Antônio (Zona Sul), São Paulo - SP, 04713-002
                </span>
              </li>
              <li className="flex items-center gap-2.5 group">
                <a
                  id="btn-whatsapp-footer-contact"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span className="font-mono font-semibold text-gray-950 group-hover:text-green-600 transition-colors">
                    +55 (11) 97635-9458
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <span className="leading-relaxed text-gray-400">
                  Agende um horário para visitar nosso escritório corporativo em São Paulo, ou consulte sobre nossas opções de entregas rápidas na região.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator */}
        <hr className="border-gray-200/60 my-8" />

        {/* Footer Legal Disclaimers */}
        <div className="space-y-4">
          <p className="text-[10px] text-gray-400 leading-relaxed text-center font-sans">
            <strong>Aviso de Isenção de Responsabilidade (Legal Disclaimer):</strong> BM Imports é um revendedor independente de equipamentos eletrônicos seminovos e novos. BM Imports não possui relação comercial direta, associação oficial, patrocínio ou parceria de licenciamento com a Apple Inc. Apple, iPhone, MacBook, iPad, AirPods, Apple Watch, Face ID, Magic Keyboard e True Tone são marcas comerciais registradas de propriedade exclusiva da Apple Inc., registradas nos EUA e em outros países.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] text-gray-450 gap-4">
            <span>CNPJ: 30.047.912/0001-80</span>
            <span>BM Imports © 2026. Todos os direitos reservados.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
