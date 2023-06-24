import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1517915467995-7fbc08235aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
        }}
      >
        <div className="hero-overlay bg-black/[0.3] w-full"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="md:w-full capitalize">
            <h1 className="text-[5rem] md:[8rem] lg:[10rem] 2xl:text-[12.6rem] font-header">
              404
            </h1>
            <p className="text-[1.4rem] md:[1.7rem] xl:text-[2rem] font-header mt-12">
              Oops .. page not found
            </p>
            <p className="text-[1rem] md:text-[1.3rem] xl:text-2xl">
              seems like you have lost your way . let’s bring you back to home.
            </p>
            <Link to="/">
              <button className="text-2xl mt-32 border-2 border-gray-50 px-[2rem] md:px-[6.4rem] py-[0.8rem] md:py-[1.4rem] rounded-xl hover:bg-white hover:text-black capitalize transition duration-500 ease-out">
                go to home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;
