import React from "react";

const CustomButton = ({
  value,
  type = "primary",
  width ='full',
  isLoading,
  onClick = () => {},
}) => {
  const buttonTypes = {
    primary: `btn btn-outline text-primary-green hover:bg-primary-green hover:border-primary-green`,
    secondary: `btn bg-primary-green text-white border-primary-green`,
    ternary: `btn bg-black text-white border-black hover:bg-white hover:text-black hover:border-white`,
    quadruple: `btn bg-white text-black border-white hover:bg-black hover:text-white hover:border-black`,
  };
  return (
    <button className={`${buttonTypes[type]} w-${width}`}>
      {value}
    </button>
  );
};

export default CustomButton;
