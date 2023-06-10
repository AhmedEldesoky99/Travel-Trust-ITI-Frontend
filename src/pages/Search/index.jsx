/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Collapse } from 'antd';
import TourWideCard from "../../components/shared/TourWideCard";
import PriceRange from "../../components/shared/PriceRange/index";
import FilterCheckbox from "../../components/shared/Checkbox/activity";
import RatingCheckbox from "../../components/shared/Checkbox/rating";
import CustomSearch from "../../components/CustomSearchSelection";

import "./app.css";

const { Panel } = Collapse;


const Search = () => {
    const [items] = useState(3);
    const tourCards = Array.from({ length: items }, (_, index) => (
      <TourWideCard key={index} />
    ));
    return (
        <>
            <div>

            <div className="flex flex-col">
                <div className="flex flex-col flex-wrap w-screen shadow-lg ">
                    {/* Search component */}
                    {/* filter options */}
                    <div className="w-screen container mx-auto mb-8">
                        <div className="max-w-[1124px] flex lg:justify-normal 2xs:justify-center">
                            <CustomSearch />
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="flex lg:flex-row 2xs:flex-col md:items-start justify-center md:gap-5 2xs:gap-12 2xs:items-center lg:mx-0 sm:mx-20 2xs:mx-0  my-10 ">
                        <div className="flex flex-col  w-full ">
                            {/* filter component */}
                            <div className="shadow-lg px-5 py-6 rounded-xl">
                                <h1 className="text-2xl">Price Range</h1>
                                <p className="text-lg">EGP 1 200 - EGP 10 000</p>
                                <p className="text-sm"> Average Price 5 600</p>
                                <div className="mt-[18px] mb-[15px]">
                                    <PriceRange/>
                                </div>
                                <div className="flex gap-1 items-center justify-center">
                                    <input type="text" className="input input-bordered max-h-[32px] max-w-[120px]" />
                                    <p>-</p>
                                    <input type="text" className="input input-bordered max-h-[32px] max-w-[120px]" />
                                </div>
                                <div className="my-6">
                                    <hr />
                                </div>
                                <Collapse defaultActiveKey={['1']} ghost className="border-none poop">
                                    <Panel header="Activity" key="1" className="peep">
                                        <FilterCheckbox/>
                                    </Panel>
                                </Collapse>
                                <hr />
                                <Collapse defaultActiveKey={['1']} ghost className="border-none poop">
                                    <Panel header="Rating" key="1" className="peep">
                                        <p className="text-base text-gray-600">Includes stars and other ratings</p>
                                        <RatingCheckbox/>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>
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
}
export default Search;