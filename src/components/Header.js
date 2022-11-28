import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo/Logo-phone.png";
import logoDesk from "../assets/images/logo//Logo-laptop.png";
import search from "../assets/images/icons/search-normal.svg";

const Header = () => {
  return (
    <section className="mx-auto max-w-screen-3xl bg-stone-100 px-[5%] py-6 text-xl font-bold text-slate-800 md:bg-stone-50 md:text-sm md:shadow-md">
      <div className="flex items-center justify-between md:hidden">
        <Link to="/">
          <img src={logo} alt="Digitize" />
        </Link>
        <h1 className="ml-4 text-lg">ساعت هوشمند</h1>
        <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-white shadow-md">
          <img src={search} alt="search" />
        </div>
      </div>

      <div className="hidden items-center justify-between md:flex">
        <ul className="flex items-center justify-between gap-4 lg:gap-6 lg:text-base xl:gap-7 xl:text-lg">
          <Link to="/home">
            <img src={logoDesk} alt="Digitize" />
          </Link>
          <Link to="/home">خانه</Link>
          <Link to="/cellphones">تلفن همراه</Link>
          <Link to="/laptops">لپ تاپ</Link>
          <Link to="/smartphones">ساعت هوشمند</Link>
        </ul>

        <div className="flex w-2/5 rounded-[4px] bg-gray-200">
          <img src={search} alt="search" class="p-3" />
          <input
            type="search"
            placeholder="جستجوی نام محصول، نام برند، و..."
            className="w-full rounded-[4px] bg-gray-200 pl-2 text-sm font-normal focus:outline-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
