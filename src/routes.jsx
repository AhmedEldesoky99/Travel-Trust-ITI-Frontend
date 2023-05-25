import { createBrowserRouter } from "react-router-dom";

//import components
import Home from "./pages/Home";
import JoinUs from "./pages/Join us";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import PrivacyPolicy from "./pages/PrivacyPolicy"
import AboutUs from "./pages/AboutUs";
import EachGovernorate from "./pages/EachGovernorate";
import Sales from "./pages/Sales";
import TourDetails from "./pages/TourDetails";
import SharedComponents from "./pages/SharedComponents";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/join", element: <JoinUs /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/Aboutus", element: <AboutUs /> },
  { path: "/each-governorate", element: <EachGovernorate /> },
  { path: "/sales", element: <Sales /> },
  { path: "/tour-details", element: <TourDetails /> },
  { path: "/shared", element: <SharedComponents /> },

]);
