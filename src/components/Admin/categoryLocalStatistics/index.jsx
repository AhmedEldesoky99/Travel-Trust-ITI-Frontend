const CategoryLocalStatistics = ({ tourNum, name }) => {
  return (
    <div className="flex justify-between items-center border-b-2 border-b-[rgb(88,88,88)]-gray p-4">
      <p className=" capitalize text-xl">{name}</p>
      <div
        className={`badge badge-primary bg-primary-green border-none badge-lg w-8 h-8 pb`}
      >
        {tourNum}
      </div>
    </div>
  );
};

export default CategoryLocalStatistics;
