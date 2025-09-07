import React from 'react';

const Hero: React.FC = () => (
    <section className="px-4 py-10 text-center bg-gradient-to-r from-green-500 to-green-600 text-white">
        <h1 className = "text-3xk md:text-5xl font-bold">Feast Your Senses</h1>
        <p className='mt-2 text-lg'>Fast and Fresh</p>
        <button className="mt-6 px-6 py-3 rounded-full bg-white text-green-600 font-semibold">Order Now</button>
    </section>
);

export default Hero;

