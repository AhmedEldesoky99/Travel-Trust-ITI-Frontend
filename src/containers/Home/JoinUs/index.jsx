import Icon from "../../../utils/icons";
import { Link } from "react-router-dom";
//assets
import JoinUsImage from "../../../assets/images/Home/JoinUs/JoinUs.png";
const JoinUs = () => {
  return (
    <>
      <div className="hero min-h-[800px]  mt-24 bg-black py-16 xl-py-0">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 flex-wrap">
            <div className="w-full xl:w-[36%] md:px-10 xl:h-[490px] text-white flex flex-col items-center lg:items-start">
              <div className="mb-6 lg:mb-12 2xl:mb-16">
                <p className="font-normal text-base leading-8 text-[16px] md:text-[20px] font-header mb-4 hidden xl:block">
                  TOURS EXPERINCES & more
                </p>
                <h1 className="text-[30px] md:text-4xl lg-text-4xl 2xl:text-5xl  font-bold leading-9 pb-4">
                  Explore Egypt now
                </h1>
              </div>
              <h1 className="text-3xl lg:text-4xl hidden lg:block font-bold leading-9 pb-4 capitalize">
                discover our trips
              </h1>
              <p className="text-[15px] md:text-[20px] lg:text-[24px] mb-10 text-center lg:text-start">
                We travel to incredible, often overlooked places. Our global
                community of local experts grants you access to unique,
                small-group experiences.
              </p>
              <Link
                to=""
                className=" bg-white text-[18px] md:text-[21px] xl:text-[22px]  py-2 lg:py-4 rounded-lg  text-center px-[40px] lg:px-20 font-inter  font-semibold text-[#2B2B2B] hover:bg-primary-green hover:text-white transition-all duration-500 ease-in-out"
              >
                Join us
              </Link>
            </div>
            <div className="relative w-full h-full  xl:w-[55%] overflow-hidden rounded-xl">
              <img
                className="w-full h-full transition duration-700 transform ease-in-out cursor-pointer hover:scale-125 object-cover rounded-xl "
                src={JoinUsImage}
                alt="Dahab"
              />
              <div className="absolute left-2 bottom-2 ">
                <Icon name="dahabQuote" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default JoinUs;
