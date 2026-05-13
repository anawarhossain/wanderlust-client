"use client"; // Interactive state এর জন্য এটি প্রয়োজনীয়

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // আইকনের জন্য lucide-react ব্যবহার করা হয়েছে

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "My Bookings", href: "/my-bookings" },
    { name: "Add Destination", href: "/add-destination" },
  ];

  const authLinks = [
    { name: "Profile", href: "/profile" },
    { name: "Login", href: "/login" },
    { name: "Sign Up", href: "/signup" },
  ];

  return (
    <nav className="relative bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Desktop Left Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-cyan-500 transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logo - Always Center on Desktop, Left/Center on Mobile */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/Wanderlast.png"
                height={150}
                width={150}
                alt="Wanderlast"
                className="w-32 md:w-40 h-auto"
              />
            </Link>
          </div>

          {/* Desktop Right Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {authLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-cyan-500 transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-cyan-500 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white">
          {[...navLinks, ...authLinks].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // লিংক ক্লিক করলে মেনু বন্ধ হবে
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-cyan-500 hover:bg-gray-50 rounded-md transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
