import React from "react";

import TourImage from "../../../assets/images/TourCard/tour1.png";
import UserImage from "../../../assets/images/TourCard/admin.jpeg";
import { EnvironmentOutlined } from "@ant-design/icons";

const WentBefore = () => {
  return (
    <div className="grid gap-4 mb-10 sm:grid-cols-2 lg:grid-cols-8 ">
      <div className="sm:col-span-1 lg:col-span-4">
        <div className="rounded-2xl">
          <img className="rounded-2xl" src={TourImage} alt="Tour Image" />
          <div className="flex justify-between items-center mt-2">
            <div className="flex justify-center items-center gap-2">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={UserImage} alt="User Image" />
                </div>
              </div>
              <span className="2xs:text-sm md:text-base 2xl:text-lg">Osama</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <EnvironmentOutlined /> <span className="2xs:text-sm md:text-base 2xl:text-lg">Cairo</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:col-span-1 lg:col-span-4">
        <div className="rounded-2xl">
          <img className="rounded-2xl" src={TourImage} alt="Tour Image" />
          <div className="flex justify-between items-center mt-2">
            <div className="flex justify-center items-center gap-2">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={UserImage} alt="User Image" />
                </div>
              </div>
              <span className="2xs:text-sm md:text-base 2xl:text-lg">Osama</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <EnvironmentOutlined /> <span className="2xs:text-sm md:text-base 2xl:text-lg">Cairo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WentBefore;
