import logo from '../../assets/LOGO 2.png';
import appStore from '../../assets/app-store.svg';
import googlePlay from '../../assets/google-play.svg';

const footerCols = [
  { title: 'Legal Pages', links: ['Terms and conditions', 'Privacy', 'Cookies', 'Modern Slavery Statement'] },
  { title: 'Important Links', links: ['Add your restaurant', 'Sign up to deliver', 'Create a business account'] },
  { title: 'Company', links: ['Company #490039-445, Registered with House of companies.', 'Pricing'] },
];

export default function SiteFooter() {
  return (
    <>
      {/* WHITE BAR – full width, no rounded corners */}
      <footer className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 md:px-10 md:py-12 grid md:grid-cols-2 gap-8 items-start">
          
          {/* LEFT – logo + app badges (no newsletter) */}
          <div className="flex flex-col gap-4">
            {/* LOGO – normal size */}
            <img src={logo} alt="Order.uk" className="h-8 w-35" />

            {/* App Store + Google Play – directly under logo */}
            <div className="flex gap-3">
              <a href="#"><img src={appStore} alt="App Store" className="h-10" /></a>
              <a href="#"><img src={googlePlay} alt="Google Play" className="h-10" /></a>
            </div>
          </div>

          {/* RIGHT – newsletter + links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <Newsletter />
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

      {/* BLUE COPYRIGHT BAR – full bleed */}
      <CopyrightBar />
    </>
  );
}

/* ----------  SUB-COMPONENTS  ---------- */
function Newsletter() {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Get Exclusive Deals in your Inbox</h3>
      <p className="text-sm text-gray-500 mb-4">We won’t spam, read our email policy</p>
      <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
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
  );
}

function CopyrightBar() {
  return (
    <div className="bg-blue-950 text-white px-6 py-4 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p>Order.uk Copyright 2024, All Rights Reserved.</p>
        <div className="flex gap-2 flex-wrap">
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
  );
}
