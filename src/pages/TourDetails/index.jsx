import React from "react";
import { useParams } from "react-router-dom";
import ContentLoader from "react-content-loader";

import Header from "../../containers/TourDetails/Header";
import TourTabs from "../../containers/TourDetails/TourTabs";

import { useTour } from "../../services/useTour";
import { addTourToHistoryQuery } from "../../services/history";

const TourDetails = () => {
  const { id } = useParams();
  const { getTourDetails } = useTour();
  const { data, isLoading, isSuccess, isError } = getTourDetails(id);
  addTourToHistoryQuery(id);

  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 0);
  return (
    <>
      {!isSuccess && isLoading && (
        <>
          <header className="hero min-h-[55vh] bg-gray-200 bg-cover "></header>
          <section className="container mx-auto min-h-screen">
            <ContentLoader
              style={{ transform: "translateY(-10%)" }}
              width="100%"
              height="100vh"
              speed={0.5}
            >
              <rect x="0" y="30" rx="3" ry="3" width="15%" height="32" />
              <rect x="200" y="30" rx="3" ry="3" width="15%" height="32" />
              <rect x="400" y="30" rx="3" ry="3" width="15%" height="32" />
              <rect x="600" y="30" rx="3" ry="3" width="15%" height="32" />
              <rect x="800" y="30" rx="3" ry="3" width="15%" height="32" />

              <rect x="0" y="100" rx="3" ry="3" width="20%" height="10" />

              <rect x="0" y="140" rx="3" ry="3" width="15%" height="10" />
              <rect x="0" y="180" rx="3" ry="3" width="15%" height="10" />
              <rect x="200" y="180" rx="3" ry="3" width="15%" height="10" />
              <rect x="400" y="180" rx="3" ry="3" width="15%" height="10" />

              <rect x="0" y="240" rx="3" ry="3" width="70%" height="10" />
              <rect x="0" y="260" rx="3" ry="3" width="70%" height="10" />
              <rect x="0" y="280" rx="3" ry="3" width="70%" height="10" />

              <rect x="0" y="350" rx="3" ry="3" width="20%" height="10" />
              <rect x="200" y="350" rx="3" ry="3" width="20%" height="10" />

              <rect x="0" y="380" rx="3" ry="3" width="20%" height="10" />
              <rect x="200" y="380" rx="3" ry="3" width="20%" height="10" />

              <rect x="0" y="410" rx="3" ry="3" width="20%" height="10" />
              <rect x="200" y="410" rx="3" ry="3" width="20%" height="10" />

              <rect x="0" y="440" rx="3" ry="3" width="20%" height="10" />
              <rect x="200" y="440" rx="3" ry="3" width="20%" height="10" />

              <rect x="0" y="500" rx="3" ry="3" width="20%" height="10" />
              <rect x="200" y="500" rx="3" ry="3" width="20%" height="10" />

              <rect x="0" y="530" rx="3" ry="3" width="20%" height="10" />
              <rect x="200" y="530" rx="3" ry="3" width="20%" height="10" />

              <rect x="0" y="580" rx="3" ry="3" width="20%" height="10" />
              <rect x="200" y="580" rx="3" ry="3" width="20%" height="10" />

              <rect x="0" y="600" rx="3" ry="3" width="20%" height="10" />
              <rect x="200" y="600" rx="3" ry="3" width="20%" height="10" />
            </ContentLoader>
          </section>
        </>
      )}

      {isSuccess && data && (
        <>
          <Header data={data} />
          <TourTabs data={data} />
        </>
      )}
    </>
  );
};

export default TourDetails;
