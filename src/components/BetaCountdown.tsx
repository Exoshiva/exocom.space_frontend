'use client';

import { useState, useEffect } from 'react';
import Counter from './Counter';

// WICHTIG: Die Hilfskomponente muss AUSSERHALB der Hauptfunktion definiert werden,
// damit React sie beim Sekunden-Tick nicht jede Sekunde zerstört und neu aufbaut.
const TimeBlock = ({ value, label }: { value: number, label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-[#1a1a24] border border-[#2a2a35] rounded-xl px-5 py-4 flex items-center justify-center min-w-[80px] shadow-inner">
      <Counter
        value={value}
        fontSize={56}
        fontWeight={600}
        direction="down"
        duration={0.6}
        minDigits={2}
        motionBlur={true}
        textColor="white"
        tabular={true}
      />
    </div>
    <span className="text-[#888888] text-xs font-medium mt-4 uppercase tracking-widest">{label}</span>
  </div>
);

export default function BetaCountdown() {
  // Dein Ziel-Datum 
  const targetDate = new Date('2027-02-13T12:00:00').getTime(); 

  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!isMounted) return null; 

  return (
    <div className="bg-[#111111] border border-[#333333] rounded-2xl p-10 max-w-3xl mx-auto flex flex-col items-center shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />

      <h3 className="text-[#aaaaaa] text-sm font-medium mb-8 z-10">Public beta opens in</h3>
      
      <div className="flex items-center space-x-3 md:space-x-6 z-10">
        <TimeBlock value={timeLeft.days} label="Days" />
        <span className="text-[#444444] text-4xl font-bold pb-8 animate-pulse">:</span>
        
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <span className="text-[#444444] text-4xl font-bold pb-8 animate-pulse">:</span>
        
        <TimeBlock value={timeLeft.minutes} label="Minutes" />
        <span className="text-[#444444] text-4xl font-bold pb-8 animate-pulse">:</span>
        
        <TimeBlock value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}