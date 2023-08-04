"use client";
import React from "react";
import Image from "next/image";
import color from "../assets/color.svg";

const Membership = () => {

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
              <div className="w-[100%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-1 ">
                <div>
                <div className="text-[#413972] text-[12px] leading-[19.5px] tracking-[1.3px] mb-[8px] lg:mb-[16px]  mt-[10px] lg:mt-[7px]">
                    REGISTER
                  </div>
                  <div className="mt-[30px] lg:mt-[0px] lg:-ml-[54px]">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSejEJm5Y0MmzplwSbL0y_0fRMCCiQZg1woh0yj57Wck-3QvoA/viewform?embedded=true"
                      className="lg:w-[750px] w-[300px] h-[1587px] lg:h-[1450px]"
                      // width="750"
                      // height="1466"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0"
                    >
                      Loading…
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:h-[263px] lg:mb-[31px] bg-[#1c115c] mt-[32px] rounded-[5px] flex justify-center py-[25px] lg:py-[50px]">
            <div className="w-[90%] max-w-7xl grid lg:grid-cols-2">
              <div className="w-[90%] mx-auto lg:mx-[0] lg:w-full">
                <div className="text-[25px] lg:text-[30px] leading-[40.8px] lg:leading-[44.8px] text-[#FFFFFF] mb-[8.11px] text-center lg:text-left">
                  Join Our Community
                </div>
                <div className="text-[13px] text-center lg:text-left text-[#fff] leading-[19.6px] lg:w-[317px] mb-[10px] lg:mb-[69px]">
                  Help expand our members’ visibility and influence by joining
                  our community.
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="text-[#FFF] text-center lg:text-left text-[30px] lg:text-[44px] leading-[67.2px]">
                    8
                  </div>
                  <div className="text-[#fff] text-[12px] lg:text-[13px] leading-[19.6px]">
                    Countries
                  </div>
                </div>
                <div>
                  <div className="text-[#FFF] text-center lg:text-left text-[30px] lg:text-[44px] leading-[67.2px]">
                    1k
                  </div>
                  <div className="text-[#fff] text-[12px] lg:text-[13px] leading-[19.6px]">
                    Members to date
                  </div>
                </div>
                <div>
                  <div className="text-[#FFF] text-center lg:text-left text-[30px] lg:text-[44px] leading-[67.2px]">
                    10
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
