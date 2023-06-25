import React, { Suspense } from "react";

import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import { UserIdProvider } from "./context/UserIdContext";
import { AddTourFormProvider } from "./context/AddTourFormContext";

//import components
import Home from "./pages/Home";
import JoinUs from "./pages/Join us";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
// import Faq from "./pages/FAQ";
import SharedComponents from "./pages/SharedComponents";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import Search from "./pages/Search";
import EachGovernorate from "./pages/EachGovernorate";
// import Sales from "./pages/Sales";
import TourDetails from "./pages/TourDetails";
import AllTours from "./pages/AllTours";
// import Destinations from "./pages/Destinations";
import UserProfile from "./pages/UserProfile";
// import ContactUs from "./pages/ContactUs";
// import History from "./pages/History";
// import AdminProfileForUser from "./pages/AdminProfileForUser";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";
import PageSkeleton from "./pages/PageSkeleton";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";

// Local components
import AdminSignUp from "./pages/Admin/adminSignup";
import AdminLogin from "./pages/Admin/adminLogin";
import DashBoard from "./pages/Admin/DashBoard";
import AdminProfile from "./pages/Admin/adminProfile";
import AdminAllTours from "./pages/Admin/AdminAllTours";
import AdminReviews from "./pages/AdminReviews";
import AddTourPage from "./pages/Admin/addTour";

// Admin components
import MainAdminReviews from "./pages/mainAdmin/all-reviews";
import MainAdminAllTours from "./pages/mainAdmin/all-tours";
import MainAdminLogin from "./pages/mainAdmin/log-in";
import MainAdminAllLocals from "./pages/mainAdmin/all-locals";
import MainAdminDashBoard from "./pages/mainAdmin/dashboard";
import { Protect } from "./components/auth";

//lazy
const Sales = React.lazy(() => import("./pages/Sales"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Faq = React.lazy(() => import("./pages/FAQ"));
const Destinations = React.lazy(() => import("./pages/Destinations"));
const History = React.lazy(() => import("./pages/History"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const AdminProfileForUser = React.lazy(() =>
  import("./pages/AdminProfileForUser")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "join", element: <JoinUs /> },
      { path: "login", element: <Login /> },
      { path: "not-found", element: <NotFound /> },
      { path: "error", element: <ErrorPage /> },
      { path: "payment-success/:money", element: <PaymentSuccess /> },

      { path: "payment-failed", element: <PaymentFailed /> },

      {
        path: "signup",
        element: <SignUp />,
      },
      { path: "each-governorate/:id", element: <EachGovernorate /> },
      {
        path: "sales",
        element: <Sales />,
      },
      { path: "admin-profile/:id", element: <AdminProfileForUser /> },
      { path: "tour-details/:id", element: <TourDetails /> },
      // { path: "shared", element: <SharedComponents /> },
      { path: "faq", element: <Faq /> },
      { path: "search", element: <Search /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      { path: "Aboutus", element: <AboutUs /> },
      {
        path: "cart",
        element: (
          <Protect role="user">
            <Cart />
          </Protect>
        ),
      },
      {
        path: "favorite",
        element: (
          <Protect role="user">
            <Favorite />
          </Protect>
        ),
      },
      { path: "all-tours", element: <AllTours /> },
      { path: "destinations", element: <Destinations /> },
      { path: "user-profile/:id", element: <UserProfile /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "history", element: <History /> },
      { path: "profile/admin/:organizerId", element: <AdminProfileForUser /> },

      //local
      {
        path: "local/dashboard",
        element: (
          <Protect role="organizer">
            {" "}
            <DashBoard />
          </Protect>
        ),
      },
      {
        path: "local/signup",
        element: <AdminSignUp />,
      },
      {
        path: "local/login",
        element: <AdminLogin />,
      },
      {
        path: "local/alltours/:organizerId",
        element: (
          <Protect role="organizer">
            <AdminAllTours />
          </Protect>
        ),
      },
      {
        path: "local/reviews/:organizerId",
        element: (
          <Protect role="organizer">
            <AdminReviews />
          </Protect>
        ),
      },
      {
        path: "local/tour-details/:id/:organizerId",
        element: <TourDetails />,
      },
      {
        path: "local/profile/:organizerId",
        element: (
          <Protect role="organizer">
            <AdminProfile />
          </Protect>
        ),
      },

      {
        path: "local/tour/:tourID",
        element: (
          <AddTourFormProvider>
            <AddTourPage />
          </AddTourFormProvider>
        ),
      },

      //admin
      {
        path: "admin/dashboard",
        element: (
          <Protect role="admin">
            <MainAdminDashBoard />
          </Protect>
        ),
      },
      {
        path: "admin/login",
        element: <MainAdminLogin />,
      },
      {
        path: "admin/alltours",
        element: (
          <Protect role="admin">
            <MainAdminAllTours />
          </Protect>
        ),
      },
      {
        path: "admin/reviews",
        element: (
          <Protect role="admin">
            <MainAdminReviews />
          </Protect>
        ),
      },
      {
        path: "admin/tour-details/:id/:adminId",
        element: <TourDetails />,
      },
      // { path: "admin/users/:adminId", element: <MainAdminAllUsers /> },
      {
        path: "admin/locals",
        element: (
          <Protect role="admin">
            <MainAdminAllLocals />
          </Protect>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
