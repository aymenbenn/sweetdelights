import React from 'react';
import { Minus, Plus } from 'lucide-react';
interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'md';
}
export function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99,
  size = 'md'
}: QuantitySelectorProps) {
  const sizeClasses = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10';
  const iconSize = size === 'sm' ? 14 : 16;
  const textSize = size === 'sm' ? 'text-sm w-8' : 'text-base w-12';
  return <div className="flex items-center rounded-full border border-chocolate-100 bg-white p-1">
      <button type="button" onClick={onDecrease} disabled={quantity <= min} className={`${sizeClasses} flex items-center justify-center rounded-full text-chocolate-600 hover:bg-chocolate-50 disabled:opacity-30 disabled:hover:bg-transparent transition-colors`} aria-label="Decrease quantity">
        <Minus size={iconSize} />
      </button>

      <span className={`${textSize} text-center font-medium text-chocolate-900`}>
        {quantity}
      </span>

      <button type="button" onClick={onIncrease} disabled={quantity >= max} className={`${sizeClasses} flex items-center justify-center rounded-full text-chocolate-600 hover:bg-chocolate-50 disabled:opacity-30 disabled:hover:bg-transparent transition-colors`} aria-label="Increase quantity">
        <Plus size={iconSize} />
      </button>
    </div>;
}