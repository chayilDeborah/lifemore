import Navbar from "./component/Navbar";
import Image from "next/image";
import people from './assets/people.svg';
import AboutPreview from "./component/AboutPreview";
import CommunityInfo from "./component/CommunityInfo";


const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex justify-center">
          <div className="max-w-7xl w-[100%]">
            <div className="flex">
              <div>
                <div className="mt-[200px] mb-[10px] text-[#716B95] text-[12px] font-bold leading-[19.5px] tracking-[1.3px]">
                  OPPORTUNITIES . CONNECTIONS . GROWTH
                </div>
                <div className="text-[#22366C] text-[70px] font-bold leading-[88px] lg:w-[621px] text-left mb-[11.88px]">Join a <p>Network of </p><span className="text-[#7537F6] ">Game-Changers</span></div>
                <div className="text-[#22366C] text-[17px] leading-[32.4px] lg:w-[493.5px]">Welcome to Lifemore Global Community, a dynamic network of individuals from all walks of life who are committed to achieving their goals and supporting each other’s growth.</div>
              </div>
              <Image src={people} alt='icon' className="-ml-[86px] mt-[50px]"/>
            </div>
            <button className="bg-[#7537F6] hover:opacity-[0.699999988079071] absolute -mt-[169px] rounded-[4px] text-[17px] text-[#fff] leading-[18px] py-[14px] px-[21px]">Join The Community</button>
            <AboutPreview />
            <CommunityInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
