import { Link } from "react-router-dom";
import moment from "moment/moment";
import { getUserTourHistory } from "../../services/history";
import ContentLoader from "react-content-loader";

const History = () => {
  const { data, isLoading, isSuccess, isError, error } = getUserTourHistory();
  const formattedDate = moment(data?.data?.updatedAt).format("LL");

  return (
    <>
      {!isSuccess && isLoading && (
        <>
          <section className="container mx-auto flex flex-col justify-center items-center md:px-0 2xs:px-1 mt-32 mb-14">
            <ContentLoader
              viewBox="0 0 800 200"
              width="100%"
              height="100%"
              speed={0.5}
            >
              <rect x="350" y="0" rx="3" ry="3" width="100" height="10" />
              <rect x="0" y="50" rx="3" ry="3" width="100%" height="10" />
              <rect x="0" y="80" rx="3" ry="3" width="100%" height="10" />
              <rect x="0" y="110" rx="3" ry="3" width="100%" height="10" />
              <rect x="0" y="140" rx="3" ry="3" width="100%" height="10" />
              <rect x="0" y="170" rx="3" ry="3" width="100%" height="10" />
            </ContentLoader>
          </section>
        </>
      )}

      {isSuccess && data && (
        <section className="container mx-auto flex flex-col justify-center items-center md:px-0 2xs:px-1 mt-32 mb-14">
          <h1 className="2xl:text-3xl lg:text-2xl 2xs:text-xl font-bold mb-11">
            Your history
          </h1>
          <div className="flex flex-col w-full justify-center items-center gap-9">
            <div className="border-2 border-gray-500 max-w-[1396px] w-full rounded-2xl flex flex-col p-7 gap-5">
              {data?.data?.tours?.map((tour) => (
                <div key={tour?._id}>
                  <div className="flex sm:flex-row sm:justify-between sm:items-center 2xs:flex-col 2xs:justify-center 2xs:items-start">
                    <Link
                      className="hover:text-primary-green transition-all duration-200 ease-in-out"
                      to={`/tour-details/${tour?._id}`}
                    >
                      <div>
                        <p className="font-bold 2xs:text-base md:text-lg lg:text-xl 2xl:text-2xl">
                          {tour?.title}
                        </p>
                      </div>
                    </Link>
                    <p className="2xl:text-xl lg:text-lg md:text-base 2xs:text-sm">
                      {formattedDate}
                    </p>
                  </div>
                  <hr className="" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default History;
