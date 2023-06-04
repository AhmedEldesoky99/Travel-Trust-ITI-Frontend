import { TimePicker } from "antd";
import "./style.css";

const CustomTimePicker = ({ status = "validating", value, onChange }) => {
  return (
    <TimePicker.RangePicker
      className="custom-time-picker"
      status={status}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomTimePicker;
