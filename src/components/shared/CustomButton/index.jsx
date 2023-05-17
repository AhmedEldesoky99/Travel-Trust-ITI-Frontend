import React from "react";

const CustomButton = ({ text }) => {
  return (
    <button className="btn bg-primary-green border-primary-green normal-case px-[18px]">
      {text}
    </button>
  );
};

export default CustomButton;
