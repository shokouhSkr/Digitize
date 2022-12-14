import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import logo from "../assets/images/logo/Logo-phone.png";
import logoDesk from "../assets/images/logo/Logo-laptop.png";
import { productsCategories } from "../data";
import BackwardButton from "./BackwardButton";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 right-0 z-50 bg-stone-100 px-[5%] pt-7 pb-5 text-xl font-bold text-slate-800 md:bg-white md:py-6 md:text-sm md:shadow-md">
      {/* mobile */}
      <section className="flex items-center justify-between md:hidden">
        <img src={logo} alt="Digitize" />
        <h1 className="ml-4 text-lg">ساعت هوشمند</h1>
        <SearchBox />
      </section>

      {/* laptop */}
      <section className="hidden items-center justify-between md:flex">
        <ul className="flex items-center justify-between gap-4 lg:gap-6 lg:text-base xl:gap-7 xl:text-lg">
          <Link to="/home">
            <img src={logoDesk} alt="Digitize" className="w-20" />
          </Link>
          <Link to="/home">خانه</Link>
          {productsCategories.map((item) => (
            <Link id={item.id} to={item.category}>
              {item.title}
            </Link>
          ))}
        </ul>
        <SearchBox />
      </section>
    </header>
  );
};

export default Header;
