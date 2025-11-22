import { motion } from 'motion/react';
import { TrendingUp, Users, Target, Award } from 'lucide-react';

const milestones = [
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Led the team to achieve remarkable growth and surpass all quarterly targets',
  },
  {
    icon: Users,
    title: 'Leadership',
    description: 'Mentored and inspired team members to reach their full potential',
  },
  {
    icon: Target,
    title: 'Vision',
    description: 'Set ambitious goals and created clear pathways to success',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Maintained the highest standards of quality and innovation',
  },
];

export function TimelineSection() {
  return (
    <div className="max-w-6xl mx-auto px-8 relative">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#d4af37] via-[#d4af37]/50 to-transparent" />

      <div className="space-y-24">
        {milestones.map((milestone, index) => {
          const isLeft = index % 2 === 0;
          const Icon = milestone.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${isLeft ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`w-[45%] ${isLeft ? 'text-right pr-16' : 'pl-16'}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block"
                >
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-black border-2 border-[#d4af37] rounded-lg p-8 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all duration-300">
                    <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f5d76e] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="text-[32px] font-['Playfair_Display:600',serif] text-[#d4af37]">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-[18px] font-['Lora:400',serif] text-[#f5e6d3]/80 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Center dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#d4af37] border-4 border-black shadow-[0_0_20px_rgba(212,175,55,0.6)]"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}