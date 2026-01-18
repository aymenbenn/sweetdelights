import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Truck, ShieldCheck, Clock } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { QuantitySelector } from '../components/ui/QuantitySelector';
import { ProductCard } from '../components/ProductCard';
export function ProductPage() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const {
    addItem
  } = useCart();
  const [quantity, setQuantity] = useState(1);
  const product = products.find(p => p.id === id);
  if (!product) {
    return <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-serif text-chocolate-900 mb-4">
          Product not found
        </h2>
        <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
      </div>;
  }
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const handleAddToCart = () => {
    addItem(product, quantity);
    // Could add toast notification here
  };
  return <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center text-chocolate-600 hover:text-caramel-500 mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden bg-cream-50">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <span className="text-caramel-600 font-medium uppercase tracking-wider mb-2">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-chocolate-900 mb-4">
              {product.name}
            </h1>
            <div className="text-3xl font-bold text-chocolate-900 mb-6">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-lg text-chocolate-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 pb-8 border-b border-chocolate-100">
              <QuantitySelector quantity={quantity} onIncrease={() => setQuantity(q => q + 1)} onDecrease={() => setQuantity(q => q - 1)} />
              <Button size="lg" className="w-full sm:w-auto px-12" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-cream-50 rounded-xl">
                <Truck className="text-caramel-500 mb-2" size={24} />
                <span className="text-sm font-medium text-chocolate-900">
                  Fast Delivery
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-cream-50 rounded-xl">
                <ShieldCheck className="text-caramel-500 mb-2" size={24} />
                <span className="text-sm font-medium text-chocolate-900">
                  Quality Guarantee
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-cream-50 rounded-xl">
                <Clock className="text-caramel-500 mb-2" size={24} />
                <span className="text-sm font-medium text-chocolate-900">
                  Fresh Daily
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && <div className="border-t border-chocolate-100 pt-16">
            <h2 className="text-3xl font-serif font-bold text-chocolate-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>}
      </div>
    </div>;
}