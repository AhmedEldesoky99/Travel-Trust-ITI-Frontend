/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Collapse, Pagination, Slider, Spin } from "antd";
import TourWideCard from "../../components/shared/TourWideCard";
import FilterCheckbox from "../../components/shared/Checkbox/activity";
import RatingCheckbox from "../../components/shared/Checkbox/rating";
import CustomSearch from "../../components/CustomSearchSelection";

import "./app.css";
import { useQuery } from "react-query";
import { getAllCategories } from "../../services/Home";
import { useEffect } from "react";
import { getStats } from "../../services/TourSats";
import CartLoader from "../../components/CartLoader/CartLoader";

const { Panel } = Collapse;

const Search = () => {
  const [category, setCategory] = useState([]);
  const [ tourData, setTourData] = useState([]);
  const [rate, setRate] = useState([]);
  const onChangeCategories = (checkedValues) => {
    if (category.includes(checkedValues)) {
      setCategory(category.filter((value) => value !== checkedValues));
    } else {
      setCategory([...category, checkedValues]);
    }
  };
  const onChangeRatings = (checkedValues) => {
    const option = checkedValues.options;
    if (rate.includes(option)) {
      setRate(rate.filter((value) => value !== option));
    } else {
      setRate([...rate, option]);
    }
  };

  const formatDate = (start_date) => {
    const date = new Date(start_date);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const dateString = date.toLocaleDateString("en-US", options);
    const timeString = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
    return `${dateString} | ${timeString}`;
  };
  const [isSuccess,setIsSuccess] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [result, setResult] = useState([]);
  const { data } = useQuery("categories", getAllCategories);
  const { data: statsData, isSuccess: statsSuccess } = useQuery(
    "stats",
    getStats
  );

  const onChangeSlider = (value) => {
    if (value[0] < value[1]) {
      setMin(value[0]);
      setMax(value[1]);
    }
  };




  const tourCards = result?.data?.map((item, index) => (
    <TourWideCard showAction={false} key={index}   image={item?.city?.home_image}
    title={item?.title}
    city={item?.city?.title}
    duration={item?.duration}
    startDate={item?.start_date}
    pricePerPerson={item?.price_per_person}
    id={item?._id}
    showTotal={false} />))


  const handleTourData =()=>{

      const allToursDetails = result?.data?.map((tour) => {
        return {
          city: tour.city?.home_image,
          title: tour.title,
          cityTitle: tour.city?.title,
          duration: tour.duration,
          startDate: formatDate(tour.start_date),
          pricePerPerson: tour.price_per_person,
          personNum: tour.person_num,
          id: tour._id,
        };
      });
      setTourData(allToursDetails);
  }
  const handleResult= (value)=>{
    setResult(value);
    handleTourData();
  }

  useEffect(() => {
    if (statsData?.data.minPrice) {
      setMax(statsData?.data.maxPrice);
      setMin(statsData?.data.minPrice);

    }
  }, []);

  return (
    <>
      <div className="my-16">
        <div className="flex flex-col">
          <div className="flex flex-col flex-wrap shadow-lg ">
            <div className=" container mx-auto mb-8">
              <div className="max-w-[1124px] flex lg:justify-normal 2xs:justify-center mt-8">
                <CustomSearch
                  data={statsData}
                  min={min}
                  max={max}
                  rate={rate}
                  category={category}
                  handleResult={handleResult}
                  setSuccess={setIsSuccess}
                  setLoading={setIsLoading}
                />
              </div>
              <div></div>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="flex lg:flex-row 2xs:flex-col md:items-start justify-center md:gap-5 2xs:gap-12 2xs:items-center lg:mx-0 sm:mx-20 2xs:mx-0  my-10 ">
              <div className="flex flex-col  w-full max-w-[405px]">
                {/* filter component */}
                <div className="shadow-lg px-5 py-6 rounded-xl">
                  <h1 className="text-2xl">Price Range</h1>
                  <p className="text-lg">{`$${statsData?.data?.minPrice} - $${statsData?.data?.maxPrice}`}</p>
                  <p className="text-sm">{` Average Price ${
                    (statsData?.data?.minPrice + statsData?.data?.maxPrice) / 2
                  }`}</p>
                  <div className="mt-[18px] mb-[15px]">
                    <Slider
                      min={0}
                      max={statsData?.data?.maxPrice}
                      onChange={onChangeSlider}
                      range={true}
                      step={50}
                      defaultValue={[min, max]}
                      value={[min, max]}
                    />
                  </div>
                  <div className="flex gap-1 items-center justify-center">
                    <input
                      type="text"
                      className="input input-bordered max-h-[32px] max-w-[120px]"
                      value={min}
                      disabled
                    />
                    <p>-</p>
                    <input
                      type="text"
                      className="input input-bordered max-h-[32px] max-w-[120px]"
                      value={max}
                      disabled
                    />
                  </div>
                  <div className="my-6">
                    <hr />
                  </div>
                  <Collapse
                    defaultActiveKey={["1"]}
                    ghost
                    className="border-none poop"
                  >
                    <Panel header="Activity" key="1" className="peep">
                      <FilterCheckbox
                        data={data}
                        stat={statsData?.data?.categories}
                        onChange={onChangeCategories}
                      />
                    </Panel>
                  </Collapse>
                  <hr />
                  <Collapse
                    defaultActiveKey={["1"]}
                    ghost
                    className="border-none poop"
                  >
                    <Panel header="Rating" key="1" className="peep">
                      <p className="text-base text-gray-600">
                        Includes stars and other ratings
                      </p>
                      <RatingCheckbox
                        statsData={statsData?.data?.rates}
                        onChange={onChangeRatings}
                      />
                    </Panel>
                  </Collapse>
                </div>
              </div>
              {/* cards */}
              <div className="flex flex-col max-w-[1255px] gap-4 container">
                {/* wide cards */}
  
                {tourCards}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
