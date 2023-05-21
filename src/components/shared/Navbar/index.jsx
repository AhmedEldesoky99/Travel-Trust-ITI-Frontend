import React from "react";
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

const Navbar = () => {
  return (
    <>
      <div className="navbar justify-betwee fixed bg-transparent text-white">
        {/* Navbar Start */}

        <div className="flex-1">
          {/* // Show only from xs to md */}
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost md:hidden btn-md active:text-secondary-yellow"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  to="/"
                  className="text-black active:bg-transparent active:text-secondary-yellow"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-black active:bg-transparent active:text-secondary-yellow"
                >
                  Destination
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-black active:bg-transparent active:text-secondary-yellow"
                >
                  Offers
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-black active:bg-transparent active:text-secondary-yellow"
                >
                  Get the app
                </Link>
              </li>
            </ul>
          </div>

          <ul className="menu menu-horizontal hidden md:flex lg:text-base 2xl:text-xl ">
            <li className="p-3 hover:text-secondary-yellow">
              <HomeOutlined className="p-1 hover:bg-transparent" />
              <Link to="/" className="hover:bg-transparent active:bg-transparent active:text-black p-1 pl-2">
                Home
              </Link>
            </li>
            <li className="p-3 hover:text-secondary-yellow">
              <RocketOutlined className="p-1 hover:bg-transparent" />
              <Link to="" className="hover:bg-transparent active:bg-transparent active:text-black p-1">
                Destinations
              </Link>
            </li>
            <li className="p-3 hover:text-secondary-yellow">
              <WalletOutlined className="p-1 hover:bg-transparent" />
              <Link to="" className="hover:bg-transparent active:bg-transparent active:text-black p-1 pr-0">
                Offers
              </Link>
            </li>
            <li className="p-3 hover:text-secondary-yellow">
              <MobileOutlined className="p-1 hover:bg-transparent" />
              <Link to="" className="hover:bg-transparent active:bg-transparent active:text-black p-1 pr-0">
                Get the app
              </Link>
            </li>
          </ul>
        </div>

        {/* Navbar Center */}

        <div className="navbar-center md:hidden lg:flex 2xs:flex">
          <img src={Logo} alt="TravelTrust Logo" />
        </div>

        {/* Navbar End */}

        <div className="flex-1 justify-end">
          <ul className="menu menu-horizontal hidden md:flex lg:text-base 2xl:text-xl">
            <li className="p-3 hover:text-secondary-yellow">
              <HeartOutlined className="p-1 hover:bg-transparent" />
              <Link to="" className="hover:bg-transparent active:bg-transparent active:text-black p-1">
                Trips
              </Link>
            </li>
            <li className="p-3 hover:text-secondary-yellow">
              <ShoppingCartOutlined className="p-1 hover:bg-transparent" />
              <Link to="" className="hover:bg-transparent active:bg-transparent active:text-black p-1">
                Cart
              </Link>
            </li>
            <li className="p-3 hover:text-secondary-yellow">
              <QuestionCircleOutlined className="p-1 hover:bg-transparent" />
              <Link to="" className="hover:bg-transparent active:bg-transparent active:text-black p-1">
                Help
              </Link>
            </li>
            <li className="p-3 hover:text-secondary-yellow">
              <UserOutlined className="p-1 hover:bg-transparent" />
            </li>
          </ul>

          {/* // Show only from xs to md */}
          <div className="dropdown dropdown-end md:hidden ">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle text-xl active:text-secondary-yellow"
            >
              <div className="w-10 rounded-full flex justify-center items-center">
                <UserOutlined className="p-0 hover:bg-transparent" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="" className="text-black active:bg-transparent active:text-secondary-yellow">
                  Trips
                </Link>
              </li>
              <li>
                <Link to="" className="text-black active:bg-transparent active:text-secondary-yellow">
                  Card
                </Link>
              </li>
              <li>
                <Link to="" className="text-black active:bg-transparent active:text-secondary-yellow">
                  Help
                </Link>
              </li>
            </ul>
          </div>

          {/* <Link to="" className="mr-3 cursor-pointer hover:text-secondary-yellow">Login</Link>
          <Link to="" className="btn btn-sm bg-transparent outline outline-white outline-1 normal-case hover:bg-secondary-yellow hover:outline-secondary-yellow outline-offset-0 border-none hover:text-black">Sign up</Link> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
