import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
export function Card({
  children,
  className = '',
  onClick
}: CardProps) {
  return <div onClick={onClick} className={`bg-white rounded-2xl shadow-sm border border-chocolate-50 overflow-hidden ${onClick ? 'cursor-pointer transition-transform hover:-translate-y-1 duration-300' : ''} ${className}`}>
      {children}
    </div>;
}