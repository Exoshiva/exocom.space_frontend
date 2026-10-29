'use client';

import BetaCountdown from '@/components/BetaCountdown';
import PulseHeart from '@/components/PulseHeart';
import CardNav from '@/components/CardNav';

export default function Page() {
  const marqueeText = Array(15).fill("UNDER CONSTRUCTION").join(" • ");

  // Deine Inhaltskarten für das Dropdown
  const navItems = [
    {
      label: 'About',
      description: 'The people and the story behind the studio.',
      links: [
        { label: 'Company', href: '/company' },
        { label: 'Careers', href: '/careers' }
      ]
    },
    {
      label: 'Projects',
      description: 'Selected work from the last few years.',
      links: [
        { label: 'Featured', href: '/featured' },
        { label: 'Case studies', href: '/case-studies' }
      ]
    },
    {
      label: 'Contact',
      description: 'Say hello, we read everything.',
      links: [
        { label: 'Email', href: 'mailto:hello@exocom.space' },
        { label: 'LinkedIn', href: 'https://linkedin.com' }
      ]
    }
  ];

  return (
    <main className="relative flex h-screen w-full flex-col overflow-hidden bg-[#050505] text-white">
      <style>{`
        html { scrollbar-width: none; }
        html::-webkit-scrollbar { display: none; }
        body { overflow: hidden; }
        
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll-left 30s linear infinite;
        }
      `}</style>

      {/* CardNav - Oben zentriert auf maximaler Breite */}
      <div className="absolute top-6 left-0 right-0 z-50 px-4 w-full flex justify-center">
        <CardNav
          logo={<span className="font-bold tracking-widest text-white text-lg drop-shadow-md">exocom.space</span>}
          logoAlt="Exocom"
          items={navItems}
          cta={{ label: 'Get started', href: '/signup' }}
          cardEffect="rise"
          openOn="click"
          surface="glass"
          stagger={0.12}
          bounce={0.2}
          menuLabel
          speed={1}
          cardHeight={176}
          maxWidth={1200}
          intro
        />
      </div>

      {/* Zentrierter Hauptbereich mit Timer, Waitinglist UND Pulse Heart */}
      <div className="flex-1 flex flex-col items-center justify-center w-full px-4 relative z-10 space-y-10 mt-10">
        
        <BetaCountdown />

        <div className="flex flex-col items-center space-y-5 w-full max-w-sm transition-all duration-700 ease-out">
          <h4 className="text-[#888888] text-xs font-semibold tracking-[0.2em] uppercase">
            Join the Waitinglist
          </h4>
          
          <form className="flex w-full items-center space-x-2 bg-[#111111] p-1.5 rounded-full border border-[#333333] shadow-inner transition-colors hover:border-[#555555] focus-within:border-[#888888]">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-[#444444] focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-[#1a1a24] border border-[#2a2a35] px-6 py-2.5 text-sm font-medium text-[#aaaaaa] transition-all hover:bg-white hover:text-black hover:border-white shadow-sm"
            >
              Join
            </button>
          </form>
        </div>

        <div className="pt-2">
          <PulseHeart />
        </div>

      </div>

      {/* Footer-Bereich */}
      <div className="w-full flex flex-col z-10 border-t border-[#1a1a24] bg-[#0a0a0a]/90 backdrop-blur-md pb-6 pt-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <div className="w-full overflow-hidden flex whitespace-nowrap opacity-40 select-none">
          <div className="animate-scroll text-xl md:text-2xl font-bold tracking-[0.2em] text-[#555555]">
            <span className="pr-4">{marqueeText}</span>
            <span className="pr-4">{marqueeText}</span>
          </div>
        </div>
        

      </div>
    </main>
  );
}