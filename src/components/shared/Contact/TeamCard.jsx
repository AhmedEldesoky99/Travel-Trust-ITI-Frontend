/* eslint-disable react/prop-types */
import linkedin from '../../../assets/images/Contact/linkedin.svg'

const TeamCard = ({img,name,title}) => {
  return (
    <>
      <div className="">
        {/* Out team get to know us closer + cards */}
        <div className="flex flex-col max-w-[425px] max-h-[629px] rounded-2xl border-2 border-gray-300 h-[100vh]">
          <div className="w-full max-h-[509px] h-[100vh]">
            <img src={img} className="rounded-t-2xl  h-full" />
          </div>
          <div className="flex flex-col  px-4 pt-8">
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold text-2xl">{name}</p>
              <a
                href=""
                className=" border-2 border-gray-300 p-2 rounded-lg border-b-2 "
              >
                {/* linkedin svg */}
                <img src={linkedin} />
              </a>
            </div>
            <p className="text-gray-600 text-xl font-light">
              {title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
