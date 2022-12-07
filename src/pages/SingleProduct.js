import React from "react";
import BreadCrumbs from "../components/BreadCrumbs.js";
import ProductInfo from "../components/ProductInfo";
import { products } from "../data";

const SingleProduct = () => {
  const id = window.location.pathname.slice(-17);
  console.log("id: ", id);
  const product = products.find((product) => product.id === id);
  console.log("product: ", product);

  return (
    <section className="mt-[90px] mb-20 min-h-[calc(100vh-2rem)] px-[5%] md:mt-28">
      <BreadCrumbs {...product} />
      <ProductInfo {...product} />
    </section>
  );
};

export default SingleProduct;
