import Image from 'next/image'
import logolife from '../assets/logolife.svg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg'

const Footer = () => {
  return (
    <>
    <div className='bg-[#12084F] flex justify-center '>
        <div className='max-w-7xl w-[100%]'>
            <div className='lg:flex lg:w-[100%] w-[95%] mx-auto lg:justify-evenly'>
                <div className='hidden lg:flex lg:justify-center lg:w-[100%] w-[90%] mx-auto lg:mx-[0px] lg:mt-[80px] mt-[50px] lg:mb-[0px] mb-[20px] items-center lg:items-start'>
                    <Image src={logolife} alt='icon' className='h-[80px]'/>
                    <div className='text-[#fff] text-[18px] ml-[4px] font-bold leading-[88px]'>Lifemore Global Community</div>
                </div>
            <div className='lg:grid grid-cols-3 justify-between lg:w-[100%] w-[90%] mx-auto lg:mx-[0px] lg:grid-cols-3 lg:mt-[80px]  mb-[100px]'>
                <div className='w-[70%] mx-auto lg:mx-[0px] text-center lg:text-left lg:w-full'>
                    <div className='text-[#fff] lg:text-[15px] text-[20px] font-bold leading-[22.5px] tracking-[1.5px] mt-[49px] lg:mt-[0px]'>MENU</div>
                    <div className='text-[#fff] lg:text-[14px] text-[16px] mt-[25px] leading-[27px]'>Home</div>
                    <div className='text-[#fff] lg:text-[14px] text-[16px] mt-[10px] leading-[27px]'>About Us</div>
                    <div className='text-[#fff] lg:text-[14px] text-[16px] mt-[10px] leading-[27px]'>Events</div>
                    <div className='text-[#fff] lg:text-[14px] text-[16px] mt-[10px] leading-[27px]'>Gallery</div>
                    <div className='text-[#fff] lg:text-[14px] text-[16px] mt-[10px] leading-[27px]'>Contact</div>
                </div>
                <div className='w-[85%] lg:w-full mx-auto lg:mx-[0px] text-center lg:text-left mt-[49px] lg:mt-[0px]'>
                    <div className='text-[#fff] lg:text-[15px] text-[20px] font-bold leading-[22.5px] tracking-[1.5px]'>CONTACT US</div>
                    <div className='text-[#fff] lg:text-[14px] text-[16px] mt-[25px] leading-[27px]'>Lagos</div>
                    <div className='text-[#fff] lg:text-[14px] text-[16px] mt-[10px] leading-[27px]'>PMB 1234</div>
                    <div className='text-[#fff] lg:text-[14px] text-[16px] mt-[10px] leading-[27px]'>Ondo, Nigeria</div>
                    <div className='text-[#fff] lg:text-[14px] text-[16px] mt-[10px] leading-[27px]'>+1 (609) 598 4995, (806) 046-5212</div>
                    {/* <div className='text-[#fff] text-[14px] mt-[10px] leading-[27px]'>Contact</div> */}
                </div>
                <div className='mx-auto text-center lg:text-left mt-[49px] lg:mt-[0px]'>
                    <div className='text-[#fff] lg:text-[15px] text-[20px] font-bold leading-[22.5px] tracking-[1.5px]'>CONNECT</div>
                    {/* <div className='flex mt-[30px] justify-center lg:justify-end'>
                        <Image src={twitter} alt='icon' />
                        <Image src={facebook} alt='icon' className='ml-[20px]'/>
                        <Image src={linkedin} alt='icon' className='ml-[20px]'/>
                    </div> */}
                    <div className='text-[#fff] lg:text-[12px] text-[16px] lg:mt-[25px] mt-[15px] leading-[27px]'>info@lifemoreglobalcommunity.com</div>
                </div>
            </div>
            </div>
            
            <div className='text-center text-[#F1F1FA] lg:w-[100%] w-[80%] mx-auto lg:mx-[0px] text-[14px] mb-[66px] leading-[27px]'>Privacy Policy | ©2023 Lifemore Global Community | All rights reserved.</div>
        </div>
        <div>

        </div>

    </div>
    </>
  )
}

export default Footer