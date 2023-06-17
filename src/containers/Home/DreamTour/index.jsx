import { useQuery } from "react-query";
import TourCard from "../../../components/shared/TourCard";
import { Link } from "react-router-dom";
import { getDreamTours } from "../../../services/Home";
import CardLoader from "../../../components/CardLoader";

const DreamTour = () => {
  const { isLoading, data, isSuccess } = useQuery("DreamTours", getDreamTours);

  // console.log({ DreamTour: data });
  return (
    <>
      {!isSuccess && isLoading && <CardLoader />}
      {!!data && (
        <div className="hero">
          <div className="container">
            <div className="mx-8 mb-24 text-center md:text-start ">
              <div className="flex items-center justify-between">
                <div className="w-full lg:w-auto">
                  <p className="hidden lg:flex md:text-[18]px] 2xl:text-[22px] font-header">
                    Explore our Tour list
                  </p>
                  <h2 className="text-[#2B2B2B] text-[30px] md:text-3xl xl:text-4xl 2xl:text-5xl font-bold md:mt-4 capitalize min-w-full text-center lg:text-start">
                    find your Dream tour
                  </h2>
                </div>
                <Link
                  to=""
                  className="hidden lg:flex border-[1.4px] border-gray-600 transition-all duration-700 hover:bg-black hover:text-white hover:border-transparent md:text-[20px] 2xl:text-[24px] px-6 py-4 rounded-lg"
                >
                  View all tours
                </Link>
              </div>
              <div className="container grid gap-4 2xs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2  md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 mt-12">
                {data.data?.map((item, index) => {
                  if (index < 4) return <TourCard key={item._id} data={item} />;
                })}
                <div className="w-full block sm:hidden mt-8 sm:mt-0">
                  <Link
                    to=""
                    className="block sm:hidden border-[1.4px] border-gray-600  md:text-[20]px] lg:text-[24px] px-6 py-4 rounded-lg capitalize text-center"
                  >
                    View all tours
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DreamTour;
