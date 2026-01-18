import React, { useEffect, useState, createContext, useContext } from 'react';
import { Product } from '../data/products';
type CartItem = Product & {
  quantity: number;
};
type CartContextType = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
};
const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({
  children
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);
  const addItem = (product: Product, quantity = 1) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      if (existingItem) {
        return currentItems.map(item => item.id === product.id ? {
          ...item,
          quantity: item.quantity + quantity
        } : item);
      }
      return [...currentItems, {
        ...product,
        quantity
      }];
    });
    // Optional: Open cart when adding item
    // setIsCartOpen(true);
  };
  const removeItem = (productId: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== productId));
  };
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }
    setItems(currentItems => currentItems.map(item => item.id === productId ? {
      ...item,
      quantity
    } : item));
  };
  const clearCart = () => {
    setItems([]);
  };
  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  return <CartContext.Provider value={{
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    cartTotal,
    itemCount,
    isCartOpen,
    setIsCartOpen
  }}>
      {children}
    </CartContext.Provider>;
}
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}