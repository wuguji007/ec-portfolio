import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];


  // 修正：先關閉選單，等動畫結束後再 scroll，避免 collapse 動畫中斷 scrollIntoView
  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetId = href.replace('#', '');
    // 等待 AnimatePresence exit 動畫完成（約 300ms）後再 scroll
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 320);
  };


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-[#050508]/90 backdrop-blur-xl border-b border-[rgba(0,245,255,0.08)]' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-[#00F5FF] flex items-center justify-center relative overflow-hidden group-hover:border-[#FF2D6B] transition-colors duration-300">
            <span className="font-['Bebas_Neue'] text-sm text-[#00F5FF] group-hover:text-[#FF2D6B] transition-colors">EC</span>
            <div className="absolute inset-0 bg-[#00F5FF]/5 group-hover:bg-[#FF2D6B]/10 transition-colors" />
          </div>
          <span className="font-['Space_Mono'] text-xs tracking-[0.2em] text-white/60 uppercase">Ellie Chen</span>
        </a>

        {/* Nav導覽連結 */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="nav-link"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <span className="text-[#00F5FF]/60 mr-1">0{i + 1}.</span>
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* stat */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="hidden md:flex items-center gap-2 px-4 py-2 border border-[#00F5FF]/30 text-[#00F5FF] font-['Space_Mono'] text-xs tracking-wider hover:bg-[#00F5FF]/10 hover:border-[#00F5FF] transition-all duration-300"
        >
          <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full animate-pulse" />
          Open to Work
        </motion.a>

        {/* Mobile漢堡選單 */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-px bg-[#00F5FF] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-[#00F5FF] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-[#00F5FF] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050508]/95 backdrop-blur-xl border-b border-[rgba(0,245,255,0.1)] px-6 py-6"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 }}
                className="block py-3 nav-link text-base"
                // onClick={() => setMenuOpen(false)}
                onClick={(e) => handleMobileNavClick(e, link.href)}
              >
                <span className="text-[#00F5FF]/60 mr-2">0{i + 1}.</span>
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
