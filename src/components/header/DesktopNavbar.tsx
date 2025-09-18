// DesktopNavbar.tsx
import { MapPin, User } from "lucide-react";
import { useState } from "react";
import forwardButton from "../../assets/forwardButton.png";
import Cart from "../../assets/cart2.png";
import Logo from "../../assets/LOGO 1.png";

export default function DesktopNavbar() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Home");
  const [location, setLocation] = useState<string>(
    "Regent Street, A4, A4201, London"
  );

  const desktopMenuItems: string[] = [
    "Home",
    "Browse Menu",
    "Special Offers",
    "Restaurants",
    "Track Order",
    "About Us",
  ];

  const cartItems: object[] = [
    { id: 1, name: "Item 1", quantity: 2 },
    { id: 2, name: "Item 2", quantity: 1 },
    { id: 3, name: "Item 3", quantity: 3 },
    { id: 4, name: "Item 4", quantity: 3 },
    { id: 5, name: "Item 5", quantity: 1 },
    { id: 6, name: "Item 6", quantity: 2 },
  ];

  const totalItems = cartItems.reduce(
    (sum, item: any) => sum + item.quantity,
    0
  );

  return (
    <div className="hidden lg:block">
      {/* ==========  TOP BAR  ========== */}
      <div className="bg-[#FAFAFA] h-14 text-xs">
        <div className="max-w-screen-xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Promo Message */}
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-gray-700">Get 5% Off your first order.</span>
            <span className="text-[#FC8A06] font-medium">Promo: ORDER5</span>
          </div>

          {/* Location & Cart Section */}
          <div className="flex items-center gap-3">
            {/* Location Selector */}
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin size={14} />
              <span className="whitespace-nowrap">{location}</span>
              <button className="text-[#FC8A06] hover:underline">Change</button>
            </div>

            {/* Cart Group */}
            <div className="flex bg-green-600 items-center rounded-b-lg divide-x divide-white/40">
              <div className="flex items-center gap-2 text-white px-3 h-14">
                <img src={Cart} alt="Cart" className="w-7 h-7 object-contain" />
                <span className="font-medium">{totalItems}</span>
              </div>
              <div className="flex items-center text-white px-3 h-14 text-sm">
                GBP 79.89
              </div>
              <div className="flex items-center justify-center px-3 h-14">
                <img
                  src={forwardButton}
                  alt="forward"
                  className="w-6 h-6 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==========  MAIN NAVBAR  ========== */}
      <div className="bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto px-5 flex items-center justify-between h-20 mt-5">
          {/* Logo */}
          <img
            src={Logo}
            alt="logo"
            className="h-12 w-auto object-contain"
          />

          {/* Nav + Login – tight to logo but right-aligned */}
          <div className="flex items-center gap-4 ml-auto">
            <nav>
              <ul className="flex items-center gap-3">
                {desktopMenuItems.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => setSelectedCategory(item)}
                      className={`px-4 py-2 text-sm rounded-full font-semibold whitespace-nowrap transition-colors ${
                        selectedCategory === item
                          ? "bg-[#FC8A06] text-white"
                          : "text-gray-700 hover:text-[#FC8A06]"
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <button className="bg-gray-900 text-white px-4 py-2 text-sm rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
              <div className="bg-[#FC8A06] rounded-full w-5 h-5 flex items-center justify-center">
                <User size={12} />
              </div>
              Login/Sign-Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
