import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import TopDestinationCard from "../../../components/TopDestinationCard";
import { getTopDestinations } from "../../../services/Home";
import DestinationsLoader from "../../../components/DestinationsLoader/DestinationsLoader";

const TopDestinations = () => {
  const { isLoading, data, isSuccess } = useQuery(
    "TopDestinations",
    getTopDestinations
  );
  // console.log({ Destinations : data});
  // if (isSuccess) {
  //   console.log({ data });
  // }
  return (
    <>
      {!isSuccess && isLoading && <DestinationsLoader />}
      {!!data && (
        <div className="hero">
          <div className="container">
            <div className="mx-8  text-center md:text-start flex items-center justify-between ">
              <div className="w-full lg:w-auto">
                <p className="hidden lg:block md:text-[18]px] 2xl:text-[22px] font-header">
                  Explore our Destinations
                </p>
                <h2 className="text-[#2B2B2B] text-[30px] md:text-3xl xl:text-4xl 2xl:text-5xl font-bold md:mt-4 capitalize text-center md-text-start w-full">
                  Top Destinations
                </h2>
              </div>
              <Link
                to="destinations"
                className="hidden lg:flex border-[1.4px] border-gray-600 md:text-[20]px] 2xl:text-[24px] px-6 py-4 rounded-lg capitalize transition-all duration-700 hover:bg-black hover:text-white hover:border-transparent"
              >
                View all destinations
              </Link>
            </div>
            <div className="flex flex-row xl:space-x-4 flex-wrap xl:flex-nowrap mx-10 mt-10 gap-12 xl:gap-0">
              {data.data?.map((item, index) => {
                if (index < 5)
                  return <TopDestinationCard key={item._id} data={item} />;
              })}

              <div className="w-full block sm:hidden">
                <Link
                  to="destinations"
                  className="block sm:hidden border-[1.4px] border-gray-600  md:text-[20]px] lg:text-[24px] px-6 py-4 rounded-lg capitalize text-center transition-all duration-700 hover:bg-black hover:text-white hover:border-transparent"
                >
                  View all destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default TopDestinations;
