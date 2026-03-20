import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/projects';

const TECH_STACK = [
  { name: 'Redis', icon: '◉', color: '#DC382D' },
  { name: 'Prisma', icon: '◧', color: '#5A67D8' },
  { name: 'Python', icon: '🐍', color: '#3178C6' },
  { name: 'FastAPI', icon: '𐓏', color: '#00e4f0c3' },
  { name: 'Pino', icon: '🌲', color: '#3cc900' },
  { name: 'Winston', icon: '𝐖', color: '#f5faf5' },
  { name: 'Fastify', icon: '𝙛', color: '#ffffff' },
  { name: 'Zod', icon: '💎', color: '#039fff' },
  { name: 'Zustand', icon: '🐻', color: '#923d00' },
  { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
  { name: 'Docker', icon: '🐳', color: '#2496ED' },
  { name: 'AWS', icon: '☁', color: '#FF9900' }, 
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Top分隔線 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BF5AF2]/30 to-transparent" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-10 right-0 font-['Bebas_Neue'] text-[15vw] text-white/[0.02] select-none">SKILLS</span>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <div className="section-num mb-4">// 03 — TECH STACK</div>
          <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl text-white tracking-wide">
            Skills &{' '}
            <span style={{ color: '#BF5AF2' }} className="glow-purple">Technologies</span>
          </h2>
        </motion.div>

        

        {/* Skills列表 */}
        <div className="grid md:grid-cols-3 gap-12">
          {skills.map((skillGroup, i) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.4 }}
              className="relative"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="font-['Bebas_Neue'] text-3xl"
                  style={{ color: skillGroup.accentColor }}
                >
                  {skillGroup.icon}
                </span>
                <div>
                  <div className="font-['Bebas_Neue'] text-2xl text-white tracking-wide">
                    {skillGroup.category}
                  </div>
                  <div
                    className="h-px w-20 mt-1"
                    style={{ background: `${skillGroup.accentColor}35` }}
                  />
                </div>
              </div>

              {/* skills grid */}
              <div className="skill-icon-grid">
                {skillGroup.items.map((item) => (
                  <div key={item.name} className="skill-icon-item">
                    <span
                      className="sii-icon"
                      style={{
                        color: item.color,
                        filter: `drop-shadow(0 0 4px ${item.color ?? '#fff'}60)`,
                        fontFamily: item.icon === 'TS' ? "'Space Mono', monospace" : undefined,
                        fontSize: item.icon === 'TS' ? '0.85rem' : undefined,
                      }}
                    >
                      {item.icon}
                    </span>
                    <span className="sii-name text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        
        {/* 持續進修Tech */}   
        <div className="font-['Space_Mono'] text-sm text-white/70 uppercase tracking-widest mt-12 mb-6">
            Training in progress...
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-3 mt-6 mb-24"
        >
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05 + 0.3 }}
              whileHover={{ scale: 1.12, y: -6 }}
              className="col-span-2 md:col-span-2 flex flex-col items-center gap-2 p-4 border border-white/[0.07] bg-white/[0.03] cursor-default group relative overflow-hidden transition-all duration-300 hover:border-[#00F5FF]/30 hover:bg-white/[0.06] hover:shadow-[0_10px_30px_rgba(0,245,255,0.1)]"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span
                className="relative z-10 text-[2rem] leading-none"
                style={{ filter: `drop-shadow(0 0 8px ${tech.color}80)` }}
              >
                {tech.icon}
              </span>
              <span className="relative z-10 font-['Space_Mono'] text-[0.72rem] text-white/50 group-hover:text-white/90 transition-colors text-center tracking-wide">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>


        
        {/* 方法論 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-20 pt-16 border-t border-white/5"
        >
          <div className="font-['Space_Mono'] text-sm text-white/30 uppercase tracking-widest mb-6">
            Methodologies & Practices
          </div>
          <div className="flex flex-wrap gap-3">
            {['REST API Design', 'CI/CD', 'SDD', 'Microservices', 'Performance Optimization', 'Jest Testing', 'System Design', 'Clean Architecture'].map((item) => (
              <span
                key={item}
                className="px-4 py-2 border border-white/8 bg-white/[0.02] text-white/50 text-sm font-['Space_Mono'] tracking-wider hover:border-[#BF5AF2]/30 hover:text-[#BF5AF2]/70 transition-all duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
