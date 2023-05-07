import React, { useEffect, useState } from "react";
import Hero from "../Components/HeroSection";
import Product from "../Components/Products";
import News from "../Components/NewsLetter";

import Footer from "../Components/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Product />
      <News />
      <Footer />
    </>
  );
}

export default HomePage;
