import React, { useState, useEffect } from "react";
import Axios from "axios";

const url = "https://fakestoreapi.com/products";

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const urlResult = await Axios.get(url);

    const datas = urlResult.data;

    console.log(datas);

    // const allProduct = datas.map((data) => ({
    //   id: data.id,
    //   title: data.title,
    //   prdImage: data.image,
    // }));
    setProducts(datas);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="text-gray-600 dark:text-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-14 ">
          {products.map((product, index) => (
            <div
              key={index}
              className="lg:w-1/4 sm:w-1/2  p-4 w-full hover:shadow-2xl"
            >
              <a
                className="block relative h-48 rounded overflow-hidden"
                href=""
              >
                <img
                  alt={product.title}
                  className="object-contain object-center w-full h-full block"
                  src={product.image}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 dark:text-gray-300 text-xs tracking-widest title-font mb-1">
                  {product.title}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium dark:text-white">
                  {product.title}
                </h2>
                <p className="mt-1 dark:text-gray-300">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
