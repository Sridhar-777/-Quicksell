import React, { useState } from 'react';
import { Camera, Upload, DollarSign } from 'lucide-react';

function SellPage() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    condition: '',
    description: '',
    images: [] as string[],
  });

  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const estimatePrice = () => {
    // Generate a random price between $50 and $1000
    const randomPrice = Math.floor(Math.random() * (1000 - 50 + 1)) + 50;
    setEstimatedPrice(randomPrice);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-emerald-900 mb-8">Sell Your Item</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-emerald-900 mb-4 flex items-center">
            <Camera className="h-5 w-5 mr-2" />
            Add Photos
          </h2>
          <div className="border-2 border-dashed border-emerald-200 rounded-lg p-8 text-center">
            <Upload className="h-12 w-12 mx-auto text-emerald-400 mb-4" />
            <p className="text-emerald-700 mb-2">Drag and drop your photos here</p>
            <p className="text-sm text-emerald-500">or</p>
            <button
              type="button"
              className="mt-4 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-200 transition-colors duration-200"
            >
              Browse Files
            </button>
          </div>
        </div>

        {/* Item Details */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <h2 className="text-xl font-semibold text-emerald-900 mb-4">Item Details</h2>
          
          <div>
            <label className="block text-emerald-700 mb-2">Title</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-emerald-700 mb-2">Category</label>
            <select
              className="w-full px-4 py-2 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
              <option value="fashion">Fashion</option>
              <option value="books">Books</option>
            </select>
          </div>

          <div>
            <label className="block text-emerald-700 mb-2">Condition</label>
            <select
              className="w-full px-4 py-2 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={formData.condition}
              onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
            >
              <option value="">Select condition</option>
              <option value="new">New</option>
              <option value="like-new">Like New</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
            </select>
          </div>

          <div>
            <label className="block text-emerald-700 mb-2">Description</label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
        </div>

        {/* Price Estimation */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-emerald-900 mb-4 flex items-center">
            <DollarSign className="h-5 w-5 mr-2" />
            Price Estimation
          </h2>
          <button
            type="button"
            onClick={estimatePrice}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200"
          >
            Get Price Suggestion
          </button>
          {estimatedPrice && (
            <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
              <p className="text-emerald-700">Estimated Price Range:</p>
              <p className="text-2xl font-bold text-emerald-900">${estimatedPrice}</p>
              <p className="text-sm text-emerald-600 mt-2">
                This is an AI-generated suggestion based on similar items in our marketplace.
              </p>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-4 rounded-xl font-semibold hover:bg-emerald-600 transition-colors duration-200"
        >
          List Item for Sale
        </button>
      </form>
    </div>
  );
}

export default SellPage;