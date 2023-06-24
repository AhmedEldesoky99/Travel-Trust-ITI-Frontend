/* eslint-disable no-unused-vars */
import React from "react";
import { getAdminData } from "../../../services/visitAdminProfile";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const ProfileDetails = () => {
  const { id } = useParams();
  const { isLoading, data, isSuccess } = useQuery(["AdminData", id], () =>
    getAdminData(id)
  );
  return (
    <div className="flex flex-col gap-4 mb-10">
      <div>
        <p className="text-light-gray mb-2 2xs:text-base md:text-lg 2xl:text-2xl">
          About
        </p>
        <p className=" 2xs:text-sm md:text-base 2xl:text-xl">
          {data?.data.user?.bio}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <p className="mb-1 text-light-gray 2xs:text-base md:text-lg 2xl:text-2xl">
            Governorate of expertise
          </p>
          {data?.data?.user?.governorate_expertise?.map((item, index) => {
            return (
              <span
                className="badge p-3 2xs:text-sm 2xl:text-xl 2xl:p-4"
                key={index}
              >
                {item?.title}
              </span>
            );
          })}
        </div>
        <div>
          <p className="mb-1 text-light-gray 2xs:text-base md:text-lg 2xl:text-2xl">
            Language
          </p>
          {data?.data?.user?.languages && Object.entries(data?.data?.user?.languages).map(([key, value]) => {
            return (
              <span
                className="badge p-3 2xs:text-sm 2xl:text-xl 2xl:p-4"
                key={key}
              >
                {value}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
