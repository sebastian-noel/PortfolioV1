import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ImageCarousel from "@/components/home/ImageCarousel";
import Hobbies from "@/components/home/Hobbies";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <About />
      <ImageCarousel />
      <Hobbies />
    </div>
  );
}
