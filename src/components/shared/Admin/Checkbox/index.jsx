import { ruleValidation } from "../../../../helpers/InputsValidation";

const CustomCheckBox = ({ value, months, label, register }) => {
  // const onChange = (e) => {
  //   console.log(`checked = ${e.target.checked}`);
  // };
  return (
    <>
      <div className="w-1/2 mb-4">
        <input
          // {...register({ required: "Please select" })}
          // ref={register} 
          type="checkbox"
          id={value}
          name={value}
          value={value}
          // className={`2xl:h-[4rem] block px-2.5 pb-2.5 pt-4 w-full text-black bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer ${
          //   errors[name] &&
          //   "border border-tertiary-red focus:border-tertiary-red focus:outline-none"
          // }`}
          placeholder=" "
        />
        <label htmlFor={value} className="form-check-label ml-4 text-xl">
          {label}
        </label>
      </div>
    </>
  );
};

export default CustomCheckBox;
