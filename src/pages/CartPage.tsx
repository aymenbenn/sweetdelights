import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { QuantitySelector } from '../components/ui/QuantitySelector';
export function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    cartTotal
  } = useCart();
  const navigate = useNavigate();
  if (items.length === 0) {
    return <div className="pt-32 pb-20 min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-cream-100 rounded-full flex items-center justify-center mb-6 text-caramel-500">
          <ShoppingBag size={48} />
        </div>
        <h1 className="text-3xl font-serif font-bold text-chocolate-900 mb-4">
          Your cart is empty
        </h1>
        <p className="text-chocolate-600 mb-8 max-w-md">
          Looks like you haven't added any sweet treats yet. Browse our menu to
          find something delicious.
        </p>
        <Link to="/shop">
          <Button size="lg">Start Shopping</Button>
        </Link>
      </div>;
  }
  return <div className="pt-24 pb-20 min-h-screen bg-cream-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-chocolate-900 mb-8">
          Your Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-grow space-y-6">
            {items.map(item => <div key={item.id} className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-full sm:w-24 h-24 bg-cream-50 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-lg font-bold text-chocolate-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-chocolate-500 mb-2">
                    {item.category}
                  </p>
                  <div className="text-lg font-semibold text-caramel-600 sm:hidden">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <QuantitySelector quantity={item.quantity} onIncrease={() => updateQuantity(item.id, item.quantity + 1)} onDecrease={() => updateQuantity(item.id, item.quantity - 1)} size="sm" />

                  <div className="text-lg font-semibold text-chocolate-900 hidden sm:block w-24 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <button onClick={() => removeItem(item.id)} className="text-chocolate-400 hover:text-red-500 transition-colors p-2" aria-label="Remove item">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>)}
          </div>

          {/* Summary */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="bg-white p-8 rounded-2xl shadow-sm sticky top-24">
              <h2 className="text-xl font-serif font-bold text-chocolate-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-chocolate-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-chocolate-600">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-chocolate-100 pt-4 mb-8">
                <div className="flex justify-between text-xl font-bold text-chocolate-900">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full" size="lg" onClick={() => navigate('/checkout')} rightIcon={<ArrowRight size={18} />}>
                Proceed to Checkout
              </Button>

              <p className="text-xs text-center text-chocolate-400 mt-4">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}