import Header from "../../containers/Destinations/Header";
import Regions from "../../containers/Destinations/Regions";
const Destinations = () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 0);
  return (
    <>
      <Header />
      <div className="xs:container xs:mx-auto">
        <Regions />
      </div>
    </>
  );
};
export default Destinations;
