const Header = () => {
  return (
    <>
      <header className="relative hero place-items-start min-h-[58vh] bg-DestinationsBg  min:w-full  ">
        <div className="hero-overlay bg-black/[0.3] hover:bg-black/[0.1] w-full transition-all duration-500 ease-in cursor-pointer"></div>
        <div className="container mx-auto">
          <div className="ml-4 xs:ml-0 absolute bottom-0 = translate-y-1/2 flex min-w-[60%]  md:min-w-[34.8%] min-h-[8.5rem] md:min-h-[10.3rem] bg-white rounded-md shadow-md ">
            <div className="flex flex-col justify-center gap-5 ml-6 mr-6 md:mr-0">
              <p className="font-header text-sm">YOUR NEXT EXPERIENCE</p>
              <p className="text-3xl md:text-4xl 2xl:text-5xl">
                Our Destinations
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
