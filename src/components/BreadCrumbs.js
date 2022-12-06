import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../assets/images/icons/Arrow---Left-2.svg";

const BreadCrumbs = () => {
  return (
    <div className="mb-6 w-full items-center gap-[3%] rounded-md bg-transparent text-xs font-normal text-gray-300 md:flex md:bg-white md:p-3 lg:text-sm">
      <div className="flex items-baseline gap-2">
        <Link className="text-red-400">تلفن همراه</Link>
        <img src={leftArrow} alt="" />
        <Link className="text-red-400">برند آیفون</Link>
        <img src={leftArrow} alt="" />
        <Link className="text-slate-800">آیفون 13</Link>
      </div>
    </div>
  );
};

export default BreadCrumbs;
