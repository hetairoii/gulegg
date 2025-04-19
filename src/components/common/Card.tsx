import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;