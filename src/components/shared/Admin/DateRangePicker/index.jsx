import "./style.css";
import { DatePicker } from "antd";
import React, { forwardRef } from "react";
import dayjs from "dayjs";
import useAddTourFormContext from "../../../../hooks/useAddTourFormContext";
import moment from "moment";

const { RangePicker } = DatePicker;

const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf("day");
};
const CustomDatePicker = forwardRef(({ ...props }, ref) => {
  const { formData } = useAddTourFormContext();



  return (
    <RangePicker
      className="custom-date-picker mt-4"
      disabledDate={disabledDate}
      defaultValue={[
        // dayjs("2015-12-6", "YYYY-MM-DD"),
        // dayjs("2015-12-6", "YYYY-MM-DD"),
        // dayjs(formData?.end_date, "YYYY-MM-DD"),
      ]} // backend
      format="YYYY-MM-DD"
      {...props}
      ref={ref}
    />
  );
});
export default CustomDatePicker;
