import Image from "next/image";
import inspiration from "../assets/inspiration.svg";
import ayo from "../assets/ayo.svg";
import funmi from "../assets/funmi.svg";

const Team = () => {
  return (
    <>
      <div className="lg:w-[100%] w-[90%] mx-auto lg:mx-[0]">
        <div className="text-[#22366C] text-[45px] leading-[52.8px] mb-[15px] lg:mb-[37px] text-center lg:text-left mt-[35px] lg:mt-[0px] ">
          Our Team
        </div>
        <div className="text-[#22366C] text-center lg:text-left text-[17px] leading-[32.4px] lg:w-[464px]  mb-[37px]">
          At Lifemore Global Community, we’re proud to have a talented and
          experience team that is dedicated to supporting growth.
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mb-[100px]">
          <div>
            <Image src={inspiration} alt="icon" className="w-[338px] h-[385px] lg:w-[358px] lg:h-[405px] mx-auto lg:mx-[0]"/>
            <div className="text-[#000] text-[20px] leading-[150%] mb-[10px] lg:mt-[24px] mt-[15px]  font-semibold text-center">
              Ayodeji Inspiration{" "}
            </div>
            <div className="text-[#000]  text-[12px] leading-[19.5px] tracking-[1.3px] lg:mb-[0px] mb-[20px] leading-[150%] text-center">
              LEAD
            </div>
          </div>
          <div>
            <Image src={ayo} alt="icon" className="w-[338px] h-[385px] lg:w-[358px] lg:h-[405px] mx-auto lg:mx-[0]"/>
            <div className="text-[#000] text-[20px] leading-[150%] mb-[10px] lg:mt-[24px] mt-[15px] font-semibold text-center">
              Adenjolaoluwa Ayodeji{" "}
            </div>
            <div className="text-[#000]  text-[12px] leading-[19.5px] tracking-[1.3px] lg:mb-[0px] mb-[20px] leading-[150%] text-center">
              COMMUNITY COORDINATOR
            </div>
          </div>
          <div>
            <Image src={funmi} alt="icon" className="w-[338px] h-[385px] lg:w-[358px] lg:h-[405px] mx-auto lg:mx-[0]"/>
            <div className="text-[#000] text-[20px] leading-[150%] mb-[10px] lg:mt-[24px] mt-[15px] font-semibold text-center">
            Olonisakin Funmilayo
            </div>
            <div className="text-[#000]  text-[12px] leading-[19.5px] tracking-[1.3px] lg:mb-[0px] mb-[20px] leading-[150%] text-center">
            HEAD COMMUNITY WELFARE
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
