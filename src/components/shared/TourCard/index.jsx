/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import {
  EnvironmentOutlined,
  UserOutlined,
  ClockCircleOutlined,
  HeartFilled,
} from "@ant-design/icons";

import CustomButton from "../CustomButton";
import ShipIcon from "../../../assets/images/TourCard/ship.svg";
import SkateIcon from "../../../assets/images/TourCard/skate.svg";
import CastleIcon from "../../../assets/images/TourCard/castle.svg";

import { toggleFavoriteMutation } from "../../../services/favorites";

const place_holder_avatar =
  "https://frostbrowntodd.com/app/uploads/2021/10/FBT_NoPhoto-1.jpg";
const place_holder_tour =
  "https://www.aluminati.net/wp-content/uploads/2016/03/img-placeholder.png";

const TourCard = ({ data, length, title }) => {
  // -------- States --------
  const [checked, setChecked] = useState(false);

  // -------- Handlers --------

  const { mutate } = toggleFavoriteMutation();

  const toggleFavorites = () => {
    length = null;
    setChecked(!checked);
    mutate({ tourId: data?._id, checked });
  };

  useEffect(() => {
    length ? setChecked(true) : setChecked(false);
  }, [length]);

  return (
    <div className="card card-compact shadow-xl group">
      <figure className="relative overflow-visible">
        <img
          className="w-full object-cover h-[14.7rem] rounded-t-[14px]"
          src={data?.highlight_photos[0]?.url ?? place_holder_tour}
          alt="Tour Image"
          // Placeholder-Image
          onError={(e) => {
            e.target.src = place_holder_tour;
          }}
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
          <Link to={`/admin-profile/${data?.organizer?._id}`}>
            <img
              src={data?.organizer.photo[0]?.url ?? place_holder_avatar}
              alt="Tour Creator"
              // Placeholder-Image
              onError={(e) => {
                e.target.src = place_holder_avatar;
              }}
              className="2xs:w-16 xs:w-20 sm:w-20 md:w-16 md:h-16 bg-cover bg-center object-cover  lg: xl: 2xl: rounded-full relative"
            />
          </Link>
          <span className="badge 2xs:text-sm 2xl:text-lg p-4 pr-6 -ml-3 bg-tertiary-red border-tertiary-red">
            likely to sellout
          </span>
        </div>

        <div
          className="absolute top-2 right-2 bg-glass-gray opacity-50 py-2 px-4
         rounded-lg"
        >
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
              {data?.city?.title}
            </span>
          </div>
          <div className="flex justify-center items-center space-x-1">
            <span className="2xs:text-2xl md:text-xl xl:text-2xl font-bold">
              {data?.price_per_person}$
            </span>{" "}
            <span className="">/</span>
            <UserOutlined className="2xs:text-xl md:text-lg" />
          </div>
        </div>

        <h2 className="card-title 2xs:text-lg 2xl:text-xl">{title}</h2>

        <div className="flex items-center space-x-2 ">
          <Rate disabled defaultValue={0} value={data?.rate} />
        </div>

        <div className="card-actions justify-between items-end">
          <div>
            <div className="flex items-center justify-end space-x-2">
              <ClockCircleOutlined className="text-base" />
              <span className="text-base text-light-gray h-5">
                {data?.duration === 1 ? "a" : data?.duration} day
                {data?.duration === 1 ? "" : "s"}
              </span>
            </div>
          </div>

          <Link to={`/tour-details/${data?._id}`}>
            <CustomButton
              // onClick={() => {}}
              // isLoading
              value="View more"
              type="primary"
              width="sm:w-full xl:w-fit"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
