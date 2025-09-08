import React from 'react';
import CategoryCard from './CategoryCard';

import burgerImg from '../../assets/Rectangle 13.png';
import saladImg  from '../../assets/Rectangle 15.png';
import pastaImg  from '../../assets/Rectangle 17.png';
import pizzaImg  from '../../assets/Rectangle 19.png';
import breakImg  from '../../assets/Rectangle 21.png';
import soupImg   from '../../assets/Rectangle 23.png';

const categories = [
  { image: burgerImg, title: 'Burgers & Fast food', count: 21 },
  { image: saladImg,  title: 'Salads', count: 32 },
  { image: pastaImg,  title: 'Pasta & Casuals', count: 4 },
  { image: pizzaImg,  title: 'Pizza', count: 32 },
  { image: breakImg,  title: 'Breakfast', count: 4 },
  { image: soupImg,   title: 'Soups', count: 32 },
];

export default function CategoryGrid() {
  return (
    <section className="px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">Popular Categories</h2>

      {/* auto-fit grid: 100 % width, dynamic columns */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4">
        {categories.map((c) => (
          <CategoryCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
}
