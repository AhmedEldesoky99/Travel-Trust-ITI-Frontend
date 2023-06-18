import { useQuery } from "react-query";
import DestinationCard from "../../../components/DestinationCard";
import RegionCard from "../../../components/RegionCard";
import { getAllDestinations } from "../../../services/Home";
import RegionCardLoader from "../../../components/RegionCardLoader";

// const regions = [
//   {
//     name: "Greater Cairo Region",
//     destinations: [
//       { tours: "12", city: "Cairo", url: Cairo },
//       { tours: "10", city: "giza", url: Giza },
//       { tours: "2", city: "Qalubia", url: Qalubia },
//     ],
//   },
//   {
//     name: "Alexandria Region",
//     destinations: [
//       { tours: "6", city: "Cairo", url: Cairoo },
//       { tours: "5", city: "behira", url: Behira },
//       { tours: "10", city: "matruh", url: Matrouh },
//     ],
//   },
//   {
//     name: "Delta Region",
//     destinations: [
//       { tours: "3", city: "damietta", url: Damietta },
//       { tours: "2", city: "monufia", url: Monufia },
//       { tours: "4", city: "gharbia", url: Gharbia },
//       { tours: "5", city: "dakahlia", url: Dakahlia },
//       { tours: "4", city: "Kafr El Sheikh", url: KafrElSheikh },
//     ],
//   },
//   {
//     name: "Suez Canal Region",
//     destinations: [
//       { tours: "4", city: "ismailia", url: Ismailia },
//       { tours: "6", city: "suez", url: Suez },
//       { tours: "8", city: "port-said", url: PortSaid },
//       { tours: "4", city: "north sinai", url: NorthSinai },
//       { tours: "10", city: "south sinai", url: SouthSinai },
//       { tours: "3", city: "sharQia ", url: SharQia },
//     ],
//   },
//   {
//     name: "North Upper Egypt Region",
//     destinations: [
//       { tours: "2", city: "Bani Sweif", url: BaniSweif },
//       { tours: "3", city: "Minya", url: Minya },
//       { tours: "10", city: "Fayoum", url: Fayoum },
//     ],
//   },
//   {
//     name: "Central Upper Egypt Region",
//     destinations: [
//       { tours: "2", city: "Asyut ", url: Asyut },
//       { tours: "4", city: "new valley", url: NewValley },
//     ],
//   },
//   {
//     name: "Southern Upper Egypt Region",
//     destinations: [
//       { tours: "12", city: "souhag", url: Souhag },
//       { tours: "4", city: "qena", url: Qena },
//       { tours: "5", city: "al-aqasr", url: AlAqasr },
//       { tours: "8", city: "red sea", url: RedSea },
//       { tours: "", city: "aswan", url: Aswan },
//     ],
//   },
// ];
let regions = [];
let regionsTabs = [];
const Regions = () => {
  const { isLoading, data, isSuccess } = useQuery(
    "Regions",
    getAllDestinations
  );

  if (isSuccess) {
    regions = [];
    regionsTabs = [];
    const entries = Object.entries(data.data[0]);
    entries.map(([name, cities]) => {
      if (name !== "__v" && name !== "id") {
        regionsTabs.push({ name, cities: cities.length });
        if (cities.length !== 0) {
          const destinations = cities.map((city) => ({
            tours: city.tours_number,
            city: city.title,
            url: city.home_image,
          }));
          regions.push({ name, destinations });
        }
      }
    });
  }
  return (
    <>
    {!isSuccess && isLoading && <RegionCardLoader />}
    {!!data &&  <div className="my-32 grid lg:grid-cols-12 gap-10">
      <div className="sm:col-span-12 xl:col-span-4">
        <RegionCard regionsTabs={regionsTabs} />
      </div>
      <div className="sm:col-span-12 xl:col-span-8 px-6 xs:px-0 ">
        {regions.map((region) => (
          <div
            key={region.name}
            id={region.name}
            className="mb-16 text-center md:text-start"
          >
            <h2 className="text-[2.3rem] mb-8 font-medium capitalize">{region.name}</h2>
            <div className="flex gap-4 flex-wrap">
              {region.destinations.map(({ tours, city, url }, index) => (
                <DestinationCard
                  key={index}
                  tours={tours}
                  city={city}
                  url={url}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>}
    </>
  );
};

export default Regions;
