/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TourCard from "../../components/shared/TourCard/index";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import CheckDestenations from "../../containers/EachGovernorate/CheckDestenations";

const Favorite = () => {
  const [items] = useState(0);
  const [recommended] = useState(4);
  const tourCards = [];
  for (let i = 0; i < items; i += 4) {
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
        <div key={i + j} className="max-h-[534px] max-w-[404px]">
          <TourCard />
        </div>
      );
    }
    recommendedCards.push(
      <div key={i} className="flex md:flex-row 2xs:flex-col gap-5">
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
          <div className="flex flex-col h-[60vh] w-full justify-center items-center">
            <div className="bg-emptyFav bg-contain bg-no-repeat  max-h-[382px] max-w-[621px] w-full h-full mb-3"></div>
            <p className="xl:text-4xl lg:text-2xl 2xs:text-xl text-center">Your favorites does not have anything yet !</p>
            <p className="xl:text-lg lg:text-base 2xs:text-sm text-center">When there is something you want to save, just click the heart icon shown on each tour. <br />
You will find all the tours you&apos;ve saved here.</p>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-row ">
              <p className="text-3xl">Check out these Recommended Tours</p>
              <a href="" className="text-xl underline font-medium text-[#009EB7]">Find more things to do</a>
            </div>
            <div className="flex justify-center">
              {recommendedCards}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
export default Favorite;
