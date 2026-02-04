import React from "react";

function HeroBanner() {
  return (
    <section className="bg-yellow-400 py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

        {/* LEFT TEXT */}
        <div>
          <p className="text-sm font-semibold mb-2">
            Sale Ends: Jan 30, 08:59 (GMT+1)
          </p>

          <h1 className="text-3xl font-bold text-red-600 mb-1">
            FINAL SEASON SAVINGS
          </h1>

          <p className="text-sm">
            Coupons are valid for <span className="font-semibold">[Savings]</span> items
          </p>

          {/* Promo cards */}
          <div className="flex gap-3 mt-4">
            <PromoCard
              title="Extra savings"
              bg="bg-pink-200"
              price="NGN 1,599.63"
            />
            <PromoCard
              title="Winter fashion"
              bg="bg-blue-200"
              price="NGN 1,599.63"
            />
            <PromoCard
              title="Cozy home"
              bg="bg-green-200"
              price="NGN 1,599.63"
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:col-span-2 flex justify-end">
          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
            alt="Sale"
            className="rounded-lg max-h-[280px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}

function PromoCard({ title, price, bg }) {
  return (
    <div className={`${bg} p-3 rounded-lg w-40`}>
      <p className="font-semibold text-sm mb-2">{title}</p>
      <p className="bg-black text-white text-sm px-2 py-1 inline-block rounded">
        {price}
      </p>
    </div>
  );
}

export default HeroBanner;
