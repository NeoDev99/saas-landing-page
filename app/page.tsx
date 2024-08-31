import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import LogoTicker from "@/components/sections/LogoTicker";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import PromoBanner from "@/components/sections/PromoBanner";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <PromoBanner />
      <Footer />
    </>
  );
};
