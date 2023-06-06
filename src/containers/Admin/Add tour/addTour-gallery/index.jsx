import CustomUploadImage from "../../../../components/Admin/uploadImage";

const AddGallery = () => {
  return (
    <>
      <div className="rounded-2xl shadow-md p-10 ">
        <h3 className="text-3xl mt-10 font-medium">Upload food images</h3>
        <div className="flex justify-start items-center flex-wrap md:flex-nowrap mt-10">
          <CustomUploadImage length={2} />
        </div>

        <h3 className="text-3xl mt-10 font-medium">Upload Highlight images</h3>
        <div className="flex justify-start items-center flex-wrap md:flex-nowrap mt-10">
          <CustomUploadImage length={6} />
        </div>
      </div>
    </>
  );
};

export default AddGallery;
