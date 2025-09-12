import React, { useState } from 'react';
import girlImg from '../../assets/girl.png';

export default function Hero() {
  const [postcode, setPostcode] = useState('');

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[550px]">
        {/* ---------- LEFT - CONTENT ---------- */}
        <div className="px-8 lg:px-12 py-12 space-y-6 bg-gradient-to-b from-[#FFF9F5] to-[#FFEEDD]">          
         <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 max-w-screen mt-15">
            Feast Your Senses,
            <br />
            <span className="text-[#FF642D]">Fast and Fresh</span>
          </h1>

          <div className="space-y-3 pt-4">
            <p className="text-gray-600 text-sm">
              Enter a postcode to see what we deliver
            </p>
            <div className="flex gap-2 max-w-sm">
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

        {/* ---------- RIGHT - GIRL + CARDS ---------- */}
        <div className="relative bg-[#FFD8C1] flex items-center justify-center">
          {/* Girl image */}
          <img
            src={girlImg}
            alt="Girl enjoying food"
            className="h-[280px] sm:h-[320px] lg:h-[450px] object-contain drop-shadow-lg max-w-screen mr-170 mt-30" 
          />

          {/* Notification cards */}
          <div className="absolute top-8 right-4 space-y-3">
            {/* Card 1 - Order received */}
            <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100 w-80 max-w-screen mt-15">
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
            <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100 w-80 max-w-screen mt-20">
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
            <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100 w-80 max-w-screen mt-20">
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
