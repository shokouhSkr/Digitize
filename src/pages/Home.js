import React from "react";

import Filter from "../components/Filter";
import Products from "./Products";
import Sidebar from "../components/Sidebar.js";

const Home = () => {
  return (
    <section className="bg-slate-100 px-[5%]">
      <Filter />
      <Products />
      <Sidebar />
    </section>
  );
};

export default Home;
