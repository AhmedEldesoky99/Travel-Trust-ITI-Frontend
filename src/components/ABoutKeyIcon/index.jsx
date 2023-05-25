
// alias name

const KeyIcon = ({ icon: Icon, title, subTitle }) => {
  return (
    <>
      <div>
        <div className="w-full flex flex-col  mt-4">
          <div
            style={{ fontSize: "40px" }}
            className="h-full hover:text-primary-green  flex justify-center cursor-pointer mb-4"
          >
            <Icon />
          </div>
        </div>
        <h2 className="text-[16px] md:text-[20px] text-center">{title}</h2>
        <p className="text-sm text-center">{subTitle}</p>
      </div>
    </>
  );
};
export default KeyIcon;
