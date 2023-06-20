/* eslint-disable no-unused-vars */
import React from "react";
import { getAdminData } from "../../../services/visitAdminProfile";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";


const Header = () => {

  const { id } = useParams();
  const { isLoading, data, isSuccess } = useQuery(["AdminData", id], () =>
    getAdminData(id)
  );

  return <header className="hero min-h-[55vh] bg-salesBG">
    <div className="hero-overlay bg-black/[0.3]"></div>
  </header>;
};

export default Header;
