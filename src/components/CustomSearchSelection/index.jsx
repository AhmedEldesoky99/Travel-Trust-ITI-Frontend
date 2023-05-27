import "../CustomSearchSelection/style.css";
import { Select, Space } from "antd";
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const CustomSearch = () => (
  <>
    <div className=" md:w-[61.2%] mt-8">
      <div className="relative flex flex-col justify-between">
        <div>
          <Select
            className="custom-search"
            mode="multiple"
            style={{
              width: "100%",
            }}
            placeholder="where are you travelling?"
            onChange={handleChange}
            optionLabelProp="label"
          >
            <Option value="china" label="China">
              <Space>
                <span role="img" aria-label="China">
                  🇨🇳
                </span>
                China (中国)
              </Space>
            </Option>
            <Option value="usa" label="USA">
              <Space>
                <span role="img" aria-label="USA">
                  🇺🇸
                </span>
                USA (美国)
              </Space>
            </Option>
            <Option value="japan" label="Japan">
              <Space>
                <span role="img" aria-label="Japan">
                  🇯🇵
                </span>
                Japan (日本)
              </Space>
            </Option>
            <Option value="korea" label="Korea">
              <Space>
                <span role="img" aria-label="Korea">
                  🇰🇷
                </span>
                Korea (韩国)
              </Space>
            </Option>
          </Select>
        </div>
        <div>
          <button
            type="submit"
            className="absolute top-[6.9px] right-2  bg-primary-green hover:bg-[#048BA0] transition-all duration-300 text-white cursor-pointer  px-8  md:px-10 lg:px-12 py-[15px] xs:py-4 md:py-[20px] lg:py-[18px] rounded-md text-[18px] md:text-xl lg:text-2xl"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </>
);
export default CustomSearch;
