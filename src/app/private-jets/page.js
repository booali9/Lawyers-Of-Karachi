'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = ['Start', 'Story', 'Rates', 'Benefits', 'FAQ'];

export default function PrivateJetsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-[var(--font-inter)]">
      {/* ===== Hero Section ===== */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/50" />

        {/* Content Wrapper */}
        <div className="relative h-full flex flex-col">
          {/* ===== Navbar ===== */}
          <nav className="w-full max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
            <span className="text-2xl font-semibold text-gray-900 tracking-tight">
              SkyElite
            </span>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-900 font-medium text-sm transition-colors hover:text-gray-700"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-gray-900"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md mx-4 rounded-2xl shadow-lg overflow-hidden transition-all">
              <ul className="flex flex-col py-3">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block px-6 py-3 text-gray-900 font-medium text-sm transition-colors hover:text-gray-700"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ===== Hero Content ===== */}
          <div className="flex-1 flex items-center justify-center -mt-80">
            <div className="text-center px-4">
              {/* Label */}
              <p className="text-sm font-semibold text-gray-600 tracking-[0.2em] mb-4 uppercase">
                Private Jets
              </p>

              {/* Heading Line 1 — Premium */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal text-gray-500 leading-none tracking-tighter">
                Premium.
              </h1>

              {/* Heading Line 2 — Accessible (overlapping) */}
              <h2
                className="text-6xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tighter -mt-3 md:-mt-4"
                style={{ color: '#202A36' }}
              >
                Accessible.
              </h2>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-6 mb-6">
                Your dedication deserves recognition.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center justify-center gap-4">
                <button className="px-4 py-2 rounded-full bg-gray-300 text-gray-800 font-medium transition-colors hover:bg-gray-400">
                  Discover
                </button>
                <button
                  className="px-4 py-2 rounded-full text-white font-medium transition-colors"
                  style={{ backgroundColor: '#202A36' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1a2229')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#202A36')}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
