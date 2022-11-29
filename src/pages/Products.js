import React, { useState } from "react";
import { Link } from "react-router-dom";

import love from "../assets/images/icons/Love.svg";
import { products } from "../data";

const Products = () => {
  const [like, setLike] = useState(null);

  return (
    <section className="mb-20 grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-8 md:grid-cols-3 md:grid-rows-3"></section>
  );
};

export default Products;
