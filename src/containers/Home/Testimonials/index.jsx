import TestimonialCard from "../../../components/TestimonialCard";
import { useQuery } from "react-query";
import { getTopReviews } from "../../../services/Home";
import TestimonialsLoader from "../../../components/TestimonialsLoader";

const Testimonials = () => {
  const {  isLoading, data, isSuccess } = useQuery("Reviews", getTopReviews);

  // console.log({Reviews : data});
  return (
    <>
    {!isSuccess && isLoading && <TestimonialsLoader />}
    {!!data && <div className="hero  mb-24">
        <div>
          <div className="container mx-auto">
            <div className="mx-8">
              <div className="text-center lg:text-start">
                <p className="hidden lg:flex md:text-[18]px] 2xl:text-[22px] font-header">
                  explore our stories
                </p>
                <h2 className="text-[#2B2B2B] text-[30px] md:text-3xl xl:text-4xl 2xl:text-5xl font-bold md:mt-4 capitalize text-center lg:text-start">
                  Our Impact Stories
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:gird-cols-2 xl:grid-cols-3 gap-4">
                {data.data?.map((item,index) => 
                { if (index < 3)
                  return <TestimonialCard key={item._id} data={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};
export default Testimonials;
