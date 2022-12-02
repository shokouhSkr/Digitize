import React from "react";
import { Link } from "react-router-dom";
import phoneImg from ".././../assets/images/products/phone.png";
import { brands } from "../../data";

const BrandCategory = () => {
  return (
    <section className="relative mt-8 mb-6 justify-between md:hidden">
      {/* products category */}
      <div className="absolute right-[5%] flex h-44 flex-col justify-between overflow-hidden rounded-lg bg-stone-200">
        <p className="p-2 text-center">تلفن همراه</p>
        <div className="w-32">
          <img src={phoneImg} alt="" />
        </div>
      </div>

      {/* brands */}
      <div className="flex flex-col justify-between">
        <Link to="/" className="ml-[5%] text-end text-sm text-red-400">
          مشاهده همه
        </Link>
        <div className="mr-40 mt-6 flex gap-2 overflow-scroll text-sm">
          {brands.map((item) => (
            <div className="mb-4 flex flex-col justify-between rounded-lg bg-white p-4 shadow">
              <div className="w-16">
                <img src={item.image} alt="" className="" />
              </div>
              <p className="text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCategory;
