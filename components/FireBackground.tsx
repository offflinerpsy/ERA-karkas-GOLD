import React, { useMemo } from 'react';

const FireBackground: React.FC = () => {
  // Generate random particles for the fire effect
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
      size: `${20 + Math.random() * 60}px`, // Varied sizes for natural look
      drift: `${Math.random() * 50 - 25}px`, // Random horizontal movement
    }));
  }, []);

  return (
    <div className="absolute inset-x-0 bottom-0 h-[50vh] overflow-hidden pointer-events-none z-0">
      <style>{`
        @keyframes fire-rise {
          0% {
            transform: translateY(100%) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100%) scale(0);
            opacity: 0;
          }
        }
      `}</style>
      
      {/* Base glow for the core of the fire */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-600/30 via-red-900/10 to-transparent blur-3xl" />

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-0 rounded-full bg-orange-500 mix-blend-screen blur-xl"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: 0, // Starts at 0 handled by keyframe
            '--tw-translate-x': p.drift, // Used if we wanted more complex drift, but simple translateY is mostly enough
            animation: `fire-rise ${p.duration} ease-in infinite`,
            animationDelay: p.delay,
            backgroundColor: p.id % 2 === 0 ? '#ff5a1f' : '#ff9100', // Alternate between red-orange and amber
          }}
        />
      ))}
      
      {/* Overlay gradient to smooth the top edge of the fire area so it fades out nicely */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-transparent" />
    </div>
  );
};

export default FireBackground;