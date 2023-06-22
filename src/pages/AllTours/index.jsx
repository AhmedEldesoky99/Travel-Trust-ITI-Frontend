import React from "react";
import Header from "./../../containers/AllTours/Header/index";
import About from "../../containers/AllTours/About";

const AllTours = () => {
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

export default AllTours;
