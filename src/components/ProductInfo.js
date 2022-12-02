import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs.js";

const ProductInfo = () => {
  const { id } = useParams(4545);

  return (
    <section className="px-[5%]">
      <BreadCrumbs />
    </section>
  );
};

export default ProductInfo;
