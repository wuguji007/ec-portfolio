export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-['Space_Mono'] text-xs text-white/20">
          © 2025 Ellie Chen. Built with React + TypeScript + Tailwind.
        </div>
        <div className="flex items-center gap-2 font-['Space_Mono'] text-xs text-white/20">
          <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full animate-pulse" />
          Open to new opportunities
        </div>
        <div className="font-['Space_Mono'] text-xs text-white/20">
          Designed & Developed by Ellie Chen
        </div>
      </div>
    </footer>
  );
}
