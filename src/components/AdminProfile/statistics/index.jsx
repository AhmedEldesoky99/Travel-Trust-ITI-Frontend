/* eslint-disable react/prop-types */
const Statistics = ({num,stat}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl text-primary-green">{num}</h2>
        <p className="max-w-[68px] text-center">{stat}</p>
      </div>
    </>
  );
};

export default Statistics;
