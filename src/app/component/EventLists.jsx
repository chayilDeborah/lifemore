import Image from "next/image";
import health from "../assets/health.png";
import price from "../assets/price.svg";
import freedom from "../assets/freedom.svg";
import bedyear from "../assets/bedyear.svg";
import global from "../assets/global.jpeg";
import Link from "next/link";

const EventLists = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-7xl w-[100%]">
          <div id="year2022">
            <div className="text-[#22366C] text-[30px] lg:text-[48px] font-bold leading-[120%] mt-[60px] lg:mt-[112px] mb-[24px] lg:ml-[20%] text-center lg:text-left">
              Year 2022
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto lg:mx-[0px] space-y-[45px] lg:space-y-[0px]">
              <Image
                src={health}
                alt="Health-flyer"
                className="lg:w-[600px] lg:h-[600px] w-[300px] h-[300px] rounded-[10px] mx-auto lg:mx-[0px]"
              />
              <Image
                src={price}
                alt="price-flyer"
                className="lg:w-[600px] lg:h-[600px] w-[300px] h-[300px] rounded-[10px] lg:ml-[20px] mx-auto lg:mx-[0px]"
              />
              <Image
                src={freedom}
                alt="freedom-flyer"
                className="lg:w-[600px] lg:h-[600px] w-[300px] h-[300px] rounded-[10px] mt-[50px] mx-auto lg:mx-[0px]" style={{marginTop: "50px"}}
              />
            </div>
          </div>
          <div id="year2023">
            <div className="text-[#22366C] text-[30px] lg:text-[48px] font-bold leading-[120%] lg:mt-[112px] mt-[50px] mb-[24px] text-center lg:text-left lg:ml-[20%]">
              Year 2023
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <Image
                src={bedyear}
                alt="2023 flyer"
                className="lg:w-[600px] lg:h-[600px]  w-[300px] h-[300px] mx-auto lg:mx-[0px] rounded-[10px]"
              />
            </div>
            <div>
              <div className="text-[#22366C] text-[30px] lg:text-[48px] font-bold leading-[120%] lg:mt-[112px] mt-[50px]  mb-[24px] text-center lg:text-left lg:ml-[60px]">
                UPCOMING!!
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 ">
                <Image
                  src={global}
                  alt="recent-flyer"
                  className="lg:w-[600px] lg:h-[600px]  w-[300px] h-[300px] mx-auto lg:mx-[0px] mx-auto lg:mx-[0px] rounded-[10px]"
                />
                <div className="flex justify-center mt-[8%] lg:mt-[20%]">
                  <div>
                    <div className="text-[#22366C] text-[24px] mb-[10px] w-[73%] lg:w-[100%] mx-auto lg:mx-[0px]">
                      To register for the Conference, click the link below
                    </div>
                    <div className="w-[73%] lg:w-[100%] mx-auto lg:mx-[0px]">
                    <Link href="https://docs.google.com/forms/d/1dsou98yy-7SNP16mJrVPNMAq-8vRmFN4RvA_a5Tx9v8/edit?pli=1" className="text-[#22366C] text-[16px] lg:text-[18px]  hover:opacity-[0.699999988079071] underline-offset-4">
                      https://docs.google.com/forms/d/1dsou98yy-7SNP16mJrVPNMAq-8vRmFN4RvA_a5Tx9v8/edit?pli=1
                    </Link>
                    </div>
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

export default EventLists;
