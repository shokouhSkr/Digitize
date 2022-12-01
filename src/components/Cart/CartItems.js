import React from "react";
import SingleCartItem from "./SingleCartItem";

const CartItems = () => {
  return (
    <section className="mb-8 h-2/3 overflow-scroll md:basis-3/5">
      <SingleCartItem />
      <SingleCartItem />
    </section>
  );
};

export default CartItems;
