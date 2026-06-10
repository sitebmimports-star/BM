import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5511976359458?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20sobre%20as%20solu%C3%A7%C3%B5es%20em%20tecnologia%20e%20aparelhos%20dispon%C3%ADveis%20na%20BM%20Imports."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a BM Imports no WhatsApp"
      className="fixed bottom-5 right-5 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-all duration-300 hover:scale-110"
    >
      <WhatsAppIcon className="h-9 w-9" />
    </a>
  );
}
