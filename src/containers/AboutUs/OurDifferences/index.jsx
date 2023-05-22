import {
  TeamOutlined,
  EnvironmentOutlined,
  CommentOutlined,
  DollarOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import KeyIcon from "../../../components/ABoutKeyIcon";

const icons = [
  {
    icon: TeamOutlined,
    title: "Population",
    subTitle: "99,828,978",
  },
  {
    icon: EnvironmentOutlined,
    title: "Capital",
    subTitle: "Cairo",
  },
  {
    icon: CommentOutlined,
    title: "Language",
    subTitle: "Arabic",
  },
  {
    icon: DollarOutlined,
    title: "Currency",
    subTitle: "Egypt Pound",
  },
  {
    icon: ClockCircleOutlined,
    title: "Time difference",
    subTitle: "GMT +1 | EST +6",
  },
  {
    icon: CalendarOutlined,
    title: "Best Time",
    subTitle: "SEP - MAY",
  },
];

const OurDifferences = () => {
  return (
    <>
      <section className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col md:px-14 mx-6 md:-order-0 mt-16 lg:mt-0">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-[#2B2B2B]">
              What make us different
            </h1>
            <p className="font-normal text-base leading-8 text-[20px] md:text-[24px]">
              A source of obsession with travellers for centuries, there is
              still much todiscover in this mysterious country. Egypt welcomes
              you in with grand Pharaonic temples and its meandering River Nile.
              For 15 years our TravelExperts have been travelling to Egypt with
              families, friends and partners to curate bespoke itineraries and
              handpick the most passionate, guides to bring it to life. With
              Asma you’ll discover Cairo City you’ll navigate the waterways of
              the world’s longest river.
            </p>
          </div>

          <div>
            <div className="h-56 lg:border-l-2 border-gray-400 mt-10 mb-10">
            
              <div className="grid grid-cols-3 grid-rows-2 ">
                {icons.map(({ icon, title, subTitle }, index) => (
                  <KeyIcon
                    icon={icon}
                    title={title}
                    subTitle={subTitle}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default OurDifferences;
