import React from 'react';

type Props = { name: string; discount: string };
const RestaurantCard: React.FC<Props> = ({ name, discount }) => (
  <div className="shrink-0 w-56 h-36 rounded-xl bg-gray-200 relative overflow-hidden">
    <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
      {discount}
    </span>
    <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur px-3 py-2">
      <p className="text-sm font-semibold">{name}</p>
    </div>
  </div>
);
export default RestaurantCard;
