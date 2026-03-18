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
    year: '2024',
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
    description: '專為講師與學生打造的互動式數位學習環境。整合 MERN Stack 與 GitHub Actions CI/CD 自動化部署的高效能教育平台。除了具備嚴密的雙角色權限管理與課程生命週期管理，並針對 Web 安全性（XSS/CSRF）進行深度優化，更導入 Framer Motion 實現細膩的 UI 動態交互，為師生提供流暢且具沉浸感的線上學習體驗。',
    highlights: [
      'Passport JWT 身份驗證與雙角色（講師/學生）權限系統',
      '嚴謹的 XSS/CSRF 安全防護與 Joi 資料校驗機制',
      '整合 GitHub Actions 實現自動化 CI/CD 測試與部署流程',
      '使用 Framer Motion 與 Swiper 打造高質感的動態交互介面',
    ],
    tech: ['Github Actions','Jest','CI/CD','MongoDB', 'Express', 'React', 'Node.js', 'Passport.js', 'Mongoose', 'Tailwind CSS'],
    color: '#FF2D6B',
    accentColor: '#00F5FF',
    year: '2024',
    category: 'Fullstack',
    icon: 'BookOpen',
    previewImg: 'https://storage.googleapis.com/ec_portfolio_assets/project_image/Learnee-homepage-cut.png',
    liveUrl: 'https://learnee-client.onrender.com/',
    githubUrl: 'https://www.google.com/search?q=https://github.com/wuguji007/learnee-project',
  },
  {
    id: '03',
    title: 'DataPulse',
    subtitle: '即時數據分析儀表板',
    description: '企業級即時監控儀表板，視覺化呈現 IoT 感測器數據，支援自定義告警規則與報表匯出。',
    highlights: [
      'D3.js 客製化數據視覺化圖表',
      'WebSocket 每秒處理 5000+ 事件',
      'RBAC 細粒度權限控制系統',
      'PDF/Excel 報表自動生成',
    ],
    tech: ['Vue 3', 'TypeScript', 'InfluxDB', 'D3.js', 'Grafana', 'Docker', 'Nginx'],
    color: '#39FF14',
    accentColor: '#FF2D6B',
    year: '2023',
    category: 'Frontend',
    icon: 'BarChart3',
    previewImg: '/previews/datapulse.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '04',
    title: 'TaskSync',
    subtitle: '團隊協作管理工具',
    description: '類 Notion 的協作平台，支援即時共編、Kanban 看板與 Gantt 甘特圖。整合 GitHub/Slack Webhook 自動同步進度。',
    highlights: [
      'OT 演算法實現無衝突即時共編',
      'Drag & Drop 看板，UX 零延遲',
      'GitHub/Slack API 雙向整合',
      'PWA 支援離線操作',
    ],
    tech: ['React', 'TypeScript', 'Supabase', 'Yjs', 'TanStack Query', 'Zustand', 'Vite'],
    color: '#BF5AF2',
    accentColor: '#39FF14',
    year: '2023',
    category: 'Fullstack',
    icon: 'KeyRound',
    previewImg: '/previews/tasksync.png',
    liveUrl: '#',
    githubUrl: '#',
  },
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
      // { name: 'Docker', icon: '🐳', color: '#2496ED' },
      // { name: 'AWS', icon: '☁', color: '#FF9900' },
    ],
  },
];
