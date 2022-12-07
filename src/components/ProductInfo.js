import React, { useState } from "react";
import productImg from "../assets/images/products/Product Image.png";
import ProductColors from "./ProductColors";
import preProductImg from "../assets/images/products/previewimage8.png";
import { useGlobalContext } from "../store/context";
import { SVG1, SVG2, SVG3 } from "../data";

const ProductInfo = ({ id, image, title, price, colors }) => {
  const { addItem } = useGlobalContext();
  console.log("color from here", colors);

  return (
    <section className="flex flex-col text-slate-800 md:flex-row">
      <div className="mx-auto mb-12 w-52 md:mx-0">
        <img src={image} alt={title} className="" />

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
        {/* productInfo-colors */}
        <div className="mb-7 flex items-center justify-center gap-[10%]">
          <span className="x:text-lg">انتخاب رنگ:</span>
          <div>
            <ProductColors colors={colors} width="w-7" height="h-7" />
          </div>
        </div>
        {/* productInfo-shipping */}
        <div className="mb-7 flex flex-wrap items-center justify-center gap-4 x:gap-6 md:hidden">
          <div className="flex gap-3 text-xs x:text-sm">
            <div className="flex items-center gap-1">
              <span>{SVG1}</span>
              <span>فروشنده:</span>
            </div>
            <span>دیجی تایز</span>
          </div>
          <div className="flex gap-3 text-xs x:text-sm">
            <div className="flex items-center gap-1">
              <span>{SVG2}</span>
              <span>گارانتی:</span>
            </div>
            <span>18 ماه زرین خدمت</span>
          </div>
          <div className="flex gap-3 text-xs x:text-sm">
            <div className="flex items-center gap-1">
              <span>{SVG3}</span>
              <span>ارسال توسط:</span>
            </div>
            <span>انبار تهران</span>
          </div>
        </div>
        {/* productInfo-features */}
        <div className="mb-7 rounded-xl bg-white px-4 pt-5 pb-1 md:bg-transparent">
          <h1 className="mb-5 text-[17px] font-semibold">ویژگی های کالا:</h1>

          <div className="mb-2 flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <div className="h-1 w-1 rounded-full bg-red-400 p-1"></div>
              <span className="text-[15px] font-normal">حافظه داخلی:</span>
            </div>
            <span className="mr-2 font-semibold">128 گیگابایت</span>
          </div>

          <div className="mb-2 flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <div className="h-1 w-1 rounded-full bg-red-400 p-1"></div>
              <span className="text-[15px] font-normal">بازه اندازه صفحه نمایش:</span>
            </div>
            <span className="mr-2 font-semibold">0.6 اینچ و بزرگتر</span>
          </div>

          <div className="mb-2 flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <div className="h-1 w-1 rounded-full bg-red-400 p-1"></div>
              <span className="text-[15px] font-normal">شبکه های ارتباطی:</span>
            </div>
            <div className="mr-2 flex items-center justify-start gap-2 font-semibold">
              <span>5G</span>
              <span>4G</span>
              <span>3G</span>
              <span>2G</span>
            </div>
          </div>
        </div>

        {/* button shopping */}
        <section className="flex items-center gap-[20%] rounded-lg bg-white p-3 md:hidden">
          <button
            type="button"
            className="w-1/2 rounded bg-red-400 py-3 text-sm text-white md:hidden"
            onClick={addItem}
          >
            افزودن به سبد خرید
          </button>

          <div className="flex flex-col">
            <span className="text-[17px] font-semibold">{price}</span>
            <span className="text-xs font-normal">تومان</span>
          </div>
        </section>
      </div>

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
