import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 mt-1">
      <img 
        src="/logo_transparent.png" 
        alt="Wumify" 
        className="w-auto select-none object-contain"
        style={{ height: '38px', filter: 'brightness(1.4) contrast(1.2) drop-shadow(0 0 12px rgba(168, 85, 247, 0.5))' }}
      />
    </div>
  );
}
