import React, { useState } from "react";

import Icon from "../../../utils/icons";
import CustomButton from "./../../../components/shared/CustomButton/index";
import { Link, useParams } from "react-router-dom";

const CheckoutCard = () => {
  const [persons, setPersons] = useState(1);

  const handleIncrement = () => {
    setPersons(persons + 1);
  };

  const handleDecrement = () => {
    setPersons(persons === 1 ? persons : persons - 1);
  };

  const { id, admin } = useParams();
  console.log("details", admin);

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
          EGP 2,965 /{" "}
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

            <span className="text-lg 2xl:text-2xl">{persons}</span>

            <button onClick={handleIncrement}>
              <div className="shadow-md p-3 rounded-lg">
                <Icon name="userAdd" />
              </div>
            </button>
          </div>
        </div>
        <CustomButton value="Add to Cart" width="w-full" />
        <CustomButton value="Check out" type="secondary" width="w-full" />
      </div>
    </>
  );
};

export default CheckoutCard;
