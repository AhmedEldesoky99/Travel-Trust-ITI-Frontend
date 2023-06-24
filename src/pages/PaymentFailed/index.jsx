import { Link } from "react-router-dom";
import Icon from "../../utils/icons";

const PaymentFailed = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://pbs.twimg.com/media/FeHogjSWYAUEzOH?format=jpg&name=large)",
        }}
      >
        <div className="hero-overlay bg-black/[0.4] w-full"></div>
        <div className="card  w-[350px] xs:w-[470px] sm:w-[490px] md:min-w-[530px]  bg-base-100 shadow-xl ">
          <div className="px-16 py-10">
            <div className="flex justify-center my-4">
              <Icon name="failed"></Icon>
            </div>
            <h2 className="font-header text-xl sm:text-2xl md:text-3xl capitalize  text-center mb-3 ">
              payment Failed !
            </h2>
            <p className="capitalize  sm:text-[1rem] md:text-[1.5rem]  text-center">
              Sorry , please try again.
            </p>
            <div className="border-[1px]  border-dashed border-gray-400	 my-8"></div>

            <div className="mt-12">
              <Link to="/">
                <button className="w-full bg-tertiary-red py-4 rounded-lg text-lg text-white mb-4  cursor-pointer transition-all duration-500">
                  Go To Home
                </button>
              </Link>
              <Link to="user-profile/:id">
                <button className="w-full border-2 border-gray-700 hover:bg-black hover:border-black hover:text-white py-[13px] rounded-lg text-lg mb-4 cursor-pointer transition-all duration-500">
                  Go To Your Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentFailed;
