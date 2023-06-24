import React, { useState } from "react";

import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  UserOutlined,
} from "@ant-design/icons";

import Icon from "../../../utils/icons";
import { deleteFromCartMutation } from "../../../services/Cart";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/formatDate";

const TourWideCard = ({
  image,
  title,
  city,
  duration,
  startDate,
  pricePerPerson,
  totalPrice,
  id,
  peopleCount,
}) => {
  const queryClient = useQueryClient();
  const [removed, setRemoved] = useState(false);
  // const personsMax = personsCount === personNum;

  // const handleIncrement = () => {
  //   if (!personsMax) {
  //     onUpdateTourIncrement(id);
  //   }
  // };
  // const handleDecrement = () => {
  //   if (personsCount <= personNum && personsCount > 1) {
  //     onUpdateTourDecrement(id);
  //   }
  // };
  const invalidateCart = () => {
    queryClient.invalidateQueries({ queryKey: ["cart"] });
  };
  console.log(`tour ${id} is removed ${removed}`);
  const {
    mutate,
    isLoading,
    isSuccess: sucessfulDelete,
  } = deleteFromCartMutation(id);

  const handleDelete = () => {
    queryClient.cancelQueries({ queryKey: ["cart"] });
    setRemoved(true);
    console.log({ id });
    mutate(id);
  };

  if (isLoading) {
    invalidateCart();
    return (
      <div className="card  lg:card-side bg-base-100  lg:col-span-8 shadow-xl animate-pulse ">
        <figure className="2xs:w-full 2xs:max-h-80 lg:w-[40%] border-[1px]">
          <svg
            className="w-20 h-20 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        </figure>
        <div className="card-body justify-between gap-10 border-[1px] rounded-r-lg">
          <div>
            <div className="flex justify-between">
              <h2 className="card-title 2xs:text-lg sm:text-xl xl:text-2xl 2xl:text-3xl">
                {" "}
                <div className="w-72 h-4 mt-4  bg-gray-200 rounded-lg dark:bg-gray-300 mb-12">
                  <p className="w-28 h-4 mt-8  bg-gray-200 rounded-lg dark:bg-gray-300"></p>
                </div>
              </h2>
              <button className="2xs:hidden xs:inline-block ">
                <div className="p-3 w-12 h-4  mb-3 bg-gray-200 rounded-lg dark:bg-gray-300">
                  <div>
                    <p className=""></p>
                  </div>
                </div>
              </button>
            </div>

            <div className="flex items-center justify-between w-full my-2  lg:max-w-[85%] xl:max-w-[55%] ">
              <div className="flex justify-center items-center space-x-2">
                <div className="2xs:text-base 2xl:text-lg">
                  <p className="w-24 h-3 mt-4  bg-gray-200 rounded-lg dark:bg-gray-300"></p>
                </div>
                <span className="2xs:text-base 2xl:text-lg text-light-gray">
                  <p className="w-24 h-3 mt-4  bg-gray-200 rounded-lg dark:bg-gray-300 ml-20"></p>
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="text-base"></div>
                <span className="text-base text-light-gray"></span>
              </div>
            </div>

            <div className="flex items-center w-full  lg:max-w-[85%] ">
              <div className="flex justify-center items-center space-x-2">
                <div className="2xs:text-base 2xl:text-lg">
                  <p className="w-52 h-3 mt-2  bg-gray-200 rounded-lg dark:bg-gray-300"></p>
                </div>
                <span className="2xs:text-base 2xl:text-lg text-light-gray "></span>
              </div>
            </div>
          </div>

          <div className="card-actions justify-between items-center">
            <div className="flex justify-center items-center space-x-1">
              <span className="2xs:text-lg md:text-xl xl:text-2xl font-bold"></span>
              <span className=""></span>
              <div className="2xs:text-xl md:text-lg"></div>
            </div>

            <div className="flex justify-between gap-32 items-center min-w-[9rem]">
              <div>
                <div className=" p-3 rounded-lg">
                  <div className="">
                    <p className="w-20 h-3   bg-gray-200 rounded-lg dark:bg-gray-300"></p>
                  </div>
                </div>
              </div>
              <span className="text-lg 2xl:text-2xl px-3">
                <p className="w-20 h-3   bg-gray-200 rounded-lg dark:bg-gray-300"></p>
              </span>
              <div>
                <div>
                  <div>
                    {" "}
                    <p className="w-20 h-3   bg-gray-200 rounded-lg dark:bg-gray-300"></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="font-medium">
                {/* <p className="w-36 h-2 mt-4  bg-gray-200 rounded-lg dark:bg-gray-300"></p> */}

                <span className="2xs:text-lg md:text-xl xl:text-2xl  2xl:text-3xl font-bold">
                  {/* <p className="w-36 h-2 mt-4  bg-gray-200 rounded-lg dark:bg-gray-300"></p> */}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // if (sucessfulDelete) {
  //   setRemoved(false);
  // }

  const place_holder_tour =
    "https://www.aluminati.net/wp-content/uploads/2016/03/img-placeholder.png";

  return (
    <>
      {!removed && (
        <div className="card lg:card-side bg-base-100  lg:col-span-8 shadow-xl">
          <figure className="2xs:w-full 2xs:max-h-80 lg:w-[40%]">
            <Link to={`/tour-details/${id}`} className="cursor-pointer">
              <img
                className="w-full h-full"
                src={image ?? place_holder_tour}
                alt="Tour Card"
                onError={(e) => {
                  e.target.src = place_holder_tour;
                }}
              />
            </Link>
          </figure>
          <div className="card-body justify-between gap-10">
            <div>
              <div className="flex justify-between">
                <h2 className="card-title 2xs:text-lg sm:text-xl xl:text-2xl 2xl:text-3xl">
                  {title}
                </h2>
                <button
                  className="2xs:hidden xs:inline-block"
                  onClick={handleDelete}
                >
                  <div className="shadow-md p-3 rounded-lg">
                    <Icon name="delete" />
                  </div>
                </button>
              </div>

              <div className="flex items-center justify-between w-full my-2  lg:max-w-[85%] xl:max-w-[55%] ">
                <div className="flex justify-center items-center space-x-2">
                  <EnvironmentOutlined className="2xs:text-base 2xl:text-lg" />
                  <span className="2xs:text-base 2xl:text-lg text-light-gray h-5">
                    {city}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <ClockCircleOutlined className="text-base" />
                  <span className="text-base text-light-gray h-5">
                    {duration} day
                    {duration > 1 ? "s" : ""}
                  </span>
                </div>
              </div>

              <div className="flex items-center w-full  lg:max-w-[85%] ">
                <div className="flex justify-center items-center space-x-2">
                  <CalendarOutlined className="2xs:text-base 2xl:text-lg" />
                  <span className="2xs:text-base 2xl:text-lg text-light-gray h-5">
                    {formatDate(startDate)}
                  </span>
                </div>
              </div>
            </div>

            <div className="card-actions justify-between items-center">
              <div className="flex justify-center items-center space-x-1">
                <span className="2xs:text-lg md:text-xl xl:text-2xl font-bold">
                  ${pricePerPerson}
                </span>{" "}
                <span className="">/</span>
                <UserOutlined className="2xs:text-xl md:text-lg" />
              </div>

              <div>
                <p>Booked for : {peopleCount}</p>
              </div>
              {/* <div className="flex justify-between items-center min-w-[9rem]">
        <button onClick={handleDecrement}>
          <div className="shadow-md p-3 rounded-lg">
            <Icon name="userDelete" />
          </div>
        </button>
        <span className="text-lg 2xl:text-2xl px-3">{personsCount}</span>
        <button disabled={personsMax} onClick={handleIncrement}>
          <div
            className={`shadow-md p-3 rounded-lg ${
              personsMax ? "bg-gray-200" : null
            }`}
          >
            <Icon name="userAdd" />
          </div>
        </button>
      </div> */}

              <div>
                <p className="font-medium">
                  Total:
                  <span className="2xs:text-lg md:text-xl xl:text-2xl  2xl:text-3xl font-bold">
                    ${totalPrice}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TourWideCard;
