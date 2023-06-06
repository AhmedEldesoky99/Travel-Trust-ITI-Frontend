/* eslint-disable react/prop-types */
const TopTravelers = ({img,name,mail}) => {
    return (
        <>
            <div className="flex flex-row gap-4 items-center">
                <img src={img} className="rounded-full max-w-[80px] max-h-[80px]"/>
                <div className="flex flex-col">
                    <h3 className="text-[#585858] text-2xl">{name}</h3>
                    <h4 className="text-[#585858] text-xl">{mail}</h4>
                </div>
            </div>
        </>
    );
}
export default TopTravelers;