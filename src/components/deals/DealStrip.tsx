import React from 'react';

const deals = [
  { label: 'Up to 40% off', color: 'bg-purple-500' },
  { label: 'Vegan', discount: '-40%' },
  { label: 'Sushi', discount: '-20%' },
  { label: 'Pizza & Fast food', discount: '-17%' },
];

const DealStrip: React.FC = () => (
  <section className="px-4 py-6">
    <h2 className="text-lg font-semibold mb-4">Exclusive deals</h2>
    <div className="flex gap-4 overflow-x-auto">
      {deals.map((d, i) => (
        <div
          key={i}
          className={`shrink-0 w-36 h-36 rounded-xl text-white flex flex-col justify-end p-3 ${d.color || 'bg-gray-200'}`}
        >
          <p className="font-bold">{d.label}</p>
          {d.discount && <span className="text-sm">{d.discount}</span>}
        </div>
      ))}
    </div>
  </section>
);
export default DealStrip;
