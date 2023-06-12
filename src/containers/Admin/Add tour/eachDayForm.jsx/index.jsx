import { useForm } from "react-hook-form";
import DayInputs from "../DayInputs";
import { useState } from "react";

const EachDayForm = ({ i, dayFormHandler }) => {


  return (
    <form onSubmit={handleSubmit(dayFormHandler)} className="mt-8">
      <DayInputs
        dayNum={i + 1}
        register={register}
        errors={errors}
        control={control}
      />
      <input type="submit" id="form-2" className="" />
    </form>
  );
};

export default EachDayForm;
