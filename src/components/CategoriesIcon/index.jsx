import Icon from "../../utils/icons";

const CategoryIcon = (data) => {
  // console.log({categroy: data});
  return (
    <>
      <div className="flex items-center justify-center gap-6 border-[1.6px] border-gray-300  xl:px-40 py-4 mt-12 rounded-md hover:-translate-y-2 hover:shadow-lg transition-all duration-200 cursor-pointer">
        <div>
        <Icon name={data.data?.name}/>
        </div>
         <div className="font-inter text-[20px] md:text-[22px] lg:text-2xl 2xl:text-3xl">
            <p>{data.data?.name}</p>
         </div>
      </div>
    </>
  );
};
export default CategoryIcon;
