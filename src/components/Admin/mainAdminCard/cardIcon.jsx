const MainCardIcon = ({ src, title, generalStatistics, type }) => {
  return (
    <>
      <div className="flex  items-center rounded-2xl shadow-md p-8 h-full bg-white">
        <div className="  w-28 min-h-[112px] flex justify-center items-center rounded-2xl">
          <img src={src} />
        </div>
        <div className="ml-4">
          <h3 className=" text-2xl font-medium text-[#585858]">{title}</h3>
          <p className=" text-2xl font-semibold text-[#585858] mt-2">
            {generalStatistics}{" "}
            <span className="font-medium capitalize"> {type}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MainCardIcon;
