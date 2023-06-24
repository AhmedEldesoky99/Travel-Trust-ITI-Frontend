import DataGridLoader from "../dataGridLoader";
import ReviewPageLoader from "../reviewPageLoader";

const DashboardLoader = () => {
  return (
    <section className=" mt-12">
      <div className="container px-6 py-10 mx-auto animate-pulse ">
        <div className="grid lg:grid-cols-6 lg:grid-flow-row auto-rows-max w-full  gap-5 h-fill md:mt-8 mt-32 ">
          <div className="col-span-6 lg:col-span-4  flex justify-between items-center  p-10 rounded-2xl shadow-md bg-white">
            <div>
              <h2 className=" text-3xl font-medium"></h2>
              <p className=" mt-6"></p>
            </div>
            <div className=""></div>
          </div>

          <div className="2xs:col-span-6 lg:col-span-2 row-span-3 rounded-2xl shadow-md bg-white p-8">
            {/* review */}
            <div className="col-span-12 lg:col-span-3 px-6 py-10">
              <div className="w-[60%] h-4 text-left  bg-gray-200 rounded-lg mt-4 "></div>
              <div className="w-[40%] h-3 text-left  bg-gray-200 rounded-lg mt-4 "></div>
              <div className="flex flex-row items-center justify-center gap-2 mt-10">
                <div className="w-[20%] h-12 text-left  bg-gray-200 rounded-lg mt-6 "></div>
              </div>
              <div>
                <div className="flex flex-row items-center justify-center gap-2 mt-2">
                  <div className="w-[10%] h-10 text-left mt-4 bg-gray-200 rounded-lg  "></div>
                  <div className="w-[10%] h-10 text-left mt-4 bg-gray-200 rounded-lg  "></div>
                  <div className="w-[10%] h-10 text-left mt-4 bg-gray-200 rounded-lg  "></div>
                  <div className="w-[10%] h-10 text-left mt-4 bg-gray-100 rounded-lg  "></div>
                  <div className="w-[10%] h-10 text-left mt-4 bg-gray-100 rounded-lg  "></div>
                </div>
                <div className="flex flex-row items-center justify-center gap-2 mt-2">
                  <div className="w-[40%] h-2 text-left  bg-gray-200 rounded-lg mt-2 "></div>
                </div>
                <div className="mt-14">
                  <div className="w-[60%] h-4 text-left  bg-gray-200 rounded-lg mt-6 "></div>
                  <div className="flex flex-row items-center gap-2 ">
                    <div className="w-[20%] h-2 text-left mt-4 bg-gray-100 rounded-lg  "></div>
                    <div className="w-[60%] h-4 text-left mt-4 bg-gray-200 rounded-lg  "></div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="w-[20%] h-2 text-left mt-4 bg-gray-100 rounded-lg  "></div>
                    <div className="w-[80%] h-4 text-left mt-4 bg-gray-200 rounded-lg  "></div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="w-[20%] h-2 text-left mt-4 bg-gray-100 rounded-lg  "></div>
                    <div className="w-[60%] h-4 text-left mt-4 bg-gray-200 rounded-lg  "></div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="w-[20%] h-2 text-left mt-4 bg-gray-100 rounded-lg  "></div>
                    <div className="w-[20%] h-4 text-left mt-4 bg-gray-200 rounded-lg  "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2 rounded-2xl shadow-md p-4 bg-white">
            <div className="flex justify-start items-center">
              <div>
                <h1 className="w-48 h-6 text-left bg-gray-200 rounded-lg  mb-6"></h1>
                <p className="w-64 h-4 text-left mt-4 bg-gray-200 rounded-lg sm:w-80 "></p>
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2 rounded-2xl shadow-md p-4 bg-white">
            <div className="flex justify-start items-center">
              <div>
                <h1 className="w-48 h-6 text-left bg-gray-200 rounded-lg  mb-6"></h1>
                <p className="w-64 h-4 text-left mt-4 bg-gray-200 rounded-lg sm:w-80 "></p>
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2 rounded-2xl shadow-md p-4 bg-white">
            <div className="flex justify-start items-center">
              <div>
                <h1 className="w-48 h-6 text-left bg-gray-200 rounded-lg  mb-6"></h1>
                <p className="w-64 h-4 text-left mt-4 bg-gray-200 rounded-lg sm:w-80 "></p>
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2 rounded-2xl shadow-md p-4 bg-white">
            <div className="flex justify-start items-center">
              <div>
                <h1 className="w-48 h-6 text-left bg-gray-200 rounded-lg  mb-6"></h1>
                <p className="w-64 h-4 text-left mt-4 bg-gray-200 rounded-lg sm:w-80 "></p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-6  gap-4 mt-8">
          <div className="col-span-6 xl:col-span-2 mb-10 w-full  gap-8 h-[40vh] rounded-2xl shadow-lg p-6 bg-white">
            <h1 className="w-48 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>

            <div className="mt-10">
              <div className="flex justify-between">
                <h1 className="w-32 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
                <h1 className="w-4 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
              </div>
              <p className="w-[100%] h-2 text-left  bg-gray-200 rounded-lg  "></p>
            </div>
            <div className="mt-10">
              <div className="flex justify-between">
                <h1 className="w-32 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
                <h1 className="w-4 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
              </div>
              <p className="w-[100%] h-2 text-left  bg-gray-200 rounded-lg  "></p>
            </div>
            <div className="mt-10">
              <div className="flex justify-between">
                <h1 className="w-32 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
                <h1 className="w-4 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
              </div>
              <p className="w-[100%] h-2 text-left  bg-gray-200 rounded-lg  "></p>
            </div>
            <div className="mt-10">
              <div className="flex justify-between">
                <h1 className="w-32 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
                <h1 className="w-4 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
              </div>
              <p className="w-[100%] h-2 text-left  bg-gray-200 rounded-lg  "></p>
            </div>
          </div>
          <div className="col-span-6 xl:col-span-2 flex flex-col gap-6  mb-10 w-full  h-[40vh] rounded-2xl shadow-lg p-6 bg-white">
            <h1 className="w-48 h-4 text-cne bg-gray-200 rounded-lg  mb-6"></h1>
            <div className="flex justify-center items-center ">
              <div className="bg-gray-100  w-20 h-20 rounded-full mr-4 dark:bg-gray-200"></div>
              <div className="">
                <h1 className="w-32 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
                <p className="w-48 h-2 text-left mt-4 bg-gray-200 rounded-lg  "></p>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <div className="bg-gray-100  w-20 h-20 rounded-full mr-4 dark:bg-gray-200"></div>
              <div className="">
                <h1 className="w-32 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
                <p className="w-48 h-2 text-left mt-4 bg-gray-200 rounded-lg  "></p>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <div className="bg-gray-100  w-20 h-20 rounded-full mr-4 dark:bg-gray-200"></div>
              <div className="">
                <h1 className="w-32 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
                <p className="w-48 h-2 text-left mt-4 bg-gray-200 rounded-lg  "></p>
              </div>
            </div>
          </div>
          <div className="col-span-6 xl:col-span-2 mb-10 w-full  gap-8 h-[40vh] rounded-2xl shadow-lg p-6 bg-white">
            <h1 className="w-48 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>

            <div className="mt-10">
              <div className="flex justify-between">
                <h1 className="w-32 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
                <h1 className="w-4 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
              </div>
              <p className="w-[100%] h-2 text-left  bg-gray-200 rounded-lg  "></p>
            </div>
            <div className="mt-10">
              <div className="flex justify-between">
                <h1 className="w-32 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
                <h1 className="w-4 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
              </div>
              <p className="w-[100%] h-2 text-left  bg-gray-200 rounded-lg  "></p>
            </div>
            <div className="mt-10">
              <div className="flex justify-between">
                <h1 className="w-32 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
                <h1 className="w-4 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
              </div>
              <p className="w-[100%] h-2 text-left  bg-gray-200 rounded-lg  "></p>
            </div>
            <div className="mt-10">
              <div className="flex justify-between">
                <h1 className="w-32 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
                <h1 className="w-4 h-4 text-left bg-gray-200 rounded-lg  mb-6"></h1>
              </div>
              <p className="w-[100%] h-2 text-left  bg-gray-200 rounded-lg  "></p>
            </div>
          </div>
        </div>
        <DataGridLoader />
      </div>
    </section>
  );
};
export default DashboardLoader;
