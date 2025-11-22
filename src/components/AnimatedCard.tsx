import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AnimatedCardProps {
  imageSrc?: string;
  compact?: boolean;
}

export function AnimatedCard({ imageSrc, compact = false }: AnimatedCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (compact) return; // Disable 3D effect in compact mode
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = (y - centerY) / 10;
    const rotateYValue = (centerX - x) / 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Compact version for hero section
  if (compact) {
    return (
      <div className="relative inline-block">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {/* Glow effect */}
          <motion.div
            className="absolute -inset-2 blur-2xl opacity-50"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              background: 'radial-gradient(circle, #d4af37, transparent 70%)',
            }}
          />

          {/* Photo container */}
          <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden border-4 border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.6)]">
            <img
              src={imageSrc}
              alt="Abhishek Anand"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#d4af37]/30"
            style={{ transform: 'scale(1.15)' }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </div>
    );
  }

  // Full version (original)
  return (
    <div className="relative">
      {/* Glow effect behind card */}
      <motion.div
        className="absolute inset-0 blur-3xl opacity-50"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          background: 'radial-gradient(circle, #d4af37, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.2, type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
        className="relative"
        style={{
          perspective: '1000px',
        }}
      >
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{
            rotateX,
            rotateY,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative cursor-pointer"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Decorative corners */}
          <div className="absolute -inset-4 pointer-events-none">
            <svg className="absolute top-0 left-0 w-12 h-12 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M0 8 L0 0 L8 0" />
            </svg>
            <svg className="absolute top-0 right-0 w-12 h-12 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M24 0 L24 8" />
              <path d="M16 0 L24 0" />
            </svg>
            <svg className="absolute bottom-0 left-0 w-12 h-12 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M0 16 L0 24 L8 24" />
            </svg>
            <svg className="absolute bottom-0 right-0 w-12 h-12 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M24 24 L24 16" />
              <path d="M16 24 L24 24" />
            </svg>
          </div>

          {/* Card container */}
          <div className="relative w-[500px] h-[600px] group">
            {/* Golden frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] via-[#f5d76e] to-[#d4af37] p-[3px] rounded-lg shadow-[0_0_60px_rgba(212,175,55,0.6)]">
              <div className="bg-black w-full h-full rounded-lg p-6">
                {/* Inner golden border */}
                <div className="relative w-full h-full border-2 border-[#d4af37] rounded-lg overflow-hidden">
                  {/* Photo */}
                  <img
                    src={imageSrc || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"}
                    alt="Abhishek Anand"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                  
                  {/* Decorative sparkles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-[#d4af37] rounded-full"
                      style={{
                        left: `${10 + i * 12}%`,
                        top: `${5 + (i % 2) * 90}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                {/* Name plate at bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-8 left-0 right-0 text-center"
                >
                  <div className="bg-gradient-to-r from-transparent via-black/90 to-transparent py-4">
                    <p className="text-[22px] font-['Playfair_Display:500',serif] text-[#d4af37] tracking-wider">
                      OUR ESTEEMED LEADER
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 3D depth layers */}
            <div
              className="absolute inset-0 bg-[#d4af37]/10 rounded-lg -z-10"
              style={{ transform: 'translateZ(-20px)' }}
            />
            <div
              className="absolute inset-0 bg-[#d4af37]/5 rounded-lg -z-20"
              style={{ transform: 'translateZ(-40px)' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}