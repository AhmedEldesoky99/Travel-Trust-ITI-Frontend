import React from "react";


import TourCard from "./../../../components/shared/TourCard/index";

const Favorites = () => {
  return (
    <div className="grid gap-4 mb-10 sm:grid-cols-2 lg:grid-cols-8">
      <div className="sm:col-span-1 lg:col-span-4">
        <TourCard />
      </div>
      <div className="sm:col-span-1 lg:col-span-4"></div>
    </div>
  );
};

export default Favorites;
