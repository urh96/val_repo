
import React from 'react';
import { ProjectCategory } from '../types.ts';

interface OfferCardProps {
  title: string;
  description: string;
  forWhom?: string;
  onNavigate: () => void;
}

const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);


const OfferCard: React.FC<OfferCardProps> = ({ title, description, forWhom, onNavigate }) => {
  return (
    <div className="bg-white p-10 rounded-sm border border-gray-200/80 flex flex-col group">
      <h3 className="font-serif text-3xl font-bold text-neutral-dark">{title}</h3>
      <p className="mt-4 text-neutral-text leading-relaxed flex-grow">{description}</p>
      {forWhom && <p className="mt-4 text-sm text-gray-500">{forWhom}</p>}
      <div className="mt-8">
        <a onClick={onNavigate} className="inline-flex items-center font-semibold text-brand-dark cursor-pointer">
          <span>Ogled ponudbe</span>
          <ArrowIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

interface OfferTilesProps {
  onNavigateToCategory: (category: ProjectCategory) => void;
}

const OfferTiles: React.FC<OfferTilesProps> = ({ onNavigateToCategory }) => {
  const offers = [
    {
      title: 'Masivne mize po meri',
      description: 'Dimenzije, obdelava in detajli prilagojeni vašemu prostoru.',
      forWhom: 'Za zasebne domove in arhitekte.',
      category: 'Mize' as ProjectCategory,
    },
    {
      title: '3D Vizualizacije',
      description: 'Oživite svoj prostor in sprejmite prave odločitve pred izvedbo.',
      forWhom: 'Za investitorje, arhitekte in posameznike.',
      category: 'Renderji' as ProjectCategory,
    },
    {
      title: 'Vinske kleti po meri',
      description: 'Načrtovanje in izvedba za optimalno hrambo in predstavitev vaše zbirke.',
      forWhom: 'Za ljubitelje vin in gostince.',
      category: 'Vinske kleti' as ProjectCategory,
    },
  ];

  return (
    <section id="offers" className="py-20 sm:py-32 bg-neutral-medium">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-neutral-dark">Naše Storitve</h2>
            <p className="mt-4 text-lg text-neutral-text">
                Specializirani smo za tri področja, kjer dosegamo brezkompromisno kakovost.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <OfferCard 
              key={offer.title} 
              {...offer} 
              onNavigate={() => onNavigateToCategory(offer.category)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferTiles;
