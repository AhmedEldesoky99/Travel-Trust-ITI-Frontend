import React from "react";
import Icon from "../../../utils/icons";
import CustomSearch from "../../../components/CustomSearchSelection";

const HeaderSection = () => {
  return (
    <>
      <div className="hero bg-homeHeader min-h-screen bg-cover bg-center">
        <div className="hero-overlay bg-black/[0.7]"></div>
        <div className="lg:container ">
          <div
            className="lg:hero-content justify-start md:gap-24 items-start"
          >
            <div>
              <div className="hidden lg:flex flex-col gap-8 items-center mt-2 ">
                <Icon name="instagram" />
                <Icon name="facebook" />
                <Icon name="twitter" />
                <Icon name="linkedin" />
                <div className="h-16 lg:border-l-2 border-white"></div>
              </div>
            </div>
            <div className=" text-white  w-full flex flex-col md:items-center lg:items-start">
              <p className="hidden md:flex md:text-[20px] lg:text-[24px] font-header">
                Your Next Adventure in Egypt
              </p>
              <h1 className=" text-[2rem] md:text-[2.3rem] lg:text-[4rem] xl:text-[5rem] leading-tight text-center lg:text-start">
                Life Is Either A Daring Adventure or Nothing!
              </h1>
              <CustomSearch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
