"use client"
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import DestinationCard from "./DestinationCard";

const FeaturedDestinations = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalItems = 5;

{/** Scrool Position track */}
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const index =
        Math.round(
          (scrollLeft / (scrollWidth - clientWidth)) * (totalItems - 1),
        ) + 1;
      setCurrentIndex(index);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const destinations = Array(5).fill({
    location: "Indonesia",
    title: "Bali Paradise",
    price: "2700",
    duration: "7 Days/6 Nights",
    rating: "4.5",
    image: "/assets/destinations/image1.png",
  });

  return (
    <section className="py-24 overflow-hidden bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
              Featured Destinations
            </h2>
            <p className="text-gray-500 text-base md:text-lg font-light max-w-md">
              Handpicked travel experiences for the adventure seekers who crave
              the extraordinary.
            </p>
          </motion.div>
          <button className="border border-cyan-500/30 text-cyan-500 px-8 py-3.5 text-xs font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-cyan-500 hover:text-white transition-all duration-300">
            All Destinations <ArrowRight size={16} />
          </button>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <motion.div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 md:gap-10 overflow-x-auto no-scrollbar pb-12 cursor-grab active:cursor-grabbing scroll-smooth"
          >
            {destinations.map((dest, index) => (
              <DestinationCard key={index} {...dest} />
            ))}
          </motion.div>
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center gap-6 flex-1">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-medium text-gray-900">
                {currentIndex}
              </span>
              <span className="text-gray-400 text-lg">/</span>
              <span className="text-gray-400 text-lg">{totalItems}</span>
            </div>
            <div className="relative h-[1px] bg-gray-200 flex-1 max-w-xs hidden md:block">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gray-900"
                style={{ width: `${(currentIndex / totalItems) * 100}%` }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-4 border border-gray-200 rounded-full text-gray-500 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 disabled:opacity-30"
              disabled={currentIndex === 1}
            >
              <ArrowLeft size={22} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-4 border border-gray-200 rounded-full text-gray-500 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 disabled:opacity-30"
              disabled={currentIndex === totalItems}
            >
              <ArrowRight size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturedDestinations;
