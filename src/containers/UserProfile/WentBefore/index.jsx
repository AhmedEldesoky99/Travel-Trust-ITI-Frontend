/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import TourImage from "../../../assets/images/TourCard/tour1.png";
import UserImage from "../../../assets/images/TourCard/admin.jpeg";
import { EnvironmentOutlined } from "@ant-design/icons";

const WentBefore = ({userData}) => {
  return (
    <div className="grid gap-4 mb-10 sm:grid-cols-2 lg:grid-cols-8 ">
      {userData?.data?.user?.visited_tours.length === 0 ?
      "" :
      (<>
      {userData?.data?.user?.visited_tours.map((tour,index)=>{
        return(
          <div key={index} className="sm:col-span-1 lg:col-span-4">
          <div className="rounded-2xl">
            <img className="rounded-2xl" src={TourImage} alt="Tour Image" />
            <div className="flex justify-between items-center mt-2">
              <div className="flex justify-center items-center gap-2">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={tour?.organizer.photo[0]?.url} alt="User Image" />
                  </div>
                </div>
                <span className="2xs:text-sm md:text-base 2xl:text-lg">{tour?.organizer.username}</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <EnvironmentOutlined /> <span className="2xs:text-sm md:text-base 2xl:text-lg">{tour?.city?.title}</span>
              </div>
            </div>
          </div>
        </div>
        )
      })}
      </>)}
    </div>
  );
};

export default WentBefore;
