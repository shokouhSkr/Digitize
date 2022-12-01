import React from "react";
import backBtn from "../assets/images/icons/arrow-up.svg";

const BackwardButton = () => {
  return (
    <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-white shadow-md md:hidden">
      <img src={backBtn} alt="back" />
    </div>
  );
};

export default BackwardButton;
