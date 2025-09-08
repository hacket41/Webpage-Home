import React, { useState } from 'react';
import girl from '../../assets/girl.png';          // 1.  import image (Vite will give real URL)

export default function Hero() {
  const [postcode, setPostcode] = useState('');

  return (
    <section className="relative px-4 py-16 bg-gradient-to-r from-green-100 to-green-200 text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8">
        {/* LEFT - left-aligned text + search bar */}
        <div className="flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Feast Your Senses
          </h1>
          <p className="mt-3 text-xl md:text-2xl">Fast and Fresh</p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 w-full max-w-lg flex gap-2"
          >
            <input
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              placeholder="e.g. EC4R 3TE"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition"
            >
              Search
            </button>
          </form>

          {/* 3 missing components */}
          <OrderReceived />
          <AwaitingRestaurant />
          <RiderNearby />
        </div>

        {/* RIGHT - image */}
       {/* RIGHT - bigger picture */}
        <div className="flex justify-center">
          <img
            src={girl}
            alt="Hero"
            className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl object-contain drop-shadow-2xl"
          />
        </div> 
      </div>
    </section>
  );
}

/* ---------- 3 missing components ---------- */
const OrderReceived = () => (
  <div className="mt-6 flex items-center gap-3 text-green-700">
    <span className="text-2xl">✅</span>
    <span className="font-medium">We've received your order!</span>
  </div>
);

const AwaitingRestaurant = () => (
  <div className="mt-2 flex items-center gap-3 text-amber-600">
    <span className="text-2xl">⏱️</span>
    <span>Awaiting Restaurant acceptance</span>
  </div>
);

const RiderNearby = () => (
  <div className="mt-2 flex items-center gap-3 text-blue-600">
    <span className="text-2xl">🚴‍♂️</span>
    <span>Your rider's nearby - get ready!</span>
  </div>
);
