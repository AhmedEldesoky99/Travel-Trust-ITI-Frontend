import React from "react";

import { Steps } from "antd";
import "./style.css"
const CustomSteps = ({ items, stepState }) => (
  <Steps

    items={items.map((item) =>
      item.step === stepState.step
        ? stepState
        : { ...item, status: item.step < stepState.step ? "finish" : "wait" }
    )}
    style={{
      // margin: " 48px 0",
    }}
    className="custom-steps"
  />
);

export default CustomSteps;
