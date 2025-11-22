import { motion } from 'motion/react';
import svgPaths from "../imports/svg-tio9o7j4x7";

interface StarDecorationProps {
  position: 'left' | 'right';
  delay: number;
}

export function StarDecoration({ position, delay }: StarDecorationProps) {
  const isLeft = position === 'left';
  
  return (
    <motion.div 
      className={`absolute h-[222.5px] w-[183px] ${isLeft ? 'left-[168px] top-[783px]' : 'left-[708px] top-[185px]'}`}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: isLeft ? 0 : 180
      }}
      transition={{ 
        duration: 1, 
        delay,
        type: "spring",
        stiffness: 200
      }}
    >
      <div className={isLeft ? '' : 'rotate-180'}>
        <motion.div 
          className="h-[222.5px] relative w-[183px]"
          animate={{
            rotateZ: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="block size-full drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]" fill="none" preserveAspectRatio="none" viewBox="0 0 183 223">
            <g id="Group 187">
              <motion.path 
                d={svgPaths.p2a464500} 
                fill="#d4af37" 
                id="Star 1"
                animate={{
                  fill: ["#d4af37", "#f5d76e", "#d4af37"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0
                }}
              />
              <motion.path 
                d={svgPaths.p2472c580} 
                fill="#d4af37" 
                id="Star 2"
                animate={{
                  fill: ["#d4af37", "#f5d76e", "#d4af37"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.3
                }}
              />
              <motion.path 
                d={svgPaths.p8667900} 
                fill="#d4af37" 
                id="Star 3"
                animate={{
                  fill: ["#d4af37", "#f5d76e", "#d4af37"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.6
                }}
              />
            </g>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
