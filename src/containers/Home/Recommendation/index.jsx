import TourCard from "../../../components/shared/TourCard";

const Recommended = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="mx-8 my-20 text-center md:text-start">
            <p className="hidden lg:flex md:text-[18]px] lg:text-[22px] font-header">
              Explore your favorite tours
            </p>
            <h2 className="text-[#2B2B2B] text-[30px] md:text-4xl lg:text-5xl font-bold md:mt-4 capitalize text-center lg:text-start">
              recommended tours
            </h2>
            <div className="container grid gap-4 grid-cols-1  md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 mt-12">
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Recommended;
