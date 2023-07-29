"use client";
import React, { useState } from "react";
import Image from "next/image";
import color from "../assets/color.svg";

const Membership = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <div className="flex justify-center bg-gradient-radial from-[#4C409A] to-[#12084F] mt-[150px]">
        <div className="lg:w-[80%] w-[88%]">
          <div className="w-[100%] bg-[#FFF] shadow-3xl -mt-[70px] flex justify-center rounded-[5px]">
            <div>
              <Image
                src={color}
                alt="icon"
                className="ml-auto mt-[20px] lg:mr-[23px] lg:mt-[27px] lg:mb-[17px] mb-[10px] lg:w-[42px] lg:h-[41px] w-[32px] h-[31px]"
              />
              <div className="w-[100%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 ">
                <div className="lg:mr-[80px] w-[90%] mx-auto lg:mx-[0px] lg:w-[100%]">
                  <div className="text-[#413972] text-[12px] leading-[19.5px] tracking-[1.3px] mb-[8px] lg:mb-[16px]  mt-[10px] lg:mt-[37px]">
                    REGISTER
                  </div>
                  <div className="text-[36px] lg:text-[46px] leading-[42.8px] lg:leading-[52.8px] text-[#12084F] w-[255px] lg:w-[350px] mb-[8px] lg:mb-[16px]">
                    Become a Member Today.
                  </div>
                  <div className="text-[16px] leading-[28.4px] lg:leading-[32.4px] text-[#413972] font-bold lg:w-[327px] mb-[12px] lg:mb-[26px]">
                    Register to become a member of Lifemore Global Community!
                  </div>
                  <div className="text-[#413972] text-[17px] leading-[28.4px] lg:leading-[32.4px] lg:w-[398px] ">
                    As a member, you’ll gain access to valuable resources,
                    networking opportunities, and a supportive community that
                    will help you achieve your goals faster and more
                    efficiently.
                  </div>
                </div>
                <div>
                  <form className="mt-[30px] lg:mt-[0px]">
        <div class="grid gap-6 mb-6 lg:grid-cols-2 w-[85%] mx-auto lg:mx-[0px] lg:w-[100%]">
        <div>
            <label for="first_name" class="block mb-[9.19px] text-[13px] text-[#413972] leading-[14px]">First name *</label>
            <input type="text" id="first_name" class="bg-[#fff] border border-[#A09CB9]  rounded-[4px] focus:ring-[#413972] pl-[10px] focus:border-[#A09CB9] block w-[260px] lg:w-[200px] h-[46px]"  required/>
        </div>
        <div>
            <label for="last_name" class="block mb-[9.19px] text-[13px] text-[#413972] leading-[14px] ">Last name *</label>
            <input type="text" id="last_name" class="bg-[#fff] border border-[#A09CB9]  rounded-[4px] focus:ring-[#413972] pl-[10px] focus:border-[#A09CB9] block w-[260px] lg:w-[200px] h-[46px]" required/>
        </div>  
        
    </div>
<div className="w-[85%] mx-auto lg:mx-[0px] lg:w-[100%]">
    <div class="mb-6">
            <label for="phone" class="block mb-[9.19px] text-[13px] text-[#413972] leading-[14px] ">Phone number *</label>
            <input type="tel" id="phone" class="bg-[#fff] border border-[#A09CB9]  rounded-[4px] focus:ring-[#413972] focus:border-[#A09CB9] block pl-[10px] w-[260px] lg:w-[452px] h-[46px]" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
    <div class="mb-6">
        <label for="email" class="block mb-[9.19px] text-[13px] text-[#413972] leading-[14px] ">Email address *</label>
        <input type="email" id="email" class="bg-[#fff] border border-[#A09CB9]  rounded-[4px] focus:ring-[#413972] focus:border-[#A09CB9] block pl-[10px] w-[260px] lg:w-[452px] h-[46px]"  required/>
    </div> 
    <div class="mb-6">
    <label for="password" class="block mb-[9.19px] text-[13px] text-[#413972] leading-[14px] "> Password *</label>
        <div className="relative  container">
      <input
        type={isPasswordVisible ? "text" : "password"}
        className="w-[260px] lg:w-[452px] h-[46px] pl-[10px]
        text-base
        border border-[#A09CB9]  rounded-[4px] focus:ring-[#413972] focus:border-[#A09CB9]"
      />
      <button
        className="absolute inset-y-0 right-0 flex items-center pr-[45px] text-gray-600"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </button>
    </div>
    </div> 
    <div class="mb-[45px]">
        <label for="confirm_password" class="block mb-[9.19px] text-[13px] text-[#413972] leading-[14px] ">Confirm password *</label>
        <div className="relative">
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="w-[260px] lg:w-[452px] h-[46px] pl-[10px]
          text-base
          border border-[#A09CB9]  rounded-[4px] focus:ring-[#413972] focus:border-[#A09CB9]"
        />
        <span
          className="absolute top-2 right-[2.8rem] cursor-pointer"
          onClick={toggleShowConfirmPassword}
        >
          {showConfirmPassword ? (<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
        </span>
      </div>
    </div>
    <button type="submit" className='bg-[#7537F6] text-[#fff] text-[14.56px] font-black leading-[18.216px] tracking-[1.159px] w-[260px] lg:w-[452px] hover:opacity-[0.699999988079071] rounded-[6px] mb-[100px] lg:mb-[200px] py-[15px]'>Sign up for Membership</button>
    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:h-[263px] lg:mb-[31px] bg-[#1c115c] mt-[32px] rounded-[5px] flex justify-center py-[50px]">
            <div className="w-[90%] max-w-7xl grid grid-cols-2">
              <div>
                <div className="text-[30px] leading-[44.8px] text-[#FFFFFF] mb-[8.11px]">
                  Join Our Community
                </div>
                <div className="text-[13px] text-[#fff] leading-[19.6px] lg:w-[317px] lg:mb-[69px]">
                  Help expand our members’ visibility and influence by joining
                  our community.
                </div>
              </div>
              <div className="lg:flex justify-between">
                <div>
                  <div className="text-[#FFF] text-[44px] leading-[67.2px]">
                    50+
                  </div>
                  <div className="text-[#fff] text-[13px] leading-[19.6px]">
                    Communities
                  </div>
                </div>
                <div>
                  <div className="text-[#FFF] text-[44px] leading-[67.2px]">
                    25k+
                  </div>
                  <div className="text-[#fff] text-[13px] leading-[19.6px]">
                    Members to date
                  </div>
                </div>
                <div>
                  <div className="text-[#FFF] text-[44px] leading-[67.2px]">
                    200
                  </div>
                  <div className="text-[#fff] text-[13px] leading-[19.6px]">
                    Team Members
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
