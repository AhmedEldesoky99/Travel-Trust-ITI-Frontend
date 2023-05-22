// import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import AboutIntro from "../../containers/AboutUs/Intro";
import HeroImages from "../../containers/AboutUs/HeaderImages";
import SplictScreen from "../../containers/AboutUs/SplitScreenImages";
import OurDifferences from "../../containers/AboutUs/OurDifferences";

const AboutUs = () => {
  return (
    <>
      {/* <Navbar/> */}
      <HeroImages />
      <AboutIntro />
      <SplictScreen />
      <OurDifferences/>
      <Footer/>
    </>
  );
};

export default AboutUs;
