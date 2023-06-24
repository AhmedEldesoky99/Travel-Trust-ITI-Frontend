/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import { useMutation, useQuery } from "react-query";
import "../CustomSearchSelection/style.css";
import { Select, Space } from "antd";
import { getSearchOptions } from "../../services/SearchOptions";
import { getSearchResults } from "../../services/Search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


const { Option } = Select;


const CustomSearch = ({ customWidth, min, max, rate=[], category=[], setResult }) => {
  const [city, setCity] = useState([]);
  const onChangeCities = (value) => {
    setCity(value);
  };
  const navigate = useNavigate();
  const { data } = useQuery("searchOptions", getSearchOptions);
  const handleSearch = async () => {
    let Data = {
      maxPrice: max,
      minPrice: min,
    };
    if (rate.length > 0) {
      Data.rate = rate;
    }
    if (category.length > 0) {
      Data.category = category;
    }
    if (city.length > 0) {
      Data.city = city;
    }
    const result = await getSearchResults(Data);
    setResult(result)
  };
  const handleOnChange = (value) => {
    onChangeCities([...value]);
  };

  const mutation = useMutation(handleSearch, {
    onSuccess: (res) => {
      if (res?.data?.success) {
        navigate("/search");
      } else {
        navigate("/search");
      }
    },
  });
  const handleSubmit = (e)=>{
    e.preventDefault();
    mutation.mutate();
  }

  useEffect(() => {
    mutation.mutate();
  }, [])
  

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
