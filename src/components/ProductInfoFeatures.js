import React from "react";

const ProductInfoFeatures = () => {
  return (
    <div className="mb-7 rounded-xl bg-white px-4 pt-5 pb-1 md:bg-transparent">
      <h1 className="mb-5 text-[17px] font-semibold">ویژگی های کالا:</h1>

      <div className="mb-2 flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <div className="h-1 w-1 rounded-full bg-red-400 p-1"></div>
          <span className="text-[15px] font-normal">حافظه داخلی:</span>
        </div>
        <span className="mr-2 font-semibold">128 گیگابایت</span>
      </div>

      <div className="mb-2 flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <div className="h-1 w-1 rounded-full bg-red-400 p-1"></div>
          <span className="text-[15px] font-normal">بازه اندازه صفحه نمایش:</span>
        </div>
        <span className="mr-2 font-semibold">0.6 اینچ و بزرگتر</span>
      </div>

      <div className="mb-2 flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <div className="h-1 w-1 rounded-full bg-red-400 p-1"></div>
          <span className="text-[15px] font-normal">شبکه های ارتباطی:</span>
        </div>
        <div className="mr-2 flex items-center justify-start gap-2 font-semibold">
          <span>5G</span>
          <span>4G</span>
          <span>3G</span>
          <span>2G</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoFeatures;
