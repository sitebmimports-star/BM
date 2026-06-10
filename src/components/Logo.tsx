import React from 'react';

interface LogoProps {
  className?: string; // e.g. 'h-8' or similar
  isLight?: boolean;
}

export default function Logo({ className = 'h-9', isLight = false }: LogoProps) {
  return (
    <div className="flex items-center select-none">
      {/* Actual Logo Image from the requested URL - Enlarged and cropped to remove outer black borders */}
      <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-xl overflow-hidden shrink-0 flex items-center justify-center my-0.5">
        <img
          src="https://pbs.twimg.com/media/HJ0KfsOW0AAaeM3?format=jpg&name=large"
          alt="BM Imports Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-[1.38] transition-all duration-300 hover:scale-[1.45]"
        />
      </div>
    </div>
  );
}
