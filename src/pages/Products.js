import React, { useState } from "react";

import SingleProduct from "../components/SingleProduct";
import { products } from "../data";

const Products = () => {
  const [like, setLike] = useState(null);

  return (
    <section className="col-span-full mb-20 grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-8 md:col-start-4 md:grid-cols-3 md:grid-rows-2 xl:col-start-3 3xl:grid-cols-4">
      {products.map((product) => (
        <SingleProduct key={product.id} {...product} />
      ))}
    </section>
  );
};

export default Products;
