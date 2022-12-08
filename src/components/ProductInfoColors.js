import ProductColors from "./ProductColors";

import React from "react";

const ProductInfoColors = ({ colors }) => {
  return (
    <section>
      <div className="mb-7 flex items-center justify-center gap-[10%]">
        <span className="x:text-lg">انتخاب رنگ:</span>
        <div>
          <ProductColors colors={colors} width="w-7" height="h-7" />
        </div>
      </div>
    </section>
  );
};

export default ProductInfoColors;
