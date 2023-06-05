const DestinationCard = ({url,city,tours}) => {
  return (
    <>
    <div style={{ backgroundImage: `url(${url})` }}
      className={` min-h-[30rem] w-full md:w-[20.3rem] bg-cover bg-center rounded-2xl`}
      >
        <div className="w-full h-full  bg-black/[0.4] hover:bg-black/[0.2] rounded-2xl transition-all duration-500 ease-in-out cursor-pointer ">
          <div className="flex justify-between items-end h-full px-4 pb-8">
          <p className="font-header text-white text-[1.6rem]  capitalize">{city}</p>
          <div className="font-header text-white text-lg flex flex-col justify-center items-center p-4  w-[4.4rem] h-[4.4rem] rounded-2xl"
           style={{ backgroundColor: 'rgba(132, 132, 132, 0.5)' }}
           
          >
           <p><span className="text-primary-green mr-2">+</span>{tours}</p>
           <p>tours</p>
          </div>
        
          </div>
        </div>
      </div>
    
    </>
  );
};
export default DestinationCard;
