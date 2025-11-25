"use client";

import { useState } from "react";
import Image from "next/image";

interface Article {
  id: number;
  image: string;
  title: string;
  description: string;
  category: "Benefits" | "Why Us";
}

const articles: Article[] = [
  {
    id: 1,
    image: "/Images/Flexible_Governance_Framework.png",
    title: "Flexible Governance Framework",
    description: "Empowers issuers to easily define, update, and enforce asset rules, participation rights, and compliance controls—enabling dynamic, transparent, and adaptable governance across all tokenized assets.",
    category: "Benefits",
  },
  {
    id: 2,
    image: "/Images/Multi_Blockchain_Support.png",
    title: "Muilti-Blockchain Support",
    description: "Gives users the freedom to issue and manage tokens across multiple chains, ensuring interoperability, scalability, and the ability to choose the best network for performance, cost, and ecosystem compatibility.",
    category: "Benefits",
  },
  {
    id: 3,
    image: "/Images/Robust_Developer_Offering.png",
    title: "Robust Developer Offering",
    description: "Provides developers with powerful APIs, SDKs, and documentation that simplify integration, accelerate build times, and support the creation of advanced tokenization and asset-management solutions.",
    category: "Benefits",
  },
  {
    id: 4,
    image: "/Images/Security_Core_.png",
    title: "Security at the Core",
    description: "Built with enterprise-grade security standards, end-to-end encryption, and rigorous auditing to ensure all tokenized assets, transactions, and user data remain protected and tamper-proof.",
    category: "Benefits",
  },
  {
    id: 5,
    image: "/Images/Unified_Platform.png",
    title: "Unified Platform",
    description: "Combines issuance, management, compliance, analytics, and lifecycle tools into a single cohesive environment—reducing operational complexity and enabling seamless end-to-end asset tokenization.",
    category: "Benefits",
  },
  {
    id: 6,
    image: "/Images/pexels-anh-nguyen-517648218-19813340.jpg",
    title: "Institutional-Grade Tokenization Platform",
    description: "Design tokenized vehicle that can sit comfortably in an institutional portoflio.",
    category: "Why Us",
  },
  {
    id: 7,
    image: "/Images/pexels-cato-s-2151997403-32744592.jpg",
    title: "Professional Tokenization-as-a-Service for Asset Managers",
    description: "Provide tokenization-as-service for manager who want to bring their own assets on-chain",
    category: "Why Us",
  },
  {
    id: 8,
    image: "/Images/pexels-narcissan-32678951.jpg",
    title: "A Clarity-Driven, Minimalist Approach to On-Chain Asset Design",
    description: "Maintain a minimalist, professional experienxe that proiritizes claritty over noise.",
    category: "Why Us",
  },
];

export default function Benefits() {
  const [activeTab, setActiveTab] = useState<"Benefits" | "Why Us">("Benefits");

  const filteredArticles = articles.filter(
    (article) => article.category === activeTab
  );

  return (
    <section className="w-full bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {activeTab === "Benefits" ? (
          <div className="text-center mb-12">
            <h2 className="text-white text-5xl font-bold mb-3">Resources</h2>
            <p className="text-gray-400 font-bold text-3xl">
              See the Latest from Aurea Tokenized Assets{" "}
            </p>
          </div>
        ) : (
          <div className="mb-12">
            <p className="text-blue-400 text-sm mb-4">About Aurea Tokenized Assets</p>
            <h2 className="text-white text-5xl font-bold mb-6">The Issuance Arm of Aurea Octave</h2>
            <p className="text-gray-400 text-lg max-w-2xl mb-8">
              We stand at the intersection of compliace, custody, and code, bringing institutional assets into the digital future.
            </p>
          </div>
        )}

        <div className="flex justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveTab("Benefits")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeTab === "Benefits"
                ? "bg-[#2a2a2a] text-white"
                : "bg-transparent text-gray-400 hover:text-gray-300"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            Benefits
          </button>
          <button
            onClick={() => setActiveTab("Why Us")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeTab === "Why Us"
                ? "bg-[#2a2a2a] text-white"
                : "bg-transparent text-gray-400 hover:text-gray-300"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            Why Us
          </button>
        </div>

        <div className={`grid grid-cols-1 gap-6 mb-12 ${
          activeTab === "Benefits" 
            ? "md:grid-cols-2 lg:grid-cols-4" 
            : "md:grid-cols-3 lg:grid-cols-3"
        }`}>
          {filteredArticles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-white text-base font-bold leading-snug group-hover:text-gray-300 transition-colors">
                  {article.title}
                </h3>
                {article.description && (
                  <h3 className="flex items-center gap-2 text-xs text-gray-500">
                    {article.description}
                  </h3>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}