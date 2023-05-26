import React, { useState } from "react";
import { Rate } from "antd";
import {
  EnvironmentOutlined,
  UserOutlined,
  ClockCircleOutlined,
  CheckSquareOutlined,
  HeartFilled,
} from "@ant-design/icons";

import CustomButton from "../CustomButton";
import CardImage from "../../../assets/images/AboutUs/PeopleCamping.jpg";
import AdminImage from "../../../assets/images/TourCard/admin.jpeg";
import ShipIcon from "../../../assets/images/TourCard/ship.svg";
import SkateIcon from "../../../assets/images/TourCard/skate.svg";
import CastleIcon from "../../../assets/images/TourCard/castle.svg";

const TourCard = () => {
  // -------- States --------
  const [checked, setChecked] = useState(false);

  // -------- Handlers --------
  const toggleFavorites = () => {
    setChecked(!checked);
  };

  return (
    <div className="card card-compact shadow-xl group">
      <figure className="relative overflow-visible">
        <img
          className="w-full object-cover rounded-t-[14px]"
          src={CardImage}
          alt="Tour Image"
        />

        <div className="group-hover:translate-y-0 group-hover:opacity-30 opacity-0 absolute top-0 w-full h-full bg-black rounded-t-[14px] transition-all duration-500 ease-out flex items-start flex-col">
          <div className="flex flex-col ml-5 mt-6 gap-3">
            <img
              className="hover:rotate-12 transition-all duration-300 ease-out"
              src={SkateIcon}
              alt="Skate Icon"
            />
            <img
              className="hover:-rotate-12 transition-all duration-300 ease-out"
              src={ShipIcon}
              alt="Ship Icon"
            />
            <img
              className="hover:rotate-12 transition-all duration-300 ease-out"
              src={CastleIcon}
              alt="Castle Icon"
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-[5%] flex items-center translate-y-[50%]">
          <a href="">
            <img
              src={AdminImage}
              alt="Tour Creator"
              className="2xs:w-16 xs:w-20 sm:w-20 md:w-16 lg: xl: 2xl:  rounded-full relative"
            />
          </a>
          <span className="badge 2xs:text-sm 2xl:text-lg p-4 -ml-3 bg-tertiary-red border-tertiary-red">
            likely to sellout
          </span>
        </div>

        <div className="absolute top-2 right-2 bg-glass-gray opacity-50 py-2 px-4 rounded-lg">
          <button onClick={toggleFavorites}>
            <HeartFilled
              className={`2xs:text-xl 2xl:text-2xl hover:scale-110 transition-all duration-200 ease-out ${
                checked ? "text-[#ff0000]" : "text-white"
              }`}
            />
          </button>
        </div>
      </figure>

      <div className="card-body !pt-12 space-y-3 gap-0">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center space-x-2">
            <EnvironmentOutlined className="2xs:text-base 2xl:text-lg" />
            <span className="2xs:text-base 2xl:text-lg text-light-gray h-5">
              Alexandria
            </span>
          </div>
          <div className="flex justify-center items-center space-x-1">
            <span className="2xs:text-2xl md:text-xl xl:text-2xl font-bold">
              $2,900
            </span>{" "}
            <span className="">/</span>
            <UserOutlined className="2xs:text-xl md:text-lg" />
          </div>
        </div>

        <h2 className="card-title 2xs:text-lg 2xl:text-xl">
          Giza in 6 days explore egypt
        </h2>

        <div className="flex items-center space-x-2">
          <Rate disabled defaultValue={2} />
          <span className="2xs:text-base xl:text-lg 2xl:text-xl">2</span>
        </div>

        <div className="card-actions justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <ClockCircleOutlined className="text-base" />
              <span className="text-base text-light-gray h-5">8 days</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckSquareOutlined className="text-base" />
              <span className="text-base text-light-gray h-5">
                free cancelation
              </span>
            </div>
          </div>
          <CustomButton
            // onClick={() => {}}
            // isLoading
            value="View more"
            type="primary"
            width="sm:w-full xl:w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default TourCard;
