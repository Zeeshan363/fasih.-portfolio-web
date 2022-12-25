import React from 'react'

const ContactUsForm = () => {
  return (
    <>
      <div 
      className="bg-[#111111] text-white bg-[url('https://preview.colorlib.com/theme/glint/images/contact-bg.jpg.webp')] bg-cover">
        <div className="w-[85%] mx-auto sm:w-[80%] py-10">
          <div className="text-center my-10">
            <h1 className="text-lg font-bold text-glintGreen md:text-xl">
              WHAT WE DO
            </h1>
            <p className="text-3xl md:text-5xl font-bold">
              We have got everything you need to launch and grow your business
            </p>
          </div>
          <div className="bg-gray-900 flex flex-col items-center md:w-[50%] mx-auto lg:w-[50%]">
            <h1 className="py-3 text-center">SEND US A MESSAGE</h1>
            <div className="py-3">
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-900 border-b-2 border-gray-700 pb-3 text-sm md:text-lg lg:w-[100%]"
                placeholder="Your Name"
              />
            </div>
            <div className="py-3">
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-900 border-b-2 border-gray-700 pb-3 text-sm md:text-lg lg:w-[100%]"
                placeholder="Your Email"
              />
            </div>
            <div className="py-3">
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-900 border-b-2 border-gray-700 pb-3 text-sm md:text-lg lg:w-[100%]"
                placeholder="Subject"
              />
            </div>
            <div className="py-3">
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-900 border-b-2 border-gray-700 pb-3 text-sm md:text-lg lg:w-[100%]"
                placeholder="Message"
              />
            </div>
            <div className="text-center font-bold bg-glintGreen px-5 my-3">
              <button className="py-3">SUBMIT NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsForm
