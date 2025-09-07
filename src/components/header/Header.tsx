import React from "react";
import Location from "./Location";

const Header: React.FC = () => (
    <header className = "flex item-center justify-between px-4 py-4 bg-white shadow -sm">
        <div className = "flex items-center gap -3">
            <img src = "/logo.svg" alt="Order.uk" className = "h-8"/>
                <span className = "text-green-600 font-semibold">Order.uk</span>
        </div>

        <Location/>

        <div className="flex items-center gap-4">
            <button className="text-sm text-gray-700">Login/Sign-up</button>
            <div className="relative">
                <span className="bg-green-600 text-white rounded-full px-2 py-1 text-xs">23</span>
                <span className = "ml-2 text-sm font-medium">$79.89</span>
            </div>
        </div>
    </header>
);

export default Header;
