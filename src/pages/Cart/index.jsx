/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import Navbar from "../../components/shared/Navbar/index";
import Footer from "../../components/shared/Footer/index";
import TourCardWide from "../../components/shared/TourWideCard/index";
import CheckDestenations from "../../containers/EachGovernorate/CheckDestenations";
import CustomButton from "../../components/shared/CustomButton/index";
import Bin from "../../assets/images/Cart/Bin.svg";
import Check from "../../assets/images/Cart/Check.svg";

const Cart = () => {
  const [items, setItems] = useState(3);
  const clear = () => {
    setItems(0);
  };
  const tourCards = Array.from({ length: items }, (_, index) => (
    <TourCardWide key={index} />
  ));
  return (
    <>
      <Navbar />
      {items !== 0 ? (
        <div className="flex md:flex-row 2xs:flex-col lg:mx-0 2xs:mx-10 my-10 md:items-start justify-center md:gap-40 2xs:gap-12 2xs:items-center">
          <div className="flex flex-col max-w-[1110px]">
            <div className="bg-white flex flex-row w-full h-28 border border-gray-200 items-center p-7 rounded-2xl justify-between mb-8">
              <p className="font-bold lg:text-3xl md:text-xl 2xs:text-lg lg:block 2xs:flex 2xs:flex-col">
                My Cart
                <span className="font-normal lg:text-2xl md:text-lg 2xs:text-base text-gray-700">
                  ({items} tours)
                </span>
              </p>
              <div
                className="text-[#DB3A34] flex flex-row items-center md:text-base 2xs:text-sm"
                onClick={clear}
              >
                <img src={Bin} className="" />
                <p className="text-danger text-lg">Clear all</p>
              </div>
            </div>
            <div className="flex flex-col gap-9 md:mx-0 2xs:mx-12">
              {tourCards}
            </div>
          </div>
          <div className="border border-gray-200 max-w-[405px] max-h-[413px] w-full h-full flex flex-col gap-2 justify-center p-6 rounded-2xl">
            <p className="text-2xl mb-6 text-center">Order Summary</p>
            <div className="flex justify-between text-base">
              <p>booking fee</p>
              <p>0.00 EGP</p>
            </div>
            <div className="flex justify-between text-base mb-2">
              <p>subtotal</p>
              <p>7134.96 EGP</p>
            </div>
            <div className="flex justify-between text-xl font-bold mt-6 mb-4">
              <p>Total</p>
              <p>7134.96 EGP</p>
            </div>
            <hr className="max-w-[358px] text-gray-500" />
            <div className="flex gap-3 mt-4">
              <img src={Check} />
              <p className="text-[#A4A0A0]">No additional taxes & fees</p>
            </div>
            <div className="flex gap-3">
              <img src={Check} />
              <p className="text-[#A4A0A0]">Free cancellation</p>
            </div>
            <div className="mt-8 text-center">
              <CustomButton type="secondary" value="Check out" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-col h-[60vh] w-full justify-center items-center">
            <div className="bg-emptyCart max-h-[268px] max-w-[252px] w-full h-full mb-3"></div>
            <p className="text-4xl">Your cart looks empty</p>
            <p className="text-xl">What are you waiting for?</p>
          </div>
          <div>
            <CheckDestenations />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
export default Cart;
