import "../CustomSearchSelection/style.css";
import { Select, Space } from "antd";

const { Option } = Select;

const CustomSearch = (props) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div className={`w-full ${props.customWidth ? props.customWidth : 'md:w-[61.2%]'} mt-8`}>
        <div className="relative flex flex-col justify-between">
          <div>
            <Select
              className="custom-search"
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="where are you travelling?"
              onChange={handleChange}
              optionLabelProp="label"
            >
              <Option value="china" label="China">
                <Space>Dahab</Space>
              </Option>
              <Option value="usa" label="USA">
                <Space>Cairo</Space>
              </Option>
              <Option value="japan" label="Japan">
                <Space>Fayoum</Space>
              </Option>
              <Option value="korea" label="Korea">
                <Space>Alex</Space>
              </Option>
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
      </div>
    </>
  );
};

export default CustomSearch;