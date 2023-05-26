import Icon from "../../../utils/icons";

const VideoSection = () => {
  
  return (
    <div className="hero  bg-egyptionPharaoh min-h-[720px] bg-cover bg-center mb-24"
    >
      <div className="hero-overlay bg-black/[0.4] h-full">
       
        <div className="container mx-auto h-full">
          <div className="mx-8 h-full">
          <div className="flex justify-center xl:gap-12 items-center min-h-[720px] xl:-translate-x-[12.6rem] ">
          <div className="text-white hidden lg:flex flex-col gap-2 -translate-x-32">
            <p className="text-[18px] lg:text-[20px] xl:text-[24px] font-header hidden xl:flex">
              Travel Locally with
            </p>
            <h2 className="sm:text-4xl lg:text-5xl xl:text-8xl hidden xl:flex">
              Travel{" "}
            </h2>
            <h2 className="sm:text-4xl lg:text-5xl xl:text-8xl ml-32 hidden xl:flex">
              Trust
            </h2>
            </div>
            <button
            >
            <Icon name="videoPlay" />
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoSection;