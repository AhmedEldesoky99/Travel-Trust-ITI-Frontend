import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

import { UserIdProvider } from "../context/UserIdContext";

const Layout = () => {
  const location = useLocation();
  const pathsToHide = [
    "/join",
    "/login",
    "/signup",
    "/admin/login",
    "/admin/signup",
    "/admin/:organizerId",
    "/admin/alltours/:organizerId",
    "/admin/reviews/:organizerId",
    "/admin/profile/:organizerId",
    "/admin/addTour",
  ];
  const pathsForBackground = ["/favorite", "/cart", "/faq", "/privacy"];

  const pathIncluded = pathsToHide.includes(location.pathname);
  const pathBackgroundIncluded = pathsForBackground.includes(location.pathname);

  return (
    <>
      {!pathIncluded && (
        <UserIdProvider>
          {/* <Navbar pathBackgroundIncluded={pathBackgroundIncluded} /> */}
        </UserIdProvider>
      )}
      <Outlet />
      {/* {!pathIncluded && <Footer />} */}
    </>
  );
};

export default Layout;
