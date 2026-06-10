import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5511976359458"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a BM Imports no WhatsApp"
      className="fixed bottom-5 right-5 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_35px_rgba(37,211,102,0.45)]"
    >
      <WhatsAppIcon className="h-9 w-9" />
    </a>
  );
}
