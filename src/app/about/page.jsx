import React from 'react'
import Navbar from '../component/Navbar'
import Image from 'next/image';
import illustrate from '../assets/illustrate.svg' 
import Team from '../component/Team';
import Membership from '../component/Membership';
import Footer from '../component/Footer';

const About = () => {
  return (
    <>
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="max-w-7xl w-[100%]">
          <div className="flex lg:mt-[112px] lg:mb-[100px]">
            <Image src={illustrate} alt='icon' className='lg:mr-[72.7px]'/>
            <div>
              <div className='text-[#716B95] text-[12px] leading-[19.5px] tracking-[1.3px] mt-[39px]'>ABOUT LIFEMORE COMMUNITY</div>
              <div className="text-[#22366C] text-[45px] leading-[52.8px] mb-[15.9px] mt-[15.69px]">
                 Connecting Minds, Empowering Growth.
              </div>
              <div className="text-[#22366C] text-[17px] leading-[32.4px] w-[492px] mb-[28.58px]">
            We believe in the power of connections. We understand that growth
            and success are not achieved in isolation, but through collaboration
            and support from a network of like-minded individuals.
          </div>
          <div className="text-[#22366C] text-[17px] leading-[32.4px] w-[492px] mb-[28.58px]">
          A space where we learn,unlearn and relearn with a view to becoming better people,who are passionate about the growth and prosperity of our immediate environment, with strategic partnership with individuals,organisations,and government we organise conferences both locally and internationally.
          </div>
            </div>
          </div>
          <Team />
        </div>
      </div>
      <Membership />
      <Footer />
    </div>
    </>
  )
}

export default About