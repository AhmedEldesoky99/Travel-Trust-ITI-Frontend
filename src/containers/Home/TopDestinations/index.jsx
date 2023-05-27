import { Link } from "react-router-dom";
import TopDestinationCard from "../../../components/TopDestinationCard";

import Alex from "../../../assets/images/Home/TopDesCard/Alex.jpeg"
import Fayoum from "../../../assets/images/Home/TopDesCard/Fayoum.jpg"
import Giza from "../../../assets/images/Home/TopDesCard/Giza.jpg"
import Dahab from "../../../assets/images/Home/TopDesCard/Dahab.jpg"
import Luxor from "../../../assets/images/Home/TopDesCard/Luxor.jpg"

const TopDestinations = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="mx-8  text-center md:text-start flex items-center justify-between ">
            <div className="w-full lg:w-auto">
              <p className="hidden lg:block md:text-[20]px] lg:text-[24px] font-header">
                Explore our Destinations
              </p>
              <h2 className="text-[#2B2B2B] text-[30px] md:text-4xl lg:text-5xl font-bold md:mt-4 capitalize text-center md-text-start w-full">
                Top Destinations
              </h2>
            </div>
            <Link
              to=""
              className="hidden lg:flex border-[1.4px] border-gray-600  md:text-[20]px] lg:text-[24px] px-6 py-4 rounded-lg capitalize transition-all duration-700 hover:bg-black hover:text-white hover:border-transparent"
            >
              View all destinations
            </Link>
          </div>

          <div className="flex flex-row xl:space-x-4 flex-wrap xl:flex-nowrap mx-10 mt-10 gap-12 xl:gap-0">
            <TopDestinationCard tours="4 tours" governorate="Alex" url={Alex}/>
            <TopDestinationCard tours="12 tours"  governorate="Fayoum" url={Fayoum}/>
            <TopDestinationCard tours="8 tours" governorate="Giza" url={Giza}/>
            <TopDestinationCard tours="10 tours" governorate="Dahab" url={Dahab}/>
            <TopDestinationCard tours="6 tours" governorate="Luxor" url={Luxor}/>
            <div className="w-full block sm:hidden">
            <Link
              to=""
              className="block sm:hidden border-[1.4px] border-gray-600  md:text-[20]px] lg:text-[24px] px-6 py-4 rounded-lg capitalize text-center transition-all duration-700 hover:bg-black hover:text-white hover:border-transparent"
            >
              View all destinations
            </Link>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};
export default TopDestinations;
