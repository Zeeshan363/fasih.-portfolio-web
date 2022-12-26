import { BsFillTelephoneFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="bg-glintGreen" id="about">
        <div className="w-[90%] mx-auto lg:flex lg:flex-wrap lg:justify-start lg:w-[80%] xl:w-[70%]">
          <div
            className="lg:w-[45%] lg:pt-5 xl:mt-20 animation-about-one"
            data-aos="fade-up"
          >
            <img
              className="hidden lg:block"
              src="./pictures/about-img.png"
              alt="about-image"
            />
          </div>
          <div
            className="sm:w-[70%] mx-auto md:w-[90%] lg:w-[45%] xl:mt-10 animation-about-one"
            data-aos="fade-up"
          >
            <h1 className="text-3xl text-white font-bold py-5 xl:text-4xl 2xl:text-5xl">
              LET'S INTRODUCE ABOUT MYSELF
            </h1>
            <p className="text-lg py-5 xl:text-xl 2xl:text-2xl">
              Whose given. Were gathered. There first subdue greater. Bearing
              you Whales heaven midst their. Beast creepeth. Fish days. Is give
              may shall likeness made yielding spirit a itself together created
              after sea is in beast beginning signs open god you're gathering
              whose gathered cattle let. Creature whales fruit unto meat the
              life beginning all in under give two.
            </p>
            <button className="text-white bg-black text-xl p-2 my-5 xl:text-2xl">
              DOWNLOAD CV
            </button>
          </div>
          <div
            className="flex flex-col w-[60%] mx-auto my-10 sm:w-[70%] sm:flex-row sm:flex-wrap sm:justify-between md:w-[90%] lg:w-[45%] xl:mt-10 lg:mr-20"
            data-aos="fade-up"
          >
            <div className="flex justify-center items-center border-2 border-gray-400 my-5 shadow-sm shadow-gray-400 sm:h-28 sm:w-44 md:h-[100px] md:w-[30%] lg:h-20 2xl:h-28 cursor-pointer">
              <img
                className="h-18 m-5 p-3 sm:h-[70%] sm:p-2 sm:m-0 sm:my-3 sm:w-[80%] md:w-[80%] md:h-[75%] lg:h-[60%]"
                src="./pictures/about-img-partner1.png"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center border-2 border-gray-400 my-5 shadow-sm shadow-gray-400 sm:h-28 sm:w-44 md:h-[100px] md:w-[30%] lg:h-20 2xl:h-28 cursor-pointer">
              <img
                className="h-18 m-5 p-3 sm:h-[70%] sm:p-2 sm:m-0 sm:my-3 sm:w-[80%] md:w-[80%] md:h-[75%] lg:h-[60%]"
                src="./pictures/about-img-partner2.png"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center border-2 border-gray-400 my-5 shadow-sm shadow-gray-400 sm:h-28 sm:w-44 md:h-[100px] md:w-[30%] lg:h-20 2xl:h-28 cursor-pointer">
              <img
                className="h-18 m-5 p-3 sm:h-[70%] sm:p-2 sm:m-0 sm:my-3 sm:w-[80%] md:w-[80%] md:h-[75%] lg:h-[60%]"
                src="./pictures/about-img-partner3.png"
                alt=""
              />
            </div>

            <div className="flex justify-center items-center border-2 border-gray-400 my-5 shadow-sm shadow-gray-400 sm:h-28 sm:w-44 md:h-[100px] md:w-[30%] lg:h-20 2xl:h-28 cursor-pointer">
              <img
                className="h-18 m-5 p-3 sm:h-[70%] sm:p-2 sm:m-0 sm:my-3 sm:w-[80%] md:w-[80%] md:h-[75%] lg:h-[60%]"
                src="./pictures/about-img-partner1.png"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center border-2 border-gray-400 my-5 shadow-sm shadow-gray-400 sm:h-28 sm:w-44 md:h-[100px] md:w-[30%] lg:h-20 2xl:h-28 cursor-pointer">
              <img
                className="h-18 m-5 p-3 sm:h-[70%] sm:p-2 sm:m-0 sm:my-3 sm:w-[80%] md:w-[80%] md:h-[75%] lg:h-[60%]"
                src="./pictures/about-img-partner2.png"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center border-2 border-gray-400 my-5 shadow-sm shadow-gray-400 sm:h-28 sm:w-44 md:h-[100px] md:w-[30%] lg:h-20 2xl:h-28 cursor-pointer">
              <img
                className="h-18 m-5 p-3 sm:h-[70%] sm:p-2 sm:m-0 sm:my-3 sm:w-[80%] md:w-[80%] md:h-[75%] lg:h-[60%]"
                src="./pictures/about-img-partner3.png"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center border-2 border-gray-400 my-5 shadow-sm shadow-gray-400 sm:h-28 sm:w-44 md:h-[100px] md:w-[30%] lg:h-20 2xl:h-28 cursor-pointer">
              <img
                className="h-18 m-5 p-3 sm:h-[70%] sm:p-2 sm:m-0 sm:my-3 sm:w-[80%] md:w-[80%] md:h-[75%] lg:h-[60%]"
                src="./pictures/about-img-partner1.png"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center border-2 border-gray-400 my-5 shadow-sm shadow-gray-400 sm:h-28 sm:w-44 md:h-[100px] md:w-[30%] lg:h-20 2xl:h-28 cursor-pointer">
              <img
                className="h-18 m-5 p-3 sm:h-[70%] sm:p-2 sm:m-0 sm:my-3 sm:w-[80%] md:w-[80%] md:h-[75%] lg:h-[60%]"
                src="./pictures/about-img-partner2.png"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center border-2 border-gray-400 my-5 shadow-sm shadow-gray-400 sm:h-28 sm:w-44 md:h-[100px] md:w-[30%] lg:h-20 2xl:h-28 cursor-pointer">
              <img
                className="h-18 m-5 p-3 sm:h-[70%] sm:p-2 sm:m-0 sm:my-3 sm:w-[80%] md:w-[80%] md:h-[75%] lg:h-[60%]"
                src="./pictures/about-img-partner3.png"
                alt=""
              />
            </div>
          </div>
          <div
            className="bg-gray-700 py-2 lg:mb-14 sm:w-[70%] mx-auto md:w-[60%] lg:w-[45%] lg:mt-10 xl:mt-10"
            data-aos="fade-up"
          >
            <div className="w-[80%] mx-auto flex justify-start items-center my-10">
              <span className="text-8xl font-bold text-black 2xl:text-9xl">
                10
              </span>
              <h3 className="text-lg text-white  pl-3 lg:text-xl 2xl:text-2xl">
                YEARS EXPERIENCE WORKING
              </h3>
            </div>
            <div className="my-10 w-[90%] mx-auto flex items-center justify-start h-20 2xl:pt-10">
              <div className="pl-[10%]">
                <BsFillTelephoneFill className="h-14 w-14 2xl:h-20 2xl:w-20" />
              </div>
              <div className="mx-5 text-white text-lg sm:text-xl flex flex-col justify-end 2xl:text-2xl">
                <p className="sm:my-2">CALL US NOW</p>
                <p className="sm:my-2">(+1)-800-555-6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
