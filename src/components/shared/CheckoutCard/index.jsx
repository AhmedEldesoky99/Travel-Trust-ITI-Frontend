import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";

import CustomButton from "./../../../components/shared/CustomButton/index";

import Icon from "../../../utils/icons";

import {
  addToCartMutation,
  deleteFromCart,
  getCart,
} from "../../../services/Cart";
import { getUserData } from "./../../../services/user";

const CheckoutCard = ({ data }) => {
  const queryClient = useQueryClient();

  // --------- States ----------
  const [persons, setPersons] = useState(1);
  const personsMax = persons >= data?.person_num;

  // ------------- handlers ------------
  const handleIncrement = () => {
    if (personsMax) {
      setPersons((prevPersons) => prevPersons);
    } else {
      setPersons((prevPersons) => prevPersons + 1);
    }
  };

  const handleDecrement = () => {
    setPersons((prevPersons) =>
      prevPersons === 1 ? prevPersons : prevPersons - 1
    );
  };

  const invalidateCart = () => {
    queryClient.invalidateQueries({ queryKey: ["cart"] });
  };

  const { mutate, isLoading, isSuccess } = addToCartMutation(
    data?._id,
    {
      subscriber_number: `${persons}`,
    },
    invalidateCart
  );

  const handleAddToCart = (e) => {
    e.preventDefault();
    mutate();

    const prevValue = queryClient.getQueryData(["cart"]);
    console.log(prevValue);

    let exists = false;

    prevValue?.data?.tours?.forEach((tour) => {
      if (tour._id == data?._id) {
        exists = true;
      }
    });

    // console.log({ tour_id: data?._id, prevValue });
    if (!exists) {
      prevValue?.data?.tours.push({});
      queryClient.setQueryData(["cart"], () => {
        return {
          data: { tours: prevValue?.data?.tours },
        };
      });
    }
  };

  const { data: userCartData } = useQuery(["cart"], getCart);
  const {
    mutate: removeMutate,
    isLoading: isRemoveLoading,
    isSuccess: isRemoveSuccess,
  } = useMutation(deleteFromCart, {
    onSuccess: (res) => {
      console.log(res);
      invalidateCart();
    },
    onError: (err) => console.log(err),
  });

  const handleRemoveFromCard = (e) => {
    e.preventDefault();
    removeMutate(data?._id);
  };

  // { id, admin }
  const { id, organizerId } = useParams();
  console.log("details", organizerId);


  return (
    <>
      {organizerId && (
        <div className="mb-6 flex justify-center items-center">
          <Link to={`/local/alltours/${organizerId}`}>
            <CustomButton value="Go Back to Admin" width="w-96" />
          </Link>
        </div>
      )}
      <div className="flex flex-col justify-center items-center gap-4 border border-solid border-black/10 rounded-2xl shadow-md 2xs:p-8 sm:px-28 md:px-36 lg:p-8">
        <p className="badge 2xs:text-base 2xl:text-xl p-4 bg-tertiary-red border-tertiary-red w-full">
          Likely to sell out
        </p>
        <p className="2xs:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
          {" "}
          <span className="2xs:text-base 2xl:text-xl font-normal">from </span>
          EGP {data?.price_per_person} /{" "}
          <span className="2xs:text-base 2xl:text-xl font-normal">
            per person
          </span>
        </p>
        <div className="min-w-[10rem] text-center ">
          <p className="lg:text-base 2xl:text-xl">Select Participants</p>
          <div className="flex justify-between items-center mt-2">
            <button onClick={handleDecrement}>
              <div className="shadow-md p-3 rounded-lg">
                <Icon name="userDelete" />
              </div>
            </button>

            <span className="text-lg 2xl:text-2xl">
              {persons}{" "}
              {personsMax ? (
                <span className="text-tertiary-red">Max</span>
              ) : null}
            </span>

            <button disabled={personsMax} onClick={handleIncrement}>
              <div
                className={`shadow-md p-3 rounded-lg ${
                  personsMax ? "bg-gray-200" : null
                }`}
              >
                <Icon name="userAdd" />
              </div>
            </button>
          </div>
        </div>

        {userCartData?.data?.tours.length
          ? userCartData?.data?.tours?.map((tour) => {
              return tour._id === data?._id ? (
                <CustomButton
                  key={data?._id}
                  onClick={handleRemoveFromCard}
                  isLoading={isRemoveLoading}
                  type="delete"
                  value="Remove From Cart"
                  width="w-full"
                />
              ) : (
                tour._id !== data?._id && (
                  <CustomButton
                    key={data?._id}
                    onClick={handleAddToCart}
                    isLoading={isLoading}
                    value="Add To Cart"
                    width="w-full"
                  />
                )
              );
            })
          : null}

        {!userCartData?.data?.tours.length && (
          <CustomButton
            key={data?._id}
            onClick={handleAddToCart}
            isLoading={isLoading}
            value="Add To Cart"
            width="w-full"
          />
        )}

        <CustomButton value="Check out" type="secondary" width="w-full" />
      </div>
    </>
  );
};

export default CheckoutCard;
