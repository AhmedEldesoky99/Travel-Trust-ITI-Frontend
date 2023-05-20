import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { ruleValidation } from "../../../../helpers/InputsValidation";

const CustomInput = ({ type, name, label, rule, register, errors }) => {
  // ------- State -------
  const [showPassword, setShowPassword] = useState(false);

  // ------- Handlers --------
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="relative">
        <input
          {...register(name, ruleValidation[rule])}
          type={showPassword ? "text" : type}
          id={label}
          name={name}
          className={`block h-[4.375rem] px-2.5 pb-2.5 pt-4 w-full text-black bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer ${
            errors[name] &&
            "border border-tertiary-red focus:border-tertiary-red focus:outline-none"
          }`}
          placeholder=" "
        />

        {/* Eye Icon */}
        {type === "password" && (
          <button
            onClick={toggleShowPassword}
            className="absolute top-1/2 right-[2%] translate-x-0 -translate-y-[50%]"
          >
            {showPassword ? (
              <EyeOutlined className="text-lg" />
            ) : (
              <EyeInvisibleOutlined className="text-lg" />
            )}
          </button>
        )}

        <label
          htmlFor={label}
          className={`absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${
            errors[name] && "text-tertiary-red peer-focus:text-tertiary-red"
          }`}
        >
          {label}
        </label>
      </div>
      <p className="text-tertiary-red mt-1">{errors[name]?.message}</p>
    </>
  );
};

export default CustomInput;
