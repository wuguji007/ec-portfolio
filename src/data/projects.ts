export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  color: string;
  accentColor: string;
  year: string;
  category: string;
  icon: string;        // lucide-react
  previewImg: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'Zonama Ecommerce',
    subtitle: '電商購物平台',
    description: '全端電子商務網站，採用 React 19 與 Vite 打造流暢的前端體驗，後端運用 JSON Server 快速構建 RESTful API，並完整實作 JWT 身分驗證與藍新第三方金流串接，提供安全的購物與結帳流程。',
    highlights: [
      '採用最新 React 19 搭配 Vite，大幅提升冷啟動與熱重載 (HMR) 效能',
      '客製化 Bootstrap 5 與 Sass 模組化管理，實作高質感的全站響應式設計 (RWD)',
      '基於 json-server-auth 實作 JWT 無狀態身分驗證與受保護的路由機制',
      '完整整合藍新金流 (NewebPay)，處理前端加密參數傳遞與後端交易狀態更新',
    ],
    tech: ['Node.js', 'json-server', 'JWT', '藍新金流NewebPay', 'React 19', 'Vite', 'Bootstrap 5', 'Sass', 'Swiper React'],
    color: '#00F5FF',
    accentColor: '#BF5AF2',
    year: '2025',
    category: 'Fullstack',
    icon: 'ShoppingCart',
    previewImg: 'https://storage.googleapis.com/ec_portfolio_assets/project_image/zonama-home-2.png',
    liveUrl: 'https://wuguji007.github.io/z-client/',
    githubUrl: '#',
  },
  {
    id: '02',
    title: 'LEARNEE',
    subtitle: '全端雙角色線上教學平台',
    description: '整合 MERN Stack 與 GitHub Actions CI/CD 自動化部署的高效能教育平台。除了具備嚴密的雙角色權限管理與課程生命週期管理，並針對 Web 安全性（XSS/CSRF）進行深度優化，更導入 Framer Motion 實現細膩的 UI 動態交互，為師生提供流暢且具沉浸感的線上學習體驗。',
    highlights: [
      'Passport JWT 身份驗證與雙角色（講師/學生）權限系統',
      '嚴謹的 XSS/CSRF 安全防護與 Joi 資料校驗機制',
      '整合 GitHub Actions 實現自動化 CI/CD 測試與部署流程',
      '使用 Framer Motion 與 Swiper 打造高質感的動態交互介面',
    ],
    tech: ['Github Actions','Jest','CI/CD','MongoDB', 'Express', 'React', 'Node.js', 'Passport.js', 'Mongoose', 'Tailwind CSS'],
    color: '#FF2D6B',
    accentColor: '#00F5FF',
    year: '2026',
    category: 'Fullstack',
    icon: 'BookOpen',
    previewImg: 'https://storage.googleapis.com/ec_portfolio_assets/project_image/Learnee-homepage-cut.png',
    liveUrl: 'https://learnee-client.onrender.com/',
    githubUrl: 'https://www.google.com/search?q=https://github.com/wuguji007/learnee-project',
  },
  {
    id: '03',
    title: 'FastURL API',
    subtitle: '短網址服務',
    description: '以 FastAPI 與 PostgreSQL 建構的 RESTful API 服務，實作短網址生成、301 重新導向與點擊次數統計，採用 Docker Compose 容器化編排，部署於 AWS EC2 雲端環境，具備完整的後端分層架構設計。',
    highlights: [
      '採用分層架構（models / schemas / crud / router）將職責單一化，提升程式碼可維護性',
      '透過 FastAPI Depends 實作依賴注入管理 PostgreSQL Session 生命週期，防止連線洩漏',
      'Docker Compose healthcheck 確保 PostgreSQL 就緒後 API 才啟動，解決容器啟動 race condition',
      'PostgreSQL Volume 持久化設計，容器重建後資料不遺失，並限制 DB 僅容器內網存取',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Pydantic', 'Docker', 'Docker Compose', 'AWS EC2'],
    color: '#00C896',
    accentColor: '#FF6B6B',
    year: '2026',
    category: 'Backend',
    icon: 'Link',
    previewImg: 'https://storage.googleapis.com/ec_portfolio_assets/project_image/fasturl-docs.png',
    liveUrl: 'http://3.112.5.226:8000/docs',
    githubUrl: 'https://github.com/wuguji007/fast-url-api',
  },
  {
    id: '04',
    title: 'EC-Portfolio',
    subtitle: '極速效能與流暢動效作品集',
    description: '基於 React 18 與 TypeScript 打造，專注於 Web 效能優化的現代化作品集。整合 Vite 與混合動畫系統（CSS + Framer Motion），在確保 Core Web Vitals 高分評價的同時，提供極致流暢的滾動與交互動態體驗。',
    highlights: ['混合動畫系統：兼顧高性能 CSS Keyframes 與高度交互的 Framer Motion', 'TypeScript 100% 嚴格類型開發，確保組件間數據流的精確與穩定', 'Vite 生產環境打包優化，實現極小體積與極速的 LCP 載入表現', '數據驅動 (Data-Driven) 架構，將內容數據與 UI 動效邏輯徹底解耦',],
    tech: ['React 18', 'TypeScript', 'Vite', 'Framer Motion', 'Tailwind CSS', 'Lucide React'],
    color: '#BF5AF2',
    accentColor: '#FF2D6B',
    year: '2026',
    category: 'Frontend',
    icon: 'Monitor',
    previewImg: 'https://storage.googleapis.com/ec_portfolio_assets/project_image/portfolio-homepage.png',
    liveUrl: 'https://ec-portfolio-xrzr.onrender.com/',
    githubUrl: 'https://www.google.com/search?q=https://github.com/wuguji007/ec-portfolio',
  },
  {
  id: '05',
  title: 'Secret Keeper - 開發中',
  subtitle: '加密全端密碼管理系統',
  description: '採用零知識 (Zero-Knowledge) 架構開發的高安全性密碼管理平台。系統結合瀏覽器原生 Web Crypto API 進行前端 AES-256 加解密，並透過 PWA 技術提供免上架的跨平台原生 App 體驗，確保用戶數據在雲端環境中絕對隱私且不可被破解。',
  highlights: [
  'Zero-Knowledge 架構：密鑰僅存於本地記憶體，後端僅處理密文與雜湊值',
  'WebAuthn 生物辨識：整合指紋與面部識別，實現安全的無密碼登入體驗',
  'PWA 跨平台支持：支援離線瀏覽與手機主畫面安裝，大幅提升用戶操作便利性',
  'AWS 雲端原生架構：利用 ECS Fargate 與 RDS 構建具自動擴展能力的後端服務',
  ],
  tech: [
  'React 18',
  'Node.js',
  'Fastify',
  'PostgreSQL (Prisma)',
  'Redis',
  'Web Crypto API',
  'AWS (ECS/RDS/KMS)',
  'TypeScript'
  ],
  color: '#ff00bb', 
  accentColor: '#00ffff', 
  year: '2026',
  category: 'Fullstack / Security',
  icon: 'KeyRound',
  previewImg: '/previews/password-vault.png',
  liveUrl: '#',
  githubUrl: '#',
  }
];

export interface SkillItem {
  name: string;
  icon: string;
  color?: string;
}

export interface Skill {
  category: string;
  icon: string;
  accentColor: string;
  items: SkillItem[];
}

export const skills: Skill[] = [
  {
    category: 'Frontend',
    icon: '◈',
    accentColor: '#00F5FF',
    items: [
      { name: 'React', icon: '⚛', color: '#61DAFB' },
      { name: 'Axios', icon: 'Λ', color: '#1babff' },
      { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
      { name: 'Bootstrap', icon: 'ʙ', color: '#ad1fff' },
      { name: 'Tailwind CSS', icon: '~', color: '#38BDF8' },
      { name: 'Framer Motion', icon: '🎨', color: '#FF2D6B' },
    ],
  },
  {
    category: 'Backend',
    icon: '◉',
    accentColor: '#FF2D6B',
    items: [
      { name: 'Node.js', icon: '⬡', color: '#68A063' },
      { name: 'Express.js', icon: 'Ex', color: '#e1d200' },
      { name: 'MongoDB', icon: '🍃', color: '#47A248' },
      { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
      { name: 'FastAPI', icon: '𐓏', color: '#00e4f0c3' },
      { name: 'Python', icon: '🐍', color: '#3178C6' },
      // { name: 'Redis', icon: '◉', color: '#DC382D' },      
      // { name: 'Prisma', icon: '◧', color: '#5A67D8' },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '◎',
    accentColor: '#BF5AF2',
    items: [
      { name: 'Vite', icon: '⚡', color: '#9514ff' },
      { name: 'Git', icon: '⑂', color: '#F05032' },
      { name: 'GitHub Actions', icon: '⚙', color: '#ffffff' },
      { name: '藍新金流', icon: '🌐', color: '#4285F4' },
      { name: 'Docker', icon: '🐳', color: '#2496ED' },
      { name: 'AWS', icon: '☁', color: '#FF9900' },
    ],
  },
];
