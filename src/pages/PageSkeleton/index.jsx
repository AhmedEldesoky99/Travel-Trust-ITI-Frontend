import CardLoader from "../../components/CardLoader/index";
import CategoriesLoader from "../../components/CategoriesLoader";

const PageSkeleton = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 animate-pulse sm:space-y-0 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <p className="w-20 h-2 bg-gray-200 rounded-lg "></p>
            <p className="w-20 h-2 bg-gray-200 rounded-lg  "></p>
            <p className="w-20 h-2 bg-gray-200 rounded-lg "></p>
            <p className="w-20 h-2 bg-gray-200 rounded-lg "></p>
            <p className="w-20 h-2 bg-gray-200 rounded-lg "></p>
          </div>
          <div className="flex items-center gap-4">
            <p className="w-32 h-2 bg-gray-200 rounded-lg "></p>
            <p className="w-8 h-8 bg-gray-200 rounded-full"></p>
          </div>
        </div>
        <div className="w-full h-44 mt-8 bg-gray-200 animate-pulse"></div>
      </section>

      <CardLoader />
      <CategoriesLoader />
      <CardLoader />

      <div className="w-full h-44 mt-8 bg-gray-200 animate-pulse"></div>

      <footer className="bg-white border-t-2 mt-20 animate-pulse pl-10 md:pl-0 md:px-36">
        <div className=" pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center bg-gray-200 w-14 h-14 rounded-lg sm:justify-start"></div>

              <div className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                <p className="w-60 mb-2 h-2 bg-gray-200 rounded-lg  "></p>
                <p className="w-36 mb-2 h-2 bg-gray-200 rounded-lg  "></p>
                <p className="w-28 h-2 bg-gray-200 rounded-lg  "></p>
              </div>

              <ul className="mt-8 flex md:justify-center gap-6 sm:justify-start md:gap-8">
                <li>
                  <p className="bg-gray-200 w-6 h-6 rounded-lg"></p>
                </li>

                <li>
                  <p className="bg-gray-200 w-6 h-6 rounded-lg"></p>
                </li>

                <li>
                  <p className="bg-gray-200 w-6 h-6 rounded-lg"></p>
                </li>

                <li>
                  <p className="bg-gray-200 w-6 h-6 rounded-lg"></p>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className=" bg-gray-200 h-4 w-36 rounded-lg"></p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <p className="w-32 h-2 bg-gray-200 rounded-lg  "></p>
                  </li>

                  <li>
                    <p className="w-28 h-2 bg-gray-200 rounded-lg  "></p>
                  </li>

                  <li>
                    <p className="w-20 h-2 bg-gray-200 rounded-lg  "></p>
                  </li>

                  <li>
                    <p className="w-20 h-2 bg-gray-200 rounded-lg  "></p>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className=" bg-gray-200 h-4 w-36 rounded-lg"></p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                  <p className="w-32 h-2 bg-gray-200 rounded-lg  "></p>

                  </li>

                  <li>
                  <p className="w-28 h-2 bg-gray-200 rounded-lg  "></p>

                  </li>

                  <li>
                  <p className="w-24 h-2 bg-gray-200 rounded-lg  "></p>

                  </li>

                  <li>
                  <p className="w-20 h-2 bg-gray-200 rounded-lg  "></p>

                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="bg-gray-200 h-4 w-36 rounded-lg"></p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                  <p className="w-32 h-2 bg-gray-200 rounded-lg  "></p>

                  </li>

                  <li>
                  <p className="w-28 h-2 bg-gray-200 rounded-lg  "></p>

                  </li>
                  <li>
                  <p className="w-24 h-2 bg-gray-200 rounded-lg  "></p>

                  </li>
                </ul>
              </div>
           
            </div>
          </div>

      
        </div>
      </footer>
      <div className="mt-12 border-t border-gray-100 py-6 px-4 animate-pulse pl-10 md:pl-0">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500">
                <span className="block sm:inline">
                  <p className="w-52 h-2 bg-gray-200 rounded-lg  "></p>
                </span>
              </p>
              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                <p className="w-52 h-2 bg-gray-200 rounded-lg  "></p>
              </p>
            </div>
          </div>
    </>
  );
};
export default PageSkeleton;
