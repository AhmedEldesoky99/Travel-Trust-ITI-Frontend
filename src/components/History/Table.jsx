/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Row from "./Row";


const Table = ({ date, rows }) => {


  return (
    <>
      <div className="border-2 border-gray-500 max-w-[1396px] w-full rounded-2xl flex flex-col p-7 gap-8">
        <h1 className="2xl:text-3xl lg:text-xl 2xs:text-lg font-medium ml-2">{date}</h1>
        <hr className="max-w-[1338px] w-full mx-auto" />
        {/* looping data */}
        <div className="flex flex-col gap-7 ">
          {/* row component */}
          {rows.map(({ time, title, isFavorite }) => (
            <Row
              key={time}
              time={time}
              title={title}
              isFavorite={isFavorite}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Table;