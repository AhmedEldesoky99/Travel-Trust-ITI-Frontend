import React from "react";
import { Rate } from "antd";

import "./RateStyle.css";

const Header = () => {
  return (
    <header className="hero min-h-[570px] bg-tourDetailsBG bg-bottom">
      <div className="hero-overlay bg-black/[0.3]"></div>
      <div className="container">
        <div className="hero-content mx-auto p-0 justify-center text-white">
          <div className=" 2xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <h1 className="2xs:text-2xl sm:text-4xl md:text-4xl xl:text-4xl 2xl:text-5xl font-bold">
              2 days private tour all inclusive, cairo and giza attractions
            </h1>
            <div className="flex items-end space-x-2r">
              <Rate
                className="text-white mr-2 my-custom-rate"
                disabled
                defaultValue={2}
              />
              <span className="2xs:text-base xl:text-lg 2xl:text-xl xl:leading-6">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
