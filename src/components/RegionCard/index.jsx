import { useState } from "react";

const regionsTabs = [
  { name: "Greater Cairo Region", cities: 3 },
  { name: "Alexandria Region", cities: 3 },
  { name: "Delta Region", cities: 5 },
  { name: "Suez Canal Region", cities: 6 },
  { name: "North Upper Egypt Region", cities: 3 },
  { name: "Central Upper Egypt Region", cities: 2 },
  { name: "Southern Upper Egypt Region", cities: 5 },
];

const RegionCard = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedIndex(index);
    const section = document.getElementById(regionsTabs[index].name);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="hero min-w-[25rem] mb-24 sticky top-4 ">
        <div className="container">
          <div className="border-[0.4px] border-gray-200 py-10 shadow-md rounded-md">
            {regionsTabs.map(({ name, cities }, index) => (
              <button
                key={index}
                className={`flex justify-between mx-6 border-b-2 py-5 w-[89%] ${
                  selectedIndex === index
                    ? "text-primary-green border-primary-green"
                    : "text-black"
                }`}
                onClick={() => handleButtonClick(index)}
              >
                <p className="text-xl font-normal">{name}</p>
                <p
                  className={`border-[1.2px] border-gray-300 text-[1rem] w-[1.6rem] h-[1.6rem] flex justify-center items-center rounded-md px-3 ${
                    selectedIndex === index
                      ? "bg-primary-green text-white"
                      : "text-gray-300"
                  }`}
                >
                  {cities}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RegionCard;
