import { Link, useParams } from "react-router-dom";
import Icon from "../../utils/icons";

const PaymentSuccess = () => {
  const { money } = useParams();

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://www.quotemaster.org/images/e3/e3135c7153452967a41f2946f114d3fe.jpg)",
        }}
      >
        <div className="hero-overlay bg-black/[0.4] w-full"></div>
        <div className="card  w-[350px] xs:w-[470px] sm:w-[490px] md:min-w-[530px]  bg-base-100 shadow-xl px-4">
          <div className="mx-auto py-10">
            <div className="flex justify-center my-4">
              <Icon name="success"></Icon>
            </div>
            <h2 className="font-header text-xl sm:text-2xl md:text-3xl capitalize  text-center mb-3 ">
              payment successful !
            </h2>
            <p className="capitalize  sm:text-[1rem] md:text-[1.5rem]  text-center">
              Thanks for booking with us.
            </p>
            <div className="border-[1px]  border-dashed border-gray-400	 my-8"></div>
            <div>
              <div className="flex justify-between mb-2">
                <p className="font-bold text-xl">Total paid</p>
                <p className="font-bold text-xl">$ {money}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg">Order method</p>
                <p className="text-lg">master card</p>
              </div>
            </div>
            <div className="mt-12">
              <Link to="/">
                <button className="w-full bg-primary-green py-4 rounded-lg text-lg text-white mb-4  cursor-pointer transition-all duration-500">
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
export default PaymentSuccess;
