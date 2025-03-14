import React from 'react';
import { ArrowLeft, Star, User, Calendar, MapPin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();

  // Mock product data (in a real app, this would come from an API)
  const product = {
    name: "Vintage Leather Sofa",
    price: 599,
    condition: "Good",
    location: "New York, NY",
    seller: "John Doe",
    listed: "2 days ago",
    rating: 4.8,
    description: "Beautiful vintage leather sofa in excellent condition. Perfect for any living room or office space. Minor wear consistent with age, but overall in great shape.",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=800",
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${product.name} ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-emerald-900 mb-2">{product.name}</h1>
            <p className="text-4xl font-bold text-emerald-600">${product.price}</p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
              {product.condition}
            </span>
            <div className="flex items-center text-emerald-700">
              <Star className="h-5 w-5 text-yellow-400 mr-1" />
              {product.rating}
            </div>
          </div>

          <div className="space-y-3 text-emerald-700">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              {product.seller}
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              {product.location}
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Listed {product.listed}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-emerald-900 mb-2">Description</h2>
            <p className="text-emerald-700">{product.description}</p>
          </div>

          <div className="space-y-4">
            <button className="w-full bg-emerald-500 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors duration-200">
              Contact Seller
            </button>
            <button className="w-full bg-emerald-100 text-emerald-700 py-3 rounded-xl font-semibold hover:bg-emerald-200 transition-colors duration-200">
              Make an Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;