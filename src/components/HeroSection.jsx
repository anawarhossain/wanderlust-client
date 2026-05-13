import Image from "next/image";
import { ArrowRight } from "lucide-react"; // আইকনের জন্য (ঐচ্ছিক)

const HeroSection = () => {
  return (
    <section className="relative h-125 w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/CTA.png" // আপনার public ফোল্ডারে ইমেজটি রাখুন
          alt="Ready To Start Your Journey"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 bg-linear-to-b from-black/60 via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight">
          Ready To Start Your Journey?
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 font-light">
          Join thousands of travelers who have discovered the world with us
        </p>

        <button className="bg-white text-gray-900 px-8 py-4 flex items-center gap-3 mx-auto font-semibold uppercase tracking-widest hover:bg-gray-100 transition-all duration-300 group">
          Book Your Trip Today
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
