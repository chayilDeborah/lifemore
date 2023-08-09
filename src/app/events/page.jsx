import React from "react";
import Navbar from "../component/Navbar";
import EventLists from "../component/EventLists";
import Membership from "../component/Membership";
import Footer from "../component/Footer";
import Link from "next/link";

const Events = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-[15px] lg:mt-[0px]">
        <div className=" w-[100%]">
          <div className="h-screen bg-[url('https://res.cloudinary.com/dmye53wps/image/upload/v1690471382/events_rahcty.jpg')] bg-cover bg-center w-full">
            <div className="w-full h-full flex items-end bg-blue-600/30 bg-gradient-to-r from-[#22366C] to-[] lightgray 50% backdrop-brightness-75 bg-gradient-to-l">
              <div className="flex max-w-7xl">
              <div className="pt-[25%]  w-[90%] mx-auto">
                <div className="lg:text-[56px] text-[50px] font-bold leading-[100%] lg:leading-[120%] text-[white] mb-[12px]">Our Events</div>
                <div className="text-[white] text-[18px] w-[90%] lg:w-[462px] mb-[24px]">Connect with like-minded individuals, share ideas, and unlock your potential through dynamic discussions and engaging events. </div>
                <div className="grid grid-cols-2 space-x-[px] w-[150px] mb-[35px] ">
                  {/* <button className="bg-[#F4F4F4] text-[14px] leading-[150%] w-[48px] text-[#000] ">2018</button> */}
                  <button className="bg-[#F4F4F4] text-[14px] leading-[150%] w-[48px] text-[#000] " ><Link href="#year2022">2022</Link></button>
                  <button className="bg-[#F4F4F4] text-[14px] leading-[150%] w-[48px] text-[#000]"><Link href="#year2023">2023</Link></button>
                </div>
              </div>
              </div>
            </div>
          </div>
          <EventLists />
        </div>
      </div>
      <Membership />
      <Footer />
    </>
  );
};

export default Events;
