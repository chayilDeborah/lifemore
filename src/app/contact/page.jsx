"use client";
import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
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
      console.log(await response.json());
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
              <div className="mx-auto">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeSDpeJYLpUdQtilvwaqLdfirYkb39XaNDXTDKhtMU2SrHgyQ/viewform?embedded=true"
                  className="lg:w-[750px] w-[300px] h-[1002px] lg:h-[1080px] mx-auto"
                  // width="640"
                  // height="916"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
