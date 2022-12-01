import React from "react";
import Price from "./Price";
import ShoppingButtons from "./ShoppingButtons";

const Checkout = () => {
  return (
    <section className="basis-2/5">
      <Price />
      <ShoppingButtons />
    </section>
  );
};

export default Checkout;
