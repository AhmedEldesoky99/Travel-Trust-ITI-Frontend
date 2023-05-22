import React from "react";

const Header = () => {
  return (
    <header className="hero min-h-screen bg-eachGovernorateBG ">
      <div className="hero-overlay bg-black/[0.4]"></div>
      <div className="container">
        <div className="hero-content p-0 justify-start text-white mb-2">
          <div className="max-w-md">
            <p className="font-header text-2xl mb-1">Egypt</p>
            <h1 className="2xs:text-5xl 2xl:text-6xl font-bold">Dahab</h1>
          </div>
        </div>

        <div className="absolute bottom-0 translate-y-1/2 grid 2xs:grid-cols-2 2xs:gap-1 2xs:min-h-[7rem] xs:grid-cols-4 2xs:min-w-[60%] xs:min-w-[80%] md:min-w-[50%] 2xl:min-h-[9rem] bg-white rounded-md shadow-md">
          <div className="flex flex-col justify-center items-center">
            <p className="font-header 2xs:text-lg sm:text-xl 2xl:text-2xl">
              13
            </p>
            <p className="2xs:text-base 2xl:text-2xl">activities</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-header 2xs:text-lg sm:text-xl 2xl:text-2xl">
              15.831
            </p>
            <p className="2xs:text-base 2xl:text-2xl">travellers</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-header 2xs:text-lg 2xl:text-2xl">1.55</p>
            <p className="2xs:text-base 2xl:text-2xl">reviews</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-header 2xs:text-lg 2xl:text-2xl">6.93/10</p>
            <p className="2xs:text-base 2xl:text-2xl">rating</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;