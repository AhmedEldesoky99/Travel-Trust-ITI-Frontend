import { Alert } from "antd";
import React from "react";
import Marquee from "react-fast-marquee";
import  "../LoopBanner/style.css"
import Icon from "../../utils/icons";

const LoopBanner = () => (
  <div className="w-full min-h-[540px] flex flex-col justify-center bannerLoop">
    <Alert
      banner
      message={
        <Marquee pauseOnHover gradient={false}>
        <Icon name="partnerOne"/>
        <Icon name="partnerTwo"/>
        <Icon name="partnerThree"/>
        <Icon name="partnerFour"/>
        <Icon name="partnerFive"/>
        <Icon name="partnerSix"/>
        <Icon name="partnerSeven"/>
        <Icon name="partnerEight"/>
        <Icon name="partnerNine"/>
        <Icon name="partnerTen"/>
        <Icon name="partnerEleven"/>
        <Icon name="partnerTwelve"/>
        <Icon name="partnerThirteen"/>
        <Icon name="partnerFourteen"/>
        </Marquee>
      }
    />
  </div>
);
export default LoopBanner;
