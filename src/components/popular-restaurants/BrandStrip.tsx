import React from 'react';
import papa    from '../../assets/Papa.png';
import shwarma from '../../assets/Shwarma.png';
import kfc     from '../../assets/KFC.png';
import mc      from '../../assets/McDonalds.png';
import bk      from '../../assets/BK.png';
import texas   from '../../assets/Texas.png';

type Brand = { name: string; image: string };

const brands = [
  { name: 'PAPA JOHNS',        image: papa },
  { name: 'BURGER KING', image: bk },
  { name: 'Shaurma',     image: shwarma },
  { name: "McDonald's London", image: mc },
  { name: 'KFCWestLondon', image: kfc },
  { name: 'TexasChicken', image: texas },
];

export default function BrandStrip() {
  return (
    <section className="px-4 pb-6">
      <h2 className="text-lg font-semibold mb-4">Popular Restaurants</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(120px,25vw),1fr))] gap-3">
        {brands.map((b) => (
          <div
            key={b.name}
            className="
              relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow
            "
          >
            {/* picture fills rectangle */}
            <img
              src={b.image}
              alt={b.name}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* amber label inside bottom of rectangle */}
            <div className="absolute inset-x-0 bottom-0 bg-amber-500/90 text-white text-xs font-semibold px-2 py-1">
              {b.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
