/* eslint-disable no-unused-vars */
import React from "react";
import phone from "../../assets/images/Contact/phone.svg";
import mail from "../../assets/images/Contact/mail.svg";
import address from "../../assets/images/Contact/address.svg";
import ContactCard from "../../components/shared/Contact/ContactCard";
import TeamCard from "../../components/shared/Contact/TeamCard";
import member from "../../assets/images/Contact/member.jpg";
import CustomInput from "../../components/shared/FormComponents/CustomInput/index";
import CustomButton from "../../components/shared/CustomButton/index";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    getValues,
  } = useForm();
  const registerHandler = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="bg-contactUs bg-cover w-full max-h-[470px] h-[100vh] flex flex-col mb-[72px]">
          <div className="bg-black bg-opacity-40 h-[100vh] flex flex-col w-full items-center justify-center gap-4">
            {/* img + get in touch +let’s have a talk together */}
            <h1 className="font-header text-white text-[40px]">Get In Touch</h1>
            <p className="text-white text-5xl font-medium">
              Let&apos;s Have A Talk Together
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full container mx-auto mb-12">
          {/* TravelTrust + description */}
          <h1 className="text-5xl text-black mb-4 font-medium">Travel Trust</h1>
          <p className="mx-auto text-center text-2xl max-w-[1114px]">
            Aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <div className="flex flex-row mt-10 gap-5">
            {/* cards phone mail address */}
            <ContactCard
              icon={phone}
              header="Call Us"
              pOne="+7(111) 1234 56789"
              pTwo="+7(111) 1234 56789"
            />
            <ContactCard
              icon={mail}
              header="Email us"
              pOne="contact@TravelTrust.com"
              pTwo="Username@mail.com"
            />
            <ContactCard
              icon={address}
              header="Address"
              pOne="Princess Road, London, Greater "
              pTwo="London NW18JR, United Kingdom"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center container mx-auto">
          <h2 className="font-header text-4xl mb-4">Our Team</h2>
          <h1 className="font-medium text-5xl mb-12">Get To Know Us Closer</h1>
          <div className="flex flex-col gap-20  mb-32">
            <div className="flex justify-center items-center gap-20">
              <TeamCard
                name="Ahmed El Desoky"
                img={member}
                title="Full Stack Developer"
              />
              <TeamCard
                name="Ahmed El Desoky"
                img={member}
                title="Full Stack Developer"
              />
              <TeamCard
                name="Ahmed El Desoky"
                img={member}
                title="Full Stack Developer"
              />
            </div>
            <div className="flex justify-center items-center gap-20">
              <TeamCard
                name="Ahmed El Desoky"
                img={member}
                title="Full Stack Developer"
              />
              <TeamCard
                name="Ahmed El Desoky"
                img={member}
                title="Full Stack Developer"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-h-[370px] bg-parallax bg-no-repeat bg-cover bg-center flex h-screen items-center justify-center bg-fixed mb-12">
          {/* img + parallax */}
          <div className=" m-auto">
            <p className="h-full font-semibold text-2xl text-white text-center max-w-[1114px]">
              Aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          {/* form */}
          <h1 className="font-header text-4xl mb-5">Get In Touch</h1>
          <h2 className="text-5xl font-medium mb-10">
            Feel Free To Contact With Us
          </h2>
          <form
            onSubmit={handleSubmit(registerHandler)}
            className="p-16 gap-4 border-2 border-gray-600 rounded-2xl flex flex-col max-w-[998px] max-h-[672px] w-screen"
          >
            <div className="flex w-full gap-5 justify-between">
                <div className="w-full">
                <CustomInput
                    type="text"
                    name="First Name"
                    label="First Name"
                    rule="firstName"
                    register={register}
                    errors={errors}
                    />
                </div>
                <div className="w-full">
                <CustomInput
                    type="text"
                    name="FirstName"
                    label="Last Name"
                    rule="firstName"
                    register={register}
                    errors={errors}
                />
                </div>
            </div>
            <div className="flex gap-5 justify-between">
                <div className="w-full">
                <CustomInput
                    type="text"
                    name="FirstName"
                    label="Last Name"
                    rule="firstName"
                    register={register}
                    errors={errors}
                    />
                </div>
                <div className="w-full">
                <CustomInput
                    type="text"
                    name="FirstName"
                    label="Last Name"
                    rule="firstName"
                    register={register}
                    errors={errors}
                    />
                    </div>
            </div>
            <div className="max-h-[287px] h-screen ">
            <textarea className="w-full h-full rounded-lg border-2 border-black"></textarea>
            </div>
            <div className="w-full flex justify-end mt-9">
                <CustomButton value='Submit' type='secondary'width='max-w-[263px] w-full h-full'/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
