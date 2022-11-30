import React, { useState } from "react";
import { Link } from "react-router-dom";

import filter from "../assets/images/icons/filter.svg";
import arrow from "../assets/images/icons/arrow-down.svg";
import sortPhone from "../assets/images/icons/sort-phone.svg";
import sort from "../assets/images/icons/Sort.svg";

const Filter = () => {
  return (
    <section className="col-span-full flex items-center justify-between gap-3 text-xs font-semibold text-slate-800 xs:text-sm md:col-span-full md:col-start-4 xl:col-start-3">
      <button type="button" className="flex w-full items-center rounded-md bg-white p-2 md:hidden">
        <div className="ml-1 flex items-center">
          <img src={sortPhone} alt="sort" className="-ml-1" />
          <img src={arrow} alt="arrow" className="h-4" />
        </div>
        <span className="">محبوب‌ترین</span>
      </button>

      <button type="button" className="flex w-full items-center rounded-md bg-white p-2 md:hidden">
        <img src={filter} alt="filter" className="ml-1" />
        <span>برندمحصول: اپل</span>
      </button>

      <div className="hidden w-full items-center gap-[3%] rounded-md bg-white p-1 text-xs font-normal text-gray-300 md:flex lg:text-sm">
        <img src={sort} alt="sort" />

        <Link to="/">محبوب‌ترین محصول</Link>
        <Link to="/">پربازدیدترین محصول</Link>
        <Link to="/">گران‌ترین محصول</Link>
        <Link to="/">ارزان‌ترین محصول</Link>
      </div>
    </section>
  );
};

export default Filter;
