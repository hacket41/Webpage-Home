import React from 'react';

type Props = { icon: string; title: string; count: number };
const CategoryCard: React.FC<Props> = ({ icon, title, count }) => (
  <div className="shrink-0 w-28 text-center">
    <div className="mx-auto w-20 h-20 rounded-full bg-gray-100 grid place-items-center text-3xl">
      {icon}
    </div>
    <p className="mt-2 text-sm font-medium">{title}</p>
    <p className="text-xs text-gray-500">{count} Restaurants</p>
  </div>
);
export default CategoryCard;
