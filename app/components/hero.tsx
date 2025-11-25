"use client";

export default function Hero() {
  const companies = [
    "Ethereum Foundation",
    "BlackRock",
    "Ripple",
    "Franklin Templeton",
    "Sui",
    "Wellington Management",
    "Aptos",
    "Jupiter",
    "Aon",
    "SECP",
  ];

  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/6823023-uhd_3840_2160_24fps.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex items-center justify-end h-full px-24 md:px-16 lg:px-24 py-10">
        <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl space-y-6 text-right">
          <h1 className="text-4xl md:text-6xl font-serif lg:text-7xl xl:text-8xl font-light text-white leading-tight">
            Aurea Tokenized Assets (ATA)
          </h1>

          <p className="text-sm md:text-lg text-white/90 mb-15 leading-relaxed max-w-xl ml-auto">
            We specialize in creating tokenized investment vehicles and offering
            tokenization-as-a-service for asset managers, private equity firms,
            and institutions.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-end gap-4 pt-2">
            <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors text-sm">
              Learn More
            </button>

            <button className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors text-sm">
              Read our Manifesto
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10 py-6 overflow-hidden">
        <div className="flex animate-scroll">
          {companies.concat(companies).map((c, i) => (
            <div key={i} className="px-12 whitespace-nowrap">
              <span className="text-white/80 text-lg">{c}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
