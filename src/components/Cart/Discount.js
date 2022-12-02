import React from "react";

const Discount = () => {
  return (
    <section className="mb-10 hidden md:block">
      <div className="mb-5 flex items-center justify-between">
        <p>کد تخفیف:</p>

        <form className="flex rounded-md">
          <input
            type="text"
            placeholder="123ABC"
            className="w-24 rounded-tr-md rounded-br-md border border-slate-800 text-center focus:outline-none"
          />
          <button
            type="button"
            className="rounded-tl-md rounded-bl-md bg-red-400 py-2 px-4 text-white"
          >
            تایید
          </button>
        </form>
      </div>

      <div className="flex justify-between">
        <p>تخفیف:</p>
        <p>25,000 تومان</p>
      </div>
    </section>
  );
};

export default Discount;
