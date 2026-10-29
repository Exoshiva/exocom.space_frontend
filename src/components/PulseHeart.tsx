'use client';

import { useState } from 'react';

export default function PulseHeart() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(1205); 
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLike = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setLiked(!liked);
      setCount(prev => liked ? prev - 1 : prev + 1);
    }, 150);

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <button
      onClick={handleLike}
      className="group flex items-center space-x-3 bg-[#111111] hover:bg-[#151515] border border-[#333333] rounded-full px-5 py-2.5 transition-colors cursor-pointer select-none shadow-inner"
    >
      <div className="relative flex items-center justify-center">
        {isAnimating && !liked && (
          <span className="absolute w-8 h-8 rounded-full bg-[#FF4B6E]/30 animate-ping" />
        )}
        
        <svg
          viewBox="0 0 24 24"
          className={`w-5 h-5 transition-transform duration-150 ease-in-out ${
            isAnimating ? 'scale-0' : 'scale-100'
          } ${
            liked 
              ? 'fill-[#FF4B6E] text-[#FF4B6E]' 
              : 'fill-transparent text-[#888888] group-hover:text-[#aaaaaa]'
          }`}
          strokeWidth="2.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>
      <span className="text-white font-medium text-sm tabular-nums tracking-wide">
        {count.toLocaleString('de-DE')}
      </span>
    </button>
  );
}