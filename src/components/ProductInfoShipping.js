import React from "react";
import { SVG1, SVG2, SVG3 } from "../data";

const ProductInfoShipping = () => {
  return (
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
  );
};

export default ProductInfoShipping;
