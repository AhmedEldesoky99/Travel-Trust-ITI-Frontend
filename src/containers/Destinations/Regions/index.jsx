import DestinationCard from "../../../components/DestinationCard";
import RegionCard from "../../../components/RegionCard";

import Cairo from "../../../assets/images/Destinations/cairo.png";
import Giza from "../../../assets/images/Destinations/giza.jpg";
import Qalubia from "../../../assets/images/Destinations/Qalubia.jpg";
import Cairoo from "../../../assets/images/Destinations/egyptCairo.jpg";
import Behira from "../../../assets/images/Destinations/Behira.jpg";
import Matrouh from "../../../assets/images/Destinations/Matrouh.jpg";
import Damietta from "../../../assets/images/Destinations/damietta.jpg";
import Monufia from "../../../assets/images/Destinations/Monufia.jpg";
import Gharbia from "../../../assets/images/Destinations/gharbia.jfif";
import Dakahlia from "../../../assets/images/Destinations/Dakahlia.jpeg";
import KafrElSheikh from "../../../assets/images/Destinations/KafrElSheikh.jpg";
import Ismailia from "../../../assets/images/Destinations/Ismailia.jpg";
import Suez from "../../../assets/images/Destinations/Suez.jpg";
import PortSaid from "../../../assets/images/Destinations/PortSaid.jfif";
import NorthSinai from "../../../assets/images/Destinations/NorthSinai.jfif";
import SouthSinai from "../../../assets/images/Destinations/southSinai.jpg";
import SharQia from "../../../assets/images/Destinations/SharQia.jpg";
import BaniSweif from "../../../assets/images/Destinations/BaniSweif.png";
import Minya from "../../../assets/images/Destinations/Minya.jpg";
import Fayoum from "../../../assets/images/Destinations/Fayoum.jpg";
import Asyut from "../../../assets/images/Destinations/Asyut.jpg";
import NewValley from "../../../assets/images/Destinations/NewValley.jpg";
import Souhag from "../../../assets/images/Destinations/Souhag.jfif";
import Qena from "../../../assets/images/Destinations/Qena.jpg";
import AlAqasr from "../../../assets/images/Destinations/Al-Aqasr.jpg";
import RedSea from "../../../assets/images/Destinations/RedSea.jpg";
import Aswan from "../../../assets/images/Destinations/Aswan.jpg";

const regions = [
  {
    name: "Greater Cairo Region",
    destinations: [
      { tours: "12", city: "Cairo", url: Cairo },
      { tours: "10", city: "giza", url: Giza },
      { tours: "2", city: "Qalubia", url: Qalubia },
    ],
  },
  {
    name: "Alexandria Region",
    destinations: [
      { tours: "6", city: "Cairo", url: Cairoo },
      { tours: "5", city: "behira", url: Behira },
      { tours: "10", city: "matruh", url: Matrouh },
    ],
  },
  {
    name: "Delta Region",
    destinations: [
      { tours: "3", city: "damietta", url: Damietta },
      { tours: "2", city: "monufia", url: Monufia },
      { tours: "4", city: "gharbia", url: Gharbia },
      { tours: "5", city: "dakahlia", url: Dakahlia },
      { tours: "4", city: "Kafr El Sheikh", url: KafrElSheikh },
    ],
  },
  {
    name: "Suez Canal Region",
    destinations: [
      { tours: "4", city: "ismailia", url: Ismailia },
      { tours: "6", city: "suez", url: Suez },
      { tours: "8", city: "port-said", url: PortSaid },
      { tours: "4", city: "north sinai", url: NorthSinai },
      { tours: "10", city: "south sinai", url: SouthSinai },
      { tours: "3", city: "sharQia ", url: SharQia },
    ],
  },
  {
    name: "North Upper Egypt Region",
    destinations: [
      { tours: "2", city: "Bani Sweif", url: BaniSweif },
      { tours: "3", city: "Minya", url: Minya },
      { tours: "10", city: "Fayoum", url: Fayoum },
    ],
  },
  {
    name: "Central Upper Egypt Region",
    destinations: [
      { tours: "2", city: "Asyut ", url: Asyut },
      { tours: "4", city: "new valley", url: NewValley },
    ],
  },
  {
    name: "Southern Upper Egypt Region",
    destinations: [
      { tours: "12", city: "souhag", url: Souhag },
      { tours: "4", city: "qena", url: Qena },
      { tours: "5", city: "al-aqasr", url: AlAqasr },
      { tours: "8", city: "red sea", url: RedSea },
      { tours: "", city: "aswan", url: Aswan },
    ],
  },
];

const Regions = () => {
  return (
    <div className="my-32 grid lg:grid-cols-12 gap-10">
      <div className="sm:col-span-12 xl:col-span-4">
        <RegionCard />
      </div>
      <div className="sm:col-span-12 xl:col-span-8 px-6 xs:px-0 ">
        {regions.map((region) => (
          <div
            key={region.name}
            id={region.name}
            className="mb-16 text-center md:text-start"
          >
            <h2 className="text-[2.3rem] mb-8 font-medium">{region.name}</h2>
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
    </div>
  );
};

export default Regions;
