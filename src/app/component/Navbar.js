import Image from "next/image";
import React from "react";
import cyclone from "../assets/cyclone.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-7xl w-[100%]">
          <div className="flex items-center justify-between text-center">
            <div className="flex">
              <Image src={cyclone} alt="icon" className="" />
              <div className="text-[#22366C] text-[18px] font-bold leading-[88px]">
                Lifemore Global Community
              </div>
            </div>
            <div className="flex justify-between w-[652px] items-center">
                <div className="text-[#22366C] text-[20px] leading-[32.4px] hover:bg-violet-600 hover:bg-[#7537F6] cursor-pointer">Home</div>
                <div className="text-[#22366C] text-[20px] leading-[32.4px]">About Us</div>
                <div className="text-[#22366C] text-[20px] leading-[32.4px]">Events</div>
                <div className="text-[#22366C] text-[20px] leading-[32.4px]">Contact</div> 
                <button className="bg-[#7537F6] text-[#fff] text-[20px] leading-[32.4px] opacity-[0.699999988079071] px-[24px] py-[16px] hover:text-[red]">Join Us</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
