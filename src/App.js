import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductInfo from "./components/ProductInfo.js";
import ProductsCategory from "./pages/ProductsCategory";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <Router className="font-iranyekan">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:id" element={<ProductInfo />} />
        <Route path="category" element={<ProductsCategory />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
