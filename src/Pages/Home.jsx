import React from "react";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";

function Home() {
  return (
    <>
      <HeroSection />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
