import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutCompany from './components/AboutCompany';
import Products from './components/Products';
import TrustSection from './components/TrustSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Dynamic Scroll Section Tracker for navigation highlighting
  useEffect(() => {
    const handleObserver = () => {
      const sections = ['inicio', 'categorias', 'diferenciais', 'confianca', 'depoimentos', 'faq', 'contato'];
      const scrollPosition = window.scrollY + 250; // offset for triggers

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleObserver);
    return () => window.removeEventListener('scroll', handleObserver);
  }, []);

  const handleCustomNavigation = (sectionId: string, categoryId?: string) => {
    // Scroll to the specified category inside products smoothly
    if (categoryId) {
      setSelectedCategory(categoryId);
    }
    const targetId = sectionId === 'produtos' ? 'categorias' : sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white antialiased overflow-x-hidden">
      {/* Header element */}
      <Header onNavigate={handleCustomNavigation} activeSection={activeSection} activeCategory={selectedCategory} />

      <main>
        {/* Hero Banner Section */}
        <Hero onNavigate={handleCustomNavigation} />

        {/* Unified Category Explorer & Products Showcase */}
        <Products
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Apple Reseller Key Differentials */}
        <Features />

        {/* Corporate Institutional Section */}
        <AboutCompany />

        {/* Device Verifiers: Serial and Condition Check instructions */}
        <TrustSection />

        {/* Client reviews / Testimonials */}
        <Testimonials />

        {/* FAQ Panel */}
        <FAQ />

        {/* Direct WhatsApp Call conversion */}
        <CTA />
      </main>

      {/* Footer Navigation, Copyright, Disclaimers */}
      <Footer onNavigate={handleCustomNavigation} />

      <FloatingWhatsApp />
    </div>
  );
}

