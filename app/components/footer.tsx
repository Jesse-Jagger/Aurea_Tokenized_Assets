'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs leading-relaxed text-gray-400">
          <div>
            <p className="mb-4">
              * The tokenized assets referenced herein Aurea Octave (Aurea Tokenized Assets) have not been registered under the US Securities Act of 1933, as amended ("Act") or the securities or financial instrument laws of any other jurisdiction. The Tokens may not be offered or sold in the United States or to US persons unless registered under the Act or an exemption from the registration requirements thereof is available. In certain jurisdictions, including the European Economic Area, the United Kingdom and Switzerland, the Tokens are offered and sold only to qualified investors or professional clients, as this case may be (or their jurisdictions' analogue thereto). Other jurisdiction-based prohibitions and restrictions may apply. The Tokens should not be acquired by any person who is not able to bear the economic risk of holding the Tokens. The Issuer is not registered as an investment company under the US Investment Company Act of 1940, as amended, or as an Alternative Investment Funds or Undertakings for Collective Investment in Transferable Securities in the European Economic Area, or under the securities or financial instrument laws of any other jurisdiction. The Token-related communications herein are not directed or intended for any investor to which the Tokens are not offered.
            </p>
            <p>
              Token Markets may provide their holders with economic exposure to an underlying publicly-traded assets, including the value of dividends (less applicable tax withholdings). However, the Tokens are not themselves stocks or ETFs, and they do not provide their holders with rights to hold or receive their respective underlying assets.
            </p>
          </div>

          <div>
            <p className="mb-4">
              The communications on this web page are only intended for actual or potential business relationships or technical integrations with Aurea Tokenized Assets. Nothing herein constitutes any offer or solicitation to buy, or sell, any assets (including any Tokens or assets that may be transferred to, or accessible on, Ondo Chain). Nothing herein constitutes investment, legal, tax or financial advice. Acquiring Tokens involves a number of risks and may incur losses, including total loss of their investment. Such historical performance may not be (and for the Tokens will not be) an indication of future results. Investors are responsible for conducting their own research, investigation, verification, checks or consultation for professional or investment advice.
            </p>
            <p>
              The Token issuers, their affiliates, their respective shareholders and members, and their respective directors, officers, employees, agents, representatives, and the Ondo Persons SHALL NOT HAVE ANY LIABILITY WHATSOEVER WITH RESPECT TO ANYONE'S USE OF, any third-party products, services or technologies referenced herein.
            </p>
          </div>

          <div>
            <p className="mb-4">
              † The proportion of unique blockchain addresses holding our token compared to the total number of addresses holding tokens across all competing protocols.
            </p>
            <p className="mb-4">
              § Example rates only. Actual rates may vary over time.
            </p>
            <p className="mb-4">
              Additional terms and restrictions apply. See{' '}
              {/* <a href="#" className="text-blue-400 hover:underline">
                docs.ondo.finance/legal/terms-of-service
              </a> */}
              ,{' '}
              {/* <a href="#" className="text-blue-400 hover:underline">
                docs.ondo.finance
              </a> */}
              ,{' '}
              <a href="#" className="text-blue-400 hover:underline">
                Aurea Octave
              </a>{' '}
              and (as applicable) the Token offering documents for details.
            </p>
            <p>
              The communications herein may contain forward-looking statements, including, but not limited to, statements regarding future financial performance, business strategies, or expectations for the growth or development of Ondo Finance, any Token Issuer, or any of their respective products or services in various jurisdictions. Forward-looking statements are based on management's current projections, and beliefs, and are subject to a number of risks, uncertainties, and assumptions that could cause actual results to differ materially from those anticipated. Forward-looking statements can be identified by the use of terminology such as "may," "will," "should," "expect," "intend," "plan," "anticipate," "believe," "estimate," "predict," "potential," "continue," or the negative of these terms or other similar expressions. Factors that could cause actual results to differ materially from those contemplated by the forward-looking statements include, but are not limited to: changes in economic and market conditions; changes in laws, regulations, or regulatory guidance; changes in the operations, markets, products, services, or prices of any Applicable Entity. No Applicable Entity undertakes any obligation to update or revise any forward-looking statements, whether as a result of new information, future events, or otherwise, except as required by law.
            </p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-black py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-light text-white leading-none tracking-tight">
            Aurea Octave
          </h2>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Aurea Octave. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}