import Banner from "@/components/Banner";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Testimonials/>
      <HeroSection/>
    </div>
  );
}
