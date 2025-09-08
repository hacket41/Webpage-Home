import React from 'react';

const stats = [
  { figure: '546+', label: 'Orders Delivered' },
  { figure: '789,900+', label: 'Food Items' },
  { figure: '690+', label: 'Restaurants Partnered' },
  { figure: '17,457+', label: 'Registered Riders' },
];

export default function StatsStrip() {
  return (
    <section className="px-4 py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, idx) => (
          <div key={s.label} className="relative">
            <p className="text-3xl md:text-4xl font-extrabold text-gray-900">{s.figure}</p>
            <p className="text-xs text-gray-500 mt-1">{s.label}</p>

            {/* vertical dot separator (hide on last item) */}
            {idx !== stats.length - 1 && (
              <span className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-1 h-1 rounded-full bg-gray-300" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
