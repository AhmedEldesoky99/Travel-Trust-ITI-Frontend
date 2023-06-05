import "./style.css";

import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";

const CustomDatePicker = ({ status = "validating" }) => {
  return (
    <RangePicker
      defaultValue={[
        dayjs("01/01/2015", dateFormat),
        dayjs("01/01/2015", dateFormat),
      ]}
      format={dateFormat}
      status={status}
    />
  );
};

export default CustomDatePicker;
