'use client';

import { useState } from 'react';

export default function BranchedMenu() {
  // Welcher Punkt ist aktuell aktiv (weiß markiert)?
  const [activeItem, setActiveItem] = useState('quick-start');

  return (
    // Absolute Positionierung oben links, versteckt sich auf sehr kleinen Handy-Bildschirmen
    <div className="absolute top-10 left-8 z-50 hidden md:flex flex-col space-y-8 select-none">
      
      {/* Sektion 1: Getting started */}
      <div>
        <h3 className="text-white text-sm font-semibold mb-3 flex items-center">
          {/* Weißer Strich neben der aktiven Kategorie (wie im Screenshot) */}
          <span className="w-0.5 h-4 bg-white mr-3 rounded-full"></span>
          Getting started
        </h3>
        
        <ul className="relative ml-[5px] pl-5 space-y-1">
          {/* Der vertikale Stamm (Trunk) */}
          <div className="absolute top-0 bottom-4 left-0 w-px bg-[#333333]"></div>

          <MenuItem 
            id="install" 
            label="Installation" 
            activeId={activeItem} 
            onClick={() => setActiveItem('install')}
            icon={<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />}
          />
          <MenuItem 
            id="quick-start" 
            label="Quick start" 
            activeId={activeItem} 
            onClick={() => setActiveItem('quick-start')}
            icon={<path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.36c-5.96.9-11.25-5.33-11.25-5.33s-1.17-5.54 3.73-8.05a6.002 6.002 0 017.33-1.6l-2.09 2.09c-.3.3-.45.72-.45 1.15v2.09c0 .41.17.8.46 1.09l2.09 2.09c.29.29.68.46 1.09.46h2.08c.43 0 .85-.15 1.15-.45l2.09-2.09c.56-.56 1.5-.56 2.06 0 .56.56.56 1.5 0 2.06l-4.24 4.24z" />}
          />
          <MenuItem 
            id="config" 
            label="Configuration" 
            activeId={activeItem} 
            onClick={() => setActiveItem('config')}
            icon={<path strokeLinecap="round" strokeLinejoin="round" d="M10.34 3.251l-.226 2.038a8.002 8.002 0 00-1.782.981l-1.954-.627a1.5 1.5 0 00-1.884.84l-1.4 3.5a1.5 1.5 0 00.324 1.764l1.528 1.341a8.03 8.03 0 000 1.954l-1.528 1.34a1.5 1.5 0 00-.324 1.765l1.4 3.5a1.5 1.5 0 001.884.84l1.954-.627c.56.402 1.156.74 1.782.98l.226 2.039a1.5 1.5 0 001.493 1.332h2.8a1.5 1.5 0 001.493-1.332l.226-2.039a8.005 8.005 0 001.782-.98l1.954.627a1.5 1.5 0 001.884-.84l1.4-3.5a1.5 1.5 0 00-.324-1.765l-1.528-1.34a8.03 8.03 0 000-1.954l1.528-1.34a1.5 1.5 0 00.324-1.765l-1.4-3.5a1.5 1.5 0 00-1.884-.84l-1.954.627a8.003 8.003 0 00-1.782-.981l-.226-2.038A1.5 1.5 0 0013.86 2h-2.8a1.5 1.5 0 00-1.493 1.251z" />}
          />
        </ul>
      </div>

      {/* Sektion 2: Components */}
      <div>
        <h3 className="text-[#888888] text-sm font-semibold mb-3 flex items-center">
          <span className="w-0.5 h-4 bg-transparent mr-3"></span>
          Components
        </h3>
        
        <ul className="relative ml-[5px] pl-5 space-y-1">
          <div className="absolute top-0 bottom-4 left-0 w-px bg-[#333333]"></div>

          <MenuItem 
            id="buttons" 
            label="Buttons" 
            activeId={activeItem} 
            onClick={() => setActiveItem('buttons')}
            icon={<path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />}
          />
          <MenuItem 
            id="typography" 
            label="Typography" 
            activeId={activeItem} 
            onClick={() => setActiveItem('typography')}
            icon={<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l7.5-15 7.5 15m-15 0h3m12 0h-3m-9-3h9" />}
          />
        </ul>
      </div>

    </div>
  );
}

// Interne Hilfskomponente für die einzelnen Menüpunkte und die gebogene Linie
function MenuItem({ id, label, activeId, onClick, icon }: { id: string, label: string, activeId: string, onClick: () => void, icon: React.ReactNode }) {
  const isActive = activeId === id;
  
  return (
    <li 
      onClick={onClick}
      className={`relative flex items-center py-1.5 cursor-pointer transition-colors group ${
        isActive ? 'text-white' : 'text-[#888888] hover:text-[#bbbbbb]'
      }`}
    >
      {/* Die geschwungene Linie (Branch), die zum Icon führt */}
      <div className={`absolute left-[-20px] top-1/2 w-4 h-full -translate-y-full border-b border-l rounded-bl-xl transition-colors ${
        isActive ? 'border-white' : 'border-[#333333] group-hover:border-[#555555]'
      }`}></div>
      
      {/* Das Icon */}
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-3 relative z-10 bg-[#050505]">
        {icon}
      </svg>
      
      {/* Text */}
      <span className="text-sm font-medium">{label}</span>
    </li>
  );
}