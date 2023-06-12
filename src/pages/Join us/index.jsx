// import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/shared/CustomButton/index";
import Logo from "../../assets/images/Logo/Tlogo.svg";

const JoinUs = () => {
  return (
    <div className="bg-join-us h-[100vh] bg-cover">
      <div className="absolute bg-cover 2xl:h-[7rem] 2xl:w-[8.5rem] lg:h-[5rem] lg:w-[6.1rem] md:h-[4rem] md:w-[4.9rem] 2xs:h-[3rem] 2xs:w-[3.7rem] top-10 left-5">
        <img src={Logo} />
      </div>
      <div className="bg-black h-[100vh] bg-opacity-60 flex flex-col justify-center items-center gap-8">
        <h1 className="text-white 2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl 2xs:text-3xl font-header mb-5">
          Join us
        </h1>
        <p className="text-white 2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl 2xs:text-md font-inter 2xs:text-center mb-20">
          Explore / Discover the beauty of other countries.
        </p>
        <div className="flex flex-col gap-4 w-[25%] mb-12">
          <Link to="/signup">
            <CustomButton value="I am a Traveler" type="quadruple" width="w-full" />
          </Link>
          <Link to="/admin/signup">
            <CustomButton value="I am a Host" type="quadruple" width="w-full" />
          </Link>
        </div>
        <p className="text-white 2xl:text-2xl xl:text-xl lg:text-lg 2xs:text-sm font-inter 2xs:px-5 2xs:text-center">
          Built on solid experience to exceed your <br />
          expectations.
        </p>
      </div>
    </div>
  );
};
export default JoinUs;
