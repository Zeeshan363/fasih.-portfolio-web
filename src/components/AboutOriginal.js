import React from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutOriginal = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (
    <>
      <div className="bg-glintGreen">
        <div className="w-[90%] mx-auto https://zeeshan363.github.io/pure-html-random-website/://zeeshan363.github.io/pure-html-random-website/mx-auto py-20 lg:w-[80%]  xl:w-[70%] 2xl:w-[60%]">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-xl font-bold my-2 tracking-wider 2xl:text-2xl">
              Hello There
            </h1>
            <h3 className="text-white text-3xl font-bold my-3 sm:text-4xl 2xl:text-5xl">
              I'm Fasih Ur Rehman
            </h3>
            <hr className="w-[95%] mx-auto mt-5 md:w-[80%] lg:mt-10" />
          </div>
          <div className="text-lg text-center my-10 sm:text-xl md:leading-relaxed md:my-14 lg:text-2xl lg:leading-loose 2xl:leading-relaxed 2xl:text-2xl 2xl:my-20" data-aos="fade-up"> 
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt.
            </p>
          </div>
          <div className="text-center my-5 md:flex md:flex-wrap md:justify-center" data-aos="fade-up">
            <div className="mb-10 md:w-[45%] mx-auto lg:w-[22%] 2xl:mt-3">
              <h1 className="text-white text-6xl font-bold lg:text-7xl 2xl:text-8xl">
                <CountUp end={127} duration={2} enableScrollSpy={true} />
              </h1>
              <p className="font-bold py-3 text-lg xl:text-xl xl:py-5">
                Awards Received
              </p>
              <hr className="my-2 w-[70%] mx-auto md:hidden sm:w-[50%]" />
            </div>
            <div className="mb-10 md:w-[45%] mx-auto lg:w-[22%] 2xl:mt-3">
              <h1 className="text-white text-6xl font-bold lg:text-7xl 2xl:text-8xl">
                <CountUp end={1664} duration={2} enableScrollSpy={true} />
              </h1>
              <p className="font-bold py-3 text-lg xl:text-xl xl:py-5">
                Cups of Coffee
              </p>
              <hr className="my-2 w-[70%] mx-auto md:hidden sm:w-[50%]" />
            </div>
            <div className="mb-10 md:w-[45%] mx-auto lg:w-[22%] 2xl:mt-3">
              <h1 className="text-white text-6xl font-bold lg:text-7xl 2xl:text-8xl">
                <CountUp end={110} duration={2} enableScrollSpy={true} />
              </h1>
              <p className="font-bold py-3 text-lg xl:text-xl xl:py-5">
                Projects Completed
              </p>
              <hr className="my-2 w-[70%] mx-auto md:hidden sm:w-[50%]" />
            </div>
            <div className="mb-10 md:w-[45%] mx-auto lg:w-[22%] 2xl:mt-3">
              <h1 className="text-white text-6xl font-bold lg:text-7xl 2xl:text-8xl">
                <CountUp end={99} duration={2} enableScrollSpy={true} />
              </h1>
              <p className="font-bold py-3 text-lg xl:text-xl xl:py-5">
                Happy Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOriginal;
