
import React from 'react';
import { TableProduct } from '../types.ts';
import ProductCard from './ProductCard.tsx';

interface TableProductGridProps {
  products: TableProduct[];
  onInquiry: (productName: string) => void;
}

const TableProductGrid: React.FC<TableProductGridProps> = ({ products, onInquiry }) => {
  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onInquiry={onInquiry} />
      ))}
    </div>
  );
};

export default TableProductGrid;
