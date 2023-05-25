/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TourCard from "../../components/shared/TourCard/index";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

const Favorite = () => {
    const [items] = useState(2);
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
        <div className="flex flex-col justify-center mx-[10%]">
            <div className="">
                <h1 className="text-3xl mb-8 ">My Favorites</h1>
            </div>
            <div className="flex flex-col gap-5 ">
                {tourCards}
            </div>
            <div className="mt-8 flex justify-center mb-10">
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default Favorite;