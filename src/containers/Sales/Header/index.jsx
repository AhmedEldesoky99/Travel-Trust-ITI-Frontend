import React from "react";

const Header = () => {
  return (
    <header className="hero min-h-[570px] bg-salesBG">
      <div className="hero-overlay bg-black/[0.6]"></div>
      <div className="container">
        <div className="hero-content p-0 justify-start text-white mb-2">
          <div className=" 2xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <h1 className="2xs:text-3xl sm:text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
              Best Travel Deals
            </h1>
            <p className="font-header 2xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-1">
              Enjoy these cool staycation promotions in Egypt.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
