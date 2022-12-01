import React from "react";
import close from "../../assets/images/icons/close.svg";
import { products } from "../../data";

const SingleCartItem = () => {
  return (
    <section className="mb-3 flex justify-between rounded-md bg-white p-3 text-sm shadow md:mb-0">
      <div className="flex gap-2">
        <img src={products[0].image} alt="" className="w-12" />

        <div className="flex flex-col justify-between py-2">
          <p>{products[0].title}</p>
          <p>{products[0].price}تومان</p>
        </div>
      </div>

      <div className="flex flex-col justify-between py-1">
        <div className="flex justify-end">
          <img src={close} alt="" className="w-3" />
        </div>
        <div className="flex items-center gap-1">
          <span className="grid h-5 w-5 place-content-center rounded-full bg-stone-300 p-1">+</span>
          <span className="grid h-8 w-6 place-content-center rounded-sm border border-red-300 p-2">
            1
          </span>
          <span className="grid h-5 w-5 place-content-center rounded-full bg-red-300 p-1">-</span>
        </div>
      </div>
    </section>
  );
};

export default SingleCartItem;
