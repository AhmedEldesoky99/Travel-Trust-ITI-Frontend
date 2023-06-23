/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Pagination } from "antd";

import CheckDestenations from "../../containers/EachGovernorate/CheckDestenations";

import TourCard from "../../components/shared/TourCard/index";
import CardLoader from "./../../components/CardLoader/index";

import { getUserData } from "../../services/user";

const Favorite = () => {
  const userId = localStorage.getItem("userId");
  const { data, isLoading, isSuccess } = getUserData(userId);

  return (
    <>
      {!isSuccess && isLoading && <CardLoader />}

      {data ? (
        <section className="mt-32">
          <div className="container mx-auto">
            <h1 className="2xs:text-lg xs:text-xl lg:text-2xl 2xl:text-3xl xs:mb-4">
              My Favorites
            </h1>
          </div>

          <div className="container mb-10 mx-auto grid gap-4 2xs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {data?.data?.user?.favorite_tours?.map((tour) => (
              <TourCard
                key={tour._id}
                data={tour}
                length={data?.data?.user?.favorite_tours.length}
              />
            ))}
          </div>
        </section>
      ) : (
        <div className="container mx-auto mt-32">
          <div className="flex flex-col">
            <div className="flex flex-col h-[60vh] w-3/4 mx-auto justify-center items-center text-center">
              <div className="bg-emptyFav w-full h-[382px] mb-3 bg-no-repeat bg-contain bg-center"></div>
              <p className="font-bold 2xs:text-xl md:text-2xl 2xl:text-4xl">
                Your favorites does not have anything yet !
              </p>
              <p className="2xs:text-base md:text-lg 2xl:text-3xl">
                When there is something you want to save, just click the heart
                icon shown on each tour. You will find all the tours you've
                saved here.
              </p>
            </div>
            <div>
              <CheckDestenations />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Favorite;
