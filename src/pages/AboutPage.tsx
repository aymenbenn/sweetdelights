import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users } from 'lucide-react';
export function AboutPage() {
  return <div className="w-full">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=2000" alt="Baking in progress" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-chocolate-900/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Our Story
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="text-xl max-w-2xl mx-auto font-light text-cream-100">
            Baking the world a better place, one dessert at a time.
          </motion.p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="flex-1">
              <h2 className="text-4xl font-serif font-bold text-chocolate-900 mb-6">
                A Passion for Sweetness
              </h2>
              <p className="text-lg text-chocolate-600 mb-6 leading-relaxed">
                Founded in 2010, Sweet Delights began as a small home kitchen
                experiment. Our founder, Sarah Jenkins, wanted to recreate the
                authentic patisserie experience she fell in love with during her
                travels in Paris.
              </p>
              <p className="text-lg text-chocolate-600 leading-relaxed">
                What started with a single batch of chocolate lava cakes has
                grown into a beloved local institution. We believe that dessert
                isn't just food—it's a moment of joy, a celebration, and a way
                to connect with the people you love.
              </p>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800" alt="Our kitchen" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-cream-50 rounded-2xl">
              <div className="w-16 h-16 bg-caramel-100 text-caramel-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-chocolate-900 mb-4">
                Made with Love
              </h3>
              <p className="text-chocolate-600">
                Every pastry, scoop of ice cream, and chocolate truffle is
                handcrafted by our passionate team.
              </p>
            </div>
            <div className="text-center p-8 bg-cream-50 rounded-2xl">
              <div className="w-16 h-16 bg-caramel-100 text-caramel-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-chocolate-900 mb-4">
                Premium Quality
              </h3>
              <p className="text-chocolate-600">
                We use only the finest ingredients: Belgian chocolate,
                Madagascar vanilla, and locally sourced fruits.
              </p>
            </div>
            <div className="text-center p-8 bg-cream-50 rounded-2xl">
              <div className="w-16 h-16 bg-caramel-100 text-caramel-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-chocolate-900 mb-4">
                Community First
              </h3>
              <p className="text-chocolate-600">
                We're proud to support local farmers and participate in
                community events throughout the year.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
}