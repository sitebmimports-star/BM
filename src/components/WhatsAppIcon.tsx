import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  size?: number | string;
}

export default function WhatsAppIcon({ className = '', size }: WhatsAppIconProps) {
  const widthHeightStyle = size ? { width: size, height: size } : {};

  return (
    <img
      src="/src/assets/images/ICONE ZAP.png"
      alt="WhatsApp"
      referrerPolicy="no-referrer"
      className={`shrink-0 aspect-square object-contain ${className}`}
      style={{
        ...widthHeightStyle,
      }}
    />
  );
}
