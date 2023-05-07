import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../Context";

function Products({ products }) {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="text-gray-600 dark:text-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-14 ">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                addToCart(product);
              }}
              className="lg:w-1/4 sm:w-1/2   p-4 w-full rounded-md outline-none  hover:outline-orange-500 hover:shadow-2xl"
            >
              <NavLink
                className={"block relative h-48 rounded overflow-hidden"}
                to={`/single/${product.id}`}
              >
                <img
                  alt={product.title}
                  className="object-contain object-center w-full h-full block"
                  src={product.prdImage}
                />
              </NavLink>
              <div className="mt-4">
                <h3 className="text-gray-500 dark:text-gray-300 text-xs tracking-widest title-font mb-1">
                  {product.title}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium dark:text-white">
                  {product.title}
                </h2>
                <p className="mt-1 text-orange-400">₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
