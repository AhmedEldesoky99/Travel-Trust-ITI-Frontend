/* eslint-disable no-unused-vars */
import React from "react";


import TourCard from "../../../components/shared/TourCard";
import { getAdminData } from "../../../services/visitAdminProfile";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";


const Tours = () => {
  const { id } = useParams();
  const { isLoading, data, isSuccess } = useQuery(["AdminData", id], () =>
    getAdminData(id)
  );
  return (
    <div className="grid gap-4 mb-10 sm:grid-cols-2 lg:grid-cols-8">
      <div className="sm:col-span-1 lg:col-span-4">
        <TourCard />
      </div>
    </div>
  );
};

export default Tours;
