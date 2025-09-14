// ----------  Hero.tsx  (desktop) ----------
import React, { useState } from 'react';
import girlImg from '../../assets/girl.png';

export default function Hero() {
  const [postcode, setPostcode] = useState('');

  return (
    <section className="hidden md:block relative overflow-hidden mt-10"> {/*  ← hides ≤ 767 px */}
      <div className="max-w-8xl mx-auto grid grid-cols-2 h-[650px] ml-28 rounded-2xl">
        {/* LEFT */}
        <div className="px-8 py-12 space-y-6 bg-gradient-to-b from-[#FFF9F5] to-[#FFEEDD]">
          <h1 className="text-5xl font-bold leading-tight text-gray-900 mt-20 ml-15">
            Feast Your Senses,<br />
            <span className="text-[#FF642D]">Fast and Fresh</span>
          </h1>

          <div className="space-y-3 pt-4 ml-15">
            <p className="text-gray-600 text-sm">Enter a postcode to see what we deliver</p>
            <div className="flex gap-2 w-80">
              <input
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="e.g. EC4R 3TE"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF642D] focus:border-transparent text-sm"
              />
              <button
                onClick={() => console.log('Search clicked')}
                className="px-6 py-3 rounded-full bg-[#FF642D] text-white font-semibold hover:bg-[#e55629] transition text-sm"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT – girl + cards (unchanged) */}
        <div className="relative bg-[#FFD8C1] flex items-center justify-center mr-28">
          <img
            src={girlImg}
            alt="Girl enjoying food"
            className="h-[555px] object-contain drop-shadow-lg mr-190 mt-30"
          />
         <div className="absolute top-8 right-4 space-y-3">
  {/* Card 1 - Order received */}
  <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100 w-80 mt-15">
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 text-xs mb-1">Orders</h3>
        <p className="text-green-600 font-medium text-xs mb-0.5">We've received your order!</p>
        <p className="text-gray-500 text-xs">Awaiting restaurant confirmation</p>
      </div>
      <button className="text-gray-400 hover:text-gray-600 text-xs">✕</button>
    </div>
  </div>

  {/* Card 2 - Order accepted */}
  <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100 w-80 mt-20">
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
        <div className="w-3 h-3 bg-[#FF642D] rounded-full" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 text-xs mb-1">Orders</h3>
        <p className="text-[#FF642D] font-medium text-xs mb-0.5">Order Accepted!</p>
        <p className="text-gray-500 text-xs">Your order will be delivered shortly</p>
      </div>
      <button className="text-gray-400 hover:text-gray-600 text-xs">✕</button>
    </div>
  </div>

  {/* Card 3 - Rider nearby */}
  <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100 w-80 mt-20">
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
        <div className="w-3 h-3 bg-blue-500 rounded-full" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 text-xs mb-1">Orders</h3>
        <p className="text-blue-600 font-medium text-xs mb-0.5">Your rider's nearby 🚴‍♂️</p>
        <p className="text-gray-500 text-xs">They're almost there... get ready!</p>
      </div>
      <button className="text-gray-400 hover:text-gray-600 text-xs">✕</button>
    </div>
  </div>
</div> 
        </div>
      </div>
    </section>
  );
}
