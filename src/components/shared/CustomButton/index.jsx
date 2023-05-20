import React from "react";

const CustomButton = ({ text, style }) => {
  return (
    <button className={`btn bg-primary-green border-primary-green normal-case px-[18px] ${style}`}>
      {text}
    </button>
  );
};

export default CustomButton;
