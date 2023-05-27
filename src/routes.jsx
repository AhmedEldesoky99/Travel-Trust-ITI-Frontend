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

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/join", element: <JoinUs /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/shared", element: <SharedComponents /> },
  { path: "/faq", element: <Faq /> },
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/Aboutus", element: <AboutUs /> },
  { path: "/cart", element: <Cart /> },
  { path: "/favorite", element: <Favorite /> },
  { path: "/search", element: <Search /> },
]);
