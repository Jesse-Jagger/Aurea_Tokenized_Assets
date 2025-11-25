export default function TAAS() {
  return (
    <section className="mt-20 bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-600 text-sm font-medium tracking-wide uppercase mb-3">
            Market Structures
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-light text-gray-900">
            Why Tokenize?
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
          <div>
            <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">
              Instant Settlements
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Transfers and trades executed through smart contracts are settled immediately, reducing transactional risks and delays.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">
              Automated Regulation
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Regulatory requirements, such as jurisdictional and transfer restrictions, are automatically enforced via smart contracts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">
              Real-Time Shareholder Data
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Access your shareholder register and get valuable insights on shareholder activity in real time—no more waiting for nightly database refreshes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">
              Enhanced Liquidity Access
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Enable your shareholders to access a variety of liquidity options including borrowing and lending, trading on licensed marketplaces and P2P transfers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">
              Flexible Customization
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Set up specific features, such as voting rights or dividend preferences, to make the management of share classes work for your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}