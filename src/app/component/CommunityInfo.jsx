import Image from 'next/image'
import target from '../assets/target.svg';
import connect from '../assets/connect.svg';
import bulb from '../assets/connect.svg';
import chat from '../assets/chat.svg';
import star from '../assets/star.svg';
import check from '../assets/check.svg'

const CommunityInfo = () => {
  return (
    <>
    <div className='flex justify-center mt-[130px]'>
        <div>
            <div className='text-[13px] text-[#716B95] leading-[19.5px] tracking-[1.3px] mx-auto text-center'>OUR COMMUNITY MEMBERS</div>
            <div className='text-[#22366C] text-[45px] leading-[52.8px] text-center w-[70%] mt-[15.69px] mb-[17.99px] mx-auto'>The wonderful community of trailblazers who make things a reality.</div>
            <div className='text-[#22366C]  text-[17px] leading-[32.4px] w-[70%] mx-auto mb-[55px] '>Our members are busy and accomplished professional leaders who: Our members are a diverse group of individuals from all over the world who are passionate about personal and professional growth.</div>
            <div className='grid grid-cols-3 gap-x-[31px]'>
                <div className=' pb-[25px] '>
                    <Image src={target} alt='icon' className='mb-[18px] mx-auto'/>
                    <div className='text-[#22366C] text-[16px] leading-[32.4px] w-[75%] mx-auto'><span className='font-bold'>Connect with like-minded</span> individuals who share your passion for growth.</div>
                </div>
                <div className=' pb-[25px] '>
                    <Image src={connect} alt='icon' className='mb-[18px] mx-auto'/>
                    <div className='text-[#22366C] text-[16px] leading-[32.4px] w-[75%] mx-auto text-center'><span className='font-bold'>Gain Visibility and establish</span> <p>yourself as a thought leader.</p></div>
                </div>
                <div className=' pb-[25px] '>
                    <Image src={bulb} alt='icon' className='mb-[18px] mx-auto'/>
                    <div className='text-[#22366C] text-[16px] leading-[32.4px] w-[75%] mx-auto'><span className='font-bold'>Expand your network</span> and build valuable relationships and collaborations.</div>
                </div>
                <div className=' pb-[25px] '>
                    <Image src={check} alt='icon' className='mb-[18px] mx-auto'/>
                    <div className='text-[#22366C] text-[16px] leading-[32.4px] w-[65%] text-center mx-auto'><span className='font-bold'>Receive </span> support and guidance from a community that is committed to your success.</div>
                </div>
                <div className=' pb-[25px] '>
                    <Image src={chat} alt='icon' className='mb-[18px] mx-auto'/>
                    <div className='text-[#22366C] text-[16px] leading-[32.4px] w-[65%] text-center mx-auto'><p><span className='font-bold'>Access </span>a wide</p><p> range valuable resources </p>and opportunities </div>
                </div>
                <div className=' pb-[25px] '>
                    <Image src={star} alt='icon' className='mb-[18px] mx-auto'/>
                    <div className='text-[#22366C] text-[16px] leading-[32.4px] w-[65%] text-center mx-auto'><span className='font-bold'>Stay motivated</span> and <p>inspired on your personal and</p> professional journey.</div>
                </div>
            </div>
            <div className='flex justify-center mt-[60px]'>
            <button className='text-[17px] leading-[18px] text-[#fff] py-[14px] px-[24px] mx-auto rounded-[4px] bg-[#7537F6] hover:opacity-[0.699999988079071]'>More About Our Community</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default CommunityInfo