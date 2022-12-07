import React, { useState } from "react";
import { Link } from "react-router-dom";
import love from "../assets/images/icons/Love.svg";
import ProductColors from "../components/ProductColors";
import { products } from "../data";

const Products = () => {
  return (
    <section className="col-span-full mb-24 grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-8 md:col-start-4 md:grid-cols-3 md:grid-rows-2 xl:col-start-3 3xl:grid-cols-4">
      {products.map((product) => {
        const { image, company, id, price, title, colors } = product;

        return (
          <div className="rounded-lg bg-white p-1.5 text-sm shadow-md">
            <div className="relative mb-4 flex items-center justify-center rounded-lg bg-gray-200">
              <img
                src={love}
                alt="love"
                className="absolute top-2 right-2 w-6 rounded-full bg-gray-400 p-1"
              />
              <div className="my-2 w-40">
                <img src={image} alt={title} />
              </div>
            </div>

            <div className="px-2">
              <div className="mb-2 flex justify-between">
                <span>{company}</span>
                <ProductColors colors={colors} width="w-4" height="h-4" />
              </div>

              <div className="mb-2">
                <p className="mb-1">{title}</p>
                <p className="text-left text-red-600">{price} تومان</p>
              </div>

              <Link to={`products/${id}`} className="block text-center text-red-400">
                مشاهده و ثبت سفارش
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Products;
