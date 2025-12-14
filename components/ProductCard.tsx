
import React from 'react';
import { TableProduct } from '../types.ts';

interface ProductCardProps {
  product: TableProduct;
  onInquiry: (productName: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onInquiry }) => {
  return (
    <div className="text-center group">
      <div className="bg-neutral-medium flex items-center justify-center h-80 rounded-sm overflow-hidden p-4">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-neutral-dark">{product.name}</h3>
      {product.startingPrice && (
        <p className="mt-1 text-sm text-neutral-text/70">
          Cena od {new Intl.NumberFormat('sl-SI', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(product.startingPrice)}
        </p>
      )}
      <button 
        onClick={() => onInquiry(product.name)}
        className="mt-2 text-sm font-semibold text-brand-dark hover:underline"
      >
        Pošlji povpraševanje
      </button>
    </div>
  );
};

export default ProductCard;
