import { FaFacebook, FaInstagram, FaTwitter, FaSnapchat, FaTiktok } from "react-icons/fa";
import logo from "../../assets/LOGO 2.png";
import appStore from "../../assets/app-store.svg";
import googlePlay from "../../assets/google-play.svg";

const footerCols = [
  { 
    title: "Legal Pages", 
    links: ["Terms and conditions", "Privacy", "Cookies", "Modern Slavery Statement"] 
  },
  { 
    title: "Important Links", 
    links: ["Get Help", "Add your restaurant", "Sign up to deliver", "Create a business account"] 
  },
];

export default function SiteFooter() {
  return (
    <>
      {/* WHITE BAR */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-10 md:px-10 md:py-12 grid md:grid-cols-3 gap-14 items-start">
          
          {/* LEFT – logo + app badges + company line */}
          <div className="flex flex-col items-start gap-4">
            {/* LOGO – aligned left with badges */}
            <img src={logo} alt="Order.uk" className="h-10 w-auto object-contain" />

            {/* APP BADGES */}
            <div className="flex gap-3">
              <a href="#"><img src={appStore} alt="App Store" className="h-10" /></a>
              <a href="#"><img src={googlePlay} alt="Google Play" className="h-10" /></a>
            </div>

            {/* COMPANY INFO */}
            <p className="text-xs text-gray-500">
              Company # 490039-445, Registered with House of companies.
            </p>
          </div>
          

          {/* MIDDLE – newsletter */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Get Exclusive Deals in your Inbox</h3>
            <form className="flex gap-2 mb-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="px-5 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mb-6">We won’t spam, read our email policy</p>
            
            {/* SOCIAL ICONS */}
            <div className="flex gap-4 text-xl text-gray-600">
              <FaFacebook className="hover:text-green-600 cursor-pointer" />
              <FaInstagram className="hover:text-green-600 cursor-pointer" />
              <FaTwitter className="hover:text-green-600 cursor-pointer" />
              <FaSnapchat className="hover:text-green-600 cursor-pointer" />
              <FaTiktok className="hover:text-green-600 cursor-pointer" />
            </div>
          </div>

          {/* RIGHT – links */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            {footerCols.map((col) => (
              <div key={col.title}>
                <h4 className="font-semibold text-gray-900 mb-3">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-gray-500 hover:text-green-600 transition">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>

      {/* BLUE COPYRIGHT BAR */}
      <CopyrightBar />
    </>
  );
}

function CopyrightBar() {
  return (
    <div className="bg-blue-950 text-white px-6 py-4 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p>Order.uk © Copyright 2024. All rights reserved.</p>
        <div className="flex gap-2 flex-wrap">
          <a href="#" className="underline hover:text-blue-200">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="underline hover:text-blue-200">Terms</a>
          <span>|</span>
          <a href="#" className="underline hover:text-blue-200">Pricing</a>
          <span>|</span>
          <a href="#" className="underline hover:text-blue-200">Do not sell my personal information</a>
        </div>
      </div>
    </div>
  );
}

