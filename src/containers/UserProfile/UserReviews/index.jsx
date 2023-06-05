import { Rate } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const UserReviews = () => {
  return (
    <div className="grid gap-4 mb-10 2xs:grid-cols-1 lg:grid-cols-8">
      <div className="2xs:col-span-1 lg:col-span-8">
        <div className="border border-solid border-black/10 rounded-2xl shadow-md p-8 flex flex-col justify-center gap-4">
          <div>
            <div className="flex xs:flex-row xs:justify-between xs:items-center 2xs:flex-col 2xs:items-start">
              <p className="font-bold 2xs:text-sm sm:text-base lg:text-lg 2xl:text-2xl">
                Giza in 6 days explore egypt
              </p>
              <Link to="" className="hover:text-primary-green">
                <span className="underline 2xs:text-sm md:text-base 2xl:text-lg">View Details</span>
              </Link>
            </div>
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
    </div>
  );
};

export default UserReviews;
