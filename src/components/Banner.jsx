import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div className="relative bg-[url('/assets/banner.png')] bg-cover bg-center text-white flex flex-col items-center justify-between min-h-[600px] lg:h-[700px] w-full">
      {/* Overlay - ইমেজ এর ওপর লেখাগুলো আরও স্পষ্ট করার জন্য */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 p-6 md:p-10 text-center flex flex-col justify-center items-center gap-6 flex-1 max-w-5xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Discover Your <br className="hidden md:block" /> Next Adventure
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl font-light max-w-2xl opacity-90">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <button className="uppercase bg-cyan-500 px-8 py-3 cursor-pointer hover:bg-cyan-600 transition-all font-medium">
            Explore Now
          </button>

          <button className="uppercase px-8 py-3 bg-white/20 backdrop-blur-md cursor-pointer hover:bg-white/30 transition-all font-medium border border-white/30">
            View Destination
          </button>
        </div>
      </div>

      {/* Responsive Search Bar Container */}
      <div className="relative z-10 w-full px-4 pb-10 md:pb-16 flex justify-center">
        <div className="bg-white/20 backdrop-blur-lg border border-white/20 flex flex-col md:flex-row justify-between gap-4 md:gap-0 w-full max-w-6xl items-center overflow-hidden rounded-lg md:rounded-none">
          {/* Location */}
          <div className="flex-1 py-4 px-6 w-full text-center md:text-left">
            <h3 className="text-xs uppercase tracking-wider opacity-70">
              Location
            </h3>
            <p className="text-sm font-semibold">Address, City or Zip</p>
          </div>

          <div className="hidden md:block h-10">
            <Separator variant="tertiary" orientation="vertical" />
          </div>

          {/* Date */}
          <div className="flex-1 py-4 px-6 w-full text-center md:text-left">
            <h3 className="text-xs uppercase tracking-wider opacity-70">
              Date/Duration
            </h3>
            <p className="text-sm font-semibold">Anytime/3 Days</p>
          </div>

          <div className="hidden md:block h-10">
            <Separator variant="tertiary" orientation="vertical" />
          </div>

          {/* Budget */}
          <div className="flex-1 py-4 px-6 w-full text-center md:text-left">
            <h3 className="text-xs uppercase tracking-wider opacity-70">
              Budget
            </h3>
            <p className="text-sm font-semibold">$0-$3000</p>
          </div>

          <div className="hidden md:block h-10">
            <Separator variant="tertiary" orientation="vertical" />
          </div>

          {/* People */}
          <div className="flex-1 py-4 px-6 w-full text-center md:text-left">
            <h3 className="text-xs uppercase tracking-wider opacity-70">
              People
            </h3>
            <p className="text-sm font-semibold">5-10 People</p>
          </div>

          {/* Search Button */}
          <button className="bg-cyan-500 hover:bg-cyan-600 transition-colors py-6 md:py-0 px-10 w-full md:w-auto h-full flex items-center justify-center cursor-pointer group">
            <h3 className="font-bold uppercase tracking-widest group-hover:scale-105 transition-transform">
              Search
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
