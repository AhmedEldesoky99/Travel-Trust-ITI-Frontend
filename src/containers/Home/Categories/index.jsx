import CategoryIcon from "../../../components/CategoriesIcon";


const Icons = [
    {
        title: "Food"
    },
    {
        title: "Cruise"
    },
    {
        title: "Hiking"
    },
    {
        title: "Religion"
    }, {
        title: "Medical"
    },
    {
        title: "Art"
    },
    {
        title: "Culture"
    },
    {
        title: "Diving"
    }
]

const Categories = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="mx-8 mb-20 text-center lg:text-start">
            <p className="md:text-[18]px] 2xl:text-[22px] font-header hidden lg:block">Explore our Activites</p>
            <h2 className="text-[#2B2B2B] text-[30px] md:text-3xl xl:text-4xl 2xl:text-5xl font-bold md:mt-4">Popular Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 min-[1024px]:max-[1280px]:gap-x-14 grid-rows-2  w-full">
           {Icons.map(({title},index) => (
            <CategoryIcon
            title={title}
            key={index}
            />
           ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
