// import React from "react";

const JoinUs = () => {
    return (
        <div className="bg-join-us h-[100vh] bg-cover">
                <div className="bg-logo-join absolute bg-cover 2xl:h-[7rem] 2xl:w-[8.5rem] lg:h-[5rem] lg:w-[6.1rem] md:h-[4rem] md:w-[4.9rem] 2xs:h-[3rem] 2xs:w-[3.7rem] top-10 left-5"></div>
                <div className="bg-black h-[100vh] bg-opacity-60 flex flex-col justify-center items-center gap-8">
                    <h1 className="text-white 2xl:text-9xl xl:text-8xl lg:text-6xl md:text-5xl 2xs:text-4xl font-header mb-5">Join us</h1>
                    <p className="text-white 2xl:text-5xl xl:text-3xl lg:text-2xl md:text-xl 2xs:text-lg font-inter 2xs:text-center">Explore / Discover the beauty of other countries.</p>
                    <div className="flex flex-col gap-4">
                        <button className="btn normal-case btn-wide 2xl:text-2xl xl:text-xl lg:text-lg bg-white text-black font-inter">I am a Traveler </button >
                        <button className="btn normal-case btn-wide 2xl:text-2xl xl:text-xl lg:text-lg md:text-md bg-white text-black font-inter">I am a Host </button>
                    </div>
                    <p className="text-white 2xl:text-3xl xl:text-xl lg:text-lg 2xs:text-sm font-inter 2xs:px-5 2xs:text-center">Built on solid experience to exceed your expectations.</p>
                </div>
        </div>
    );
}
export default JoinUs;