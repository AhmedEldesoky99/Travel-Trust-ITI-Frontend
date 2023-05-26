import Icon from "../../../utils/icons";
import { Link } from "react-router-dom";

const Sales = () => {
  return (
    <>
      <div className="hero bg-salesHeader min-h-[600px] bg-cover bg-center my-24 ">
        <div className="hero-overlay bg-black/[0.6]">
          <div className="container mx-auto  text-center lg:text-start">
            <div className="mx-10 h-[600px] flex justify-between items-center">
              <div className="text-white w-full 2xl:w-[30%] py-20">
                <h2 className="sm:text-4xl md:text-5xl lg:text-6xl">
                  Save on your next stay
                </h2>
                <p className="md:text-[18]px] lg:text-[22px] mt-4 mb-14">
                  Enjoy our destinations with the top tours offers we pulled
                  together for you, live unforgettable experience
                </p>
                <Link
                  to=""
                  className=" bg-white  text-[18px] md:text-[21px] xl:text-[22px]  py-4 rounded-lg capitalize text-center px-10 font-inter  font-semibold text-[#2B2B2B] hover:bg-primary-green hover:text-white transition-all duration-500 ease-in-out"
                >
                  Discover a deal
                </Link>
              </div>
              <div className="hidden 2xl:block">
                <Icon name="sales" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sales;
