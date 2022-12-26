import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Work = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="bg-[#111111] mb-[1200px] md:mb-[630px]" id="work">
        <div className=" text-white my-5 w-[85%] mx-auto relative">
          <div className="bg-[#111111] h-[450px] flex flex-col justify-center items-center">
            <div className="text-center my-10 pb-40" data-aos="fade-up">
              <h1 className="text-lg font-bold text-glintGreen md:text-xl lg:text-lg">
                RECENT WORKS
              </h1>
              <p className="text-3xl md:text-5xl lg:text-4xl font-bold">
                We love what we do, check out some of our latest works
              </p>
            </div>
          </div>
          <div
            className="absolute bg-glintGreen w-full mx-auto top-[55%] flex flex-col md:flex-row md:flex-wrap md:justify-center md:w-[80%] md:left-[10%]"
            data-aos="fade-up"
          >
            <div className="md:border md:border-black flex flex-col justify-center items-center h-56 w-[90%] mx-auto md:w-[50%] md:h-[270px] lg:h-64 2xl:h-72 md:px-10 cursor-pointer hover:bg-[#111111] hover:text-glintGreen hover:duration-500">
              <h1 className="text-2xl py-5 font-bold lg:text-3xl 2xl:text-5xl">
                Greens Fin
              </h1>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl">
                luctus nec ullamcorper mattis, pulvinar dapibus leo. This is
                just random text
              </p>
            </div>

            <div className="md:border md:border-black flex flex-col justify-center items-center h-56 w-[90%] mx-auto md:w-[50%] md:h-[270px] lg:h-64 2xl:h-72 md:px-10 cursor-pointer hover:bg-[#111111] hover:text-glintGreen hover:duration-500">
              <h1 className="text-2xl py-5 font-bold lg:text-3xl 2xl:text-5xl">
                Marketplace
              </h1>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            <div className="md:border md:border-black flex flex-col justify-center items-center h-56 w-[90%] mx-auto md:w-[50%] md:h-[270px] lg:h-64 2xl:h-72 md:px-10 cursor-pointer hover:bg-[#111111] hover:text-glintGreen hover:duration-500">
              <h1 className="text-2xl py-5 font-bold lg:text-3xl 2xl:text-5xl">
                Usmani and Co
              </h1>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            <div className="md:border md:border-black flex flex-col justify-center items-center h-56 w-[90%] mx-auto md:w-[50%] md:h-[270px] lg:h-64 2xl:h-72 md:px-10 cursor-pointer hover:bg-[#111111] hover:text-glintGreen hover:duration-500">
              <h1 className="text-2xl py-5 font-bold lg:text-3xl 2xl:text-5xl">
                The Viable Squad
              </h1>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl">
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            <div className="md:border md:border-black flex flex-col justify-center items-center h-56 w-[90%] mx-auto md:w-[50%] md:h-[270px] lg:h-64 2xl:h-72 md:px-10 cursor-pointer hover:bg-[#111111] hover:text-glintGreen hover:duration-500">
              <h1 className="text-2xl py-5 font-bold lg:text-3xl 2xl:text-5xl">
                Islamic Economics
              </h1>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl">
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            <div className="md:border md:border-black flex flex-col justify-center items-center h-56 w-[90%] mx-auto md:w-[50%] md:h-[270px] lg:h-64 2xl:h-72 md:px-10 cursor-pointer hover:bg-[#111111] hover:text-glintGreen hover:duration-500">
              <h1 className="text-2xl py-5 font-bold lg:text-3xl 2xl:text-5xl">
                Upwork
              </h1>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
