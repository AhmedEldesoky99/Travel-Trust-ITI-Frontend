import React from "react";

import Header from "../../containers/TourDetails/Header";
import TourTabs from "../../containers/TourDetails/TourTabs";

const TourDetails = () => {
  const { id } = useParams();
  const { getTourDetails } = useTour();
  const { data, isLoading, isSuccess, isError } = getTourDetails(id);
  console.log(data);

  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 0);
  return (
    <>
      <Header />
      <TourTabs />
    </>
  );
};

export default TourDetails;
