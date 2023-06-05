import { createBrowserRouter } from "react-router-dom";

//import components
import Home from "./pages/Home";
import JoinUs from "./pages/Join us";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Faq from "./pages/FAQ";
import SharedComponents from "./pages/SharedComponents";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import Search from "./pages/Search";
import EachGovernorate from "./pages/EachGovernorate";
import Sales from "./pages/Sales";
import TourDetails from "./pages/TourDetails";
import AllTours from "./pages/AllTours";
import Destinations from "./pages/Destinations";
import UserProfile from "./pages/UserProfile";

// Admin components
import AdminSignUp from "./pages/Admin/adminSignup";
import AdminLogin from "./pages/Admin/adminLogin";
import DashBoard from "./pages/Admin/DashBoard";
import AdminAllTours from "./pages/Admin/AdminAllTours";
import AdminReviews from "./pages/AdminReviews";
import AddTourPage from "./pages/Admin/addTour";
import { AddTourFormProvider } from "./context/AddTourFormContext";

import Layout from "./layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "join", element: <JoinUs /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "each-governorate/:id", element: <EachGovernorate /> },
      { path: "sales", element: <Sales /> },
      { path: "tour-details/:id", element: <TourDetails /> },
      { path: "shared", element: <SharedComponents /> },
      { path: "faq", element: <Faq /> },
      { path: "/search", element: <Search /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      { path: "Aboutus", element: <AboutUs /> },
      { path: "cart", element: <Cart /> },
      { path: "favorite", element: <Favorite /> },
      { path: "all-tours", element: <AllTours /> },
      { path: "destinations", element: <Destinations /> },
      { path: "user-profile/:id", element: <UserProfile /> },
      { path: "/sales", element: <Sales /> },

      //admin
      { path: "admin", element: <DashBoard /> },
      { path: "admin/signup", element: <AdminSignUp /> },
      { path: "admin/login", element: <AdminLogin /> },
      { path: "admin/alltours", element: <AdminAllTours /> },
      { path: "admin/reviews", element: <AdminReviews /> },
      {
        path: "admin/addTour",
        element: (
          <AddTourFormProvider>
            <AddTourPage />
          </AddTourFormProvider>
        ),
      },
    ],
  },
]);
