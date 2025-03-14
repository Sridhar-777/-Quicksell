import React from 'react';
import { Shield, Users, Truck } from 'lucide-react';

function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-emerald-900 mb-4">About Quick Sell</h1>
        <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
          Your trusted marketplace for buying and selling pre-owned items. We connect sellers with buyers
          in a safe and reliable environment.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Feature
          icon={<Shield className="h-12 w-12" />}
          title="Secure Transactions"
          description="Every transaction is protected with our secure payment system and buyer protection policy."
        />
        <Feature
          icon={<Users className="h-12 w-12" />}
          title="Verified Users"
          description="Our community of verified users ensures trust and reliability in every transaction."
        />
        <Feature
          icon={<Truck className="h-12 w-12" />}
          title="Easy Shipping"
          description="Integrated shipping solutions make it simple to send and receive items nationwide."
        />
      </div>

      {/* Story Section */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:w-1/2">
            <h2 className="text-3xl font-bold text-emerald-900 mb-4">Our Story</h2>
            <p className="text-emerald-700 mb-4">
              Founded in 2025, Quick Sell has grown from a small local marketplace to a nationwide
              platform for buying and selling pre-owned items. Our mission is to make second-hand
              shopping sustainable, easy, and secure.
            </p>
            <p className="text-emerald-700">
              We believe in giving items a second life while helping our users make and save money.
              Our platform is built on the principles of trust, sustainability, and community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-md">
      <div className="text-emerald-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-emerald-900 mb-2">{title}</h3>
      <p className="text-emerald-700">{description}</p>
    </div>
  );
}

export default AboutPage;