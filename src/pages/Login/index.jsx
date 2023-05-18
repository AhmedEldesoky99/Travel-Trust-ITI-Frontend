// import React from "react";
import CustomInput from '../../components/shared/FormComponents/CustomInput';

const Login = () => {
    return (
        <div className="flex flex-row 2xs:">
            <div className="md:w-[50vw] md:h-[100vh] md:block 2xs:hidden md:bg-login-user bg-cover bg-left bg-no-repeat">
                <div className="bg-black bg-opacity-50 h-[100vh] flex flex-col justify-end pl-5 pb-5">
                    <div className="absolute top-10 left-5 bg-logo-join bg-cover h-[5rem] w-[6.2rem]"></div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center md:w-[50vw] 2xs:w-[100vw] md:mt-0 2xs:mt-[20%]">
                <h1 className="text-4xl">Welcome</h1>
                <p className="text-lg mb-5">Please enter your details below</p>
                <button className="btn btn-wide bg-white text-gray-700 border-gray-500 mb-4">  sign up with google</button>
                <div className='flex flex-row items-center'>
                    <hr className='h-px bg-gray-600 border-0 w-14' />
                    <p className='px-5 text-md'>or with</p>
                    <hr className='h-px bg-gray-600 border-0 w-14'/>
                </div>
                <CustomInput/>
                <CustomInput/>
                <div className='flex flex-row mt-2 mb-6'>
                    <input type="checkbox" name="" id="" />
                    <span className='text-sm'>remember me</span>
                    <a href="" className='text-sm pl-5 text-cyan-600'>forgot password?</a>
                </div>
                <button className='btn btn-wide bg-black text-white hover:bg-white hover:text-black hover:border-none'>Log in</button>
            </div>
        </div>
    );
}
export default Login;