import React from "react";
import { ShieldCheck, Map, Headphones } from "lucide-react"; // Using Lucide icons for a professional look

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: (
        <ShieldCheck className="w-10 h-10 text-cyan-500" strokeWidth={1.5} />
      ),
      title: "Safe & Secure",
      description:
        "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    },
    {
      id: 2,
      icon: <Map className="w-10 h-10 text-cyan-500" strokeWidth={1.5} />,
      title: "Expert Guides",
      description:
        "Local experts who bring destinations to life with authentic cultural insights.",
    },
    {
      id: 3,
      icon: (
        <Headphones className="w-10 h-10 text-cyan-500" strokeWidth={1.5} />
      ),
      title: "24/7 Support",
      description:
        "Round-the-clock customer service to assist you wherever your journey takes you.",
    },
  ];

  return (
    <section className="bg-[#f0f9ff] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section from image_583bad.png */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Why Choose Wanderlust
          </h2>
          <p className="text-gray-500 text-lg font-light tracking-wide">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-10 flex flex-col items-start shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-6">{feature.icon}</div>

              <h3 className="text-2xl font-light text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
