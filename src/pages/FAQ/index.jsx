// eslint-disable-next-line no-unused-vars
import React from "react";

import Navbar from '../../components/shared/Navbar/index';
import AccordionFAQ from "../../components/shared/AccordionFAQ";
import Footer from "../../components/shared/Footer";

const Faq = () => {
    return (
        <>
            <Navbar/>
            <div className="relative h-[80vh]">
                <div className="bg-blue-500 z-0 max-w-[1680px] max-h-[400px] mx-auto rounded-lg">
                </div>
                <div className="z-10 max-w-[870px] mx-auto bg-white rounded-2xl shadow-lg flex flex-col items-center px-5">
                    <h1 className="text-5xl mb-14">Frequently<span className="font-bold"> asked questions</span></h1>
                    <AccordionFAQ question='what is our goal ?' answer='to get rich'/>
                    <AccordionFAQ question='huh' answer='to get rich'/>
                    <AccordionFAQ question='what is this ?' answer='to get rich'/>
                    <AccordionFAQ question='did i miss something ?' answer='to get rich'/>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default Faq;