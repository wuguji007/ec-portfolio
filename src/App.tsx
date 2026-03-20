import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import About from './components/About';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
import Footer from './components/Footer';

const About    = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills   = lazy(() => import('./components/Skills'));
const Contact  = lazy(() => import('./components/Contact'));


export default function App() {
  return (
    <div className="relative bg-[#050508] min-h-screen">
      <div className="noise-overlay" />
      <div className="scanline" />

      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
