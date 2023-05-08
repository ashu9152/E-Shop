import "./App.css";
import Navbar from "./Components/Navbar";
import Single from "./Components/SingleProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { CartContext } from "./Context";
import Cart from "./Components/Cart";
import { useState } from "react";

function App() {
  const [singleItem, setSingleItem] = useState();
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };
  console.log(cartItem);

  return (
    <CartContext.Provider
      value={{ singleItem, addToCart, setSingleItem, cartItem, setCartItem }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/single/:id" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
