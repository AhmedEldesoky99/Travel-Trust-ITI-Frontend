import React from "react";

import Header from "../../containers/EachGovernorate/Header";
import About from "../../containers/EachGovernorate/About";
import CheckDestenations from "../../containers/EachGovernorate/CheckDestenations";

const EachGovernorate = () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 0);
  return (
    <>
      <Header />
      <About />
      <CheckDestenations />
    </>
  );
};

export default EachGovernorate;
