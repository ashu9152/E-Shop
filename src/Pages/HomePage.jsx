import React, { useEffect, useState } from "react";
import Hero from "../Components/HeroSection";
import Product from "../Components/Products";
import News from "../Components/NewsLetter";
import Axios from "axios";
import Footer from "../Components/Footer";

const url = "https://fakestoreapi.com/products";

function HomePage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const urlResult = await Axios.get(url);

    const datas = urlResult.data;

    console.log(datas);

    const allProduct = datas.map((data) => ({
      id: data.id,
      title: data.title,
      prdImage: data.image,
      describe: data.description,
      price: data.price,
    }));
    setProducts(allProduct);
  };

  useEffect(() => {
    fetchProducts();
  }, [setProducts]);

  return (
    <>
      <Hero />
      <Product products={products} />
      <News />
      <Footer />
    </>
  );
}

export default HomePage;
