import React from 'react';
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}
export function Badge({
  children,
  variant = 'primary',
  className = ''
}: BadgeProps) {
  const variants = {
    primary: 'bg-caramel-500 text-white',
    secondary: 'bg-rose-100 text-chocolate-900',
    outline: 'border border-chocolate-200 text-chocolate-600'
  };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>;
}