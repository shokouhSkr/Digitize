import React from "react";
import { Link } from "react-router-dom";
import CartItems from "../components/Cart/CartItems";
import Checkout from "../components/Cart/Checkout";

const Cart = () => {
  return (
    <section className="px-[5%]">
      <div className="hidden w-3/5 justify-between bg-transparent p-3 md:flex">
        <Link to="/">سبد‌ خرید</Link>
        <Link to="/" className="text-sm text-red-400">
          بازگشت به خانه
        </Link>
      </div>

      <div className="justify-between gap-[5%] md:flex">
        <CartItems />
        <Checkout />
      </div>
    </section>
  );
};

export default Cart;
