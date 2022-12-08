import React, { useState } from "react";
import { Link } from "react-router-dom";
import productImg from "../assets/images/products/Product Image.png";
import preProductImg from "../assets/images/products/previewimage8.png";
import { useGlobalContext } from "../store/context";
import ProductInfoColors from "./ProductInfoColors";
import ProductInfoShipping from "./ProductInfoShipping";
import ProductInfoFeatures from "./ProductInfoFeatures";

const ProductInfo = ({ id, image, title, price, colors, product }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
  };
  console.log("cart: ", cart);

  return (
    <section className="flex flex-col text-slate-800 md:flex-row">
      <div className="mx-auto mb-12 w-52 md:mx-0">
        <img src={image} alt={title} />

        {/* images */}
        <div className="hidden gap-2 md:flex">
          <div className="w-16 rounded-lg border border-stone-800">
            <img src={preProductImg} alt="" />
          </div>
          <div className="w-16 rounded-lg border border-stone-800">
            <img src={preProductImg} alt="" />
          </div>
          <div className="w-16 rounded-lg border border-stone-800">
            <img src={preProductImg} alt="" />
          </div>
        </div>
      </div>

      {/* productInfo */}
      <div className="w-full">
        <div className="mb-10 flex flex-col items-center justify-center md:items-start">
          <h1 className="mb-1 text-lg font-bold x:text-xl">{title}</h1>
          <h2 className="font-light x:text-lg">Iphone 13 128 GB</h2>
        </div>
        {/* divider */}
        <div className="hidden h-[1.5px] w-full bg-gray-200 md:block"></div>

        <ProductInfoColors colors={colors} width="w-7" height="h-7" />
        <ProductInfoShipping />
        <ProductInfoFeatures />

        {/* button shopping - mobile */}
        <section className="flex items-center gap-[20%] rounded-lg bg-white p-3 md:hidden">
          <button
            onClick={() => addToCart(product)}
            type="button"
            className="w-1/2 rounded bg-red-400 py-3 text-sm text-white md:hidden"
          >
            <Link to="/cart">افزودن به سبد خرید</Link>
          </button>

          <div className="flex flex-col">
            <span className="text-[17px] font-semibold">{price}</span>
            <span className="text-xs font-normal">تومان</span>
          </div>
        </section>
      </div>

      {/* button shopping - mobile */}
      <div className="hidden rounded bg-gray-300 p-16 md:block">
        <p>gfghjhhj</p>
        <button type="button" className="bg-red-400 p-1">
          افزودن به سبد خرید
        </button>
      </div>
    </section>
  );
};

export default ProductInfo;
