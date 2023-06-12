import React from "react";

import { Steps } from "antd";

const CustomSteps = ({ items, stepState }) => (
  <Steps
    items={items.map((item) =>
      item.step === stepState.step
        ? stepState
        : { ...item, status: item.step < stepState.step ? "finish" : "wait" }
    )}
    style={{
      margin: " 48px 0",
    }}
    className="mt-[150px] "
  />
);

export default CustomSteps;
