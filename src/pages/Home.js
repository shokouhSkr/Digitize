import React from "react";

import Filter from "../components/Filter";
import Products from "../components/Products";

const Home = () => {
  return (
    <section className="bg-slate-100 px-[5%]">
      <Filter />
      <Products />
    </section>
  );
};

export default Home;
