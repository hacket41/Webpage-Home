import React from 'react';

const Location: React.FC = () => (
    <button className="flex items-center gap-2 text-sm text-gray-700">
        <img src='../../assets/Location.png' alt=""/>
        <span>Regent Street A4, A420l, London</span>
        <span className="text-green-600 underline">Change Location</span>
    </button>
);
export default Location;
