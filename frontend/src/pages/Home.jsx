import React from "react";
import Hero from "../components/Hero/Hero";
import Programs from "../components/Programs/Programs";
import Reasons from "../components/Reasons/Reasons";
import Testimonials from "../components/Testimonials/Testimonials";
import Plans from "../components/Plans/Plans";
import Join from "../components/Join/Join";
// import HeroSection from "../components/HeroSection";
// import DescriptionSection from "../components/DescriptionSection";
// import BuildFlexSection from "../components/BuildFlexSection";

const Home = () => {
  return (
    <div className="container sm:max-w-screen-2xl mx-auto px-8">
      {/* <HeroSection />
      <DescriptionSection />
      <BuildFlexSection /> */}
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
    </div>
  );
};

export default Home;
