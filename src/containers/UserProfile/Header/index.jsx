import React from "react";
import { Button } from "antd";

import Icon from "../../../utils/icons";

const Header = () => {
  return (
    <header className="hero min-h-[55vh] bg-lighter-gray">
      <div className="h-full w-full flex justify-center items-center">
        <div>
          <Button
            icon={<Icon name="addImage" />}
            onClick={()=>{}}
            className="my-custom-btn flex justify-center items-center gap-2 border-none shadow-none"
          >
            <span className="2xs:text-sm sm:text-base 2xl:text-xl">
              Add cover photo
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
