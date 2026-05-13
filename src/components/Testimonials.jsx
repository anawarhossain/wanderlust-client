import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      quote:
        "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
      author: "Michael Chen",
      location: "Singapore",
      image: "/assets/person1.png",
    },
    {
      id: 2,
      quote:
        "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
      author: "Sarah Johnson",
      location: "New York, USA",
      image: "/assets/person2.png",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
            What Travelers Say
          </h2>
          <p className="text-gray-500 text-lg font-light">
            Real experiences from our happy travelers
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3 mt-6 md:mt-0">
          <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-gray-400">
            <ChevronLeft size={24} strokeWidth={1} />
          </button>
          <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-gray-400">
            <ChevronRight size={24} strokeWidth={1} />
          </button>
        </div>
      </div>

      {/* Testimonial Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border border-gray-100 p-8 flex flex-col md:flex-row gap-6 items-start transition-shadow hover:shadow-sm"
          >
            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-between h-full min-h-55">
              <p className="text-xl text-gray-800 leading-relaxed font-light">
                &quot;{review.quote}&quot;
              </p>

              <div className="mt-8">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-px bg-cyan-500"></span>
                  <h4 className="text-cyan-500 font-medium">{review.author}</h4>
                </div>
                <p className="text-gray-400 text-sm ml-8">{review.location}</p>
              </div>
            </div>

            {/* Image Placeholder - Referencing style from image_62bb98.png */}
            <div className="w-full md:w-48 h-64 relative flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden">
              Using a standard div here to simulate the layout. In Next.js, use{" "}
              <Image
                        src={review.image}
                        alt={review.author}
                fill
                className="object-cover"
                priority
              />
              <div className="w-full h-full bg-gray-200 object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
