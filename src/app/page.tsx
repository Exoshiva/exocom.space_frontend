import ScrollVelocity from '@/components/ScrollVelocity';

export default function Page() {
  // Genau auf 13 Zeilen eingekürzt
  const textRows = Array(13).fill('UNDER CONSTRUCTION');

  return (
    // h-screen und overflow-hidden fixieren die Seite, sodass nicht mehr gescrollt werden kann
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
      <style>{`html{scrollbar-width:none}html::-webkit-scrollbar{display:none}body{overflow:hidden}`}</style>

      <div className="w-full">
        <ScrollVelocity
          texts={textRows}
          velocity={100} // Der Text läuft durch die Grundgeschwindigkeit weiterhin automatisch
          skewWithVelocity={0}
          scaleWithVelocity={0}
          draggable
          fontSize={80} 
          fontWeight={700}
          className="custom-scroll-text uppercase tracking-tighter"
          numCopies={6}
          damping={50}
          stiffness={400}
          separator=""
          fadeEdges={false}
          outlineAlternate={true} 
          gap={0}
          pauseOnHover={false}
        />
      </div>
    </main>
  );
}