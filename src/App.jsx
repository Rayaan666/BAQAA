import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import BaqaaUniverse from './components/BaqaaUniverse';
import LoveStories from './components/LoveStories';
import Founder from './components/Founder';
import CinematicMemories from './components/CinematicMemories';
import BrandMilestones from './components/BrandMilestones';
import SignatureCelebrations from './components/SignatureCelebrations';
import Destinations from './components/Destinations';
import Journal from './components/Journal';
import MediaPress from './components/MediaPress';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BazarTabel from './pages/BazarTabel';
import Portfolio from './pages/Portfolio';
import ComingSoonModal from './components/ComingSoonModal';

const Home = () => (
  <main>
    <Hero />
    <BaqaaUniverse />
    <Featured />
    <LoveStories />
    <Founder />
    <CinematicMemories />
    <BrandMilestones />
    <SignatureCelebrations />
    <Destinations />
    <Journal />
    <CTA />
    <MediaPress />
  </main>
);

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    window.requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="app-container">
        <Navbar />
        <ComingSoonModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/baqaa-bazar" element={<BazarTabel />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
