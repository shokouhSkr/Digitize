import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import PageCategory from "./pages/PageCategory";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="products/:id" element={<Products />} />
        <Route path="category" element={<PageCategory />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
