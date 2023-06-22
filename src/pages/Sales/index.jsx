/* eslint-disable no-unused-vars */
import React from "react";

import Header from "../../containers/Sales/Header";
import About from "../../containers/Sales/About";

const Sales = () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 0);
  return (
    <>
      <Header />
      <About />
    </>
  );
};

export default Sales;
