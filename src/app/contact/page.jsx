import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Contact = () => {
  return (
    <>
    <div>
      <Navbar />
      <div className="flex justify-center mt-[30px] lg:mt-[100px]">
        <div className="max-w-7xl w-[90%] lg:w-[100%] mx-auto lg:mx-[0]">
          <div>
            <div className='text-[#22366C] text-[48px] font-bold leading-[120%] mx-auto text-center mb-[14px] lg:mb-[24px] '>Contact Us</div>
            <div className='text-[#22366C] text-[18px] leading-[150%] text-center mb-[38px] lg:mb-[48px] w-[90%] lg:w-[100%] mx-auto lg:mx-[0]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
            <form className='lg:w-[768px] mx-auto'>
              <div className="grid lg:grid-cols-2 w-[80%] lg:w-[100%] lg:space-x-[10px] mx-auto">
                <div>
                  <label for="first_name" className="block mb-[9.19px] text-[#22366C] text-[16px] leading-[150%]">First name </label>
                  <input type="text" id="first_name" class="bg-[#fff] border border-[#A09CB9]  focus:ring-[#413972] pl-[10px] rounded-[4px] focus:border-[#A09CB9] block w-[298px] lg:w-[372px] h-[48px]"  required/>
                </div>
                <div>
                  <label for="last_name" class="block mb-[9.19px] text-[16px] text-[#22366C] mt-[24px] lg:mt-[0px] leading-[150%] ">Last name </label>
                  <input type="text" id="last_name" class="bg-[#fff] border border-[#A09CB9]  focus:ring-[#413972] pl-[10px] rounded-[4px] focus:border-[#A09CB9] block w-[298px] lg:w-[372px] h-[48px]" required/>
                </div>
              </div>
              <div className="grid mb-6 w-[80%] lg:w-[100%] lg:grid-cols-2 lg:space-x-[10px] mx-auto">
                <div className='mt-[24px]'>
                  <label for="email" className="block mb-[9.19px] text-[16px] text-[#22366C] leading-[150%] ">Email</label>
                  <input type="email" id="email" className="bg-[#fff] border border-[#A09CB9]  focus:ring-[#413972] pl-[10px] rounded-[4px] focus:border-[#A09CB9] block w-[298px] lg:w-[372px] h-[48px]" required/>
                </div>
                <div className='mt-[24px]'>
                  <label for="phone_number" className="block mb-[9.19px] text-[16px] text-[#22366C] leading-[150%] ">Phone Number</label>
                  <input type="phone_number" id="phone_number" className="bg-[#fff] border border-[#A09CB9]  focus:ring-[#413972] pl-[10px] rounded-[4px] focus:border-[#A09CB9] block w-[298px] lg:w-[372px] h-[48px]" required/>
                </div>
              </div>
              <div className='mt-[24px] w-[80%] lg:w-[100%] mx-auto lg:mx-[0]'>
                <label for="message" className="block mb-[9.19px] text-[16px] text-[#22366C] leading-[150%] ">Message</label>
                <textarea id="message" rows="4" class="block p-[12px] w-full text-[16px] text-gray-900 bg-[#fff] border border-[#A09CB9] focus:ring-[#22366C] rounded-[4px] focus:border-[#22366C] " placeholder="Type your message..."></textarea>
                </div>
                <button type='submit' className='w-[80%] lg:w-[100%] ml-[10%] lg:ml-[0%] lg:mx-[0] bg-[#7537F6] border border-[#7537f6] text-[16px] leading-[150%] text-[#fff] mt-[24px] py-[8px] rounded-[4px] hover:bg-[#22366C] lg:mb-[182px] mb-[90px]'>Submit</button>

            </form>
          </div>

        </div>

      </div>
      <Footer />
    </div>
    </>
  )
}

export default Contact
