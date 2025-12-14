
import React from 'react';

interface ChipProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Chip: React.FC<ChipProps> = ({ children, className = '', isActive, onClick }) => {
  const baseStyles = 'px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer tracking-wide';
  const activeStyles = 'bg-brand-dark text-white';
  const inactiveStyles = 'bg-neutral-medium text-neutral-text hover:bg-gray-200';
  
  return (
    <button
      className={`${baseStyles} ${isActive ? activeStyles : inactiveStyles} ${className}`}
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
    >
      {children}
    </button>
  );
};

export default Chip;
