/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

import TourCardWide from "../../components/shared/TourWideCard/index";
import CustomButton from "../../components/shared/CustomButton/index";
import Bin from "../../assets/images/Cart/Bin.svg";
import Check from "../../assets/images/Cart/Check.svg";
import { clearCart, getCart } from "../../services/Cart";
import CheckDestenations from "../../containers/EachGovernorate/CheckDestenations/index";
import { bookingCheckOut } from "../../services/Booking";
import CartLoader from "../../components/CartLoader/CartLoader";

const Cart = () => {
  let fees = 0;
  let totalCartMoney = 0;

  const queryClient = useQueryClient();
  const [cartId, setCartId] = useState(null);
  const [checked, setChecked] = useState(false);
  const { data, isLoading, isSuccess } = useQuery("cart", getCart);
  const {
    data: checkoutData,
    isSuccess: checkoutIsSuccess,
    isLoading: checkoutIsLoading,
  } = useQuery(["checkout", cartId], () => bookingCheckOut(cartId), {
    enabled: checked,
    onSuccess: (res) => {
      const url = res?.data?.url;
      if (url) {
        window.open(url, "_blank");
      }
    },
  });

  const handleCheckout = () => {
    setChecked(true);
  };

  // set card Id
  useEffect(() => {
    setCartId(data?.data?._id);
  }, [data]);

  const emptyCart = useMutation({
    mutationFn: clearCart,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });
      const prevValue = queryClient.getQueryData(["cart"]);
      queryClient.setQueryData(["cart"], () => ({
        data: { tours: [] },
      }));
      return {
        prevValue,
      };
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, newValue, context) => {
      queryClient.setQueryData(["cart"], context.prevValue);
    },
  });

  //clear cart
  const clear = () => {
    emptyCart.mutate();
  };

  if (isSuccess && data?.data?.tours.length == 0) {
    return (
      <div className="container mx-auto mt-32">
        <div className="flex flex-col">
          <div className="flex flex-col h-[60vh] w-full justify-center items-center text-center">
            <div className="bg-emptyCart max-h-[268px] max-w-[252px] w-full h-full mb-3"></div>
            <p className="text-4xl">Your cart looks empty</p>
            <p className="text-xl">What are you waiting for?</p>
          </div>
          <div>
            <CheckDestenations />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {!isSuccess && isLoading && <CartLoader />}
      {!!data && (
        <div className="md:container md:mx-auto mt-32 mb-32">
          <div className="flex lg:flex-row 2xs:flex-col lg:mx-0 2xs:mx-10 my-10 lg:items-start justify-center xl:gap-40 md:gap-30 2xs:gap-12 2xs:items-center">
            <div className="flex flex-col max-w-[1110px]">
              <div className="bg-white flex flex-row w-full min-w-[971px] h-28 border border-gray-200 items-center p-7 rounded-2xl justify-between mb-8">
                <p className="font-bold lg:text-3xl md:text-xl 2xs:text-lg lg:block 2xs:flex justify-center items-center gap-1">
                  My Cart
                  <span className="font-normal lg:text-2xl md:text-lg 2xs:text-base text-gray-700"></span>
                </p>
                <div
                  className="text-[#DB3A34] flex flex-row items-center md:text-base 2xs:text-sm"
                  onClick={clear}
                >
                  <img src={Bin} className="" />
                  <button className="text-danger text-lg">Clear all</button>
                </div>
              </div>
              <div className="flex flex-col gap-9 md:mx-0 2xs:mx-2">
                {data?.data?.tours.map((tour) => {
                  const { money, subscriber_number } =
                    data.data.tour_details.find((t) => t.tour_id == tour._id);
                  totalCartMoney += +money;
                  fees = (totalCartMoney * 7) / 100;
                  {
                    return (
                      <TourCardWide
                        key={tour._id}
                        id={tour._id}
                        image={tour.city.home_image}
                        title={tour.title}
                        city={tour.city.title}
                        duration={tour.duration}
                        startDate={tour.start_date}
                        pricePerPerson={tour.price_per_person}
                        totalPrice={money}
                        peopleCount={subscriber_number}
                      />
                    );
                  }
                })}
              </div>
            </div>
            <div className="border-2 px-4 max-w-[405px] w-full h-full flex flex-col gap-2 justify-center md:p-6 rounded-2xl pb-6 mb-4">
              <p className="text-2xl my-6">Order Summary</p>
              <div className="flex justify-between text-base">
                <p>booking fee</p>
                <p>${fees} </p>
              </div>
              <div className="flex justify-between text-base mb-2">
                <p>subtotal</p>
                <p>${totalCartMoney} </p>
              </div>
              <div className="flex justify-between text-xl font-bold mt-6 mb-4">
                <p>Total</p>
                <p>${totalCartMoney + fees} </p>
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
                <CustomButton
                  onClick={handleCheckout}
                  isLoading={checkoutIsLoading}
                  type="secondary"
                  value="Check out"
                  width="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
