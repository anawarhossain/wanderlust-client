import Banner from "@/components/Banner";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedDestinations />
      <WhyChooseUs/>
      <Testimonials/>
      <HeroSection/>
    </div>
  );
}
