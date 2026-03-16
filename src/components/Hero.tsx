import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ROLES = ['Frontend Engineer', 'Fullstack Developer', 'React Specialist','Backend Engineer'];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // ROLES打字機效果
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: number;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayText(isDeleting
          ? currentRole.slice(0, displayText.length - 1)
          : currentRole.slice(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // ***粒子光點Floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
  }));

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh-1 grid-bg"
    >
      {/* 粒子光點 */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#00F5FF]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* PORTFOLIO浮水印背景 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="font-['Bebas_Neue'] text-[20vw] text-white/[0.02] select-none tracking-widest"
        >
          PORTFOLIO
        </span>
      </div>

      {/* 邊角brackets */}
      <div className="absolute top-24 left-8 w-12 h-12 border-t border-l border-[#00F5FF]/20" />
      <div className="absolute top-24 right-8 w-12 h-12 border-t border-r border-[#00F5FF]/20" />
      <div className="absolute bottom-16 left-8 w-12 h-12 border-b border-l border-[#00F5FF]/20" />
      <div className="absolute bottom-16 right-8 w-12 h-12 border-b border-r border-[#00F5FF]/20" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
      >
        {/* 狀態badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-12 px-5 py-2.5 border border-[rgba(0,245,255,0.2)] bg-[rgba(0,245,255,0.03)]"
        >
          <span className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse" />
          <span className="font-['Space_Mono'] text-[.5rem] md:text-xs tracking-[0.2em] text-[#00F5FF]/70 uppercase">
            Available for Hire — 2026
          </span>
          <span className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse" />
        </motion.div>

        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Bebas_Neue'] text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw] leading-none tracking-wider mb-0 select-none animate-pulse"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.6) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          data-text="ELLIE CHEN"
        >
          ELLIE CHEN
        </motion.h1>

        {/* Glitch裝飾線 */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-[#00F5FF] to-transparent mb-8"
        />

        {/* ROLES打字機 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="w-6 md:w-8 h-px bg-[#00F5FF]/40" />
          <span className="font-['Space_Mono'] text-sm md:text-base tracking-[0.3em] text-[#00F5FF] uppercase min-w-[280px] text-center">
            {displayText}
            <span className="inline-block w-0.5 h-4 bg-[#00F5FF] ml-0.5 animate-pulse align-middle" />
          </span>
          <span className="w-6 md:w-8 h-px bg-[#00F5FF]/40" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-white/40 text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-12 font-light"
        >
          專注於打造高效能、極致使用者體驗的 Web 應用。<br />
          從前端互動到後端架構，全端掌握。
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 bg-[#00F5FF] text-[#050508] font-['Space_Mono'] text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.4)]"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-white/20 text-white/60 font-['Space_Mono'] text-xs tracking-[0.2em] uppercase hover:border-[#00F5FF]/50 hover:text-[#00F5FF] transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex justify-center gap-12 mt-20 pt-10 border-t border-white/5"
        >
          {[
            { num: '3+', label: 'Years Exp.' },
            { num: '20+', label: 'Projects Built' },
            { num: '12萬+', label: 'MAU Served' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-['Bebas_Neue'] text-3xl md:text-4xl text-white tracking-wider">{stat.num}</div>
              <div className="font-['Space_Mono'] text-xs text-white/30 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}
      </motion.div>

      {/* Scroll提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-['Space_Mono'] text-xs text-white/20 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-[#00F5FF]/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
