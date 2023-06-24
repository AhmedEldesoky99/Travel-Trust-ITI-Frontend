import DataGridLoader from "../dataGridLoader";

const ReviewPageLoader = () => {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto animate-pulse">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-9">
            <DataGridLoader />
          </div>
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
      </div>
    </section>
  );
};
export default ReviewPageLoader;
