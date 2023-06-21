import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import CustomButton from "./../../../components/shared/CustomButton/index";

import Icon from "../../../utils/icons";

import { addToCartMutation } from "../../../services/Cart";

const CheckoutCard = ({ data }) => {
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


  const { mutate, isLoading } = addToCartMutation(data?._id, {
    subscriber_number: `${persons}`,
  });


  const handleAddToCart = (e) => {
    e.preventDefault();
    mutate();
  };



  const { id, admin } = useParams();
  // console.log("details", admin);


  return (
    <>
      {admin && (
        <div className="mb-10 flex justify-center items-center">
          {/* to do :  get organizer id */}
          <Link to="/admin/:organizerId">
            <CustomButton value="Go Back to Admin" width="w-full" />
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
        <CustomButton
          onClick={handleAddToCart}
          isLoading={isLoading}
          value="Add to Cart"
          width="w-full"
        />
        <CustomButton value="Check out" type="secondary" width="w-full" />
      </div>
    </>
  );
};

export default CheckoutCard;
