import React from "react";

import Filter from "../components/Filter";
import Products from "./Products";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <section className="mt-20 grid grid-cols-12 grid-rows-[65px_minmax(300px,_1fr)] gap-4 px-[5%] md:mt-28 md:grid-rows-[50px_minmax(300px,_1fr)]">
      <Filter />
      <Products />
      <Sidebar />
    </section>
  );
};

export default Home;
