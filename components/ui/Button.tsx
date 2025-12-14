
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wider rounded-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50';

  const variantStyles = {
    primary: 'bg-brand-dark text-white hover:bg-neutral-dark focus:ring-brand-dark',
    secondary: 'bg-transparent border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white focus:ring-brand-dark',
    outline: 'bg-transparent border border-gray-300 text-neutral-dark hover:bg-gray-50 hover:border-neutral-dark focus:ring-brand-dark',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
