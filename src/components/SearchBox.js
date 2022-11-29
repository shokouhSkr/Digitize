import React from "react";
import search from "../assets/images/icons/search-normal.svg";

const SearchBox = () => {
  return (
    <>
      <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-white shadow-md md:hidden">
        <img src={search} alt="search" />
      </div>

      <div className="hidden w-2/5 rounded-[4px] bg-gray-200 md:flex">
        <img src={search} alt="search" class="p-3" />
        <input
          type="search"
          placeholder="جستجوی نام محصول، نام برند، و..."
          className="w-full rounded-[4px] bg-gray-200 pl-2 text-sm font-normal focus:outline-none"
        />
      </div>
    </>
  );
};

export default SearchBox;
