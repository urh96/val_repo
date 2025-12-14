
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-dark text-gray-400">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <a href="/" className="text-2xl font-serif font-bold text-white tracking-tight">
          Mizarstvo<span className="text-brand-light">.</span>
        </a>
        <p className="text-sm mt-6">
          &copy; {new Date().getFullYear()} Mizarstvo Premium. Vse pravice pridržane.
        </p>
        <p className="text-sm mt-2">
          <a href="mailto:info@mizarstvo-premium.si" className="hover:text-white transition-colors">info@mizarstvo-premium.si</a>
          <span className="mx-2 opacity-50">|</span>
          <a href="tel:+38600000000" className="hover:text-white transition-colors">+386 00 000 000</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
