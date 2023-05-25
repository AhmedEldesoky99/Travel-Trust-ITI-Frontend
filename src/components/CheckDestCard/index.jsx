import React from "react";

const CheckDestCard = ({ city, url }) => {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className={` h-[23.8rem] bg-cover bg-center rounded-2xl`}
    >
      <div className="w-full h-full flex justify-center items-end bg-black/[0.1] rounded-2xl">
        <p className="font-header text-white text-3xl p-4">{city}</p>
      </div>
    </div>
  );
};

export default CheckDestCard;
