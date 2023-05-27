import Icon from "../../utils/icons";
const TestimonialCard = ({name,date,image}) => {
  return (
    <>
      <div className="border-[1.6px] border-gray-300 mt-10 px-8 py-6 rounded-md hover:-translate-y-2 hover:shadow-lg transition-all duration-200 cursor-pointer">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <Icon name="quote" />
            <Icon name="stars" />
          </div>
          <p className="md:text-[16]px] lg:text-[20px] my-2">
            Excellent travel website, a very respectful guides with a lot of
            knowledge, very friendly that I would definitely recommend.
          </p>
          <div>
            <div className="flex items-center gap-2">
              <div>
                <a href="">
                  <img
                    src={image}
                    alt="Traveller"
                    className="w-16 h-16 bg-cover bg-center object-cover rounded-full"
                  />
                </a>
              </div>
              <div>
                <p className="text-[16px] font-semibold">{name}</p>
                <p className="text-[14px] text-gray-500">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TestimonialCard;
