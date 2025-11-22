import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface WishCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export function WishCard({ icon: Icon, title, description, delay }: WishCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="relative group cursor-pointer">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] to-[#f5d76e] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500" />
        
        {/* Card content */}
        <div className="relative bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37] rounded-lg p-8 h-full">
          {/* Icon with animated background */}
          <motion.div
            className="mb-6"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute inset-0 bg-[#d4af37] rounded-full blur-xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f5d76e] flex items-center justify-center">
                <Icon className="w-10 h-10 text-black" />
              </div>
            </div>
          </motion.div>

          <h3 className="text-[36px] font-['Playfair_Display:600',serif] text-[#d4af37] mb-4">
            {title}
          </h3>
          
          <p className="text-[18px] font-['Lora:400',serif] text-[#f5e6d3]/80 leading-relaxed">
            {description}
          </p>

          {/* Decorative corner */}
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#d4af37]/30 group-hover:border-[#d4af37] transition-colors duration-300" />
        </div>
      </div>
    </motion.div>
  );
}