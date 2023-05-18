// import React from "react";
import CustomInput from '../../components/shared/FormComponents/CustomInput';
import Google from "../../assets/images/Logo/Google.svg";
const Login = () => {
    return (
        <div className="flex flex-row 2xs:">
            <div className="lg:w-[50vw] lg:h-[100vh] lg:block 2xs:hidden md:bg-login-user bg-cover bg-left bg-no-repeat">
                <div className="bg-black bg-opacity-50 h-[100vh] flex flex-col justify-end pl-5 pb-5">
                    <div className="absolute top-10 left-5 bg-logo-join bg-cover h-[5rem] w-[6.2rem]"></div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:w-[50vw] 2xs:w-[100vw] xl:mt-0 md:mt-[10%] 2xs:mt-[20%]">
                <h1 className="text-4xl">Welcome</h1>
                <p className="text-lg mb-5">Please enter your details below</p>
                <button className="btn btn-wide bg-white text-gray-700 border-gray-500 mb-4"> <img src={Google} className="h-5 pr-2 mb-1" /> sign up with google</button>
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
                <button className='btn btn-wide bg-black text-white hover:bg-white hover:text-black hover:border-none mb-3'>Log in</button>
                <p className='text-sm'>Don’t have an account?<a href="" className='text-sm pl-1 text-cyan-600'>Sign up for FREE</a></p>
            </div>
        </div>
    );
}
export default Login;