import React from 'react';
import RestaurantCard from './RestaurantCard';
import rectangle7 from '../../assets/Rectangle 7.png';
import rectangle8 from '../../assets/Rectangle 8.png';
import rectangle9 from '../../assets/Rectangle 9.png';

const restaurants = [
  { name: 'Chef Burgers London', discount: '40% OFF', image: rectangle7 },
  { name: 'Grand Ai Cafe London', discount: '20% OFF', image: rectangle8 },
  { name: 'Butterbrot Cafe London', discount: '17% OFF', image: rectangle9 },
];

const RestaurantStrip: React.FC = () => (
  <section className="px-25 py-0">
    <h2 className="text-lg font-semibold mb-4">Top Restaurants</h2>

    {/* auto-fit grid: no gaps on left/right */}
    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
      {restaurants.map((r) => (
        <RestaurantCard key={r.name} {...r} />
      ))}
    </div>
  </section>
);

export default RestaurantStrip;
