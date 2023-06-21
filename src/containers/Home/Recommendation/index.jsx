import { useQuery } from "react-query";
import TourCard from "../../../components/shared/TourCard";
import { getRecommendedTour } from "../../../services/Home";
import CardLoader from "../../../components/CardLoader";


const Recommended = () => {

  const token = localStorage.getItem("travelJWT");

  const { isLoading, data, isSuccess } = useQuery(
    "recommendedTours",
    getRecommendedTour,
    {
      enabled: token ? true : false,
    }
  );


  return (
    <>
      {!isSuccess && isLoading && <CardLoader />}
      {!!data?.data && (
        <div className="hero">
          <div className="container">
            <div className="mx-8 mt-20 text-center md:text-start">
              <p className="hidden lg:flex md:text-[18]px] 2xl:text-[22px] font-header">
                Explore your favorite tours
              </p>
              <h2 className="text-[#2B2B2B] text-[30px] md:text-3xl xl:text-4xl 2xl:text-5xl font-bold md:mt-4 capitalize text-center lg:text-start">
                recommended tours
              </h2>
              <div className="container grid gap-4 2xs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-12">
                {data?.data?.map((item, index) => {
                  if (index < 4) return <TourCard key={item._id} data={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Recommended;
