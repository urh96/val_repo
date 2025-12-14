
import React from 'react';
import { VisualizationPackage } from '../types.ts';
import Button from './ui/Button.tsx';
import { CheckIcon } from './ui/Icons.tsx';

interface ServicePackageCardProps {
  packageInfo: VisualizationPackage;
  onInquiry: (packageName: string) => void;
}

const ServicePackageCard: React.FC<ServicePackageCardProps> = ({ packageInfo, onInquiry }) => {
  const { name, price, description, features, id } = packageInfo;

  return (
    <div className="flex flex-col rounded-sm border border-gray-200/80 p-8 bg-white">
      <h3 className="font-serif text-2xl font-bold text-neutral-dark">{name}</h3>
      <p className="mt-2 text-neutral-text">{description}</p>
      <p className="my-6 text-3xl font-semibold text-brand-dark">{price}</p>
      
      <ul className="space-y-3 text-neutral-text flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckIcon className="w-5 h-5 text-brand-light flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button 
          variant={id === 'V-02' ? 'primary' : 'secondary'} 
          className="w-full"
          onClick={() => onInquiry(`paket vizualizacije: ${name}`)}
        >
          Naroči paket
        </Button>
      </div>
    </div>
  );
};

export default ServicePackageCard;
