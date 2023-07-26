import Image from 'next/image'
import color from '../assets/color.svg'

const Membership = () => {
  return (
    <>
    <div className='flex justify-center bg-gradient-radial from-[#4C409A] to-[#12084F] mt-[100px]'>
      <div>
        <div className='w-[90%] bg-[#FFF] shadow-3xl -mt-[70px] flex justify-center rounded-[5px]'>
            <div>
            <Image src={color} alt='icon' className='ml-auto mr-[23px] mt-[27px]'/>
            <div className='w-[85%] mx-auto grid grid-cols-2 '>
                <div>
                    <div className='text-[#413972] text-[12px] leading-[19.5px] tracking-[1.3px] mb-[16px] mt-[37px]'>REGISTER</div>
                    <div className='text-[46px] leading-[52.8px] text-[#12084F] w-[350px] mb-[16px]'>Become a Member Today.</div>
                    <div className='text-[16px] leading-[32.4px] text-[#413972] font-bold lg:w-[327px] mb-[26px]'>Register to become a member of Lifemore Global Community!</div>
                    <div className='text-[#413972] text-[17px] leading-[32.4px] w-[398px] '>As a member, you’ll gain access to valuable resources, networking opportunities, and a supportive community that will help you achieve your goals faster and more efficiently.</div>
                </div>
                <div>
                </div>
            </div>
            </div>
        </div>
        <div className='w-[90%] lg:h-[263px] lg:mb-[31px] bg-[#1c115c] mt-[32px] rounded-[5px] flex justify-center py-[50px]'>
          <div className='w-[90%] grid grid-cols-2'>
            <div >
              <div className='text-[30px] leading-[44.8px] text-[#FFFFFF] mb-[8.11px]'>Join Our Community</div>
              <div className='text-[13px] text-[#fff] leading-[19.6px] lg:w-[317px] lg:mb-[69px]'>Help expand our members’ visibility and influence by joining our community.</div>
            </div>
            <div className='flex justify-between'>
              <div>
                <div className='text-[#FFF] text-[44px] leading-[67.2px]'>50+</div>
                <div className='text-[#fff] text-[13px] leading-[19.6px]'>Communities</div>
              </div>
              <div>
                <div className='text-[#FFF] text-[44px] leading-[67.2px]'>25k+</div>
                <div className='text-[#fff] text-[13px] leading-[19.6px]'>Members to date</div>
              </div>
              <div>
                <div className='text-[#FFF] text-[44px] leading-[67.2px]'>200</div>
                <div className='text-[#fff] text-[13px] leading-[19.6px]'>Team Members</div>
              </div>
            </div>
          </div>

        </div>
        </div>
    </div>
    </>
  )
}

export default Membership