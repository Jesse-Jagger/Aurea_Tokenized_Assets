"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const perspectives = [
  {
    company: "BlackRock",
    logo: "BLACKROCK",
    quote:
      '"We believe the next step going forward will be the tokenization of financial assets. This is a technological transformation for financial assets."',
    author: "Larry Fink, Founder, Chairman and CEO of BlackRock",
  },
  {
    company: "McKinsey",
    logo: "McKinsey\n& Company",
    quote:
      '"Regulated institutions have long desired more purpose built infrastructure that meets their needs and makes it easier for them to transact on-chain. The Ondo Chain is an innovation that has the potential to help move institutional capital markets onchain."',
    author:
      "Matt Higginson, Partner and Global Leader of Digital Assets at McKinsey",
  },
  {
    company: "ABN AMRO",
    logo: "ABN AMRO",
    quote:
      '"ABN Amro is exploring how to issue various tokenized products like bonds, real estate and investment funds. Having purpose built infrastructure, built by Ondo, to facilitate the omnichannel distribution of these assets, has the potential to be highly disruptive to traditional financial institutions."',
    author: "Arrzah Moelah, Lead Digital Asset Intrapreneur at ABN Amro",
  },
  {
    company: "ABN AMRO",
    logo: "ABN AMRO",
    quote:
      '"ABN Amro is exploring how to issue various tokenized products like bonds, real estate and investment funds. Having purpose built infrastructure, built by Ondo, to facilitate the omnichannel distribution of these assets, has the potential to be highly disruptive to traditional financial institutions."',
    author: "Arrzah Moelah, Lead Digital Asset Intrapreneur at ABN Amro",
  },
  {
    company: "ABN AMRO",
    logo: "ABN AMRO",
    quote:
      '"ABN Amro is exploring how to issue various tokenized products like bonds, real estate and investment funds. Having purpose built infrastructure, built by Ondo, to facilitate the omnichannel distribution of these assets, has the potential to be highly disruptive to traditional financial institutions."',
    author: "Arrzah Moelah, Lead Digital Asset Intrapreneur at ABN Amro",
  },
  {
    company: "ABN AMRO",
    logo: "ABN AMRO",
    quote:
      '"ABN Amro is exploring how to issue various tokenized products like bonds, real estate and investment funds. Having purpose built infrastructure, built by Ondo, to facilitate the omnichannel distribution of these assets, has the potential to be highly disruptive to traditional financial institutions."',
    author: "Arrzah Moelah, Lead Digital Asset Intrapreneur at ABN Amro",
  },
  {
    company: "ABN AMRO",
    logo: "ABN AMRO",
    quote:
      '"ABN Amro is exploring how to issue various tokenized products like bonds, real estate and investment funds. Having purpose built infrastructure, built by Ondo, to facilitate the omnichannel distribution of these assets, has the potential to be highly disruptive to traditional financial institutions."',
    author: "Arrzah Moelah, Lead Digital Asset Intrapreneur at ABN Amro",
  },
];

export default function PerspectivesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % perspectives.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + perspectives.length) % perspectives.length
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % perspectives.length);
  };

  return (
    <div className="relative bg-gray-500 px-8 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-white text-4xl font-light mb-20 tracking-wide">
          Perspectives
        </h2>

        <div className="relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {perspectives.map((perspective, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 min-h-[400px] flex flex-col justify-between">
                  <div className="mb-8">
                    {perspective.company === "BlackRock" && (
                      <div className="text-white text-3xl font-bold tracking-tight">
                        BlackRock
                      </div>
                    )}
                    {perspective.company === "McKinsey" && (
                      <div className="text-white text-2xl font-light">
                        <div>McKinsey</div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl">&</span>
                          <span>Company</span>
                        </div>
                      </div>
                    )}
                    {perspective.company === "ABN AMRO" && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white transform rotate-45 relative">
                          <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                            <div className="w-6 h-6 border-2 border-[#1a0b2e]" />
                          </div>
                        </div>
                        <div className="text-white text-2xl font-bold tracking-wider">
                          ABN AMRO
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 flex flex-col justify-center mb-8">
                    <p className="text-white/90 text-xl leading-relaxed font-light">
                      {perspective.quote}
                    </p>
                  </div>

                  <div className="text-white/70 text-sm font-light">
                    {perspective.author}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-8 right-8 flex gap-3">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
