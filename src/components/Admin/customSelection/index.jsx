import React, { forwardRef } from "react";
import { Form, Select } from "antd";
const { Item } = Form;

import "./style.css";

const CustomSelection = forwardRef(
  ({ value, onChange, placeHolder, options, mode, span, ...props }, ref) => {
    return (
      <>
        <div className="">
          <span className=" mb-2 mt-6 inline-block text-lg">{span}</span>
          <Select
            {...props}
            ref={ref}
            className="custom-select "
            mode={mode}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
            style={{ width: "100%", height: "65px" }}
            options={options}
          />
        </div>
      </>
    );
  }
);

export default CustomSelection;
