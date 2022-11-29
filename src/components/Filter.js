import React from "react";

import filter from "../assets/images/icons/filter.svg";
import arrow from "../assets/images/icons/arrow-down.svg";
import sort from "../assets/images/icons/sort-phone.svg";

const Filter = () => {
  return (
    <section className="-mt-2 mb-7 flex items-center justify-between gap-3 text-xs font-semibold text-slate-800 xs:text-sm md:hidden">
      <button type="button" className="flex w-full items-center rounded-md bg-white p-2">
        <div className="ml-1 flex items-center">
          <img src={sort} alt="sort" className="-ml-1" />
          <img src={arrow} alt="arrow" className="h-4" />
        </div>
        <span className="">محبوب‌ترین</span>
      </button>

      <button type="button" className="flex w-full items-center rounded-md bg-white p-2">
        <img src={filter} alt="filter" className="ml-1" />
        <span>برندمحصول: اپل</span>
      </button>
    </section>
  );
};

export default Filter;
