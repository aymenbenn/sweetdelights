import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import chocolatImg from '../images/chocolat.png';
import boxImg from '../images/box.jpg';
import dessertImg from '../images/dessert.jpg';
export function HomePage() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const categories = [{
    name: 'Desserts',
     image: dessertImg,
    link: '/shop?category=Desserts'
  }, {
    name: 'Ice Cream',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800',
    link: '/shop?category=Ice Cream'
  }, {
     name: 'Chocolate',
    image: chocolatImg,
    link: '/shop?category=Chocolate'
  }, {
   name: 'Gift Boxes',
    image: boxImg,
    link: '/shop?category=Gift Boxes'
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=2000" alt="Delicious desserts" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Handcrafted Desserts,
              <br />
              Made with Love
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light text-cream-100">
              Experience the finest artisanal pastries, chocolates, and ice
              creams.
            </p>
            <Link to="/shop">
              <Button size="lg" className="text-lg px-10 py-4">
                Shop Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-chocolate-900 mb-4">
              Sweet Categories
            </h2>
            <p className="text-chocolate-600 max-w-2xl mx-auto">
              Explore our wide range of delightful treats, from creamy ice
              creams to rich chocolates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => <Link key={cat.name} to={cat.link} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    {cat.name}
                  </h3>
                  <span className="inline-flex items-center text-cream-100 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                    View Products <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </Link>)}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-chocolate-900 mb-4">
                Best Sellers
              </h2>
              <p className="text-chocolate-600">
                Our most loved treats, chosen by you.
              </p>
            </div>
            <Link to="/shop">
              <Button variant="outline" rightIcon={<ArrowRight size={16} />}>
                View All
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, idx) => <ProductCard key={product.id} product={product} index={idx} />)}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-24 bg-mint-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="text-caramel-600 font-bold tracking-wider uppercase mb-2 block">
                Limited Time Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-chocolate-900 mb-6">
                Summer Ice Cream
                <br />
                Party Pack
              </h2>
              <p className="text-lg text-chocolate-700 mb-8 leading-relaxed">
                Get 4 pints of our premium handcrafted ice cream plus cones and
                toppings for a special price. Perfect for sunny weekends!
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-3xl font-bold text-caramel-600">
                  $24.99
                </div>
                <div className="text-xl text-chocolate-400 line-through">
                  $32.00
                </div>
              </div>
              <Link to="/product/g3">
                <Button size="lg">Order Now</Button>
              </Link>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-full overflow-hidden border-8 border-white shadow-xl aspect-square max-w-md mx-auto">
                <img src="https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&q=80&w=800" alt="Ice cream party pack" className="w-full h-full object-cover" />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-10 -right-10 w-24 h-24 bg-caramel-200 rounded-full blur-2xl opacity-50" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-mint-200 rounded-full blur-2xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-chocolate-900 mb-16">
            Sweet Words
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            text: "The chocolate lava cake is absolutely divine. Best I've ever had!",
            author: 'Sarah M.'
          }, {
            text: "Ordered the gift box for my mom's birthday. She loved the packaging and the taste!",
            author: 'James T.'
          }, {
            text: 'Their vanilla bean ice cream is a game changer. You can taste the quality.',
            author: 'Emily R.'
          }].map((t, i) => <div key={i} className="bg-cream-50 p-8 rounded-2xl relative">
                <div className="flex justify-center mb-4 text-caramel-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-chocolate-700 italic mb-6">"{t.text}"</p>
                <p className="font-bold text-chocolate-900">- {t.author}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-chocolate-900 text-cream-100">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Join Our Sweet Community
          </h2>
          <p className="text-chocolate-200 mb-8">
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-3 rounded-full bg-chocolate-800 border border-chocolate-700 text-white placeholder:text-chocolate-400 focus:outline-none focus:border-caramel-500" />
            <Button className="w-full sm:w-auto">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>;
}