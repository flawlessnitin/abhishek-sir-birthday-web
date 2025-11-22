import { useState } from 'react';
import { motion } from 'motion/react';
import { PartyPopper } from 'lucide-react';

export function InteractiveButton() {
  const [isClicked, setIsClicked] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = () => {
    setIsClicked(true);
    
    // Generate confetti
    const newConfetti = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    }));
    
    setConfetti(newConfetti);

    setTimeout(() => {
      setIsClicked(false);
      setConfetti([]);
    }, 3000);
  };

  return (
    <div className="relative inline-block">
      {/* Confetti particles */}
      {confetti.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-3 h-3 rounded-full"
          style={{
            background: `hsl(${Math.random() * 60 + 30}, 100%, 60%)`,
            left: '50%',
            top: '50%',
          }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{
            x: particle.x * 3,
            y: particle.y * 3,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      ))}

      <motion.button
        onClick={handleClick}
        className="relative px-12 py-6 text-[22px] font-['Playfair_Display:600',serif] text-black bg-gradient-to-r from-[#d4af37] to-[#f5d76e] rounded-full shadow-[0_0_40px_rgba(212,175,55,0.6)] overflow-hidden group tracking-wider"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#f5d76e] to-[#d4af37]"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: ['-200%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <span className="relative flex items-center gap-3">
          <motion.div
            animate={isClicked ? { rotate: 360 } : {}}
            transition={{ duration: 0.5 }}
          >
            <PartyPopper className="w-6 h-6" />
          </motion.div>
          {isClicked ? 'CHEERS!' : 'CELEBRATE'}
        </span>
      </motion.button>

      {/* Glow rings */}
      {isClicked && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#d4af37]"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#f5d76e]"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
        </>
      )}
    </div>
  );
}