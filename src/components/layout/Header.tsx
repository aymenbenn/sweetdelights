import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../ui/Badge';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    itemCount
  } = useCart();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Shop',
    path: '/shop'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-chocolate-900" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>

            {/* Logo */}
            <Link to="/" className="text-2xl md:text-3xl font-serif font-bold text-chocolate-900">
              Sweet<span className="text-caramel-500">Delights</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors hover:text-caramel-500 ${location.pathname === link.path ? 'text-caramel-500' : 'text-chocolate-900'}`}>
                  {link.name}
                </Link>)}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-chocolate-900 hover:text-caramel-500 transition-colors hidden sm:block">
                <Search size={20} />
              </button>
              <Link to="/cart" className="relative p-2 text-chocolate-900 hover:text-caramel-500 transition-colors">
                <ShoppingBag size={20} />
                {itemCount > 0 && <motion.span initial={{
                scale: 0
              }} animate={{
                scale: 1
              }} className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-caramel-500 text-[10px] font-bold text-white">
                    {itemCount}
                  </motion.span>}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && <>
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 bg-black/50 z-50 md:hidden" />
            <motion.div initial={{
          x: '-100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '-100%'
        }} transition={{
          type: 'spring',
          damping: 25,
          stiffness: 200
        }} className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-cream-50 z-50 md:hidden shadow-xl">
              <div className="p-5 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl font-serif font-bold text-chocolate-900">
                    Menu
                  </span>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-chocolate-900">
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col space-y-6">
                  {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-lg font-medium ${location.pathname === link.path ? 'text-caramel-500' : 'text-chocolate-900'}`}>
                      {link.name}
                    </Link>)}
                </nav>

                <div className="mt-auto pt-8 border-t border-chocolate-100">
                  <p className="text-sm text-chocolate-600 mb-4">
                    123 Baker Street
                    <br />
                    Sweet City, SC 12345
                  </p>
                  <p className="text-sm text-chocolate-600">
                    (555) 123-4567
                    <br />
                    hello@sweetdelights.com
                  </p>
                </div>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
}