
import React from 'react';
import Hero from '../components/Hero.tsx';
import OfferTiles from '../components/OfferTiles.tsx';
import FeaturedWork from '../components/FeaturedWork.tsx';
import WhyUs from '../components/WhyUs.tsx';
import Process from '../components/Process.tsx';
import FAQ from '../components/FAQ.tsx';
import { ProjectCategory } from '../types.ts';

interface HomePageProps {
  onNavigateToCategory: (category: ProjectCategory) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigateToCategory }) => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <OfferTiles onNavigateToCategory={onNavigateToCategory} />
      <FeaturedWork />
      <WhyUs />
      <Process />
      <FAQ />
    </div>
  );
};

export default HomePage;
