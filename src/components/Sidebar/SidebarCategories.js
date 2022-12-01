import React from "react";
import { productsCategories } from "../../data";

const SidebarCategories = () => {
  return (
    <div className="mb-6">
      <p className="mb-4 font-semibold text-red-400">دسته‌‌بندی</p>
      {productsCategories.map((item) => (
        <div
          key={item.id}
          className="mb-4 flex items-center gap-2 text-sm font-normal text-slate-800"
        >
          <img src={item.icon} alt={item.title} />
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default SidebarCategories;
