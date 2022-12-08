import React, { useState } from "react";

const ProductColors = ({ colors, width, height }) => {
  return (
    <div className="flex items-center -space-x-1">
      {colors.map((color) => {
        return (
          <button
            type="button"
            className={`-mx-1 ${width} ${height} rounded-full border-[2px] border-white focus:border-slate-800 ${color}`}
          ></button>
        );
      })}
    </div>
  );
};

export default ProductColors;
