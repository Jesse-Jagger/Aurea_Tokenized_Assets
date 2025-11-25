"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Coffee,
  Shield,
  Scale,
} from "lucide-react";

const ServicesSection = () => {
  const [expandedCard, setExpandedCard] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "High-Quality Assets and Managers",
      description:
        "We work exclusively with the world's preeminent asset managers.",
      company: "BlackRock",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Regulated Service Providers",
      description:
        "All our partners meet stringent regulatory standards and compliance requirements.",
      company: "",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Experienced Leadership",
      description:
        "Our team brings decades of financial services expertise and industry knowledge.",
      company: "",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Third-Party Audited Security",
      description:
        "Regular security audits by independent third parties ensure the highest protection standards.",
      company: "",
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Compliance-First Focus",
      description:
        "We prioritize regulatory compliance and adherence to industry best practices.",
      company: "",
    },
  ];

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - 1));
  };

  const scrollRight = () => {
    setScrollPosition(Math.min(services.length - 3, scrollPosition + 1));
  };

  // Auto-advance effect - moves cards horizontally
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setExpandedCard((prev) => {
        const next = (prev + 1) % services.length;

        // Calculate how many cards are visible (3 cards visible at once)
        const visibleCards = 3;
        const maxScroll = Math.max(0, services.length - visibleCards);

        // Keep the active card in the first position
        if (next <= maxScroll) {
          setScrollPosition(next);
        } else {
          // If we're near the end, just show the last set of cards
          setScrollPosition(maxScroll);
        }

        // Reset to beginning when cycling back to first card
        if (next === 0) {
          setScrollPosition(0);
        }

        return next;
      });
    }, 4000); // Change card every 4 seconds

    return () => clearInterval(interval);
  }, [expandedCard, scrollPosition, isPaused, services.length]);

  const handleCardClick = (index: number) => {
    setExpandedCard(index);
    setIsPaused(true);

    const visibleCards = 3;
    const maxScroll = Math.max(0, services.length - visibleCards);

    if (index <= maxScroll) {
      setScrollPosition(index);
    } else {
      setScrollPosition(maxScroll);
    }

    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/Images/pexels-ben-cheung-140183-441379.jpg')`,
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="mb-12">
          <p className="text-gray-300 text-sm font-light mb-3 tracking-wide">
            Trust & Transparency
          </p>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
            Institutional Grade
            <br />
            In All We Do
          </h1>
        </div>

        <div className="relative max-w-6xl">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${scrollPosition * (320 + 24)}px)`,
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`flex-shrink-0 w-80 h-64 rounded-2xl p-8 cursor-pointer transition-all duration-500 ${
                    expandedCard === index
                      ? "bg-white scale-105"
                      : "bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  }`}
                >
                  <div
                    className={`${
                      expandedCard === index ? "text-gray-900" : "text-white"
                    }`}
                  >
                    <div className="mb-6">{service.icon}</div>

                    <h3 className="text-lg font-normal mb-3">
                      {service.title}
                    </h3>

                    {expandedCard === index && (
                      <div className="animate-fadeIn">
                        <div className="w-full h-px bg-gray-200 mb-4" />
                        <p className="text-sm text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        {service.company && (
                          <p className="text-xl font-semibold">
                            {service.company}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={scrollLeft}
              disabled={scrollPosition === 0}
              className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={scrollRight}
              disabled={scrollPosition >= services.length - 3}
              className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
