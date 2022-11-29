import React from "react";
import { Link } from "react-router-dom";

import SearchBox from "../components/SearchBox";

import logo from "../assets/images/logo/Logo-phone.png";
import logoDesk from "../assets/images/logo//Logo-laptop.png";

const Header = () => {
  return (
    <header className="mx-auto max-w-screen-3xl bg-stone-100 px-[5%] py-6 text-xl font-bold text-slate-800 md:bg-stone-50 md:text-sm md:shadow-md">
      <section className="flex items-center justify-between md:hidden">
        <Link to="/">
          <img src={logo} alt="Digitize" />
        </Link>
        <h1 className="ml-4 text-lg">ساعت هوشمند</h1>
        <SearchBox />
      </section>

      <section className="hidden items-center justify-between md:flex">
        <ul className="flex items-center justify-between gap-4 lg:gap-6 lg:text-base xl:gap-7 xl:text-lg">
          <Link to="/home">
            <img src={logoDesk} alt="Digitize" className="w-20" />
          </Link>
          <Link to="/home">خانه</Link>
          <Link to="/cellphones">تلفن همراه</Link>
          <Link to="/laptops">لپ تاپ</Link>
          <Link to="/smartphones">ساعت هوشمند</Link>
        </ul>
        <SearchBox />
      </section>
    </header>
  );
};

export default Header;
