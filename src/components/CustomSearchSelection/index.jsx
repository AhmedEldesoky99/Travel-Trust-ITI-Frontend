/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import { useQuery } from "react-query";
import "../CustomSearchSelection/style.css";
import { Select, Space } from "antd";
import { getSearchOptions } from "../../services/SearchOptions";

const { Option } = Select;

const CustomSearch = ({ customWidth, onChange, onSubmit, submitData }) => {
  const { data } = useQuery("searchOptions", getSearchOptions);

  const handleOnChange = (value) => {
    onChange([...value]);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    onSubmit(submitData);
  }

  return (
    <>
      <div
        className={`w-full ${customWidth ? customWidth : "md:w-[61.2%]"} mt-8`}
      >
        <form onSubmit={handleSubmit}>
        <div className="relative flex flex-col justify-between">
          <div>
            <Select
              className="custom-search"
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="where are you travelling?"
              onChange={handleOnChange}
              optionLabelProp="label"
            >
              {data?.data?.map((option) => (
                <Option
                  value={option?._id}
                  label={option?.title}
                  key={option?._id}
                >
                  <Space>{option?.title}</Space>
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <button
              type="submit"
              className="CustomBtn absolute top-[6.9px] right-[0.34rem] sm:right-2  bg-primary-green hover:bg-[#048BA0] transition-all duration-300 text-white cursor-pointer  px-5  md:px-10 lg:px-12 py-[11px] xs:py-[11px] min:[767px]-max:[769px]-py-[11px] md:py-[20px] lg:py-[18px] rounded-md text-[16px] md:text-xl lg:text-2xl"
            >
              Search
            </button>
          </div>
        </div>
        </form>
      </div>
    </>
  );
};

export default CustomSearch;
