import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
const categories = ['All', 'Desserts', 'Ice Cream', 'Chocolate', 'Gift Boxes'];
export function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({
        category
      });
    }
  };
  const filteredProducts = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);
  return <div className="pt-24 pb-20 min-h-screen bg-cream-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-chocolate-900 mb-4">
            Our Menu
          </h1>
          <p className="text-chocolate-600 max-w-2xl mx-auto">
            Browse our complete collection of handcrafted treats.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => <button key={category} onClick={() => handleCategoryChange(category)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category ? 'bg-caramel-500 text-white shadow-md scale-105' : 'bg-white text-chocolate-600 hover:bg-chocolate-50 hover:text-chocolate-900'}`}>
              {category}
            </button>)}
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && <div className="text-center py-20">
            <p className="text-xl text-chocolate-400">
              No products found in this category.
            </p>
          </div>}
      </div>
    </div>;
}