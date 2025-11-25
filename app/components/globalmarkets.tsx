import { ArrowRight } from 'lucide-react';

export default function GlobalMarkets() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-3 tracking-tight">
            Aurea Tokenized Assets (ATA)
          </h2>
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 tracking-tight">
            is your institutional gateway
          </h2>
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 tracking-tight">
            to bringing real-world assets on-chain.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24">
          <div>
            <div className="text-5xl md:text-6xl font-normal text-gray-900 mb-2">10</div>
            <div className="text-base text-gray-900">Supported Chains</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-normal text-gray-900 mb-2">149</div>
            <div className="text-base text-gray-900">Integrated Projects</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-normal text-gray-900 mb-2">80%</div>
            <div className="text-base text-gray-900">
              Yieldcoin Market Share<sup className="text-sm">1</sup>
            </div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-normal text-gray-900 mb-2">$1.47B</div>
            <div className="text-base text-gray-900">TVL</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="flex items-start gap-4">
              <div className="w-1 h-12 bg-gray-900"></div>
              <h3 className="text-2xl md:text-3xl font-normal text-gray-900 leading-tight">
                Institutional-Grade Cash<br />Management
              </h3>
            </div>
            <p className="text-sm text-gray-700 mt-6 leading-relaxed">
              Earn reliable, high quality yield backed by short-term US<br />
              Treasuries, distributed daily. Built with institutional grade<br />
              transparency.
            </p>
          </div>

          <div className="md:w-2/3 flex flex-col gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 hover:border-blue-200 transition-colors cursor-pointer group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">$</span>
                  </div>
                  <span className="text-2xl font-normal text-gray-900">USDY</span>
                </div>
                <div className="text-xs text-gray-600">
                  For Individuals and<br />Institutions (non-US)
                </div>
              </div>
              <div className="text-sm text-gray-700 mb-3">US Dollar Yield*</div>
              <div className="flex items-end justify-between">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-normal text-blue-900">3.75%</span>
                  <span className="text-lg text-gray-600 mb-1">APY<sup>2</sup></span>
                </div>
                <ArrowRight className="text-gray-900 group-hover:translate-x-1 transition-transform" size={24} />
              </div>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-8 hover:border-green-200 transition-colors cursor-pointer group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white rounded"></div>
                  </div>
                  <span className="text-2xl font-normal text-gray-900">OUSG</span>
                </div>
                <div className="text-xs text-gray-600">
                  For Qualified Purchasers,<br />Accredited Investors
                </div>
              </div>
              <div className="text-sm text-gray-700 mb-3">Short-Term US Treasuries Fund*</div>
              <div className="flex items-end justify-between">
                <div className="h-16"></div>
                <ArrowRight className="text-gray-900 group-hover:translate-x-1 transition-transform" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}