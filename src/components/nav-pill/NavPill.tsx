import React from 'react';
import logo from '../../assets/LOGO 1.png';

const links = [
  {
    label: '',
    icon: <img src={logo} alt="Order" className="h-10 pointer-events-none px-40" />,
  },
  { label: 'Browse Menu', icon: '🍔' },
  { label: 'Special Offers', icon: '🏷️' },
  { label: 'Restaurants', icon: '🏪' },
  { label: 'Track Order', icon: '🚴' },
  { label: 'Login/Sign-up', icon: '👤' },
];

export default function NavPill() {
  /* ---------- DESKTOP ---------- */
  const DesktopBar = () => (
    <nav className="hidden md:flex items-center justify-center gap-3 px-4 py-3 bg-white shadow-sm">
      <div className="-ml-40 flex items-center gap-3">
        {links.map((l, idx) => (
          <button
            key={l.label}
            className={`px-4 py-2 rounded-full text-sm text-gray-700 transition ${
              idx === 0 ? '' : 'hover:bg-amber-500 hover:text-green-600'
            } ${idx === 0 ? 'mr-2' : ''}`}
          >
            {l.icon}
            <span className="ml-1">{l.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );

  /* ---------- MOBILE ---------- */
const MobileBar = () => (
  <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
    <nav className="flex justify-around items-center h-16 text-[10px] text-gray-700">
      {/* skip logo (index 0) – slice(1) */}
      {links.slice(1).map((l, idx) => (
        <button
          key={l.label}
          className="flex flex-col items-center gap-1 flex-1 hover:text-green-600 transition"
        >
          <span className="text-lg leading-none">{l.icon}</span>
          <span>{l.label}</span>
        </button>
      ))}
    </nav>
  </footer>
); 
  return (
    <>
      <DesktopBar />
      <MobileBar />
    </>
  );
}

