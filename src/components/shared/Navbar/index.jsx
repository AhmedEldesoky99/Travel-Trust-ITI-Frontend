import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  HomeOutlined,
  RocketOutlined,
  WalletOutlined,
  MobileOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  LoginOutlined,
  RightCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import Logo from "../../../assets/images/Logo/Logo.svg";

import UserIdContext from "../../../context/UserIdContext";

import { getUserData } from "../../../services/user";

const Navbar = ({ pathBackgroundIncluded }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const changeNavbarBackground = () => {
    if (window.scrollY >= 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBackground);

  // const { userId } = useContext(UserIdContext);
  // console.log(userId);



  const userId = localStorage.getItem("userId");
  const { data } = getUserData(userId);
  // console.log(data);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("travelJWT");
    localStorage.removeItem("userId");
  };


  
  return (
    <>
      <nav
        className={`navbar justify-between fixed top-0 z-50 text-white shadow-md transition-all duration-500  ${
          pathBackgroundIncluded
            ? "bg-[#0B0B0B]"
            : isScrolled
            ? "bg-[#0B0B0B]"
            : "bg-transparent"
        } `}
      >
        {/* Navbar Start */}

        <div className="flex-1">
          {/* // Show only from xs to md */}
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost md:hidden btn-md active:text-primary-green"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-40"
            >
              <li className="flex flex-row">
                <HomeOutlined className="text-black p-0 active:bg-transparent active:text-primary-green" />
                <Link
                  to="/"
                  className="text-black active:bg-transparent  active:text-primary-green"
                >
                  Home
                </Link>
              </li>
              <li className="flex flex-row">
                <RocketOutlined className="text-black p-0 active:bg-transparent active:text-primary-green" />
                <Link
                  to="/destinations"
                  className="text-black active:bg-transparent  active:text-primary-green"
                >
                  Destination
                </Link>
              </li>
              <li className="flex flex-row">
                <WalletOutlined className="text-black p-0 active:bg-transparent active:text-primary-green" />
                <Link
                  to="/sales"
                  className="text-black active:bg-transparent  active:text-primary-green"
                >
                  Offers
                </Link>
              </li>
              <li className="flex flex-row">
                <MobileOutlined className="text-black p-0 active:bg-transparent active:text-primary-green" />
                <Link
                  to="/"
                  className="text-black active:bg-transparent  active:text-primary-green"
                >
                  Get the app
                </Link>
              </li>
            </ul>
          </div>

          <ul className="menu menu-horizontal hidden md:flex lg:text-base 2xl:text-xl ">
            <li className="p-3 hover:text-primary-green">
              <HomeOutlined className="p-1 hover:bg-transparent active:bg-transparent active:text-primary-green" />
              <Link
                to="/"
                className="hover:bg-transparent active:bg-transparent  active:text-primary-green p-1 pl-2"
              >
                Home
              </Link>
            </li>
            <li className="p-3 hover:text-primary-green">
              <RocketOutlined className="p-1 hover:bg-transparent active:bg-transparent active:text-primary-green" />
              <Link
                to="/destinations"
                className="hover:bg-transparent active:bg-transparent  active:text-primary-green p-1"
              >
                Destinations
              </Link>
            </li>
            <li className="p-3 hover:text-primary-green">
              <WalletOutlined className="p-1 hover:bg-transparent active:bg-transparent active:text-primary-green" />
              <Link
                to="/sales"
                className="hover:bg-transparent active:bg-transparent  active:text-primary-green p-1 pr-0"
              >
                Offers
              </Link>
            </li>
            <li className="p-3 hover:text-primary-green">
              <MobileOutlined className="p-1 hover:bg-transparent active:bg-transparent active:text-primary-green" />
              <Link
                to="/"
                className="hover:bg-transparent active:bg-transparent  active:text-primary-green p-1 pr-0"
              >
                Get the app
              </Link>
            </li>
          </ul>
        </div>

        {/* Navbar Center */}

        <div className="navbar-center md:hidden lg:flex 2xs:flex">
          <Link to="/">
            <img src={Logo} alt="TravelTrust Logo" />
          </Link>
        </div>

        {/* Navbar End */}

        <div className="flex-1 justify-end">
          {/* // Show only from md */}

          {data?.success ? (
            <>
              <ul className="menu menu-horizontal hidden md:flex lg:text-base 2xl:text-xl">
                <li className="p-3 hover:text-primary-green">
                  <HeartOutlined className="p-1 hover:bg-transparent active:bg-transparent active:text-primary-green" />
                  <Link
                    to="/favorite"
                    className="hover:bg-transparent active:bg-transparent  active:text-primary-green p-1"
                  >
                    Trips
                  </Link>
                </li>
                <li className="p-3 hover:text-primary-green">
                  <ShoppingCartOutlined className="p-1 hover:bg-transparent active:bg-transparent active:text-primary-green" />
                  <Link
                    to="/cart"
                    className="hover:bg-transparent active:bg-transparent  active:text-primary-green p-1"
                  >
                    Cart
                  </Link>
                </li>
                <li className="p-3 hover:text-primary-green">
                  <QuestionCircleOutlined className="p-1 hover:bg-transparent active:bg-transparent active:text-primary-green" />
                  <Link
                    to="/faq"
                    className="hover:bg-transparent active:bg-transparent  active:text-primary-green p-1"
                  >
                    Help
                  </Link>
                </li>

                {data?.data?.photo?.length ? (
                  <>
                    <div className="dropdown dropdown-end">
                      <li className="p-3 hover:text-primary-green">
                        <label
                          tabIndex={0}
                          className="btn btn-ghost btn-circle text-xl active:text-primary-green"
                        >
                          <div className="avatar">
                            <div className="px-4 rounded-full">
                              <img src={data.data.photo[0]} alt="User Image" />
                            </div>
                          </div>
                        </label>
                      </li>

                      <ul
                        tabIndex={0}
                        className="mt-3 p-4 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-40"
                      >
                        <li className="flex flex-row items-center">
                          <UserOutlined className="text-black p-0 active:bg-transparent active:text-primary-green" />
                          <Link
                            to={`/user-profile/${userId}`}
                            className="text-black hover:bg-transparent active:bg-transparent  active:text-primary-green"
                          >
                            Profile
                          </Link>
                        </li>
                        <li
                          onClick={logout}
                          className="flex flex-row items-center"
                        >
                          <LogoutOutlined className="text-black p-0 active:bg-transparent active:text-primary-green" />
                          <Link className="text-black hover:bg-transparent active:bg-transparent  active:text-primary-green">
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="dropdown dropdown-end">
                      <li className="p-3 hover:text-primary-green">
                        <label
                          tabIndex={0}
                          className="btn btn-ghost btn-circle text-xl active:text-primary-green"
                        >
                          <div className="w-10 rounded-full flex justify-center items-center">
                            <UserOutlined className="p-0 hover:bg-transparent" />
                          </div>
                        </label>
                      </li>

                      <ul
                        tabIndex={0}
                        className="mt-3 p-4 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-40"
                      >
                        <li className="flex flex-row items-center">
                          <UserOutlined className="text-black p-0 active:bg-transparent active:text-primary-green" />
                          <Link
                            to={`/user-profile/${userId}`}
                            className="text-black hover:bg-transparent active:bg-transparent  active:text-primary-green"
                          >
                            Profile
                          </Link>
                        </li>
                        <li
                          onClick={logout}
                          className="flex flex-row items-center"
                        >
                          <LogoutOutlined className="text-black p-0 active:bg-transparent active:text-primary-green" />
                          <Link className="text-black hover:bg-transparent active:bg-transparent  active:text-primary-green">
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </ul>

              {/* // Show only from 2xs to md */}

              <div className="dropdown dropdown-end md:hidden ">
                {data?.data?.photo?.length ? (
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle text-xl active:text-primary-green"
                  >
                    <div className="avatar">
                      <div className="px-4 rounded-full">
                        <img src={data.data.photo[0]} alt="User Image" />
                      </div>
                    </div>
                  </label>
                ) : (
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle text-xl active:text-primary-green"
                  >
                    <div className="w-10 rounded-full flex justify-center items-center">
                      <UserOutlined className="p-0 hover:bg-transparent" />
                    </div>
                  </label>
                )}
                <ul
                  tabIndex={0}
                  className="mt-3 p-4 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-40"
                >
                  <li className="flex flex-row items-center">
                    <UserOutlined className="text-black p-0 active:bg-transparent active:text-primary-green" />
                    <Link
                      to={`/user-profile/${userId}`}
                      className="text-black hover:bg-transparent active:bg-transparent  active:text-primary-green"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="flex flex-row items-center">
                    <HeartOutlined className="text-black p-0 active:bg-transparent active:text-primary-green" />
                    <Link
                      to="/favorite"
                      className="text-black hover:bg-transparent active:bg-transparent  active:text-primary-green"
                    >
                      Trips
                    </Link>
                  </li>
                  <li className="flex flex-row items-center">
                    <ShoppingCartOutlined className="text-black p-0 active:bg-transparent active:text-primary-green" />
                    <Link
                      to="/cart"
                      className="text-black hover:bg-transparent active:bg-transparent  active:text-primary-green"
                    >
                      Card
                    </Link>
                  </li>
                  <li className="flex flex-row items-center">
                    <QuestionCircleOutlined className="text-black p-0 hover:bg-transparent active:bg-transparent  active:text-primary-green" />
                    <Link
                      to="/faq"
                      className="text-black hover:bg-transparent active:bg-transparent  active:text-primary-green"
                    >
                      Help
                    </Link>
                  </li>
                  <li onClick={logout} className="flex flex-row items-center">
                    <LogoutOutlined className="text-black p-0 active:bg-transparent active:text-primary-green" />
                    <Link className="text-black hover:bg-transparent active:bg-transparent  active:text-primary-green">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="dropdown dropdown-end 2xs:block sm:hidden">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle text-xl active:text-primary-green"
                >
                  <div className="w-10 rounded-full flex justify-center items-center">
                    <UserOutlined className="p-0 hover:bg-transparent" />
                  </div>
                </label>

                <ul
                  tabIndex={0}
                  className="mt-3 p-4 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-40"
                >
                  <li className="flex flex-row items-center">
                    <LoginOutlined className="text-black p-0 active:bg-transparent active:text-primary-green" />
                    <Link
                      to="/login"
                      className="text-black hover:bg-transparent active:bg-transparent  active:text-primary-green"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="flex flex-row items-center">
                    <RightCircleOutlined className="text-black p-0 active:bg-transparent active:text-primary-green" />
                    <Link
                      to="/signup"
                      className="text-black hover:bg-transparent active:bg-transparent  active:text-primary-green"
                    >
                      Signup
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="p-3 2xs:hidden sm:block">
                <Link
                  to="/login"
                  className="mr-3 cursor-pointer hover:text-primary-green"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn btn-sm bg-transparent outline outline-white outline-1 normal-case hover:bg-primary-green hover:outline-primary-green outline-offset-0 border-none transition-all duration-300"
                >
                  Sign up
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
