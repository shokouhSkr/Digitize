import React, { useState } from "react";
import { productsCategories, products } from "../../data";

const SidebarCategories = () => {
  const [selected, setSelected] = useState(productsCategories);
  const clickHandler = (id) => {
    const updated = productsCategories.find((i) => i.id === id);
    setSelected(updated);
  };

  return (
    <div className="mb-6">
      <p className="mb-4 font-semibold text-red-400">دسته‌‌بندی</p>
      {productsCategories.map((item) => (
        <button
          id={item.id}
          key={item.id}
          onClick={() => clickHandler(item.id)}
          className={`mb-4 flex w-full items-center gap-2 text-sm font-normal text-slate-800 ${
            selected.title === item.title && "text-red-600"
          }`}
        >
          <img src={item.icon} alt={item.title} />
          <span>{item.title}</span>
        </button>
      ))}
    </div>
  );
};

export default SidebarCategories;
