import React from "react";
import { DownloadOutlined,HeartFilled } from "@ant-design/icons";

import Logo from "../../../assets/images/Logo/Logo.svg";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-5 2xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5  space-y-5 p-10 bg-[#0b0b0b] text-white">

        <div className="text-sm mt-5 ">
          <img src={Logo} alt="Travel Trust Logo" />
          <p className="mt-2 pr-[20%]">
            Discover some of Egypt’s antiquateson private tours with an
            egyptian guide .
          </p>
        </div>

        <div className="flex flex-col space-y-2 text-sm">
          <span className="footer-title opacity-100 mb-0">Quick Links</span>
          <a className="cursor-pointer hover:text-primary-green transition-all">Home</a>
          <a className="cursor-pointer hover:text-primary-green transition-all">Destinations</a>
          <a className="cursor-pointer hover:text-primary-green transition-all">Offers</a>
          <a className="cursor-pointer hover:text-primary-green transition-all">Join us</a>
        </div>

        <div className="flex flex-col space-y-2 text-sm">
          <span className="footer-title opacity-100 mb-0">Top destinations</span>
          <a className="cursor-pointer hover:text-primary-green transition-all">Dahab</a>
          <a className="cursor-pointer hover:text-primary-green transition-all">Fayoum</a>
          <a className="cursor-pointer hover:text-primary-green transition-all">Cairo</a>
          <a className="cursor-pointer hover:text-primary-green transition-all">Hurghada</a>
        </div>

        <div className="flex flex-col space-y-2 text-sm">
          <span className="footer-title opacity-100 mb-0">Support</span>
          <a className="cursor-pointer hover:text-primary-green transition-all">About us</a>
          <a className="cursor-pointer hover:text-primary-green transition-all">Privacy policy</a>
          <a className="cursor-pointer hover:text-primary-green transition-all">FAQ</a>
        </div>

        <div className="flex flex-col space-y-2 text-sm">
          <span className="footer-title opacity-100 mb-0">Get the app</span>
          <button className="btn bg-white text-black text-xs flex items-center space-x-1 normal-case">
            <DownloadOutlined className="text-xl leading-none" />
            <div className="flex flex-col">
              <span className="text-xs">Download the app on </span>
              <span className="text-sm">Windows - Mac</span>
            </div>
          </button>
        </div>

      </div>

      <div className="divider after:bg-[#a4a4a4] after:h-[0.1rem] before:bg-[#a4a4a4] before:h-[0.1rem] bg-[#0b0b0b] m-0 px-10"></div>

      <div className="flex 2xs:flex-col 2xs:space-y-2 2xs:items-center md:flex-row md:justify-between md:items-center md:space-x-5 md:space-y-0 p-2 bg-[#0b0b0b] text-white px-10 text-sm">

        <div>
          <p>Copyright © 2023 - All rights reserved by Travel Trust</p>
        </div>

        <div className=" space-x-2">
        <span>Professionally designed by Travel Trust team</span>
        <HeartFilled/> 
        </div>

      </div>

    </>
  );
};

export default Footer;
