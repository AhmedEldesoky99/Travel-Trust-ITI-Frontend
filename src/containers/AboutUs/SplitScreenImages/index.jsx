const SplitScreen = () => {
  return (
    <>
      <section className="2xl:container flex flex-col justify-center items-center mx-auto min-w-full">
        <div className="w-full 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
          <div className="flex flex-col lg:flex-row justify-between ">
            <div className="w-full lg:w-6/12 flex flex-col justify-center text-center md:px-10 md:-order-0 h-[586px]">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-primary-green">
                Our mission
              </h1>
              <p className="font-normal text-base leading-8  text-[20px] md:text-[24px]">
                We need each other now more than ever, and we all want more
                quality time with the people we love. Our focus is on the
                importance of connection and the joy that celebrating meaningful
                moments together brings. That’s the magic we’re trying to
                capture. That’s why we’re here.
              </p>
            </div>
            <div className="w-full lg:w-6/12 -order-1 overflow-hidden">
              <img
                className="w-full h-full transition duration-700 transform ease-in-out cursor-pointer hover:scale-125 object-cover"
                src="https://www.campstar.com/trends/wp-content/uploads/2019/09/toa-heftiba-x9I-6yoXrXE-unsplash.jpg"
                alt="A group of People Camping"
              />
            </div>
          </div>
        </div>
        <div className="-translate-y-[20px] lg:-translate-y-[66px]  2xl:mx-auto  lg:px-20  md:px-6 px-4 ">
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full lg:w-6/12 flex flex-col justify-center text-center px-4 md:px-10  text-white bg-black  border-1 border-gray-950 h-[586px]">
              <h1 className="text-3xl md:text-4xl font-bold md:leading-9 pb-4">
                Our core values
              </h1>
              <p className="font-normal text-base leading-9 text-[18px] md:text-[24px]">
                Travel Trust is all about connections. Whether that be with our
                customers, partners, industry or Travel Trust, we want everyone
                to have the same great experience of working with us.The four
                core values that are at the heart of everything we do are: Think
                Big, Own It, Do Good and Travel Together.
              </p>
            </div>
            <div className="w-full lg:w-6/12 overflow-hidden">
              <img
                className="w-full md:h-[586px] transition duration-700 transform ease-in-out cursor-pointer hover:scale-125"
                src="https://www.insightsforprofessionals.com/getmedia/f7510c49-351d-4ce4-ac0a-496d77b2a66d/5-risks-businesses-face-when-getting-a-loan?maxsidesize=1200&amp;resizemode=force"
                alt="Two men SkyDiving"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SplitScreen;
