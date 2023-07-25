import Image from "next/image";
import React from "react";
import cyclone from "../assets/cyclone.svg";
import Link from "next/link";

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
                <div className="text-[#22366C] text-[20px] leading-[32.4px] hover:bg-[#7537F6] hover:opacity-[0.699999988079071] hover:text-[#fff] cursor-pointer hover:px-[12px] hover:py-[8px]"><Link href="/">Home</Link></div>
                <div className="text-[#22366C] text-[20px] leading-[32.4px] hover:bg-[#7537F6] hover:opacity-[0.699999988079071] hover:text-[#fff] cursor-pointer hover:px-[12px] hover:py-[8px]"><Link href="/about">About Us</Link></div>
                <div className="text-[#22366C] text-[20px] leading-[32.4px] hover:bg-[#7537F6] hover:opacity-[0.699999988079071] hover:text-[#fff] cursor-pointer hover:px-[12px] hover:py-[8px]"><Link href="/events">Events</Link></div>
                <div className="text-[#22366C] text-[20px] leading-[32.4px] hover:bg-[#7537F6] hover:opacity-[0.699999988079071] hover:text-[#fff] cursor-pointer hover:px-[12px] hover:py-[8px]"><Link href="/contact">Contact</Link></div> 
                <button className="bg-[#7537F6] text-[#fff] text-[20px] leading-[32.4px] opacity-[0.699999988079071] px-[24px] py-[16px] hover:text-[white] hover:bg-[#7537F6] hover:opacity-[1]">Join Us</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
