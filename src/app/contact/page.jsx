'use client'
import React, {useState} from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to the server for processing (Nodemailer)
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle successful form submission (e.g., show success message)
      console.log("Form submitted successfully!");
    } else {
      console.log(await response.json())
      // Handle form submission error
      console.error("Error submitting form.");
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex justify-center mt-[30px] lg:mt-[100px]">
          <div className="max-w-7xl w-[90%] lg:w-[100%] mx-auto lg:mx-[0]">
            <div>
              <div className="text-[#22366C] text-[48px] font-bold leading-[120%] mx-auto text-center mb-[14px] lg:mb-[24px] ">
                Contact Us
              </div>
              <div className="text-[#22366C] text-[18px] leading-[150%] text-center mb-[38px] lg:mb-[48px] w-[90%] lg:w-[100%] mx-auto lg:mx-[0]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </div>
              <form onSubmit={handleSubmit} className="lg:w-[768px] mx-auto">
                <div className="grid lg:grid-cols-2 w-[80%] lg:w-[100%] lg:space-x-[10px] mx-auto">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-[9.19px] text-[#22366C] text-[16px] leading-[150%]"
                    >
                      First name{" "}
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="bg-[#fff] border border-[#A09CB9]  focus:ring-[#413972] pl-[10px] rounded-[4px] focus:border-[#A09CB9] block w-[298px] lg:w-[372px] h-[48px]"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-[9.19px] text-[16px] text-[#22366C] mt-[24px] lg:mt-[0px] leading-[150%] "
                    >
                      Last name{" "}
                    </label>
                    <input
                      type="text"
                      name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                      className="bg-[#fff] border border-[#A09CB9]  focus:ring-[#413972] pl-[10px] rounded-[4px] focus:border-[#A09CB9] block w-[298px] lg:w-[372px] h-[48px]"
                      required
                    />
                  </div>
                </div>
                <div className="grid mb-6 w-[80%] lg:w-[100%] lg:grid-cols-2 lg:space-x-[10px] mx-auto">
                  <div className="mt-[24px]">
                    <label
                      htmlFor="email"
                      className="block mb-[9.19px] text-[16px] text-[#22366C] leading-[150%] "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                          value={formData.email}
                          onChange={handleChange}
                      className="bg-[#fff] border border-[#A09CB9]  focus:ring-[#413972] pl-[10px] rounded-[4px] focus:border-[#A09CB9] block w-[298px] lg:w-[372px] h-[48px]"
                      required
                    />
                  </div>
                  <div className="mt-[24px]">
                    <label
                      for="phone_number"
                      className="block mb-[9.19px] text-[16px] text-[#22366C] leading-[150%] "
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                       name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-[#fff] border border-[#A09CB9]  focus:ring-[#413972] pl-[10px] rounded-[4px] focus:border-[#A09CB9] block w-[298px] lg:w-[372px] h-[48px]"
                      required
                    />
                  </div>
                </div>
                <div className="mt-[24px] w-[80%] lg:w-[100%] mx-auto lg:mx-[0]">
                  <label
                    htmlFor="message"
                    className="block mb-[9.19px] text-[16px] text-[#22366C] leading-[150%] "
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="block p-[12px] w-full text-[16px] text-gray-900 bg-[#fff] border border-[#A09CB9] focus:ring-[#22366C] rounded-[4px] focus:border-[#22366C] "
                    placeholder="Type your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-[80%] lg:w-[100%] ml-[10%] lg:ml-[0%] lg:mx-[0] bg-[#7537F6] border border-[#7537f6] text-[16px] leading-[150%] text-[#fff] mt-[24px] py-[8px] rounded-[4px] hover:bg-[#22366C] lg:mb-[182px] mb-[90px]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
