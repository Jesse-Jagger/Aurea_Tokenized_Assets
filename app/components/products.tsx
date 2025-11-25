import React from "react";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      id: 1,
      image: "/fgnexus-bg.jpg",
      logo: "FG NEXUS",
      title: "FG Nexus Inc.",
      ticker: "(FGNX)",
      description:
        "The first preferred equity available on a blockchain. Converting your existing shares into tokenized form. Join the waitlist to get notified when this stock is available.",
      assetClass: "Tokenized Public Stock",
      investorType: "Retail",
      available: true,
      waitlist: true,
    },
    {
      id: 2,
      comingSoon: true,
      assetClass: true,
      investorType: true,
    },
    {
      id: 3,
      comingSoon: true,
      assetClass: true,
      investorType: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 mt-15 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif text-center mb-16 text-gray-900">
          Stocks on ATA
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                {product.available ? (
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold mb-2 border-2 border-white inline-block px-4 py-2">
                      {product.logo}
                    </div>
                    <p className="text-sm mt-4">
                      Available Soon. Join Waitlist.
                    </p>
                  </div>
                ) : (
                  <div className="text-4xl text-gray-800 font-bold opacity-20">
                    Coming Soon
                  </div>
                )}
              </div>

              <div className="p-6">
                {product.available ? (
                  <>
                    <h2 className="text-xl font-serif mb-2">
                      {product.title}{" "}
                      <span className="text-gray-500 font-normal">
                        {product.ticker}
                      </span>
                    </h2>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                  </>
                ) : (
                  <div className="space-y-4 mb-6">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                  </div>
                )}

                <div className="flex justify-between items-center py-3 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-900">
                    Asset Class
                  </span>
                  {product.assetClass === true ? (
                    <div className="h-3 bg-gray-200 rounded w-32"></div>
                  ) : (
                    <span className="text-sm text-gray-700">
                      {product.assetClass}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center py-3 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-900">
                    Investor Type
                  </span>
                  {product.investorType === true ? (
                    <div className="h-3 bg-gray-200 rounded w-24"></div>
                  ) : (
                    <span className="text-sm text-gray-700">
                      {product.investorType}
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-100 mt-3">
                  <a
                    href="#"
                    className="text-sm text-gray-900 hover:text-gray-700"
                  >
                    See Disclosure *
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/services/taas"
            className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 inline-flex"
          >
            Learn More →
          </Link>
        </div>

        <p className="text-center text-xs text-gray-400 mt-12 max-w-4xl mx-auto">
          * This material is intended for informational purposes only. This is
          not an offer or solicitation to buy or sell securities and is not
          intended as investment advice or recommendation.
        </p>
      </div>
    </div>
  );
}
