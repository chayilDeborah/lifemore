import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Contact = () => {
  return (
    <>
    <div>
      <Navbar />
      <div className="flex justify-center mt-[100px]">
        <div className="max-w-7xl w-[100%]">
          <div>
            <div className='text-[#22366C] text-[48px] font-bold leading-[120%] mx-auto text-center mb-[24px] '>Contact Us</div>
            <div className='text-[#22366C] text-[18px] leading-[150%] text-center mb-[48px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
            <form className='lg:w-[768px] mx-auto'>
              <div className="grid lg:grid-cols-2 space-x-[10px] mx-auto">
                <div>
                  <label for="first_name" className="block mb-[9.19px] text-[#22366C] text-[16px] leading-[150%]">First name </label>
                  <input type="text" id="first_name" class="bg-[#fff] border border-[#A09CB9]  focus:ring-[#413972] pl-[10px] focus:border-[#A09CB9] block w-[372px] h-[48px]"  required/>
                </div>
                <div>
                  <label for="last_name" class="block mb-[9.19px] text-[16px] text-[#22366C] leading-[150%] ">Last name </label>
                  <input type="text" id="last_name" class="bg-[#fff] border border-[#A09CB9]  focus:ring-[#413972] pl-[10px] focus:border-[#A09CB9] block w-[372px] h-[48px]" required/>
                </div>
              </div>
              <div className="grid mb-6 lg:grid-cols-2 space-x-[10px] mx-auto">
                <div className='mt-[24px]'>
                  <label for="email" className="block mb-[9.19px] text-[16px] text-[#22366C] leading-[150%] ">Email</label>
                  <input type="email" id="email" className="bg-[#fff] border border-[#A09CB9]  focus:ring-[#413972] pl-[10px] focus:border-[#A09CB9] block w-[372px] h-[48px]" required/>
                </div>
                <div className='mt-[24px]'>
                  <label for="phone_number" className="block mb-[9.19px] text-[16px] text-[#22366C] leading-[150%] ">Phone Number</label>
                  <input type="phone_number" id="phone_number" className="bg-[#fff] border border-[#A09CB9]  focus:ring-[#413972] pl-[10px] focus:border-[#A09CB9] block w-[372px] h-[48px]" required/>
                </div>
              </div>
              <div className='mt-[24px]'>
                <label for="message" className="block mb-[9.19px] text-[16px] text-[#22366C] leading-[150%] ">Message</label>
                <textarea id="message" rows="4" class="block p-[12px] w-full text-[16px] text-gray-900 bg-[#fff] border border-[#A09CB9] focus:ring-[#22366C] focus:border-[#22366C] " placeholder="Type your message..."></textarea>
                </div>
                <button type='submit' className='w-[100%] bg-[#7537F6] border border-[#7537f6] text-[16px] leading-[150%] text-[#fff] mt-[24px] py-[8px] hover:bg-[#22366C] mb-[182px]'>Submit</button>

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
