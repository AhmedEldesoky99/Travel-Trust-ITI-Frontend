import React from "react";

const CustomButton = ({
  value,
  type = "primary",
  submit,
  width,

  isLoading,
  onClick = () => {},
}) => {
  const buttonTypes = {
    primary: ` btn-outline text-primary-green hover:bg-primary-green hover:border-primary-green`,
    secondary: ` bg-primary-green text-white border-primary-green hover:bg-black`,
    ternary: ` bg-black text-white border-black hover:bg-white hover:text-black hover:border-black`,
    quadruple: ` bg-white text-black border-black hover:bg-black hover:text-white hover:border-black`,
    delete: ` btn-outline text-tertiary-red hover:bg-tertiary-red hover:border-tertiary-red`,
  };
  return (
    <button
      type={submit}
      disabled={isLoading}
      onClick={onClick}
      className={`btn 2xs:text-sm md:text-base 2xl:text-lg normal-case px-[1.125rem] ${width} ${
        buttonTypes[type]
      } ${isLoading && "loading"} `}
    >
      {value}
    </button>
  );
};

export default CustomButton;
