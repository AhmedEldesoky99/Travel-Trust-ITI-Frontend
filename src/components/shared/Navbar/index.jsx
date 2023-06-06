import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  HomeOutlined,
  RocketOutlined,
  WalletOutlined,
  MobileOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

import Logo from "../../../assets/images/Logo/Logo.svg";

const Navbar = ({ pathBackgroundIncluded }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBackground);

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
            <li className="p-3 hover:text-primary-green">
              <UserOutlined className="p-1 hover:bg-transparent active:bg-transparent active:text-primary-green" />
            </li>
          </ul>

          {/* // Show only from xs to md */}
          <div className="dropdown dropdown-end md:hidden ">
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
                <HeartOutlined className="text-black p-0 active:bg-transparent active:text-primary-green" />
                <Link
                  to="/favorite"
                  className="text-black active:bg-transparent  active:text-primary-green"
                >
                  Trips
                </Link>
              </li>
              <li className="flex flex-row items-center">
                <ShoppingCartOutlined className="text-black p-0 active:bg-transparent active:text-primary-green" />
                <Link
                  to="/cart"
                  className="text-black active:bg-transparent  active:text-primary-green"
                >
                  Card
                </Link>
              </li>
              <li className="flex flex-row items-center">
                <QuestionCircleOutlined className="text-black p-0 active:bg-transparent active:text-primary-green" />
                <Link
                  to="/faq"
                  className="text-black active:bg-transparent  active:text-primary-green"
                >
                  Help
                </Link>
              </li>
            </ul>
          </div>

          {/* <Link to="/login" className="mr-3 cursor-pointer hover:text-primary-green">Login</Link>
          <Link to="/signup" className="btn btn-sm bg-transparent outline outline-white outline-1 normal-case hover:bg-secondary-yellow hover:outline-secondary-yellow outline-offset-0 border-none hover:text-black">Sign up</Link> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
