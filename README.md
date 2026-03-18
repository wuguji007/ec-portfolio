# EC-Portfolio - 流暢動效與極速性能的現代化開發實踐

EC-Portfolio 是一個基於 React 18 與 TypeScript 打造的極速響應式作品集網站。專案採用 Vite 作為核心建構工具，結合 Tailwind CSS、 CSS Keyframes 與高階動效庫 Framer Motion，旨在提供卓越的視覺體驗與流暢的交互動態。


## 專案亮點
- 混合動畫系統 (Hybrid Animation System)：結合 CSS Keyframes (處理低開銷、循環背景動效) 與 Framer Motion (處理滾動觸發、進入退出與手勢互動)，實現性能與視覺效果的完美平衡。
- TypeScript 嚴格類型開發：100% 使用 TS 進行組件開發，確保專案資料流（Data Flow）與 Props 傳遞的精確性。
- Vite 優化打包：利用 Vite 的 Rollup 打包特性，實現極小體積的 CSS/JS 輸出，優化 Core Web Vitals (LCP/FID) 指標。
- 組件化架構設計：高度模組化的目錄結構，將 Hero、Skills、Projects 等功能區塊徹底解耦，便於維護與擴展。

## 技術棧

### 前端核心

- 核心框架: React 18 (Functional Components & Hooks)
- 開發語言: TypeScript (Type-Safe Development)
- 建構工具: Vite 
- 樣式處理: Tailwind CSS
- 動畫效果: Framer Motion & CSS Keyframes
- 圖標庫: Lucide React

### 核心動效技術說明

1. CSS Keyframes 動畫
用於處理與「使用者交互無關」的高性能背景動畫。例如背景漸變流動或無限循環的裝飾元素，這能確保主執行緒（Main Thread）在處理複雜邏輯時，視覺層依然保持順暢。

2. Framer Motion 交互
專注於「與使用者同步」的動態體驗：
- Scroll-Triggered Animations: 使用 whileInView 實現當使用者滑動到該區塊時，內容優雅地淡入或彈出。
- Layout Transitions: 處理不同頁面或組件切換時的平滑過渡。
- Gestures: 針對作品集卡片加入 whileHover 縮放效果，提升介面的回饋感。

## 專案架構

```bash
ec-portfolio/
├── src/                    # 前端原始碼
│   ├── components/         # 封裝了 Framer Motion 邏輯的 UI 組件
│   ├── data/               # 集中化管理作品集與技能數據
│   ├── assets/             # 圖片、Logo 等靜態資源
│   ├── App.tsx             # 整合 CSS 變數與組件路由
│   └── index.css           # 定義全域 CSS Keyframes 與 Tailwind 擴展
├── tailwind.config.js      # 自定義主題配色與動畫配置
├── tsconfig.json           # TypeScript 編譯規則
└── vite.config.ts          # Vite 效能優化與路徑別名設定
```

## 快速開始

### 系統需求
- Node.js (建議 v18 以上)
- npm 或 yarn

1. 安裝與啟動

```bash
# 複製專案
git clone [https://github.com/wuguji007/ec-portfolio.git](https://github.com/wuguji007/ec-portfolio.git)

# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
```

- 預設運行於 http://localhost:5173

2. 生產環境部署

```bash
npm run build
```

## 專案細節分析

### 數據驅動 UI (Data-Driven)
- 所有作品資訊皆儲存於 src/data/projects.ts，並通過 TypeScript Interface 嚴格定義。這種設計讓 UI 保持純粹（Pure Component），僅負責接收數據並透過 Framer Motion 渲染。

### 組件實作細節
- Navbar.tsx: 結合 framer-motion 的 AnimatePresence 實現移動端選單的滑入滑出。
- Hero.tsx: 使用 CSS Keyframes 處理文字光暈閃爍，搭配 Framer Motion 的 Stagger 效果實現標題文字逐個彈出。
- Skills.tsx: 動態呈現技能圖標，展示在大量渲染時對動畫性能的精確控制。

## 常見問題排解 (Troubleshooting)
- 問題 1: 動畫在行動端有卡頓感
解決方法: 請確認該組件是否過度使用了 filter 濾鏡。建議將頻繁變動的屬性（如 opacity, transform）交由 GPU 加速處理，或改用純 CSS Keyframes。

- 問題 2: Tailwind 斷點在 Framer Motion 中不一致
解決方法: 專案內統一使用 Tailwind 的 md:, lg: 進行響應式佈局，Framer Motion 僅負責動態過程，不涉及基礎排版，以避免樣式衝突。