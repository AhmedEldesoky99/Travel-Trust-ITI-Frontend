/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TourCard from "../../components/shared/TourCard/index";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import CheckDestenations from "../../containers/EachGovernorate/CheckDestenations";

const Favorite = () => {
  const [items] = useState(0);
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
            <div className="bg-emptyFav  max-h-[382px] max-w-[621px] w-full h-full mb-3"></div>
            <p className="text-4xl">Your favorites does not have anything yet !</p>
            <p className="text-xl text-center">When there is something you want to save, just click the heart icon shown on each tour. <br />
You will find all the tours you&apos;ve saved here.</p>
          </div>
          <div>
            <CheckDestenations />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
export default Favorite;
