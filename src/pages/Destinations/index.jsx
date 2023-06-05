import Header from "../../containers/Destinations/Header";
import Regions from "../../containers/Destinations/Regions";
const Destinations = () => {
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
