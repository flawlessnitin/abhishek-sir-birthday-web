import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Gift, PartyPopper, Cake, Star } from 'lucide-react';
import { GoldenParticles } from './components/GoldenParticles';
import { AnimatedCard } from './components/AnimatedCard';
import { TimelineSection } from './components/TimelineSection';
import { WishCard } from './components/WishCard';
import { FloatingBalloons } from './components/FloatingBalloons';
import { InteractiveButton } from './components/InteractiveButton';
import abhishekImage from 'figma:asset/19f9d2f019bf19dc7f6c0c31f3ff4f93f939cba0.png';

export default function App() {
  const [isRevealed, setIsRevealed] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen relative overflow-x-hidden">
      <GoldenParticles />
      <FloatingBalloons />

      {/* Hero Section */}
      <motion.section
        className="min-h-screen relative flex items-center justify-center px-8 pt-20"
        style={{ opacity }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -inset-[10px] opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, #d4af37 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, #d4af37 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, #d4af37 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Geometric decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-[#d4af37]/20"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '30%',
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Photo at the top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12"
          >
            <AnimatedCard imageSrc={abhishekImage} compact />
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12"
          >
            <motion.div
              animate={{
                textShadow: [
                  '0 0 20px rgba(212, 175, 55, 0.5)',
                  '0 0 40px rgba(212, 175, 55, 0.8)',
                  '0 0 20px rgba(212, 175, 55, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h1 className="text-[110px] text-[#f5e6d3] leading-[1.1] mb-6" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Wishing you a{' '}
                <span className=" italic">wonderful</span>
                <br />
                <span className=" italic">birthday celebration</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto w-96 mb-8"
            />

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-[64px] text-[#d4af37] tracking-wide"
              style={{ fontFamily: "'Yellowtail', cursive" }}
            >
              Abhisheik Anand
            </motion.h2>
          </motion.div>

          {/* Animated Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-8 justify-center mb-16"
          >
            {[
              { Icon: Sparkles, delay: 0 },
              { Icon: Gift, delay: 0.1 },
              { Icon: Cake, delay: 0.2 },
              { Icon: PartyPopper, delay: 0.3 },
              { Icon: Star, delay: 0.4 },
            ].map(({ Icon, delay }, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4 + delay, duration: 0.5 }}
                whileHover={{ scale: 1.3, rotate: 360 }}
              >
                <Icon className="w-12 h-12 text-[#d4af37]" />
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className=" text-[#f5e6d3]/90 leading-relaxed max-w-5xl mx-auto"
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: '2.5rem' }}
          >
            Today we celebrate not just another year, but the incredible journey of leadership,
            wisdom, and inspiration you bring to our team every single day.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[#d4af37]/60 text-sm font-['Montserrat:400',sans-serif] tracking-widest"
            >
              SCROLL TO EXPLORE
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#d4af37] to-transparent mx-auto mt-4" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline/Journey Section */}
      <section className="py-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-[70px]  text-[#f5e6d3] mb-6 leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>
            A Year of{' '}
            <span className=" italic text-[#d4af37]">Excellence</span>
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto w-64" />
        </motion.div>

        <TimelineSection />
      </section>

      {/* Wishes Grid */}
      <section className="py-32 px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-[70px] text-[#f5e6d3] mb-6 leading-tight" style={{ fontFamily: 'Dancing Script, cursive' }}>
            <span className="text-[#d4af37]">Wishes</span> For You
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto w-64" />
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <WishCard
            icon={Sparkles}
            title="Success"
            description="May this year bring you unprecedented success and recognition in all your endeavors."
            delay={0}
          />
          <WishCard
            icon={Star}
            title="Growth"
            description="Continue to inspire and grow, leading our team to new heights with your vision."
            delay={0.2}
          />
          <WishCard
            icon={Gift}
            title="Joy"
            description="May every day be filled with moments of happiness, laughter, and fulfillment."
            delay={0.4}
          />
        </div>
      </section>

      {/* Interactive CTA */}
      <section className="py-32 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[#f5e6d3]/90 mb-12 leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'Dancing Script, cursive', fontSize: '42px' }}>
              Here's to another year of achievements, breakthroughs, and making a lasting impact.
              Thank you for being an{' '}
              <span className="text-[#d4af37]">exceptional leader</span>
              {' '}and mentor.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <p className="text-[20px] font-['Montserrat:400',sans-serif] text-[#d4af37]/60 tracking-wider">
              WITH GRATITUDE & BEST WISHES
            </p>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mx-auto w-48 mt-4" />
          </motion.div>
        </div>
      </section>

      {/* Footer sparkle */}
      <div className="h-32 relative">
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
        />
      </div>
    </div>
  );
}
