
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import AIAssistant from './components/AIAssistant.tsx';

// Pages
import Home from './pages/Home.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import ServiceDetailPage from './pages/ServiceDetailPage.tsx';
import PortfolioPage from './pages/PortfolioPage.tsx';
import ProjectDetailPage from './pages/ProjectDetailPage.tsx';
import ContactPage from './pages/ContactPage.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/project/:slug" element={<ProjectDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all route to prevent blank pages on invalid URLs */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </Router>
  );
}

export default App;
