import Image from "next/image";
import React from "react";
import aboutimg from "../assets/aboutimg.svg";
import arrow from "../assets/arrow.svg";
import Link from "next/link";

const AboutPreview = () => {
  return (
    <>
      <div className="flex w-[90%] lg:w-[100%] mx-auto lg:mx-[0] flex-col-reverse lg:flex-row lg:flex">
        <Image src={aboutimg} alt="icon" className="lg:mt-[100px] mt-[60px] lg:mr-[73px]" />
        <div className="">
          <div className="text-[#716B95] text-[12px] leading-[19.5px] tracking-[1.3px] lg:mt-[157px] mt-[130px] text-center lg:text-left mb-[15.69px] ">
            ABOUT LIFEMORE COMMUNITY
          </div>
          <div className="text-[#22366C] text-[33px] text-center lg:text-left lg:text-[45px] leading-[48.8px] lg:leading-[52.8px] mb-[15.9px] lg:mb-[17.9px]">
            Connecting Minds, Empowering Growth.
          </div>
          <div className="text-[#22366C] text-[17px] text-center lg:text-left leading-[32.4px] lg:w-[492px] mb-[15.28px] lg:mb-[28.58px]">
            We believe in the power of connections. We understand that growth
            and success are not achieved in isolation, but through collaboration
            and support from a network of like-minded individuals.
          </div>
          <Link href="/about">
            {" "}
            <div className="flex cursor-pointer">
              <div className="text-[#7537F6] text-[14px] leading-[27px] mr-[7.8px]">
                More About Us
              </div>
              <Image src={arrow} alt="icon" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutPreview;
