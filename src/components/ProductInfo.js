import React from "react";
import productImg from "../assets/images/products/Product Image.png";
import preProductImg from "../assets/images/products/previewimage8.png";

const ProductInfo = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="mx-auto w-52 md:mx-0 md:w-full">
        <img src={productImg} alt="" className="mb-4" />

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
      <div>efef</div>
    </section>
  );
};

export default ProductInfo;
