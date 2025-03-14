import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const sampleProducts = [
  {
    id: 1,
    name: "Vintage Leather Sofa",
    price: 599,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800",
    condition: "Good"
  },
  {
    id: 2,
    name: "MacBook Pro 2021",
    price: 1299,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800",
    condition: "Excellent"
  },
  {
    id: 3,
    name: "Vintage Camera",
    price: 199,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800",
    condition: "Fair"
  },
  // Add more sample products here...
];

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-xl overflow-hidden mb-12">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-transparent flex items-center">
          <div className="text-white ml-12">
            <h1 className="text-5xl font-bold mb-4">Buy and Sell with Confidence</h1>
            <p className="text-xl mb-8">Your trusted marketplace for pre-owned treasures</p>
            <Link
              to="/sell"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 transition-colors duration-200"
            >
              <span>Start Selling</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <h2 className="text-3xl font-bold mb-8 text-emerald-900">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sampleProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-emerald-600">${product.price}</span>
                <span className="text-sm text-emerald-700 bg-emerald-100 px-2 py-1 rounded">
                  {product.condition}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;