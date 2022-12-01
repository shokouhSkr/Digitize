import React from "react";
import CartItems from "../components/Cart/CartItems";
import Checkout from "../components/Cart/Checkout";

const Cart = () => {
  return (
    <section className="mb-20 justify-between gap-5 px-[5%] md:flex">
      <CartItems />
      <Checkout />
    </section>
  );
};

export default Cart;
