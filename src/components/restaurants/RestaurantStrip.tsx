import React from 'react';
import RestaurantCard from './RestaurantCard';

const restaurants = [
  { name: 'Chef Burgers London', discount: '40% OFF' },
  { name: 'Grand Ai Cafe London', discount: '20% OFF' },
  { name: 'Butterbrot Cafe London', discount: '17% OFF' },
];

const RestaurantStrip: React.FC = () => (
  <section className="px-4 py-6">
    <h2 className="text-lg font-semibold mb-4">Top Restaurants</h2>
    <div className="flex gap-4 overflow-x-auto">
      {restaurants.map((r) => (
        <RestaurantCard key={r.name} {...r} />
      ))}
    </div>
  </section>
);
export default RestaurantStrip;
