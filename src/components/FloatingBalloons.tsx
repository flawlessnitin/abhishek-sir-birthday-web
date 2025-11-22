import { motion } from 'motion/react';

export function FloatingBalloons() {
  const balloons = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 8 + Math.random() * 6,
    size: 30 + Math.random() * 40,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className="absolute"
          style={{
            left: `${balloon.x}%`,
            bottom: '-100px',
          }}
          animate={{
            y: [0, -window.innerHeight - 200],
            x: [0, Math.sin(balloon.id) * 100],
            rotate: [0, Math.random() * 20 - 10],
          }}
          transition={{
            duration: balloon.duration,
            delay: balloon.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Balloon */}
          <div className="relative">
            <motion.div
              style={{
                width: `${balloon.size}px`,
                height: `${balloon.size * 1.2}px`,
              }}
              className="rounded-full bg-gradient-to-br from-[#d4af37] to-[#f5d76e] opacity-30 shadow-[0_0_20px_rgba(212,175,55,0.5)]"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* String */}
            <div
              className="absolute left-1/2 top-full w-[1px] bg-[#d4af37]/40"
              style={{ height: `${balloon.size}px` }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
