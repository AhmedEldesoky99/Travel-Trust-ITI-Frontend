import React from "react";

const CustomButton = ({
  value,
  type = "primary",
  width,
  isLoading,
  onClick = () => {},
}) => {
  const buttonTypes = {
    primary: ` btn-outline text-primary-green hover:bg-primary-green hover:border-primary-green`,
    secondary: ` bg-primary-green text-white border-primary-green`,
    ternary: ` bg-black text-white border-black hover:bg-white hover:text-black hover:border-white`,
    quadruple: ` bg-white text-black border-white hover:bg-black hover:text-white hover:border-black`,
  };
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className={`btn text-lg normal-case px-[1.125rem] ${width} ${
        buttonTypes[type]
      } ${isLoading && "loading"} `}
    >
      {value}
    </button>
  );
};

export default CustomButton;
