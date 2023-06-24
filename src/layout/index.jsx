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
    "/admin",
    "/admin/login",
    "/admin/signup",
    "/admin/alltours",
    "/admin/reviews",
    "/admin/addTour",
    "/not-found",
    "/error",
    "/skeleton"
  ];
  const pathsForBackground = ["/favorite", "/cart", "/faq", "/privacy","/history"];

  const pathIncluded = pathsToHide.includes(location.pathname);
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
