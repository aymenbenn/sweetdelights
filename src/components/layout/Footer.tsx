import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
export function Footer() {
  return <footer className="bg-chocolate-900 text-cream-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-3xl font-serif font-bold text-white mb-6 block">
              Sweet<span className="text-caramel-500">Delights</span>
            </Link>
            <p className="text-chocolate-100/80 mb-6 leading-relaxed">
              Handcrafted desserts made with love and the finest ingredients.
              Bringing sweetness to your life, one bite at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-100 hover:text-caramel-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream-100 hover:text-caramel-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream-100 hover:text-caramel-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/shop" className="text-chocolate-100/80 hover:text-caramel-500 transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-chocolate-100/80 hover:text-caramel-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-chocolate-100/80 hover:text-caramel-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-chocolate-100/80 hover:text-caramel-500 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-6">
              Our Menu
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/shop?category=Desserts" className="text-chocolate-100/80 hover:text-caramel-500 transition-colors">
                  Desserts
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Ice Cream" className="text-chocolate-100/80 hover:text-caramel-500 transition-colors">
                  Ice Cream
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Chocolate" className="text-chocolate-100/80 hover:text-caramel-500 transition-colors">
                  Chocolates
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Gift Boxes" className="text-chocolate-100/80 hover:text-caramel-500 transition-colors">
                  Gift Boxes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-chocolate-100/80">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-caramel-500" />
                <span>
                  123 Baker Street
                  <br />
                  Sweet City, SC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3 text-chocolate-100/80">
                <Phone size={20} className="flex-shrink-0 text-caramel-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-chocolate-100/80">
                <Mail size={20} className="flex-shrink-0 text-caramel-500" />
                <span>hello@sweetdelights.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-chocolate-800 pt-8 text-center text-sm text-chocolate-100/60">
          <p>
            &copy; {new Date().getFullYear()} Sweet Delights. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
}