/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Checkbox } from "antd";

const RatingCheckbox = ({ statsData, onChange }) => {
  return (
    <>
      {Object.entries(statsData||{})?.map(([key, value]) => {
        return (
          <div key={key} className="flex justify-between">
            <div className="flex gap-1">
              <Checkbox options={`${key} Star`} onChange={() => onChange(value)} />{" "}
              <p>{key} Star</p>
            </div>
            <span>{value}</span>
          </div>
        );
      })}
    </>
  );
};
export default RatingCheckbox;
