/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  UserOutlined,
} from "@ant-design/icons";

import Icon from "../../../utils/icons";
import { deleteFromCart } from "../../../services/Cart";
import { useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";

const TourWideCard = ({
  data,
  onUpdateTourIncrement,
  onUpdateTourDecrement,
  onDeleteTour,
  showAction=true
}) => {
  const {
    city,
    cityTitle,
    title,
    duration,
    startDate,
    pricePerPerson,
    personNum,
    id,
    money,
    personsCount,
  } = data;

  const queryClient = useQueryClient();

  const personsMax = personsCount === personNum;

  const handleIncrement = () => {
    if (!personsMax) {
      onUpdateTourIncrement(id);
    }
  };
  const handleDecrement = () => {
    if (personsCount <= personNum && personsCount > 1) {
      onUpdateTourDecrement(id);
    }
  };
  const deleteTour = useMutation({
    mutationFn: deleteFromCart,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });
      onDeleteTour(id);

      // await queryClient.cancelQueries({ queryKey: ["cart"] });
      // const prevValue = queryClient.getQueryData(["cart"]);
      // console.log({ prevValue });
      // queryClient.setQueryData(["cart"], () => {
      //   data: {
      //   }
      // });
      // setCardsDetails([]);
      // return {
      //   prevValue,
      // };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const handleDelete = () => {
    deleteTour.mutate(id);
  };

  const place_holder_tour =
    "https://www.aluminati.net/wp-content/uploads/2016/03/img-placeholder.png";

  return (
    <div className="card lg:card-side bg-base-100  lg:col-span-8 shadow-xl">
      <figure className="2xs:w-full 2xs:max-h-80 lg:w-[40%]">
        <Link to={`/tour-details/${id}`} className="cursor-pointer">
          <img
            className="w-full h-full"
            src={city ?? place_holder_tour}
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
            {showAction&& 

            <button
              className="2xs:hidden xs:inline-block"
              onClick={handleDelete}
            >

              <div className="shadow-md p-3 rounded-lg">
                <Icon name="delete" />
              </div>
            </button>}
          </div>

          <div className="flex items-center justify-between w-full my-2  lg:max-w-[85%] xl:max-w-[55%] ">
            <div className="flex justify-center items-center space-x-2">
              <EnvironmentOutlined className="2xs:text-base 2xl:text-lg" />
              <span className="2xs:text-base 2xl:text-lg text-light-gray h-5">
                {cityTitle}
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
                {startDate}
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


{  showAction&& 

          {/* <div className="flex justify-between items-center min-w-[9rem]">

            <button onClick={handleDecrement}>

              <div className="shadow-md p-3 rounded-lg">
                <Icon name="userDelete" />
              </div>
            </button> */}
            {/* <p> booked for: money / pricePerPerson} </p> */}
            {/* <span className="text-lg 2xl:text-2xl px-3">{personsCount}</span>
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
                ${money}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourWideCard;
