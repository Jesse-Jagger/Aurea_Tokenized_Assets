"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = isHome && !isScrolled ? "bg-transparent" : "bg-black";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="text-white font-serif text-2xl font-light tracking-wide">
              ATA
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-12 text-white">
            <Link
              href="/"
              className="text-base font-normal hover:text-gray-300 transition-colors"
            >
              Home
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-300 transition-colors">
                What We Do <ChevronDown size={16} />
              </button>

              <div className="absolute top-full left-0 hidden group-hover:block bg-black/90 border border-white/10 rounded-lg w-64 py-3 backdrop-blur-xl">
                <a href="/services/products" className="block px-4 py-2 hover:bg-white/10">
                  Tokenized Investment Products
                </a>
                <a href="/services/taas" className="block px-4 py-2 hover:bg-white/10">
                  Tokenization-as-a-Service
                </a>
              </div>
            </div>

            <a
              href="#ecosystem"
              className="text-base font-normal hover:text-gray-300 transition-colors"
            >
              WHY ATA
            </a>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-300 transition-colors">
                About <ChevronDown size={16} />
              </button>

              <div className="absolute top-full left-0 hidden group-hover:block bg-black/90 border border-white/10 rounded-lg w-64 py-3 backdrop-blur-xl">
                <a className="block px-4 py-2 hover:bg-white/10">Docs & FAQs</a>
                <a
                  href="/about-us/contact-us"
                  className="block px-4 py-2 hover:bg-white/10"
                >
                  Contact Us
                </a>
                <a className="block px-4 py-2 hover:bg-white/10">
                  Investor Relations
                </a>
                <a className="block px-4 py-2 hover:bg-white/10">Company</a>
                <a className="block px-4 py-2 hover:bg-white/10">Careers</a>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 bg-white text-black text-base font-medium rounded-full hover:bg-gray-100 transition-colors">
              Sign Up
            </button>

            <button className="px-6 py-2.5 border border-white text-white text-base font-medium rounded-full hover:bg-white/10 transition-colors">
              Log In
            </button>
          </div>

          <button className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}