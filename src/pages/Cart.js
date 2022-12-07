import React from "react";
import { Link } from "react-router-dom";
import CartItems from "../components/Cart/CartItems";
import Checkout from "../components/Cart/Checkout";
import { useGlobalContext } from "../store/context";

const Cart = () => {
  const { cartItems } = useGlobalContext();

  return (
    <section className="mt-24 px-[5%] md:mt-28 md:min-h-[calc(100vh-24rem)]">
      {/* {cartItems.length === 0 && (
        <h1 className="mb-6 pt-36 text-center text-2xl text-slate-800">سبد خرید شما خالی است.</h1>
      )}
      {cartItems.length > 0 && ( */}
      <>
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
      </>
    </section>
  );
};

export default Cart;
