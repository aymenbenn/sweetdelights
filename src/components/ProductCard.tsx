import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Link } from 'react-router-dom';
interface ProductCardProps {
  product: Product;
  index?: number;
}
export function ProductCard({
  product,
  index = 0
}: ProductCardProps) {
  const {
    addItem
  } = useCart();
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} viewport={{
    once: true
  }}>
      <Link to={`/product/${product.id}`}>
        <Card className="group h-full flex flex-col relative">
          <div className="relative aspect-square overflow-hidden bg-chocolate-50">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />

            {/* Overlay Actions */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
              <Button variant="primary" size="sm" onClick={handleAddToCart} className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" aria-label="Add to cart">
                <ShoppingBag size={18} />
              </Button>
            </div>
          </div>

          <div className="p-4 flex flex-col flex-grow">
            <div className="mb-1 text-xs font-medium text-caramel-600 uppercase tracking-wider">
              {product.category}
            </div>
            <h3 className="text-lg font-serif font-semibold text-chocolate-900 mb-2 line-clamp-1 group-hover:text-caramel-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-chocolate-600 mb-4 line-clamp-2 flex-grow">
              {product.description}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xl font-bold text-chocolate-900">
                ${product.price.toFixed(2)}
              </span>
              <Button variant="outline" size="sm" className="md:hidden" onClick={handleAddToCart}>
                Add
              </Button>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>;
}