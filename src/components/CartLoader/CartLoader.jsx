const CartLoader = () => {
  return (
    <>
      <section className="bg-white mt-8">
        <div className="container px-6 py-10 mx-auto animate-pulse ">
          <div className="md:container md:mx-auto mt-14 ">
            <div className="flex lg:flex-row 2xs:flex-col lg:mx-0 2xs:mx-10 my-10 lg:items-start justify-center xl:gap-40 md:gap-30 2xs:gap-12 2xs:items-center">
              <div className="flex flex-col max-w-[1110px">
                <div className="bg-white flex flex-row w-full min-w-[971px] h-28 border border-gray-200 items-center p-7 rounded-2xl justify-between mb-8 shadow-md">
                  <p className="w-48 h-6 text-left bg-gray-200 rounded-lg  lg:block 2xs:flex justify-center items-center gap-1">
                    <span className="font-normal lg:text-2xl md:text-lg 2xs:text-base text-gray-700"></span>
                  </p>
                  <div className="text-[#DB3A34] flex flex-row items-center md:text-base 2xs:text-sm">
                    <img className="" />
                    <button className="w-32 h-6 text-left bg-gray-200 rounded-lg text-danger text-lg"></button>
                  </div>
                </div>
                <div className="flex flex-col gap-9 md:mx-0 2xs:mx-2">
                  <div className="card  lg:card-side bg-base-100  lg:col-span-8 shadow-xl ">
                    <figure className="2xs:w-full 2xs:max-h-80 lg:w-[40%] border-[1px]">
                      <svg
                        className="w-20 h-20 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 640 512"
                      >
                        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                      </svg>
                    </figure>
                    <div className="card-body justify-between gap-10 border-[1px] rounded-r-lg">
                      <div>
                        <div className="flex justify-between">
                          <h2 className="card-title 2xs:text-lg sm:text-xl xl:text-2xl 2xl:text-3xl">
                            {" "}
                            <div className="w-72 h-4 mt-4  bg-gray-200 rounded-lg dark:bg-gray-300 mb-12">
                              <p className="w-28 h-4 mt-8  bg-gray-200 rounded-lg dark:bg-gray-300"></p>
                            </div>
                          </h2>
                          <button className="2xs:hidden xs:inline-block ">
                            <div className="p-3 w-12 h-4  mb-3 bg-gray-200 rounded-lg dark:bg-gray-300">
                              <div>
                                <p className=""></p>
                              </div>
                            </div>
                          </button>
                        </div>

                        <div className="flex items-center justify-between w-full my-2  lg:max-w-[85%] xl:max-w-[55%] ">
                          <div className="flex justify-center items-center space-x-2">
                            <div className="2xs:text-base 2xl:text-lg">
                              <p className="w-24 h-3 mt-4  bg-gray-200 rounded-lg dark:bg-gray-300"></p>
                            </div>
                            <span className="2xs:text-base 2xl:text-lg text-light-gray">
                              <p className="w-24 h-3 mt-4  bg-gray-200 rounded-lg dark:bg-gray-300 ml-20"></p>
                            </span>
                          </div>

                          <div className="flex items-center space-x-2">
                            <div className="text-base"></div>
                            <span className="text-base text-light-gray"></span>
                          </div>
                        </div>

                        <div className="flex items-center w-full  lg:max-w-[85%] ">
                          <div className="flex justify-center items-center space-x-2">
                            <div className="2xs:text-base 2xl:text-lg">
                              <p className="w-52 h-3 mt-2  bg-gray-200 rounded-lg dark:bg-gray-300"></p>
                            </div>
                            <span className="2xs:text-base 2xl:text-lg text-light-gray "></span>
                          </div>
                        </div>
                      </div>

                      <div className="card-actions justify-between items-center">
                        <div className="flex justify-center items-center space-x-1">
                          <span className="2xs:text-lg md:text-xl xl:text-2xl font-bold">
                           
                          </span>
                          <span className="">
                            
                          </span>
                          <div className="2xs:text-xl md:text-lg">
                        
                          </div>
                        </div>

                        <div className="flex justify-between gap-32 items-center min-w-[9rem]">
                          <div>
                            <div className=" p-3 rounded-lg">
                              <div className="">
                                <p className="w-20 h-3   bg-gray-200 rounded-lg dark:bg-gray-300"></p>
                              </div>
                            </div>
                          </div>
                          <span className="text-lg 2xl:text-2xl px-3">
                           
                            <p className="w-20 h-3   bg-gray-200 rounded-lg dark:bg-gray-300"></p>
                          </span>
                          <div>
                            <div>
                              <div>
                                {" "}
                                <p className="w-20 h-3   bg-gray-200 rounded-lg dark:bg-gray-300"></p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-medium">
                            {/* <p className="w-36 h-2 mt-4  bg-gray-200 rounded-lg dark:bg-gray-300"></p> */}

                            <span className="2xs:text-lg md:text-xl xl:text-2xl  2xl:text-3xl font-bold">
                              {/* <p className="w-36 h-2 mt-4  bg-gray-200 rounded-lg dark:bg-gray-300"></p> */}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card  lg:card-side bg-base-100  lg:col-span-8 shadow-xl ">
                    <figure className="2xs:w-full 2xs:max-h-80 lg:w-[40%] border-[1px]">
                      <svg
                        className="w-20 h-20 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 640 512"
                      >
                        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                      </svg>
                    </figure>
                    <div className="card-body justify-between gap-10 border-[1px] rounded-r-lg">
                      <div>
                        <div className="flex justify-between">
                          <h2 className="card-title 2xs:text-lg sm:text-xl xl:text-2xl 2xl:text-3xl">
                            {" "}
                            <div className="w-72 h-4 mt-4  bg-gray-200 rounded-lg dark:bg-gray-300 mb-12">
                              <p className="w-28 h-4 mt-8  bg-gray-200 rounded-lg dark:bg-gray-300"></p>
                            </div>
                          </h2>
                          <button className="2xs:hidden xs:inline-block ">
                            <div className="p-3 w-12 h-4  mb-3 bg-gray-200 rounded-lg dark:bg-gray-300">
                              <div>
                                <p className=""></p>
                              </div>
                            </div>
                          </button>
                        </div>

                        <div className="flex items-center justify-between w-full my-2  lg:max-w-[85%] xl:max-w-[55%] ">
                          <div className="flex justify-center items-center space-x-2">
                            <div className="2xs:text-base 2xl:text-lg">
                              <p className="w-24 h-3 mt-4  bg-gray-200 rounded-lg dark:bg-gray-300"></p>
                            </div>
                            <span className="2xs:text-base 2xl:text-lg text-light-gray">
                              <p className="w-24 h-3 mt-4  bg-gray-200 rounded-lg dark:bg-gray-300 ml-20"></p>
                            </span>
                          </div>

                          <div className="flex items-center space-x-2">
                            <div className="text-base"></div>
                            <span className="text-base text-light-gray"></span>
                          </div>
                        </div>

                        <div className="flex items-center w-full  lg:max-w-[85%] ">
                          <div className="flex justify-center items-center space-x-2">
                            <div className="2xs:text-base 2xl:text-lg">
                              <p className="w-52 h-3 mt-2  bg-gray-200 rounded-lg dark:bg-gray-300"></p>
                            </div>
                            <span className="2xs:text-base 2xl:text-lg text-light-gray "></span>
                          </div>
                        </div>
                      </div>

                      <div className="card-actions justify-between items-center">
                        <div className="flex justify-center items-center space-x-1">
                          <span className="2xs:text-lg md:text-xl xl:text-2xl font-bold">
                           
                          </span>
                          <span className="">
                            
                          </span>
                          <div className="2xs:text-xl md:text-lg">
                        
                          </div>
                        </div>

                        <div className="flex justify-between gap-32 items-center min-w-[9rem]">
                          <div>
                            <div className=" p-3 rounded-lg">
                              <div className="">
                                <p className="w-20 h-3   bg-gray-200 rounded-lg dark:bg-gray-300"></p>
                              </div>
                            </div>
                          </div>
                          <span className="text-lg 2xl:text-2xl px-3">
                           
                            <p className="w-20 h-3   bg-gray-200 rounded-lg dark:bg-gray-300"></p>
                          </span>
                          <div>
                            <div>
                              <div>
                                {" "}
                                <p className="w-20 h-3   bg-gray-200 rounded-lg dark:bg-gray-300"></p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-medium">
                            {/* <p className="w-36 h-2 mt-4  bg-gray-200 rounded-lg dark:bg-gray-300"></p> */}

                            <span className="2xs:text-lg md:text-xl xl:text-2xl  2xl:text-3xl font-bold">
                              {/* <p className="w-36 h-2 mt-4  bg-gray-200 rounded-lg dark:bg-gray-300"></p> */}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-2 px-4 max-w-[405px] w-full h-full flex flex-col gap-2 justify-center md:p-6 rounded-2xl pb-6 mb-4">
                <p className="text-2xl my-6 w-32 h-6 text-left bg-gray-200 rounded-lg"></p>
                <div className="flex justify-between text-base">
                  <p className=" w-32 h-3 text-left bg-gray-200 rounded-lg mb-2"></p>
                  <p className=" w-20 h-3 text-left bg-gray-200 rounded-lg"></p>
                </div>
                <div className="flex justify-between text-base mb-2">
                  <p className=" w-32 h-3 text-left bg-gray-200 rounded-lg "></p>
                  <p className=" w-20 h-3 text-left bg-gray-200 rounded-lg"></p>
                </div>
                <div className="flex justify-between text-xl font-bold mt-6 mb-4">
                  <p className=" w-32 h-5 text-left bg-gray-200 rounded-lg"></p>
                  <p className=" w-20 h-5 text-left bg-gray-200 rounded-lg"></p>
                </div>
                <hr className="max-w-[358px] text-gray-500" />
                <div className="flex gap-3 mt-4">
                  <img />
                  <p className="text-[#A4A0A0] w-52 h-3 text-left bg-gray-200 rounded-lg"></p>
                </div>
                <div className="flex gap-3">
                  <img />
                  <p className="text-[#A4A0A0]  w-28 h-3 text-left bg-gray-200 rounded-lg"></p>
                </div>
                <div className="mt-8 mx-auto  w-64 h-12 text-left bg-gray-200 rounded-lg "></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CartLoader;
