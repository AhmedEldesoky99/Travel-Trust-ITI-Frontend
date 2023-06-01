import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Layout = () => {
  const location = useLocation();
  const pathsToHide = [
    "/join",
    "/login",
    "/signup",
    "/admin",
    "/admin/login",
    "/admin/signup",
  ];
  const pathsForBackground = ["/favorite", "/cart", "/faq", "/privacy"];

  const pathIncluded = pathsToHide.includes(location.pathname);
  const pathBackgroundIncluded = pathsForBackground.includes(location.pathname);

  return (
    <>
      {!pathIncluded && (
        <Navbar pathBackgroundIncluded={pathBackgroundIncluded} />
      )}
      <Outlet />
      {!pathIncluded && <Footer />}
    </>
  );
};

export default Layout;
