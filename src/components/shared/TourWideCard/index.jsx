import React from "react";

import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  UserOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";

import CardImage from "../../../assets/images/TourCard/tour1.png";
import Icon from "../../../utils/icons";

const TourWideCard = () => {
  return (
    <div className="card lg:card-side bg-base-100    lg:col-span-8 shadow-xl">
      <figure className="2xs:w-full 2xs:max-h-80 lg:w-[40%]">
        <img className="w-full h-full" src={CardImage} alt="Tour Card" />
      </figure>

      <div className="card-body justify-between gap-10">
        <div>
          <div className="flex justify-between">
            <h2 className="card-title 2xs:text-lg sm:text-xl xl:text-2xl 2xl:text-3xl">
              Giza in 6 days explore egypt{" "}
            </h2>
            <button className="2xs:hidden xs:inline-block">
              <div className="shadow-md p-3 rounded-lg">
                <Icon name="delete" />
              </div>
            </button>
          </div>

          <div className="flex items-center justify-between w-full my-2  lg:max-w-[85%] xl:max-w-[55%] ">
            <div className="flex justify-center items-center space-x-2">
              <EnvironmentOutlined className="2xs:text-base 2xl:text-lg" />
              <span className="2xs:text-base 2xl:text-lg text-light-gray h-5">
                Alexandria
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <ClockCircleOutlined className="text-base" />
              <span className="text-base text-light-gray h-5">8 days</span>
            </div>
          </div>

          <div className="flex items-center w-full  lg:max-w-[85%] ">
            <div className="flex justify-center items-center space-x-2">
              <CalendarOutlined className="2xs:text-base 2xl:text-lg" />
              <span className="2xs:text-base 2xl:text-lg text-light-gray h-5">
                Thursday , February 20,2023 | 10:00 AM
              </span>
            </div>
          </div>
        </div>

        <div className="card-actions justify-between items-center">
          <div className="flex justify-center items-center space-x-1">
            <span className="2xs:text-lg md:text-xl xl:text-2xl font-bold">
              $2,900
            </span>{" "}
            <span className="">/</span>
            <UserOutlined className="2xs:text-xl md:text-lg" />
          </div>

          <div className="flex justify-between items-center min-w-[9rem]">
            <button>
              <div className="shadow-md p-3 rounded-lg">
                <Icon name="userDelete" />
              </div>
            </button>

            <span className="text-lg">2</span>

            <button>
              <div className="shadow-md p-3 rounded-lg">
                <Icon name="userAdd" />
              </div>
            </button>
          </div>

          <div>
            <p className="font-medium">
              Total:{" "}
              <span className="2xs:text-lg md:text-xl xl:text-2xl  2xl:text-3xl font-bold">
                EGP 10,965
              </span>
            </p>
          </div>

          <button className="2xs:inline-block xs:hidden mt-2">
            <div className="shadow-md p-3 rounded-lg">
              <Icon name="delete" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourWideCard;
