import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/projects';
import {
  ExternalLink, Github, ChevronRight, Monitor,
  ShoppingCart, GraduationCap, BarChart3, Kanban, KeyRound,
  type LucideProps,
} from 'lucide-react';
import type { FC } from 'react';

// Icon map
const ICON_MAP: Record<string, FC<LucideProps>> = {
  ShoppingCart,
  GraduationCap,
  BarChart3,
  Kanban,
  KeyRound,
};

// Project預覽視窗元件
function PreviewFrame({ project }: { project: typeof projects[0] }) {
  const Icon = ICON_MAP[project.icon] ?? Monitor;
  return (
    <div className="relative" style={{ filter: `drop-shadow(0 0 16px ${project.color}20)` }}>
      {/* Corner brackets */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 z-10" style={{ borderColor: project.color }} />
      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 z-10" style={{ borderColor: project.accentColor }} />
      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 z-10" style={{ borderColor: project.accentColor }} />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 z-10" style={{ borderColor: project.color }} />

      {/* Scan line */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute w-full h-px opacity-25 animate-[previewScan_3s_linear_infinite]"
          style={{ background: `linear-gradient(to right, transparent, ${project.color}, transparent)` }}
        />
      </div>

      {/* Browser chrome + image */}
      <div className="border overflow-hidden" style={{ borderColor: `${project.color}25`, background: `${project.color}04` }}>
        {/* Mock browser bar */}
        <div
          className="flex items-center gap-1.5 px-3 py-2 border-b"
          style={{ borderColor: `${project.color}12`, background: `${project.color}08` }}
        >
          <div className="w-2 h-2 rounded-full bg-white/15" />
          <div className="w-2 h-2 rounded-full bg-white/15" />
          <div className="w-2 h-2 rounded-full bg-white/15" />
          <div
            className="ml-2 flex-1 h-3.5 rounded-sm font-['Space_Mono'] text-[0.48rem] flex items-center px-2"
            style={{ background: `${project.color}10`, color: `${project.color}55` }}
          >
            {project.title.toLowerCase()}.app
          </div>
        </div>

        {/* Screenshot — swap src to change image */}
        <img
          src={project.previewImg}
          alt={`${project.title} preview`}
          className="w-full aspect-video object-cover object-top block"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fb = e.currentTarget.nextElementSibling as HTMLElement | null;
            if (fb) fb.style.display = 'flex';
          }}
        />
        {/* Fallback when no image */}
        <div
          className="w-full aspect-video hidden flex-col items-center justify-center gap-3"
          style={{ background: `linear-gradient(135deg, ${project.color}08, ${project.accentColor}08)` }}
        >
          <Icon style={{ color: `${project.color}50`, width: 32, height: 32 }} strokeWidth={1.5} />
          <span className="font-['Space_Mono'] text-[0.58rem] text-white/20 tracking-wider">
            public/previews/{project.title.toLowerCase()}.png
          </span>
        </div>
      </div>
    </div>
  );
}

// 主元件
export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F5FF]/20 to-transparent" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-10 right-0 font-['Bebas_Neue'] text-[15vw] text-white/[0.02] select-none">PROJECTS</span>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="section-num mb-4">// 02 — SELECTED WORKS</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl text-white tracking-wide">
              Projects &{' '}
              <span style={{ color: '#00F5FF' }} className='glow-cyan'>Highlights</span>
            </h2>
          </div>
            <p className="text-white/40 text-sm max-w-sm leading-relaxed mt-4">
              精選代表性專案，涵蓋電商串接金流、線上課程Mern Stack、高互動感Portfolio與帳密管理工具結合雲端架構。
            </p>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-6">
          {projects.map((project, i) => {
            const Icon = ICON_MAP[project.icon] ?? Monitor;
            const isOpen = activeProject === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="project-card group cursor-pointer"
                  onClick={() => setActiveProject(isOpen ? null : project.id)}
                >
                  {/* ── Main row: id | preview | content | actions ─── */}
                  <div className="grid grid-cols-[auto_auto_1fr_auto] gap-0 items-stretch">

                    {/* Project ID */}
                    <div className="flex flex-col items-center justify-start gap-3 px-6 py-8 border-r" style={{ borderColor: `${project.color}10`, minWidth: '72px' }}>
                      <div
                        className="font-['Bebas_Neue'] text-5xl md:text-6xl leading-none opacity-20 group-hover:opacity-60 transition-opacity duration-300"
                        style={{ color: project.color }}
                      >
                        {project.id}
                      </div>
                      {/* 專案icon圖示 */}
                      <div
                        className="w-10 h-10 flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                        style={{
                          borderColor: `${project.color}35`,
                          background: `${project.color}08`,
                          boxShadow: `0 0 10px ${project.color}15`,
                        }}
                      >
                        <Icon style={{ color: project.color, width: 18, height: 18 }} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* 網站畫面preview */}
                    <div
                      className="hidden md:flex flex-col justify-center px-6 py-8 border-r w-64 lg:w-72 flex-shrink-0"
                      style={{ borderColor: `${project.color}10` }}
                    >
                      <div className="flex items-center gap-2 mb-2.5">
                        <Monitor className="w-3 h-3" style={{ color: `${project.color}70` }} />
                        <span className="font-['Space_Mono'] text-[0.55rem] tracking-widest uppercase" style={{ color: `${project.color}55` }}>
                          Preview
                        </span>
                      </div>
                      <PreviewFrame project={project} />
                    </div>

                    {/* 專案context  */}
                    <div className="flex flex-col justify-center p-6 md:p-8 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="font-['Space_Mono'] text-xs tracking-widest uppercase" style={{ color: project.color }}>
                          {project.category}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="font-['Space_Mono'] text-xs text-white/30">{project.year}</span>
                      </div>

                      {/* 專案title + 導引連結 */}
                      <div className="flex items-center gap-2">
                        <h3 className="font-['Bebas_Neue'] text-3xl md:text-4xl text-white tracking-wide mb-1">
                          {project.title}
                        </h3>
                        <a
                          href={project.liveUrl}
                          // onClick={(e) => e.stopPropagation()}
                          className="group p-1 flex items-center justify-center"
                          style={{ borderColor: `${project.color}30`, color: project.color, width: '30px', height: '30px' }}
                        >
                          <ExternalLink className="w-4 h-4 transition-transform group-hover:scale-110" />
                        </a>
                      </div>

                      <p className="text-white/50 text-sm mb-4">{project.subtitle}</p>
                      <p className="text-white/60 text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {project.tech.map((t) => (
                          <span key={t} className="tech-tag rounded text-xs md:text-sm">{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* 卡片actions */}
                    <div className="flex flex-col items-end justify-between p-6 md:p-8 border-l flex-shrink-0" style={{ borderColor: `${project.color}10` }}>
                      <motion.div
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
                      </motion.div>
                      {/* <div className="flex flex-col gap-2">
                        <a
                          href={project.githubUrl}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 border border-white/10 hover:border-white/30 text-white/40 hover:text-white/80 transition-all"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={project.liveUrl}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 border transition-all"
                          style={{ borderColor: `${project.color}30`, color: project.color }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div> */}
                    </div>
                  </div>

                  {/* 手風琴card - key highlights */}
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t px-6 md:px-8 py-6" style={{ borderColor: `${project.color}15` }}>
                      <div className="px-2 font-['Space_Mono'] text-base tracking-widest uppercase mb-4" style={{ color: project.color }}>
                        ◈ Key Highlights
                      </div>
                      <div className="px-2 grid sm:grid-cols-2 gap-3">
                        {project.highlights.map((h, idx) => (
                          <motion.div
                            key={h}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            className="flex items-start gap-3 text-sm text-white/"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.color }} />
                            {h}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* 底部滑線hover */}
                  <div
                    className="h-px w-0 group-hover:w-full transition-all duration-700"
                    style={{ background: `linear-gradient(to right, ${project.color}, ${project.accentColor})` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View more */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 font-['Space_Mono'] text-xs tracking-[0.2em] text-white/30 uppercase hover:text-[#00F5FF] transition-colors group"
          >
            <span className="w-8 h-px bg-white/20 group-hover:bg-[#00F5FF] transition-colors" />
            View All on GitHub
            <span className="w-8 h-px bg-white/20 group-hover:bg-[#00F5FF] transition-colors" />
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
