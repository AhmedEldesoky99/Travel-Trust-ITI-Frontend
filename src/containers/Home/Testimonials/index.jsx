import TestimonialCard from "../../../components/TestimonialCard";
import Girl from "../../../assets/images/Home/Testimonials/Girl.jpg";
import Blonde from "../../../assets/images/Home/Testimonials/Blonde.jpg";
import Man from "../../../assets/images/Home/Testimonials/TravellerBoy.jpeg";

const Testimonials = () => {
  return (
    <>
      <div className="hero  mb-24">
        <div>
          <div className="container mx-auto">
            <div className="mx-8">
              <div className="text-center lg:text-start">
                <p className="hidden lg:flex md:text-[18]px] lg:text-[22px] font-header">
                  explore our stories
                </p>
                <h2 className="text-[#2B2B2B] text-[30px] md:text-4xl lg:text-5xl font-bold md:mt-4 capitalize text-center lg:text-start">
                  Our Impact Stories
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:gird-cols-2 xl:grid-cols-3 gap-4">
                <TestimonialCard
                  name="Jessica Miller"
                  date="12 NOV"
                  image={Girl}
                />
                <TestimonialCard name="Paul Harrison" date="4 SEP" image={Man} />
                <TestimonialCard name="Sara David" date="2 JUN" image={Blonde} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimonials;
