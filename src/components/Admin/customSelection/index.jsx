import React, { forwardRef } from "react";
import { Select } from "antd";
// import { useMedia } from "react-use";

import "./style.css";

const CustomSelection = forwardRef(
  (
    {
      value,
      onChange,
      placeHolder,
      options,
      mode,
      span,

      ...props
    },
    ref
  ) => {
    // const isDesktop = useMedia("(min-width: 768px)");
    // const maxTagCount = isDesktop ? 3 : 1; // Set the maxTagCount prop based on the screen size
    return (
      <>
        <div className="">
          <span className=" mb-2 mt-6 inline-block text-lg font-semibold">{span}</span>
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
            // maxTagCount={maxTagCount}
          />
        </div>
      </>
    );
  }
);

export default CustomSelection;
