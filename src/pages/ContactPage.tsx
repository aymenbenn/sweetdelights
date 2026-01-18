import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
export function ContactPage() {
  return <div className="pt-24 pb-20 min-h-screen bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-chocolate-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-chocolate-600 max-w-2xl mx-auto">
            Have a question about our products or want to place a custom order?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-chocolate-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-caramel-100 text-caramel-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-chocolate-900 mb-1">
                      Visit Us
                    </h3>
                    <p className="text-chocolate-600">
                      123 Baker Street
                      <br />
                      Sweet City, SC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-caramel-100 text-caramel-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-chocolate-900 mb-1">
                      Call Us
                    </h3>
                    <p className="text-chocolate-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-caramel-100 text-caramel-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-chocolate-900 mb-1">
                      Email Us
                    </h3>
                    <p className="text-chocolate-600">
                      hello@sweetdelights.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-chocolate-900 mb-6">
                Opening Hours
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-chocolate-50 pb-2">
                  <span className="text-chocolate-600">Monday - Friday</span>
                  <span className="font-medium text-chocolate-900">
                    8:00 AM - 8:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-chocolate-50 pb-2">
                  <span className="text-chocolate-600">Saturday</span>
                  <span className="font-medium text-chocolate-900">
                    9:00 AM - 9:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-chocolate-600">Sunday</span>
                  <span className="font-medium text-chocolate-900">
                    10:00 AM - 6:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm h-fit">
            <h2 className="text-2xl font-serif font-bold text-chocolate-900 mb-6">
              Send a Message
            </h2>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Name" placeholder="Your name" />
                <Input label="Email" type="email" placeholder="your@email.com" />
              </div>
              <Input label="Subject" placeholder="How can we help?" />
              <Input label="Message" multiline placeholder="Tell us more details..." />
              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>;
}