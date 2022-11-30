import React from "react";

import Filter from "../components/Filter";
import Products from "./Products";
import Sidebar from "../components/Sidebar.js";

const Home = () => {
  return (
    <section className="grid grid-cols-12 grid-rows-[65px_minmax(300px,_1fr)] gap-4 px-[5%] md:grid-rows-[50px_minmax(300px,_1fr)] md:px-[2%]">
      <Filter />
      <Products />
      <Sidebar />
    </section>
  );
};

export default Home;
