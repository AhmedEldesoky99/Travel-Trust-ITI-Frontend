/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TourCard from "../../components/shared/TourCard/index";
import CheckDestenations from "../../containers/EachGovernorate/CheckDestenations";
import { Link } from "react-router-dom";

const Favorite = () => {
  const [items] = useState(0);
  const [recommended] = useState(4);
  const tourCards = [];
  for (let i = 0; i < items; i += 4) {
    // map
    const row = [];
    for (let j = 0; j < 4 && i + j < items; j++) {
      row.push(
        <div key={i + j} className="max-h-[534px] max-w-[404px]">
          <TourCard />
        </div>
      );
    }
    tourCards.push(
      <div key={i} className="flex md:flex-row 2xs:flex-col gap-5">
        {row}
      </div>
    );
  }
  const recommendedCards = [];
  for (let i = 0; i < recommended; i += 4) {
    const row = [];
    for (let j = 0; j < 4 && i + j < recommended; j++) {
      row.push(
        <div key={i + j} className="max-h-[534px] max-w-[404px] sm:mb-6 2xs:mb-3">
          <TourCard />
        </div>
      );
    }
    recommendedCards.push(
      <div
        key={i}
        className="container grid gap-4 grid-cols-1  md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 mt-12"
      >
        {row}
      </div>
    );
  }
  return (
    <>
      {/* <Navbar/> */}
      {items !== 0 ? (
        <div className="flex flex-col justify-center mx-[10%]">
          <div className="">
            <h1 className="text-3xl mb-8 ">My Favorites</h1>
          </div>
          <div className="flex flex-col gap-5 ">{tourCards}</div>
          <div className="mt-8 flex justify-center mb-10"></div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-col h-[60vh] w-full justify-center items-center text-center mb-14">
            <div className="bg-emptyFav bg-contain bg-no-repeat  max-h-[382px] max-w-[621px] w-full h-full md:mb-3"></div>
            <p className="xl:text-4xl lg:text-2xl 2xs:text-xl mb-4">
              Your favorites does not have anything yet !
            </p>
            <p className="xl:text-lg lg:text-base 2xs:text-sm ">
              When there is something you want to save, just click the heart
              icon shown on each tour. <br />
              You will find all the tours you&apos;ve saved here.
            </p>
          </div>
          <div className="flex flex-col container mx-auto">
            <div className="w-screen lg:w-auto">
              <div className="container flex flex-row lg:justify-between 2xs:justify-center ">
                <h2 className="text-[#2B2B2B] lg:text-[32] md:text-2xl 2xs:text-xl font-bold capitalize  lg:text-start">
                  Check out these Recommended Tours
                </h2>
                <Link
                  to=""
                  className="hidden lg:flex items-center underline font-medium text-[#009EB7]  md:text-[20px] lg:text-[24px] "
                >
                  Find more things to do
                </Link>
              </div>
            </div>
            <div className="flex justify-center mx-auto">{recommendedCards}</div>
          </div>
        </div>
        // link center
      )}
    </>
  );
};
export default Favorite;
