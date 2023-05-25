import { animated, useScroll, useInView, useSpring } from "@react-spring/web";
import Footer from "../../components/shared/Footer";
import { Breadcrumb } from "antd";

const privacyPolicy = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "-20% -40%",
    }
  );
  const { scrollY } = useScroll();
  const springProps = useSpring({
    opacity: scrollY.to([0, 500], [0, 1]),
  });

  return (
    <>
      <Breadcrumb
        className="ml-20 mt-10 mb-10"
        items={[
          {
            title: <a href="https://travel-trust-iti.vercel.app/">Home</a>,
          },
          {
            title: "Privacy and Policy",
          },
        ]}
      />
      <div className="hero h-[500px] md:h-[448px] relative bg-[#F8DEDE] ">
        <div className="w-full absolute">
          <animated.div
            ref={ref}
            style={springs}
            className="mx-[64px] my-30 md:my-0  w-2/3"
          >
            <h1 className=" text-[#2B2B2B] text-[30px] md:text-4xl lg:text-5xl font-bold">
              Privacy Policy
            </h1>
            <p className="mt-2 md:mt-10 text-[17px] md:text-[21px] ">
              Welcome to Travel Trust’s Privacy Policy. When you use our
              services, you're trusting us with your <br /> information. This
              Privacy Policy will inform you as to how we look after your
              personal data when
              <br /> you use our services. We understand this is a big
              responsibility and we work hard to protect
              <br /> your personal data.
            </p>
            <p className="text-gray-600 mt-6">
              Effective: November 7th 2022 / Version 1.12
            </p>
          </animated.div>
        </div>
      </div>
      <animated.div  style={springProps} className="mx-20 mt-16 flex flex-col gap-8">
        <div >
          <h2 className="text-[26px] md:text[28px] lg:text-[34px] text-[#0f0f0f] font-medium">
            Your personal data and our promises to you
          </h2>
          <div className="md:mt-10 text-[17px] md:text-[21px] mt-6">
            Your personal data is very important to us. Whenever you use our
            website or app, we’re
            <br /> committed to these four privacy promises:
            <ul
              role="list"
              className="marker:text-gray-800 list-disc pl-5 space-y-3 mt-4"
            >
              <li>
                be crystal clear about the personal data we use, how we use it
                and – most
                <br /> importantly – why we need it.
              </li>
              <li> We’ll give you choices when it comes to your data.</li>
              <li>
                {" "}
                We’ll keep your personal data secure, using the best technology,
                people and processes.
              </li>
              <li>
                We’ll We’ve cut the jargon, to help you make informed choices
                about your personal data.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-[26px] md:text[28px] lg:text-[34px] text-[#0f0f0f]">
            Personal data you give us
          </h2>
          <div className="md:mt-10 text-[17px] md:text-[21px] mt-6">
            You may need to give us your personal data to use our services and
            book tickets – more <br />
            on that below. Personal data is anything that helps identify. It’s
            things like:{" "}
            <ul
              role="list"
              className="marker:text-gray-800 list-disc pl-5 space-y-3 mt-4"
            >
              <li>name</li>
              <li>email or billing </li>
              <li>address age</li>
              <li>payment card details</li>
              <li>phone number</li>
              <li> home address </li>
              <li>
                details of any relevant railcards, discount or loyalty cards you
                might use
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-[26px] md:text[28px] lg:text-[34px] text-[#0f0f0f]">
            Personal data you give us about others
          </h2>
          <p className="md:mt-10 text-[17px] md:text-[21px] ">
            You may be doing a trip with other guests whose details we may also
            need in order for them
            <br /> to travel. By entering someone else’s personal data, you
            confirm you’ve either got their permission
            <br /> to give it, or permission from their parent or guardian (if
            the passenger is under 16).
          </p>
        </div>
      </animated.div>
      <Footer />
    </>
  );
};
export default privacyPolicy;
