import Image from "next/image";
import inspiration from "../assets/inspiration.svg";
import ayo from "../assets/ayo.svg";
import funmi from "../assets/funmi.svg";

const Team = () => {
  return (
    <>
      <div className="">
        <div className="text-[#22366C] text-[45px] leading-[52.8px] mb-[37px]">
          Our Team
        </div>
        <div className="text-[#22366C] text-[17px] leading-[32.4px] lg:w-[464px]  mb-[37px]">
          At Lifemore Global Community, we’re proud to have a talented and
          experience team that is dedicated to supporting growth.
        </div>
        <div className="grid grid-cols-3 mb-[100px]">
          <div>
            <Image src={inspiration} alt="icon" />
            <div className="text-[#000] text-[20px] leading-[150%] mt-[24px] font-semibold text-center">
              Ayodeji Inspiration{" "}
            </div>
            <div className="text-[#000] text-[18px] leading-[150%] text-center">
              Lead
            </div>
          </div>
          <div>
            <Image src={ayo} alt="icon" />
            <div className="text-[#000] text-[20px] leading-[150%] mt-[24px] font-semibold text-center">
              Adenjolaoluwa Ayodeji{" "}
            </div>
            <div className="text-[#000] text-[18px] leading-[150%] text-center">
              Community Coordinator
            </div>
          </div>
          <div>
            <Image src={funmi} alt="icon" />
            <div className="text-[#000] text-[20px] leading-[150%] mt-[24px] font-semibold text-center">
            Olonisakin Funmilayo
            </div>
            <div className="text-[#000] text-[18px] leading-[150%] text-center">
            Head Community Welfare
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
