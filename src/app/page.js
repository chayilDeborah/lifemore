import Navbar from "./component/Navbar";
import Image from "next/image";
import people from './assets/people.svg';
import AboutPreview from "./component/AboutPreview";
import CommunityInfo from "./component/CommunityInfo";
import Membership from "./component/Membership";
import Footer from "./component/Footer";
import Link from "next/link";


const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex justify-center">
          <div className="max-w-7xl w-[100%]">
            <div className="lg:flex w-[90%] lg:w-[100%] mx-auto">
              <div>
                <div className="hidden lg:block lg:mt-[200px] mt-[85px] mb-[10px] text-[#716B95] text-[12px] font-bold leading-[19.5px] tracking-[1.3px]">
                  OPPORTUNITIES . CONNECTIONS . GROWTH
                </div>
                <div className="text-[#22366C] lg:text-[70px] text-[40px] mt-[45px] lg:mt-[0px] font-bold leading-[52px] lg:leading-[88px] lg:w-[621px] mb-[11.88px]">Join a <p>Network of </p><span className="text-[#CD2785] lg:text-[70px] text-[40px]">Game-Changers</span></div>
                <div className="text-[#22366C] text-[17px] leading-[32.4px] lg:w-[493.5px]">Welcome to Lifemore Global Community, a dynamic network of individuals from all walks of life who are committed to achieving their goals and supporting each other’s growth.</div>
                <div className="lg:hidden lg:mt-[200px] lg:mt-[85px] mt-[20px] mb-[10px] text-[#716B95] text-[12px] font-bold leading-[19.5px] tracking-[1.3px]">
                  OPPORTUNITIES . CONNECTIONS . GROWTH
                </div>
              </div>
              <Image src={people} alt='icon' className="lg:-ml-[86px] mt-[50px]"/>
            </div>
            <div className="flex justify-center lg:block mt-[40px] lg:mt-[0px]">
            <Link href="#membership"><button className="bg-[#CD2785] hover:opacity-[0.699999988079071] mx-auto lg:absolute lg:-mt-[169px] rounded-[4px] text-[17px] text-[#fff] leading-[18px] py-[14px] px-[21px]">Join The Community</button></Link>
            </div>
            <AboutPreview />
            <CommunityInfo />
            
          </div>
        </div>
        <Membership />
        <Footer />
      </div>
    </>
  );
};

export default Home;
