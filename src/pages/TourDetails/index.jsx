import React from "react";
import { useParams } from "react-router-dom";

import Header from "../../containers/TourDetails/Header";
import TourTabs from "../../containers/TourDetails/TourTabs";

import { useTour } from "../../services/useTour";

const TourDetails = () => {
  const { id } = useParams();
  const { getTourDetails } = useTour();
  const { data, isLoading, isSuccess, isError } = getTourDetails(id);


  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 0);
  return (
    <>
      <Header data={data}   />
      <TourTabs data={data} />
    </>
  );
};

export default TourDetails;
