import React from "react";
import SingleCartItem from "./SingleCartItem";
import { useGlobalContext } from "../../store/context";

const CartItems = () => {
  const { cartItems } = useGlobalContext();

  return (
    <section className="mb-8 h-2/3 overflow-scroll md:basis-3/5">
      {cartItems.map((item) => (
        <SingleCartItem />
      ))}
    </section>
  );
};

export default CartItems;
