/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import TourCard from "./../../../components/shared/TourCard/index";

const Favorites = ({ userData }) => {
  return (
    <div className="grid gap-4 mb-10 sm:grid-cols-2 lg:grid-cols-8">
      {userData?.data?.user?.favorite_tours.map((tour, index) => {
        return (
          <div key={index} className="sm:col-span-1 lg:col-span-4">
            <TourCard  data={tour}/>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
