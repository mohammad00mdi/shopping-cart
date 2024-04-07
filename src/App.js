import React from "react";
import "./App.css";
import Cart from "./components/cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProdcutList from "./components/productList";
import Product from "./components/product";
import Basket from "./components/basket";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProdcutList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/Basket" element={<Basket />} />
      </Routes>
    </Router>
  );
}

export default App;
