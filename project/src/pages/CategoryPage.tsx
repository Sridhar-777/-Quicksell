import React from 'react';

const categories = [
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800",
    count: 150
  },
  {
    name: "Furniture",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800",
    count: 89
  },
  {
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800",
    count: 234
  },
  {
    name: "Books",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800",
    count: 167
  },
  // Add more categories...
];

function CategoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-emerald-900 mb-8">Browse Categories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
              <p className="text-emerald-100">{category.count} items</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;