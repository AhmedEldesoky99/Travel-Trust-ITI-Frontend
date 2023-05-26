import React from "react";
import { Link } from "react-router-dom";
import { Rate } from "antd";


import AdminImage from "../../../assets/images/TourCard/MrRobot.jpg";

const ReviewCard = () => {
  return (
    <>
      <div className="2xs:col-span-1 lg:col-span-1 ">
        <div className="avatar">
          <div className="2xs:w-24 lg:w-full rounded-full">
            <Link to="">
              <img src={AdminImage} />
            </Link>
          </div>
        </div>
      </div>

      <div className="2xs:col-span-1 lg:col-span-7">
        <div className="border border-solid border-black/10 rounded-2xl shadow-md p-8 flex flex-col justify-center gap-4">
          <div>
            <Link className="hover:text-primary-green" to="">
              <p className="font-bold 2xs:text-sm sm:text-base lg:text-lg 2xl:text-2xl">
                Osama Sayed
              </p>
            </Link>
            <Rate disabled defaultValue={2} />
          </div>
          <div>
            <p className="2xs:text-sm sm:text-base 2xl:text-xl">
              Our stay was pleasant and welcoming. We stayed in an apartment
              meant for 3 adults with kitchen facilities. The cleaning services
              were superp. We liked the laundry and kitchen cleaning services on
              top of the regular cleaning services. The support services were
              prompt...much needed extra bowls were delivered in a jiffy. Front
              desk were very cotdial and helpful though working under at times.
              Needed travel arrangements and info were delivered with smiles.
              Delivering luggeges to the room was done witbout request.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
