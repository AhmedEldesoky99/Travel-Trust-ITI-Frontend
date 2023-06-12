import "./style.css";
import { DatePicker } from "antd";
import React, { forwardRef } from "react";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf("day");
};
const CustomDatePicker = forwardRef(({ ...props }, ref) => (
  <RangePicker
    className="custom-date-picker mt-4"
    disabledDate={disabledDate}
    format="YYYY-MM-DD"
    {...props}
    ref={ref}
  />
));
export default CustomDatePicker;
