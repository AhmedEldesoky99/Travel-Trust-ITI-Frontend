/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "antd";

import Icon from "../../../utils/icons";

const Header = ({userData}) => {
  return <header className={`hero min-h-[55vh] bg-lighter-gray ${
    userData?.data?.user?.cover_photo[0]?.url ? "" : "bg-lighter-gray"
  }`} style={{ backgroundImage: `url(${userData?.data?.user?.cover_photo[0]?.url})`,}}></header>;
};

export default Header;
