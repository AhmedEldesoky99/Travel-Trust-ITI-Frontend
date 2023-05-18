// import React from "react";
import CustomInput from '../../components/shared/FormComponents/CustomInput';

const Login = () => {
    return (
        <div className="flex flex-row">
            <div className="w-[50vw] h-[100vh] bg-login-user bg-cover bg-left bg-no-repeat">
                <div className="bg-black bg-opacity-50 h-[100vh] flex flex-col justify-end pl-5 pb-5">
                    <div className="absolute top-10 left-5 bg-logo-join bg-cover h-[5rem] w-[6.2rem]"></div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[50vw]">
                <h1 className="">Welcome</h1>
                <p className="">Please enter your details below</p>
                <button className="btn btn-wide bg-white text-black">sign up with google</button>
                <div className='flex flex-row'>
                    <hr className='border-spacing-1 text-black ' />
                    <p>or with</p>
                    <hr />
                </div>
                <CustomInput/>
                <CustomInput/>
                <div className='flex flex-row'>
                    <input type="checkbox" name="" id="" />
                    <span>remember me</span>
                    <a href="">forgot password?</a>
                </div>
                <button className='btn btn-wide bg-white text-black'>Log in</button>
            </div>
        </div>
    );
}
export default Login;