import React from "react";

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

import Logo from "../../../assets/images/Logo/Logo.svg"

const Navbar = () => {
  return (
    <>
      <div className="navbar justify-between bg-slate-300">
        {/* Navbar Start */}

        <div className="flex-1">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
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
                <a>Home</a>
              </li>
              <li>
                <a>Destination</a>
              </li>
              <li>
                <a>Offers</a>
              </li>
              <li>
                <a>Get the app</a>
              </li>
            </ul>
          </div>

          <ul className="menu menu-horizontal hidden md:flex text-xl">
            <li className="p-3">
              <HomeOutlined className="p-1 hover:bg-transparent" />
              <a className="hover:bg-transparent active:bg-transparent active:text-black p-1 pl-2">
                Home
              </a>
            </li>
            <li className="p-3">
              <RocketOutlined className="p-1 hover:bg-transparent" />
              <a className="hover:bg-transparent active:bg-transparent active:text-black p-1">
                Destinations
              </a>
            </li>
            <li className="p-3">
              <WalletOutlined className="p-1 hover:bg-transparent" />
              <a className="hover:bg-transparent active:bg-transparent active:text-black p-1 pr-0">
                Offers
              </a>
            </li>
            <li className="p-3">
              <MobileOutlined className="p-1 hover:bg-transparent" />
              <a className="hover:bg-transparent active:bg-transparent active:text-black p-1 pr-0">
                Get the app
              </a>
            </li>
          </ul>
        </div>

        {/* Navbar Center */}

        <div className="navbar-center md:hidden lg:flex 2xs:flex">
          <img src={Logo} alt="TravelTrust Logo" />
        </div>

        {/* Navbar End */}

        <div className="flex-1 justify-end">
          <ul className="menu menu-horizontal hidden md:flex text-xl">
            <li className="p-3">
              <HeartOutlined className="p-1 hover:bg-transparent" />
              <a className="hover:bg-transparent active:bg-transparent active:text-black p-1">
                Trips
              </a>
            </li>
            <li className="p-3">
              <ShoppingCartOutlined className="p-1 hover:bg-transparent" />
              <a className="hover:bg-transparent active:bg-transparent active:text-black p-1">
                Cart
              </a>
            </li>
            <li className="p-3">
              <QuestionCircleOutlined className="p-1 hover:bg-transparent" />
              <a className="hover:bg-transparent active:bg-transparent active:text-black p-1">
                Help
              </a>
            </li>
            <li className="p-3">
              <UserOutlined className="p-1 hover:bg-transparent" />
            </li>
          </ul>

          {/* // Show only from xs to md */}
          <div className="dropdown dropdown-end md:hidden ">
            <label tabIndex={0} className="btn btn-ghost btn-circle ">
              <div className="w-10 rounded-full flex justify-center items-center">
                <UserOutlined className="p-0 hover:bg-transparent" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Trips</a>
              </li>
              <li>
                <a>Card</a>
              </li>
              <li>
                <a>Help</a>
              </li>
            </ul>
          </div>

          {/* <a className="mr-2 cursor-pointer">Login</a>
          <a className="btn btn-sm btn-outline normal-case">Sign up</a> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
