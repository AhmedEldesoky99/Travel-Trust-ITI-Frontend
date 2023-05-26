import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const AboutIntro = () => {
  return (
    <>
      <Breadcrumb
        className="ml-20 mt-10 mb-10"
        items={[
          {
            title: <Link href="/">Home</Link>,
          },
          {
            title: "About Us",
          },
        ]}
      />
      <div className="mx-20">
        <h1 className="text-[#2B2B2B] text-[30px] md:text-4xl lg:text-5xl font-bold">
          About Travel Trust
        </h1>
        <p className="mt-2 md:mt-10 text-[20px] md:text-[24px]">
          We’re on a journey to transform ordinary trips into extraordinary
          ones. We are Travel Trust, bringing you personal experiences. Wherever
          your travels take you, we’ll show you the unique and unmissable things
          to do in your destination. WithTravel Trust on your side (and in your
          pocket), creating memorable moments has never been easier. Today,
          millions have used Travel Trust to turn their travel dreams into
          reality. And we’re just getting started. We're changing the way people
          connect to the places they visit so anyone can create their dream
          vacation.It’s your journey.
        </p>
      </div>
    </>
  );
};

export default AboutIntro;
