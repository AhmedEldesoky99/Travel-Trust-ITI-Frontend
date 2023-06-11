import { useForm } from "react-hook-form";
import { useState } from "react";

import React from "react";

import CustomInput from "../../../../components/shared/FormComponents/CustomInput";
import StopLocationInputs from "../StopLocationInput";
import CustomButton from "../../../../components/shared/CustomButton";
import CustomDatePicker from "../../../../components/shared/Admin/TimePicker";
import useAddTourFormContext from "../../../../hooks/useAddTourFormContext";

const DayInputs = ({ dayNum }) => {
  const [inputList, setInputList] = useState([]);
  const { formData, handleChange, onhandleSubmit } = useAddTourFormContext();

  const onAddBtnClick = (event) => {
    event.preventDefault();
    setInputList(
      inputList.concat(<StopLocationInputs key={inputList.length} />)
    );
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
      <h2 className="text-2xl mb-6">Day {dayNum}</h2>
      <form onSubmit={handleSubmit(onhandleSubmit)} className="">
        <CustomInput
          type="text"
          name="dayTitle"
          label="Day Title*"
          rule="dayTitle"
          value={formData?.dayPlan?.dayTitle}
          register={register}
          errors={errors}
          onChange={handleChange}
        />
        <CustomDatePicker value={formData?.start_endDate} onChange={handleChange}/>
        <h3 className="text-2xl">Where they will go during the day</h3>
        <StopLocationInputs
          inputList={inputList}
          onAddBtnClick={onAddBtnClick}
        />
        {inputList}
        <div className="flex justify-end">
          <CustomButton
            onClick={onAddBtnClick}
            type="primary"
            value="Add location"
          />
        </div>
      </form>
    </>
  );
};

export default DayInputs;
