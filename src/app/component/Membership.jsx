"use client";
import React, { useState } from "react";
import Image from "next/image";
import color from "../assets/color.svg";

const Membership = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      firstName,
      lastName,
      phone,
      email,
    };

    fetch("/api/member", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
        }
      })
      .catch((error) => {
        console.error("Error occurred during form submission:", error);
      });
      console.log('Button clicked')
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
                className="ml-auto mt-[20px] mr-[23px] lg:mt-[27px] lg:mb-[17px] mb-[10px] lg:w-[42px] lg:h-[41px] w-[32px] h-[31px]"
              />
              <div className="w-[100%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 ">
                <div className="lg:mr-[80px] w-[90%] mx-auto lg:mx-[0px] lg:w-[100%]">
                  <div className="text-[#413972] text-[12px] leading-[19.5px] tracking-[1.3px] mb-[8px] lg:mb-[16px]  mt-[10px] lg:mt-[37px]">
                    REGISTER
                  </div>
                  <div className="text-[36px] lg:text-[46px] leading-[42.8px] lg:leading-[52.8px] text-[#12084F] w-[290px] lg:w-[350px] mb-[8px] lg:mb-[16px]">
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
                  <form
                  
                    className="mt-[30px] lg:mt-[0px]"
                  >
                    <div className="grid gap-6 mb-6 lg:grid-cols-2 w-[85%] mx-auto lg:mx-[0px] lg:w-[100%]">
                      <div>
                        <label
                          for="first_name"
                          class="block mb-[9.19px] text-[13px] text-[#413972] leading-[14px]"
                        >
                          First name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          onChange={(e)=>{setFirstName(e.target.value)}}
                          className="bg-[#fff] border border-[#A09CB9]  rounded-[4px] focus:ring-[#413972] pl-[10px] focus:border-[#A09CB9] block w-[273px] lg:w-[200px] h-[46px]"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="last_name"
                          className="block mb-[9.19px] text-[13px] text-[#413972] leading-[14px] "
                        >
                          Last name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          onChange={(e)=>{setLastName(e.target.value)}}
                          className="bg-[#fff] border border-[#A09CB9]  rounded-[4px] focus:ring-[#413972] pl-[10px] focus:border-[#A09CB9] block w-[273px] lg:w-[200px] h-[46px]"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-[85%] mx-auto lg:mx-[0px] lg:w-[100%]">
                      <div className="mb-6">
                        <label
                          for="phone"
                          class="block mb-[9.19px] text-[13px] text-[#413972] leading-[14px] "
                        >
                          Phone number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          onChange={(e)=>{setPhone(e.target.value)}}
                          className="bg-[#fff] border border-[#A09CB9]  rounded-[4px] focus:ring-[#413972] focus:border-[#A09CB9] block pl-[10px] w-[273px] lg:w-[452px] h-[46px]"
                          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          for="email"
                          className="block mb-[9.19px] text-[13px] text-[#413972] leading-[14px] "
                        >
                          Email address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          onChange={(e)=>{setEmail(e.target.value)}}
                          className="bg-[#fff] border border-[#A09CB9]  rounded-[4px] focus:ring-[#413972] focus:border-[#A09CB9] block pl-[10px] w-[273px] lg:w-[452px] h-[46px]"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        onClick={(e)=>{handleSubmit(e)}}
                        className="bg-[#7537F6] text-[#fff] text-[14.56px] font-black leading-[18.216px] tracking-[1.159px] w-[273px] lg:w-[452px] hover:opacity-[0.699999988079071] rounded-[6px] mb-[100px] lg:mb-[200px] py-[15px]"
                      >
                        Sign up for Membership
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:h-[263px] lg:mb-[31px] bg-[#1c115c] mt-[32px] rounded-[5px] flex justify-center py-[25px] lg:py-[50px]">
            <div className="w-[90%] max-w-7xl grid lg:grid-cols-2">
              <div className="w-[90%] mx-auto lg:mx-[0] lg:w-full">
                <div className="text-[30px] leading-[40.8px] lg:leading-[44.8px] text-[#FFFFFF] mb-[8.11px]">
                  Join Our Community
                </div>
                <div className="text-[13px] text-[#fff] leading-[19.6px] lg:w-[317px] mb-[10px] lg:mb-[69px]">
                  Help expand our members’ visibility and influence by joining
                  our community.
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="text-[#FFF] text-center lg:text-left text-[30px] lg:text-[44px] leading-[67.2px]">
                    50+
                  </div>
                  <div className="text-[#fff] text-[12px] lg:text-[13px] leading-[19.6px]">
                    Communities
                  </div>
                </div>
                <div>
                  <div className="text-[#FFF] text-center lg:text-left text-[30px] lg:text-[44px] leading-[67.2px]">
                    25k+
                  </div>
                  <div className="text-[#fff] text-[12px] lg:text-[13px] leading-[19.6px]">
                    Members to date
                  </div>
                </div>
                <div>
                  <div className="text-[#FFF] text-center lg:text-left text-[30px] lg:text-[44px] leading-[67.2px]">
                    200
                  </div>
                  <div className="text-[#fff] text-[12px] lg:text-[13px] leading-[19.6px]">
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
