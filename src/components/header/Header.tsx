import React from "react";
import Location from "./Location";

const Header: React.FC = () => (
  <header className="hidden sm:flex items-center px-4 py-3 bg-white shadow-sm relative">

    {/* LEFT – 5 % OFF */}
    <div className="ml-6 sm:ml-10 flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1 text-xs text-green-700">
      <span className="font-semibold">Get 5% Off</span>
      <span className="text-green-500">•</span>
      <span>Promo: ORDER5</span>
    </div>

    {/* CENTER – LOCATION */}
    <div className="absolute left-1/2 -translate-x-1/2">
      <Location />
    </div>

    {/* RIGHT – 23Items + GBP79.89 */}
    <div className="ml-auto flex items-center gap-3 text-sm text-gray-800">
      {/* 23Items badge */}
      <div className="flex items-center gap-1 bg-green-600 text-white rounded-full px-2 py-0.5 text-xs font-bold">
        23
        <span className="ml-1 text-[10px]">Items</span>
      </div>

      {/* price */}
      <span className="font-semibold">GBP79.89</span>
    </div>
  </header>
);

export default Header;

