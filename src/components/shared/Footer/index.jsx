import React from "react";
import { Link } from "react-router-dom";

import {
  DownloadOutlined,
  HeartFilled,
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  BehanceSquareFilled,
} from "@ant-design/icons";

import Logo from "../../../assets/images/Logo/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="grid 2xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 space-y-5 p-10 bg-[#0b0b0b] text-white">
        <div className="mt-5 lg:col-span-2">
          <Link to="/">
            <img src={Logo} alt="Travel Trust Logo" />
          </Link>
          <p className="mt-2 pr-[20%] 2xs:text-sm 2xl:text-base">
            Discover some of Egypt’s antiquateson private tours with an egyptian
            guide .
          </p>
          <div className="flex space-x-4 mt-4">
            <FacebookFilled className="2xs:text-2xl lg:text-3xl cursor-pointer hover:text-primary-green transition duration-300" />
            <TwitterSquareFilled className="2xs:text-2xl lg:text-3xl cursor-pointer hover:text-primary-green transition duration-300" />
            <LinkedinFilled className="2xs:text-2xl lg:text-3xl cursor-pointer hover:text-primary-green transition duration-300" />
            <BehanceSquareFilled className="2xs:text-2xl lg:text-3xl cursor-pointer hover:text-primary-green transition duration-300" />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="footer-title opacity-100 mb-0 2xs:text-base 2xl:text-lg">
            Quick Links
          </span>
          <Link to="" className="cursor-pointer hover:text-primary-green transition-all 2xs:text-sm 2xl:text-base">
            Home
          </Link>
          <Link to="" className="cursor-pointer hover:text-primary-green transition-all 2xs:text-sm 2xl:text-base">
            Destinations
          </Link>
          <Link to="" className="cursor-pointer hover:text-primary-green transition-all 2xs:text-sm 2xl:text-base">
            Offers
          </Link>
          <Link to="" className="cursor-pointer hover:text-primary-green transition-all 2xs:text-sm 2xl:text-base">
            Join us
          </Link>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="footer-title opacity-100 mb-0 2xs:text-base 2xl:text-lg">
            Top destinations
          </span>
          <Link to="" className="cursor-pointer hover:text-primary-green transition-all 2xs:text-sm 2xl:text-base">
            Dahab
          </Link>
          <Link to="" className="cursor-pointer hover:text-primary-green transition-all 2xs:text-sm 2xl:text-base">
            Fayoum
          </Link>
          <Link to="" className="cursor-pointer hover:text-primary-green transition-all 2xs:text-sm 2xl:text-base">
            Cairo
          </Link>
          <Link to="" className="cursor-pointer hover:text-primary-green transition-all text-base 2xl:text-base">
            Hurghada
          </Link>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="footer-title opacity-100 mb-0 2xs:text-base 2xl:text-lg">
            Support
          </span>
          <Link to="" className="cursor-pointer hover:text-primary-green transition-all 2xs:text-sm 2xl:text-base">
            About us
          </Link>
          <Link to="" className="cursor-pointer hover:text-primary-green transition-all 2xs:text-sm 2xl:text-base">
            Privacy policy
          </Link>
          <Link to="" className="cursor-pointer hover:text-primary-green transition-all 2xs:text-sm 2xl:text-base">
            FAQ
          </Link>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="footer-title opacity-100 mb-0 2xs:text-base 2xl:text-lg">
            Get the app
          </span>
          <button className="group relative 2xs:w-[12rem] xs:w-[11rem] bg-white text-black flex justify-center items-center space-x-1 p-2 rounded-lg font-bold normal-case hover:bg-black hover:text-white hover:border-white hover:border transition duration-300">
            <DownloadOutlined className="text-xl leading-none" />
            <div className="flex flex-col">
              <span className="2xs:text-xs">Download the app on </span>
              <span className="2xs:text-xs">Windows - Mac</span>
            </div>
            <div className="absolute top-2 left-1 outline-2 outline-white outline h-12 2xs:w-[12rem] xs:w-[11rem] rounded-lg group-hover:hidden"></div>
          </button>
        </div>
      </div>

      <div className="divider after:bg-[#a4a4a4] after:h-[0.1rem] before:bg-[#a4a4a4] before:h-[0.1rem] bg-[#0b0b0b] m-0 px-10"></div>

      <div className="flex 2xs:flex-col 2xs:space-y-2 2xs:items-center md:flex-row md:justify-between md:items-center md:space-x-5 md:space-y-0 p-2 bg-[#0b0b0b] text-white px-10 text-sm">
        <div>
          <p className="2xs:text-sm 2xl:text-base">
            Copyright © 2023 - All rights reserved by Travel Trust
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <span className="2xs:text-sm 2xl:text-base">
            Professionally designed by Travel Trust team
          </span>
          <HeartFilled />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
