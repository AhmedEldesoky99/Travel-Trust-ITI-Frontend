// eslint-disable-next-line no-unused-vars
import React from "react";

import Navbar from '../../components/shared/Navbar/index';
import AccordionFAQ from "../../components/shared/AccordionFAQ";
import Footer from "../../components/shared/Footer";

const Faq = () => {
    return (
        <>
            <Navbar/>
                <div className="bg-blue-500 z-0 max-w-[1680px] max-h-[400px] w-full mx-auto rounded-lg">
                </div>
                    <div className="z-10 max-w-[870px] mx-auto bg-white rounded-lg">
                        <AccordionFAQ/>
                    </div>
            <Footer/>
        </>
    );
}
export default Faq;