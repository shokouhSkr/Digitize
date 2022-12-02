import React from "react";
import Discount from "./Discount.js";

const Price = () => {
  return (
    <section className="mb-3 rounded-md bg-white p-3 text-sm shadow">
      {/* mobile */}
      <div className="mb-5 flex flex-1 justify-between">
        <p>مجموع قیمت:</p>
        <p>23,340,000 تومان</p>
      </div>
      <p className="md:hidden">کد تخفیف دارید؟</p>

      {/* laptop */}
      <Discount />
      <div className="hidden justify-between md:flex">
        <p>قیمت نهایی:</p>
        <p>2,850,0000 تومان</p>
      </div>
    </section>
  );
};

export default Price;
