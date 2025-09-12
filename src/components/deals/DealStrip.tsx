import React from 'react';

const deals = [
  { label: 'Pizza & Fast food' },
  { label: 'Vegan' },
  { label: 'Sushi' },
  { label: 'Others' },
];

export default function DealStrip() {
  return (
      <section className="px-20 md:px-16 lg:px-24 py-10">
        <div className="flex items-center justify-between">
          {/* LEFT */}
          <div className="text-black text-[30px] font-extrabold whitespace-nowrap">
            Up to -40% Order.uk exclusive deals
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3 overflow-x-auto">
            {deals.map((d) => (
              <button
                key={d.label}
                className="
                  shrink-0 px-4 py-2 rounded-full
                  text-gray-700 text-sm font-semibold
                  border border-transparent
                  bg-transparent
                  hover:border-amber-400
                  hover:bg-amber-400
                  hover:text-white
                  transition
                "
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      );
}
