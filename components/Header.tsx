
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants.ts';
import Button from './ui/Button.tsx';
import { MenuIcon, CloseIcon } from './ui/Icons.tsx';
import useScrollTo from '../hooks/useScrollTo.ts';
import { ProjectCategory } from '../types.ts';

interface HeaderProps {
  onNavigateHome: (e: React.MouseEvent) => void;
  onNavigateToCategory: (category: ProjectCategory) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome, onNavigateToCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleScrollToContact = useScrollTo('contact');
  const handleScrollToPortfolio = useScrollTo('portfolio');

  const handleMobileNav = (e: React.MouseEvent, action: () => void) => {
    e.preventDefault();
    action();
    setIsMenuOpen(false);
  }

  return (
    <header className="bg-neutral-light/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" onClick={onNavigateHome} className="text-2xl font-serif font-bold text-neutral-dark tracking-tight">
              Mizarstvo<span className="text-brand-light">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href="#" onClick={(e) => {e.preventDefault(); onNavigateToCategory(link.name as ProjectCategory)}} className="text-sm font-medium tracking-widest uppercase text-neutral-text hover:text-brand-dark transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#portfolio" onClick={handleScrollToPortfolio} className="text-sm font-medium tracking-widest uppercase text-neutral-text hover:text-brand-dark transition-colors">
              Portfolio
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button onClick={handleScrollToContact} variant="primary" className="py-2.5 px-6 text-xs">
              Povpraševanje
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open main menu"
              className="p-2 rounded-md text-neutral-text hover:bg-neutral-medium"
            >
              {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 bg-neutral-light shadow-lg border-t border-gray-200">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href="#"
                onClick={(e) => handleMobileNav(e, () => onNavigateToCategory(link.name as ProjectCategory))}
                className="block px-3 py-2 rounded-md text-base font-medium tracking-wider text-neutral-dark hover:bg-neutral-medium"
              >
                {link.name}
              </a>
            ))}
             <a
                href="#portfolio"
                onClick={(e) => handleMobileNav(e, () => handleScrollToPortfolio(e))}
                className="block px-3 py-2 rounded-md text-base font-medium tracking-wider text-neutral-dark hover:bg-neutral-medium"
              >
                Portfolio
              </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
