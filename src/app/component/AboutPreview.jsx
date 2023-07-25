import Image from "next/image";
import React from "react";
import aboutimg from "../assets/aboutimg.svg";
import arrow from "../assets/arrow.svg";
import Link from "next/link";

const AboutPreview = () => {
  return (
    <>
      <div className="flex">
        <Image src={aboutimg} alt="icon" className="mt-[100px] mr-[73px]" />
        <div className="">
          <div className="text-[#716B95] text-[12px] leading-[19.5px] tracking-[1.3px] mt-[157px] mb-[15.69px] ">
            ABOUT LIFEMORE COMMUNITY
          </div>
          <div className="text-[#22366C] text-[45px] leading-[52.8px] mb-[17.9px]">
            Connecting Minds, Empowering Growth.
          </div>
          <div className="text-[#22366C] text-[17px] leading-[32.4px] w-[492px] mb-[28.58px]">
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
