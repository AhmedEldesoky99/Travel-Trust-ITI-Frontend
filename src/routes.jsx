import { createBrowserRouter } from "react-router-dom";

//import components
import Home from "./pages/Home";
import JoinUs from "./pages/Join us";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import SharedComponents from "./pages/SharedComponents";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";

// Admin components
import AdminSignUp from "./pages/Admin/adminSignup";
import AdminLogin from "./pages/Admin/adminLogin";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/join", element: <JoinUs /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/shared", element: <SharedComponents /> },
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/Aboutus", element: <AboutUs /> },

  //admin
  { path: "/admin/signup", element: <AdminSignUp /> },
  { path: "/admin/login", element: <AdminLogin /> },
]);
