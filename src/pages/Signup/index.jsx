// import React from "react";

import CustomInput from "../../components/shared/FormComponents/CustomInput";
import Google from "../../assets/images/Logo/Google.svg";

const SignUp = () => {
    return (
        <div className="flex flex-row">
            <div className="md:bg-sign-up-user lg:w-[50vw] lg:h-[100vh] lg:block 2xs:hidden  bg-cover bg-left bg-no-repeat">
                <div className="bg-black bg-opacity-50 h-[100vh] flex flex-col justify-end pl-5 pb-5">
                    <div className="absolute top-10 left-5 bg-logo-join bg-cover h-[5rem] w-[6.2rem]"></div>
                    <p className="text-white text-2xl pb-3">“Wherever you go becomes <br/>a part of you somehow”</p>
                    <p className="text-white text-lg"> - Anita Desal - </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:w-[50vw] 2xs:w-[100vw] xl:mt-0 my-auto h-[100vh]">
                    <h1 className="md:text-4xl 2xs:text-3xl md:mb-2 2xs:mb-4">Create an account</h1>
                    <button className="btn btn-wide bg-white text-gray-700 border-gray-500 mb-4 "><img src={Google} className="h-5 pr-2 mb-1" />  sign up with google</button>
                    <div className='flex flex-row items-center'>
                        <hr className='h-px bg-gray-600 border-0 w-14' />
                        <p className='px-5 text-md'>or with</p>
                        <hr className='h-px bg-gray-600 border-0 w-14'/>
                    </div>
                    <CustomInput/>
                    <CustomInput/>
                    <CustomInput/>
                    <CustomInput/>
                    <button className='btn btn-wide bg-black text-white hover:bg-white hover:text-black hover:border-none mb-3 mt-6'>Log in</button>
                    <p className='text-sm'>Already have an account?<a href="" className='text-sm pl-1 text-cyan-600'>Login</a></p>
            </div>
        </div>
    );
}
export default SignUp;