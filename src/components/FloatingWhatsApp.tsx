import WhatsAppIcon from './WhatsAppIcon';
import { COMPANHIA_WHATSAPP_NUMBER, COMPANHIA_WHATSAPP_DEFAULT_MSG } from '../data';

export default function FloatingWhatsApp() {
  const encodedText = encodeURIComponent(COMPANHIA_WHATSAPP_DEFAULT_MSG);
  const whatsappUrl = `https://wa.me/${COMPANHIA_WHATSAPP_NUMBER}?text=${encodedText}`;

  return (
    <a
      id="btn-whatsapp-floating"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a BM Imports pelo WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
}
