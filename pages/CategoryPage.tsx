
import React from 'react';
import { ProjectCategory } from '../types.ts';
import { TABLE_PRODUCTS } from '../constants.ts';
import { ArrowLeftIcon } from '../components/ui/Icons.tsx';
import TableProductGrid from '../components/TableProductGrid.tsx';
import VisualizationsContent from '../components/VisualizationsContent.tsx';

interface CategoryPageProps {
  category: ProjectCategory;
  onBack: () => void;
  onProductInquiry: (productName: string) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, onBack, onProductInquiry }) => {
  const categoryTitles = {
    'Mize': 'Mize po meri',
    'Renderji': '3D Vizualizacije',
    'Vinske kleti': 'Vinske kleti po meri'
  };

  const renderContent = () => {
    switch (category) {
      case 'Mize':
        return <TableProductGrid products={TABLE_PRODUCTS} onInquiry={onProductInquiry} />;
      case 'Renderji':
        return <VisualizationsContent onInquiry={onProductInquiry} />;
      case 'Vinske kleti':
      default:
        return (
          <div className="mt-16 text-center border border-dashed border-gray-300 rounded-sm p-12 bg-neutral-medium/50">
            <h3 className="text-xl font-semibold text-neutral-dark">Stran v pripravi</h3>
            <p className="mt-2 text-neutral-text">Za kategorijo "{categoryTitles[category]}" trenutno pripravljamo vsebine. Za več informacij nam pošljite splošno povpraševanje.</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-neutral-light animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="max-w-6xl mx-auto">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-text hover:text-brand-dark mb-8">
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Nazaj na vse storitve</span>
          </button>
          
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-neutral-dark">{categoryTitles[category]}</h1>
          <p className="mt-4 text-lg text-neutral-text max-w-3xl">
            {category === 'Mize' 
              ? 'Vsak kos je unikat, izdelan z mislijo na vas in vaš prostor. Oglejte si nekaj primerov našega dela.'
              : 'Pretvorimo vaše ideje v osupljive fotorealistične podobe, ki vam pomagajo sprejeti prave odločitve o prihodnosti vašega prostora.'
            }
          </p>
        </div>
      </div>
      {renderContent()}
    </div>
  );
};

export default CategoryPage;
