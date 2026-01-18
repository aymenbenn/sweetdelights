import React from 'react';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
export function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-caramel-500 text-white hover:bg-caramel-600 focus:ring-caramel-500 shadow-md hover:shadow-lg',
    secondary: 'bg-chocolate-900 text-white hover:bg-chocolate-800 focus:ring-chocolate-900 shadow-md',
    outline: 'border-2 border-chocolate-900 text-chocolate-900 hover:bg-chocolate-50 focus:ring-chocolate-900',
    ghost: 'text-chocolate-900 hover:bg-chocolate-50/50 hover:text-caramel-600'
  };
  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg'
  };
  return <motion.button whileTap={{
    scale: 0.98
  }} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} disabled={disabled || isLoading} {...props}>
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </motion.button>;
}