import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
 
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
        <span className="font-['Bebas_Neue'] text-[15vw] text-white/[0.02] select-none pr-4">ABOUT</span>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Avatar */}
            <div className="relative w-full aspect-[5/5] max-w-sm mx-auto">
              {/* 外部glow frame */}
              <div className="absolute inset-0 border border-[#00F5FF]/20 border-glow-cyan" />
              {/* 內部漸層 */}
              <div className="absolute inset-2 overflow-hidden">
                <img
                  src="https://storage.googleapis.com/ec_portfolio_assets/photoforportfolio-s.png"
                  alt="ec-photo"
                  className='object-contain'
                />
                <div className="w-full h-full bg-gradient-to-br from-[#BF5AF2]/20 via-[#050508] to-[#00F5FF]/20 flex items-center justify-center">

                  <div className="text-center">
                    <div className="font-['Bebas_Neue'] text-[120px] leading-none text-white/10 select-none">EC</div>
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#00F5FF]/40 to-transparent mx-auto mt-4" />
                  </div>

                  <div className="absolute inset-0 grid-bg opacity-40" />
                </div>
              </div>
              {/* 邊角 */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#00F5FF]" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#FF2D6B]" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#FF2D6B]" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#00F5FF]" />

              {/* 懸浮label */}
              <div className="absolute -right-4 top-1/3 bg-[#0A0A12] border border-[#00F5FF]/20 px-4 py-2">
                <div className="font-['Space_Mono'] text-xs text-[#00F5FF]/60">STATUS</div>
                <div className="font-['Space_Mono'] text-sm text-[#39FF14] mt-0.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full animate-pulse" />
                  AVAILABLE
                </div>
              </div>

              <div className="absolute -left-4 bottom-1/3 bg-[#0A0A12] border border-[#BF5AF2]/20 px-4 py-2">
                <div className="font-['Space_Mono'] text-xs text-[#BF5AF2]/60">LOCATION</div>
                <div className="font-['Space_Mono'] text-sm text-white/70 mt-0.5">Hsinchu, 🇹🇼</div>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-num mb-4">// 01 — ABOUT</div>
            <h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-white mb-8 tracking-wide">
              Hello, I'm{' '}
              <span className="glow-cyan" style={{ color: '#00F5FF' }}>Ellie</span>
            </h2>

            <div className="space-y-5 text-white/60 leading-relaxed text-sm md:text-base">
              <p>
                從化學研究跨界軟體領域的開發者。畢業於中國醫藥大學藥學所。
              </p>
              <p>
                擅長以 <span className="text-[#00F5FF]"> React 生態圈 (TypeScript / Vite) </span>打造高效能且流暢的使用者體驗，並透過<span className="text-[#BF5AF2]"> Node.js 與 Python (FastAPI) </span> 建構具備分層架構的穩定後端系統。具備前端複雜動效優化、第三方金流串接、以及 Docker 容器化與 CI/CD 自動化部署的專案實作經驗。
              </p>
              <p>
                期望將研究人員的嚴謹邏輯與分析思維，貢獻給注重工程品質的高速成長團隊。
              </p>
            </div>

            {/* 身分summary */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { label: 'Education', value: '中國醫藥大學 藥學研究所' },
                { label: 'Focus', value: 'Software Engineering / React / Node.js' },
                { label: 'Languages', value: 'Node.js / Python(FastAPI) / TypeScript' },
                { label: 'Availability', value: 'Immediate Start' },
              ].map(({ label, value }) => (
                <div key={label} className="border-l-2 border-[#00F5FF]/20 pl-4">
                  <div className="font-['Space_Mono'] text-xs text-[#00F5FF]/40 uppercase tracking-wider">{label}</div>
                  <div className="text-white/80 text-sm mt-1">{value}</div>
                </div>
              ))}
            </div>

            {/* Resume link */}
            {/* <motion.a
              href="#"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-3 mt-10 font-['Space_Mono'] text-xs tracking-[0.15em] text-[#00F5FF] uppercase group"
            >
              <span>View more on Resume</span>
              <span className="w-8 h-px bg-[#00F5FF] group-hover:w-16 transition-all duration-300" />
              <span>↗</span>
            </motion.a> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
