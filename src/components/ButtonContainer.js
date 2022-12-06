import React from "react";

const ButtonContainer = ({ children }) => {
  return (
    <button type="button" className="flex w-full items-center rounded-md bg-white p-2 md:hidden">
      {children}
    </button>
  );
};

export default ButtonContainer;
