import { useState, useRef, useEffect } from "react";
import Icon from "../../../utils/icons";
import Video from "../../../assets/images/Home/VideoSection/Egypt.mp4";
import egyptionPharaoh from "../../../assets/images/Home/VideoSection/EgyptionPharaoh.png";

const VideoSection = () => {
  const videoRef = useRef(Video);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    function handleScroll() {
      const video = videoRef.current;
      const isVisible =
        video.getBoundingClientRect().top < window.innerHeight &&
        video.getBoundingClientRect().bottom > 0;
      setMuted(!isVisible);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPlaying]);

  return (
    <div className="hero min-h-[720px] bg-cover bg-center mb-24 relative">
      <video
        ref={videoRef}
        className={`absolute inset-0 object-cover w-full  ${
          isPlaying ? "" : "brightness-[0.6]"
        }`}
        autoPlay={false}
        poster={egyptionPharaoh}
        muted={muted}
      >
        {" "}
        <source src={Video}></source>
      </video>
      <div className="hero-overlay bg-black/[0.4] h-full">
        <div className="container mx-auto h-full">
          <div className="mx-8 h-full">
            <div className="flex justify-center xl:gap-12 items-center min-h-[720px] xl:-translate-x-[12.6rem] ">
              {isPlaying ? null : (
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
              )}
              <button onClick={handlePlayPause} className="z-10">
                <Icon name={isPlaying ? "videoPause" : "videoPlay"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoSection;
