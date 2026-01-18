import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { CheckCircle } from 'lucide-react';
export function CheckoutPage() {
  const {
    items,
    cartTotal,
    clearCart
  } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  if (items.length === 0 && !isSuccess) {
    navigate('/shop');
    return null;
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setIsSuccess(true);
    clearCart();
  };
  if (isSuccess) {
    return <div className="pt-32 pb-20 min-h-screen bg-cream-50 flex items-center justify-center px-4">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg max-w-md text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <CheckCircle size={40} />
          </div>
          <h1 className="text-3xl font-serif font-bold text-chocolate-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-chocolate-600 mb-8">
            Thank you for your sweet order. We've sent a confirmation email with
            your order details.
          </p>
          <Button onClick={() => navigate('/')} className="w-full">
            Return Home
          </Button>
        </div>
      </div>;
  }
  return <div className="pt-24 pb-20 min-h-screen bg-cream-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-chocolate-900 mb-8 text-center">
          Checkout
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="flex-grow">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Delivery Method */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h2 className="text-xl font-serif font-bold text-chocolate-900 mb-6">
                  Delivery Method
                </h2>
                <div className="flex gap-4">
                  <button type="button" onClick={() => setDeliveryMethod('delivery')} className={`flex-1 py-4 px-6 rounded-xl border-2 font-medium transition-all ${deliveryMethod === 'delivery' ? 'border-caramel-500 bg-caramel-50 text-caramel-700' : 'border-chocolate-100 text-chocolate-600 hover:border-chocolate-200'}`}>
                    Delivery
                  </button>
                  <button type="button" onClick={() => setDeliveryMethod('pickup')} className={`flex-1 py-4 px-6 rounded-xl border-2 font-medium transition-all ${deliveryMethod === 'pickup' ? 'border-caramel-500 bg-caramel-50 text-caramel-700' : 'border-chocolate-100 text-chocolate-600 hover:border-chocolate-200'}`}>
                    Pickup
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
                <h2 className="text-xl font-serif font-bold text-chocolate-900 mb-4">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="First Name" required />
                  <Input label="Last Name" required />
                </div>
                <Input label="Email Address" type="email" required />
                <Input label="Phone Number" type="tel" required />
              </div>

              {/* Shipping Address */}
              {deliveryMethod === 'delivery' && <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
                  <h2 className="text-xl font-serif font-bold text-chocolate-900 mb-4">
                    Shipping Address
                  </h2>
                  <Input label="Street Address" required />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="City" required />
                    <Input label="State / Province" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Postal Code" required />
                    <Input label="Country" defaultValue="United States" readOnly />
                  </div>
                </div>}

              {/* Payment */}
              <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
                <h2 className="text-xl font-serif font-bold text-chocolate-900 mb-4">
                  Payment Details
                </h2>
                <Input label="Card Number" placeholder="0000 0000 0000 0000" required />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Expiry Date" placeholder="MM/YY" required />
                  <Input label="CVC" placeholder="123" required />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full" isLoading={isProcessing}>
                Pay ${cartTotal.toFixed(2)}
              </Button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-24">
              <h2 className="text-xl font-serif font-bold text-chocolate-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                {items.map(item => <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-cream-50 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium text-chocolate-900 text-sm">
                        {item.name}
                      </h4>
                      <p className="text-xs text-chocolate-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="font-medium text-chocolate-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>)}
              </div>

              <div className="border-t border-chocolate-100 pt-4 space-y-2">
                <div className="flex justify-between text-chocolate-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-chocolate-600">
                  <span>Shipping</span>
                  <span>
                    {deliveryMethod === 'delivery' ? '$5.00' : 'Free'}
                  </span>
                </div>
                <div className="flex justify-between text-xl font-bold text-chocolate-900 pt-2">
                  <span>Total</span>
                  <span>
                    $
                    {(cartTotal + (deliveryMethod === 'delivery' ? 5 : 0)).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}