'use client';

//components
import HeroSection from "./components1/hero-section/hero-section";
import ParallaxProviderWrapper from "./components1/parallax-provider-wrapper/parallax-provider";
import About from "./components1/about/about";
import WhereToFindUs from "./components1/where-to-find-us/where-to-find-us";

export default function Home() {
  return (
    <main>
      <ParallaxProviderWrapper>
        <HeroSection />
      </ParallaxProviderWrapper>
      <About />
      <WhereToFindUs />
    </main>
  );
}
