import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs.js";
import ProductInfo from "../components/ProductInfo";

const SingleProduct = () => {
  return (
    <section className="mt-24 px-[5%] md:mt-28">
      <BreadCrumbs />
      <ProductInfo />
    </section>
  );
};

export default SingleProduct;
