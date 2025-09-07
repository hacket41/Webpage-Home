import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  { icon: '🍔', title: 'Burgers & Fast food', count: 21 },
  { icon: '🥗', title: 'Salads', count: 32 },
  { icon: '🍝', title: 'Pasta & Casuals', count: 4 },
  { icon: '🍕', title: 'Pizza', count: 32 },
  { icon: '🍳', title: 'Breakfast', count: 4 },
  { icon: '🍲', title: 'Soups', count: 32 },
];

const CategoryGrid: React.FC = () => (
  <section className="px-4 py-6">
    <h2 className="text-lg font-semibold mb-4">Popular Categories</h2>
    <div className="flex gap-4 overflow-x-auto">
      {categories.map((c) => (
        <CategoryCard key={c.title} {...c} />
      ))}
    </div>
  </section>
);
export default CategoryGrid;
