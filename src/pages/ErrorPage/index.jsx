import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div
        className="hero place-items-center  md:place-items-start md:items-center min-h-screen"
        style={{
          backgroundImage:
            "url(https://wallpapercrafter.com/desktop5/1473137-photography-airplane-wing-columbus-clouds-flying.jpg)",
        }}
      >
        <div className="hero-overlay  bg-black/[0.5] w-full"></div>
        <div className="hero-content  text-neutral-content container">
          <div className="lg:ml-24 text-center lg:text-left">
            <p className="text-[1.8rem] md:[2rem] xl:text-[2.4rem] font-header lg:max-w-[32rem]">
              <span className="text-tertiary-red">Oops</span> ..This page is on
              vacation ... and you should be too
            </p>
            <p className="text-[1.2rem] md:text-[1.4rem] xl:text-[1.6rem] mt-8 w-full lg:w-[70%]">
              An error has occurred and we are working to fix the problem !
              We’ll be up and running shortly.
            </p>
            <Link to="/">
              <button className="text-[1rem] lg:text-xl 2xl:text-2xl mt-20  px-[2rem] md:px-[10rem] py-[0.7rem] md:py-[1rem] rounded-xl bg-tertiary-red capitalize transition duration-500 ease-out">
                Try Again
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ErrorPage;
