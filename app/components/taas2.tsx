import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TaaS2() {
  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-96 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="/Images/pexels-timdurgan-7317649.jpg"
                alt="Tokenization as a Service"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-center px-6 text-white">
                <h3 className="text-3xl font-serif mb-4 leading-tight">
                  Tokenization as a<br />
                  Service
                </h3>
                <p className="text-sm mb-6 leading-relaxed opacity-90">
                  Tokenize your investment products
                  <br />
                  on our compliance-focused
                  <br />
                  platform.
                </p>
                <Link
                  href="/services/taas"
                  className="flex items-center gap-2 text-sm hover:gap-3 transition-all duration-300"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="/Images/pexels-jimbear-998499.jpg"
                alt="Fund Administration"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-center px-6 text-white">
                <h3 className="text-3xl font-serif mb-4 leading-tight">
                  Fund
                  <br />
                  Administration
                </h3>
                <p className="text-sm mb-6 leading-relaxed opacity-90">
                  Manage your entire fund on a<br />
                  single integrated platform.
                </p>
                <button className="flex items-center gap-2 text-sm hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:pl-12 pt-8">
            <p className="text-sm text-blue-600 font-medium mb-4 tracking-wide uppercase">
              Solutions
            </p>
            <h2 className="text-6xl font-serif mb-8 leading-tight text-gray-900">
              Built for
              <br />
              Asset Managers,
              <br />
              Private Equity,
              <br />
              and Institutions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              ATA functions as the product issuance and tokenization
              <br />
              division of Aurea Octave - analogous to iShare within BlackRock.
              <br />
              Standing at the interserction of compliance, custody and code
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
