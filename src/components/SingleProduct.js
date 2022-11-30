import React from "react";
import { Link } from "react-router-dom";
import ProductColors from "./ProductColors";
import love from "../assets/images/icons/Love.svg";

const SingleProduct = ({ image, title, price, brand }) => {
  return (
    <div className="rounded-lg bg-white p-1.5 text-sm shadow-md">
      <div className="relative mb-4 flex items-center justify-center rounded-lg bg-gray-200">
        <img
          src={love}
          alt="love"
          className="absolute top-2 right-2 h-6 w-6 rounded-full bg-gray-400 p-1"
        />
        <img src={image} alt={title} className="" />
      </div>

      <div className="px-2">
        <div className="mb-2 flex justify-between">
          <span>{brand}</span>
          <ProductColors />
        </div>

        <div className="mb-2">
          <p className="mb-1">{title}</p>
          <p className="text-left text-red-600">{price} تومان</p>
        </div>

        <Link to="products/:id" className="block text-center text-red-400">
          مشاهده و ثبت سفارش
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
