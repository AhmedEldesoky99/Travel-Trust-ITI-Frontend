import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

import { UserIdProvider } from "../context/UserIdContext";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const pathsToHide = [
    "/join",
    "/login",
    "/signup",

    "/local",
    "/local/login",
    "/local/signup",
    "/local/alltours/:organizerId",
    "/local/tour-details/:id/:organizerId",
    "/local/reviews/:organizerId",
    "/local/profile/:organizerId",
    "/local/tour/:tourID",

    "/admin/login",
    "admin/alltours/:adminId",
    "admin/reviews/:adminId",
    "admin/tour-details/:id/:adminId",
    "admin/locals/:adminId",

    "/not-found",
    "/error",
    "/skeleton"
  ];
  const pathsForBackground = [
    "/favorite",
    "/cart",
    "/faq",
    "/privacy",
    "/history",
  ];

  const pathIncluded = pathsToHide.some((path) =>
    location.pathname.startsWith(path)
  );
  const pathBackgroundIncluded = pathsForBackground.includes(location.pathname);

  return (
    <>
      {!pathIncluded && (
        <UserIdProvider>
          <Navbar pathBackgroundIncluded={pathBackgroundIncluded} />
        </UserIdProvider>
      )}
      <Outlet />
      {!pathIncluded && <Footer />}
    </>
  );
};

export default Layout;
