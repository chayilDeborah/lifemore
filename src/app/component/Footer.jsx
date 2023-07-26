import Image from 'next/image'
import cyclonewhite from '../assets/cyclonewhite.svg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg'

const Footer = () => {
  return (
    <>
    <div className='bg-[#12084F] flex justify-center '>
        <div className='max-w-7xl w-[100%]'>
            <div className='grid grid-cols-4 lg:mt-[80px] mb-[100px]'>
                <div className='flex'>
                    <Image src={cyclonewhite} alt='icon' className='h-[80px]'/>
                    <div className='text-[#fff] text-[18px] ml-[4px] font-bold leading-[88px]'>LifemoreCommunity</div>
                </div>
                <div className=' '>
                    <div className='text-[#fff] text-[15px] font-bold leading-[22.5px] tracking-[1.5px]'>MENU</div>
                    <div className='text-[#fff] text-[14px] mt-[25px] leading-[27px]'>Home</div>
                    <div className='text-[#fff] text-[14px] mt-[10px] leading-[27px]'>About Us</div>
                    <div className='text-[#fff] text-[14px] mt-[10px] leading-[27px]'>Events</div>
                    <div className='text-[#fff] text-[14px] mt-[10px] leading-[27px]'>Gallery</div>
                    <div className='text-[#fff] text-[14px] mt-[10px] leading-[27px]'>Contact</div>
                </div>
                <div className=''>
                    <div className='text-[#fff] text-[15px] font-bold leading-[22.5px] tracking-[1.5px]'>CONTACT US</div>
                    <div className='text-[#fff] text-[14px] mt-[25px] leading-[27px]'>Akure</div>
                    <div className='text-[#fff] text-[14px] mt-[10px] leading-[27px]'>PMB 1234</div>
                    <div className='text-[#fff] text-[14px] mt-[10px] leading-[27px]'>Ondo, Nigeria</div>
                    <div className='text-[#fff] text-[14px] mt-[10px] leading-[27px]'>(806) 046-5212</div>
                    {/* <div className='text-[#fff] text-[14px] mt-[10px] leading-[27px]'>Contact</div> */}
                </div>
                <div className=''>
                    <div className='text-[#fff] text-[15px] font-bold leading-[22.5px] tracking-[1.5px]'>CONNECT</div>
                    <div className='flex mt-[30px]'>
                        <Image src={twitter} alt='icon' />
                        <Image src={facebook} alt='icon' className='ml-[20px]'/>
                        <Image src={linkedin} alt='icon' className='ml-[20px]'/>
                    </div>
                    <div className='text-[#fff] text-[14px] mt-[25px] leading-[27px]'>info@lifemorecommunity.com</div>
                </div>
            </div>
            <div className='text-center text-[#F1F1FA] text-[14px] mb-[66px] leading-[27px]'>Privacy Policy | ©2023 LifeMore Community | All rights reserved.</div>
        </div>
        <div>

        </div>

    </div>
    </>
  )
}

export default Footer