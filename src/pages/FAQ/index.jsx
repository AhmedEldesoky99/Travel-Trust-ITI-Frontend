// eslint-disable-next-line no-unused-vars
import React from "react";


import AccordionFAQ from "../../components/shared/AccordionFAQ";

const Faq = () => {
  const test = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ea nostrum architecto ratione corrupti esse neque tempore optio, minima aspernatur explicabo deserunt inventore! Praesentium, asperiores doloribus laboriosam fugit quod consectetur!`;
  return (
    <>
      <div className="relative h-[80vh] flex flex-col items-center mt-14 mb-36">
        <div className="absolute bg-[#009EB7] z-0 max-w-[1680px] max-h-[400px] h-[100vh] w-[100vw] mx-auto rounded-lg "></div>
        <div className="absolute z-10 max-w-[870px] max-h-[730px] top-[40%] mx-auto bg-white rounded-2xl shadow-lg flex flex-col items-center px-5 w-[100vw]">
          <h1 className="2xl:text-5xl lg:text-4xl 2xs:text-3xl mb-14 mt-14">
            Frequently<span className="font-bold"> asked questions</span>
          </h1>
          <AccordionFAQ question="what is our goal ?" answer="to get rich" />
          <AccordionFAQ question="huh" answer={test} />
          <AccordionFAQ question="what is this ?" answer="to get rich" />
          <AccordionFAQ
            question="did i miss something ?"
            answer="to get rich"
          />
        </div>
      </div>
    </>
  );
};
export default Faq;
