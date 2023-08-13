'use client'
import { useState } from "react";
import Image from "next/image";
import React from "react";
import lifelogo from "../assets/lifelogo.png";
import Link from "next/link";


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center lg:mt-[20px]">
        <div className="lg:max-w-7xl lg:w-[100%] w-[90%]">
          <div className="flex items-center justify-between text-center lg:mt-[0px] mt-[20px]">
            <div className="flex z-[20]">
              <Image src={lifelogo} alt="icon" className="w-[64px] lg:w-[74px] lg:h-[74px] h-[64px] z-20" />
              <div className="text-[#CD2785] hidden lg:block text-[16px] lg:w-full w-[54%] mt-[12px] lg:mt-[0px] lg:text-[20px] font-bold lg:leading-[88px]">
                Lifemore Global Community
              </div>
            </div>
            <div className="hidden lg:flex justify-between w-[652px] items-center">
                <div className="text-[#22366C] text-[20px] leading-[32.4px] hover:bg-[#CD2785] hover:opacity-[0.699999988079071] hover:text-[#fff] cursor-pointer hover:px-[12px] hover:py-[8px]"><Link href="/">Home</Link></div>
                <div className="text-[#22366C] text-[20px] leading-[32.4px] hover:bg-[#CD2785] hover:opacity-[0.699999988079071] hover:text-[#fff] cursor-pointer hover:px-[12px] hover:py-[8px]"><Link href="/about">About Us</Link></div>
                <div className="text-[#22366C] text-[20px] leading-[32.4px] hover:bg-[#CD2785] hover:opacity-[0.699999988079071] hover:text-[#fff] cursor-pointer hover:px-[12px] hover:py-[8px]"><Link href="/events">Events</Link></div>
                <div className="text-[#22366C] text-[20px] leading-[32.4px] hover:bg-[#CD2785] hover:opacity-[0.699999988079071] hover:text-[#fff] cursor-pointer hover:px-[12px] hover:py-[8px]"><Link href="/contact">Contact</Link></div> 
                <button className="bg-[#CD2785] text-[#fff] text-[20px] leading-[32.4px] opacity-[0.699999988079071] px-[24px] py-[16px] hover:text-[white] hover:bg-[#7537F6] hover:opacity-[1]"><Link href="#membership">Join Us</Link></button>
            </div>
            <div className="MOBILE-MENU flex lg:hidden">
              <div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
                <span className="block h-0.5 w-8 animate-pulse bg-[#CD2785]"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-[#CD2785]"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-[#CD2785]"></span>
              </div>
              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
                <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
                </div>
                <div className="flex-row space-y-[15px] justify-between items-center">
                <div className="text-[#22366C] text-[20px] leading-[32.4px] hover:bg-[#7537F6] hover:opacity-[0.699999988079071] hover:text-[#fff] cursor-pointer hover:px-[12px] hover:py-[15px]"><Link href="/">Home</Link></div>
                <div className="text-[#22366C] text-[20px] leading-[32.4px] hover:bg-[#7537F6] hover:opacity-[0.699999988079071] hover:text-[#fff] cursor-pointer hover:px-[12px] hover:py-[15px]"><Link href="/about">About Us</Link></div>
                <div className="text-[#22366C] text-[20px] leading-[32.4px] hover:bg-[#7537F6] hover:opacity-[0.699999988079071] hover:text-[#fff] cursor-pointer hover:px-[12px] hover:py-[15px]"><Link href="/events">Events</Link></div>
                <div className="text-[#22366C] text-[20px] leading-[32.4px] hover:bg-[#7537F6] hover:opacity-[0.699999988079071] hover:text-[#fff] cursor-pointer hover:px-[12px] hover:py-[15px]"><Link href="/contact">Contact</Link></div> 
                <button className="bg-[#CD2785] text-[#fff] text-[20px] leading-[32.4px] opacity-[0.699999988079071] px-[24px] py-[16px] hover:text-[white] hover:bg-[#7537F6] hover:opacity-[1]"><Link href="#membership">Join Us</Link></button>
            </div>
                {/* <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul> */}
              </div>
            </div>
          </div>
          <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 55vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
      </div>
    </>
  );
};

export default Navbar;
