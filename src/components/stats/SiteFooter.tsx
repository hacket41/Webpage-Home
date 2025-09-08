import React from 'react';

const footerCols = [
  {
    title: 'Legal Pages',
    links: ['Terms and conditions', 'Privacy', 'Cookies', 'Modern Slavery Statement'],
  },
  {
    title: 'Important Links',
    links: ['Add your restaurant', 'Sign up to deliver', 'Create a business account'],
  },
  {
    title: 'Company',
    links: ['Company # 490039-445', 'House of companies', 'Pricing'],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-white text-gray-700">
      {/* top section - newsletter + apps */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 border-b border-gray-200">
        {/* newsletter */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Get Exclusive Deals in your Inbox</h3>
          <p className="text-sm text-gray-500 mb-4">Subscribe and never miss an offer.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="px-5 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* store badges */}
        <div className="flex flex-col items-start md:items-end gap-3">
          <p className="text-sm font-semibold">Get the App</p>
          <a href="#" className="block">
            <img src="/app-store.svg" alt="App Store" className="h-10" />
          </a>
          <a href="#" className="block">
            <img src="/google-play.svg" alt="Google Play" className="h-10" />
          </a>
        </div>
      </div>

      {/* bottom links */}
      <div className="max-w-6xl mx-auto px-0 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        {footerCols.map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-gray-900 mb-2">{col.title}</h4>
            <ul className="space-y-1">
              {col.links.map((lnk) => (
                <li key={lnk}>
                  <a href="#" className="text-gray-500 hover:text-green-600 transition">
                    {lnk}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* copyright */}
       {/* copyright bar - full bleed, no rounded corners, attached to bottom */}
        <div className="col-span-2 md:col-span-4 mt-12">
          <div className="bg-blue-950 text-white px-6 py-4 text-xs grid gap-1 sm:grid-cols-2 sm:items-center">
            
          {/* left column */}
          <div className="space-y-1">
            <p>Order.uk Copyright 2024, All Rights Reserved.</p>
            <p>Company #490039-445, Registered with House of companies.</p>
          </div>

          {/* right column - links */}
          <div className="flex gap-2 flex-wrap sm:justify-end">
            <a href="#" className="underline hover:text-blue-200">Terms</a>
            <span>|</span>
            <a href="#" className="underline hover:text-blue-200">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="underline hover:text-blue-200">Modern Slavery Statement</a>
            <span>|</span>
            <a href="#" className="underline hover:text-blue-200">Create a business account</a>
          </div>

          </div>
        </div> 

      </div>
    </footer>
  );
}

