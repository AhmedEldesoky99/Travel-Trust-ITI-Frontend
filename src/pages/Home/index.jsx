import Categories from "../../containers/Home/Categories";
import HeaderSection from "../../containers/Home/Header";
import Recommended from "../../containers/Home/Recommendation";
import Sales from "../../containers/Home/Sales";
import TopDestinations from "../../containers/Home/TopDestinations";
import DreamTour from "../../containers/Home/DreamTour";
import VideoSection from "../../containers/Home/VideoSection";
import Testimonials from "../../containers/Home/Testimonials";
import JoinUs from "../../containers/Home/JoinUs";
import Partners from "../../containers/Home/Partners";

const Home = () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 0);
  return (
    <>
      <HeaderSection />
      <Recommended />
      <Categories />
      <TopDestinations />
      <Sales />
      <DreamTour />
      <VideoSection />
      <Testimonials />
      <JoinUs />
      <Partners />
    </>
  );
};

export default Home;
