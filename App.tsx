
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import { PhoneIcon } from './components/ui/Icons.tsx';
import Button from './components/ui/Button.tsx';
import useScrollTo from './hooks/useScrollTo.ts';
import { ProjectCategory } from './types.ts';
import HomePage from './pages/HomePage.tsx';
import CategoryPage from './pages/CategoryPage.tsx';

export default function App() {
  const [currentView, setCurrentView] = useState<{ page: 'home' | 'category'; category: ProjectCategory | null }>({ page: 'home', category: null });
  const [inquirySubject, setInquirySubject] = useState('');
  const [scrollToContactFlag, setScrollToContactFlag] = useState(false);

  const handleNavigateHome = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.scrollTo(0, 0);
    setCurrentView({ page: 'home', category: null });
  };

  const handleNavigateToCategory = (category: ProjectCategory) => {
    window.scrollTo(0, 0);
    setCurrentView({ page: 'category', category });
  };

  const handleProductInquiry = (productName: string) => {
    setInquirySubject(productName);
    setCurrentView({ page: 'home', category: null });
    setScrollToContactFlag(true); // Set flag to trigger scroll on next render
  };

  useEffect(() => {
    if (scrollToContactFlag) {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      setScrollToContactFlag(false); // Reset the flag
    }
  }, [scrollToContactFlag]);

  const contactFormInitialMessage = inquirySubject ? `Pozdravljeni, zanimam se za izdelek: ${inquirySubject}\n\n` : '';
  const homeContactScroll = useScrollTo('contact');

  return (
    <div className="bg-neutral-light text-neutral-text antialiased">
      <Header 
        onNavigateHome={handleNavigateHome}
        onNavigateToCategory={handleNavigateToCategory}
      />
      
      {currentView.page === 'home' ? (
        <main>
          <HomePage onNavigateToCategory={handleNavigateToCategory} />
          <Contact key={inquirySubject} initialMessage={contactFormInitialMessage} />
        </main>
      ) : (
        <main>
          <CategoryPage 
            category={currentView.category!}
            onBack={handleNavigateHome}
            onProductInquiry={handleProductInquiry}
          />
        </main>
      )}

      <Footer />

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-neutral-light/90 backdrop-blur-sm border-t border-gray-200 p-3 flex items-center justify-around z-40 gap-3">
        <Button onClick={homeContactScroll} variant="primary" className="w-1/2 text-sm py-2.5">
          Povpraševanje
        </Button>
        <a 
          href="tel:+38600000000" 
          className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-neutral-dark rounded-md hover:bg-neutral-medium transition-colors w-1/2"
          aria-label="Call us"
        >
          <PhoneIcon className="w-5 h-5" />
          <span>Pokličite</span>
        </a>
      </div>
      {/* Spacer for mobile sticky bar */}
      <div className="md:hidden h-24"></div>
    </div>
  );
}
