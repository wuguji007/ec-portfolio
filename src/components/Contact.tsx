import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Twitter } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF2D6B]/20 to-transparent" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-10 right-0 font-['Bebas_Neue'] text-[15vw] text-white/[0.015] select-none">CONTACT</span>
      </div>

      {/* Glow效果 */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF2D6B]/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="section-num mb-4">// 04 — GET IN TOUCH</div>
          <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl text-white tracking-wide">
            Let's{' '}
            <span style={{ color: '#FF2D6B' }} className="glow-pink">Connect</span>
          </h2>
          <p className="text-white/40 text-sm mt-4 max-w-md">
            正在尋找新機會，隨時歡迎聯絡！
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* 左欄 contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'alie40521@gmail.com', href: '#contact', color: '#FF2D6B' },
                { icon: Github, label: 'GitHub', value: 'github.com/wuguji007', href: 'https://github.com/wuguji007', color: '#00F5FF' },
                // { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/elliechen', href: '#', color: '#BF5AF2' },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-5 group p-4 border border-white/5 hover:border-white/15 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center border transition-all duration-300 flex-shrink-0"
                    style={{ borderColor: `${color}30` }}
                  >
                    <Icon className="w-4 h-4 transition-colors" style={{ color: `${color}80` }} />
                  </div>
                  <div>
                    <div className="font-['Space_Mono'] text-xs text-white/30 uppercase tracking-widest">{label}</div>
                    <div className="text-white/70 text-normal group-hover:text-white transition-colors mt-0.5">{value}</div>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <span style={{ color }}>↗</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="border border-[#39FF14]/20 bg-[#39FF14]/[0.03] p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse" />
                <span className="font-['Space_Mono'] text-xs text-[#39FF14] uppercase tracking-widest">Open to Opportunities</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                目前積極尋求 Backend / Frontend / Fullstack 工程師職位。歡迎全職、約聘合作，也接受有趣的 side project 邀約。
              </p>
            </div>
          </motion.div>

          {/* 右欄 contact form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 border border-[#00F5FF]/20 bg-[#00F5FF]/[0.03]"
              >
                <div className="font-['Bebas_Neue'] text-6xl text-[#00F5FF] mb-4">✓</div>
                <h3 className="font-['Bebas_Neue'] text-3xl text-white mb-2">Message Sent!</h3>
                <p className="text-white/40 text-sm">感謝您的聯繫，我會在 24 小時內回覆。</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: '您的姓名' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="block font-['Space_Mono'] text-xs text-white/30 uppercase tracking-widest mb-2">
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={formData[id as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 text-white/80 px-4 py-3.5 text-sm focus:outline-none focus:border-[#00F5FF]/50 focus:bg-white/[0.05] transition-all placeholder-white/20"
                      required
                    />
                  </div>
                ))}

                <div>
                  <label className="block font-['Space_Mono'] text-xs text-white/30 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="您想聊什麼..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 text-white/80 px-4 py-3.5 text-sm focus:outline-none focus:border-[#00F5FF]/50 focus:bg-white/[0.05] transition-all placeholder-white/20 resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[#FF2D6B] text-white font-['Space_Mono'] text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-[#FF2D6B]/90 hover:shadow-[0_0_30px_rgba(255,45,107,0.4)] transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
