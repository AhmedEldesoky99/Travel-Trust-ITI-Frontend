import { TimePicker } from "antd";
import "./style.css";

const CustomTimePicker = ({ status = "validating", value, onChange }) => {
  return (
    <div    className="custom-time-picker2">
    <TimePicker.RangePicker
      use12Hours
      format="hh:mm a"
      className="custom-time-picker"
      status={status}
      value={value}
      onChange={onChange}
    /></div>
  );
};

export default CustomTimePicker;
