import React from 'react';

export default function ValueProp() {
  return (
    // outer wrapper – centers the whole block
    <div className="w-full flex justify-center">
      <section className="bg-gray-50 py-16 px-4 w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left side - Image placeholder */}
          <div className="flex-1 lg:max-w-md">
            <div className="bg-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center text-gray-500 text-sm">
              Image placeholder - couple with phones
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Order<span className="text-orange-500">.</span>ing is more
              </h2>
              <div className="bg-gray-900 text-white px-6 py-3 rounded-full inline-block">
                <span className="text-orange-500 font-semibold">Personalised</span>
                <span className="mx-2">&</span>
                <span className="font-semibold">Instant</span>
              </div>
            </div>

            <p className="text-gray-600 mb-8 text-lg">
              Download the Order.uk app for faster ordering
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">📱</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>

              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">▶</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
