/* eslint-disable react/prop-types */
const ContactCard = ({ icon, header, pOne, pTwo }) => {
  return (
    <>
      <div className="max-w-[547px] max-h-[340px] flex flex-col items-center justify-center border-gray-500 border-2 w-full h-[100vh] rounded-2xl">
        <div className="border-2 border-gray-500 rounded-full p-6 mb-10">
          <img src={icon} className="" />
        </div>
        <h1 className="text-2xl font-medium mb-6">{header}</h1>
        <p className="text-xl text-gray-600 mb-4">{pOne}</p>
        <p className="text-xl text-gray-600">{pTwo}</p>
      </div>
    </>
  );
};
export default ContactCard;
