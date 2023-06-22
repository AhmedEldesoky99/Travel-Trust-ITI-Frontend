import React from "react";

import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  UserOutlined,
} from "@ant-design/icons";

import Icon from "../../../utils/icons";
import { useState } from "react";
import { deleteFromCart } from "../../../services/Cart";
import { useMutation } from "react-query";

const TourWideCard = ({ data }) => {
  const {
    city,
    title,
    duration,
    start_date,
    price_per_person,
    person_num,
    _id,
  } = data;
  console.log({ data });
  const [persons, setPersons] = useState(person_num);
  const personsMax = persons >= person_num;
  const date = new Date(start_date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = date.toLocaleDateString("en-US", options);
  const timeString = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const formattedDate = `${dateString} | ${timeString}`;

  const handleIncrement = () => {
    if (personsMax) {
      setPersons((prevPersons) => prevPersons);
    } else {
      setPersons((prevPersons) => prevPersons + 1);
    }
  };

  const handleDecrement = () => {
    setPersons((prevPersons) =>
      prevPersons === 1 ? prevPersons : prevPersons - 1
    );
  };
  const deleteTour = useMutation(deleteFromCart);

  const handleDelete = () => {
    deleteTour.mutate(_id);
  };
  return (
    <div className="card lg:card-side bg-base-100    lg:col-span-8 shadow-xl">
      <figure className="2xs:w-full 2xs:max-h-80 lg:w-[40%]">
        <img
          className="w-full h-full"
          src={
            // {CardImage}
            city?.home_image
          }
          alt="Tour Card"
        />
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
                {city?.title}
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
                {formattedDate}
              </span>
            </div>
          </div>
        </div>

        <div className="card-actions justify-between items-center">
          <div className="flex justify-center items-center space-x-1">
            <span className="2xs:text-lg md:text-xl xl:text-2xl font-bold">
              ${price_per_person}
            </span>{" "}
            <span className="">/</span>
            <UserOutlined className="2xs:text-xl md:text-lg" />
          </div>

          <div className="flex justify-between items-center min-w-[9rem]">
            <button onClick={handleDecrement}>
              <div className="shadow-md p-3 rounded-lg">
                <Icon name="userDelete" />
              </div>
            </button>

            <span className="text-lg 2xl:text-2xl px-3">
              {persons}{" "}
              {personsMax ? (
                <span className="text-tertiary-red">Max</span>
              ) : null}
            </span>
            <button disabled={personsMax} onClick={handleIncrement}>
              <div
                className={`shadow-md p-3 rounded-lg ${
                  personsMax ? "bg-gray-200" : null
                }`}
              >
                <Icon name="userAdd" />
              </div>
            </button>
          </div>

          <div>
            <p className="font-medium">
              Total:{" "}
              <span className="2xs:text-lg md:text-xl xl:text-2xl  2xl:text-3xl font-bold">
                EGP {person_num * price_per_person}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourWideCard;
