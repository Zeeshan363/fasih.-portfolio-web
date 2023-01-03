import { HiMenu } from "react-icons/hi";
import { IoLogoFacebook } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { RxTwitterLogo } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./Animation.css";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [toggle, setToggle] = useState(false);
  // menuSlide = {
  //   Translate,
  // };


  return (
    <>
      <div className="bg-[url('https://preview.colorlib.com/theme/glint/images/hero-bg.jpg.webp')] bg-cover h-screen text-white">
        <div className="w-[90%] mx-auto lg:w-[95%]  h-[99%]">
          {/* navbar  */}
          <div
            className="fixed right-0 w-[70vw] h-[100vh] z-50 text-white bg-black sm:w-[40%] md:w-[25%] 2xl:w-[20%] "
            style={{
              // transform: toggle ? "translateX(30rem)" : "translateX(-10rem)",
              transform: toggle && "translateX(-25vw)",
              transform: !toggle && "translateX(25vw)",
              display: !toggle ? "none" : "block",
              transition: "transform 0.5s linear 0.5s",
              transition: "display 0.1s linear 0s",
            }}
          >
            <div className="flex flex-col  relative top-[10vh] h-[20%] justify-between items-start px-5 hamburger">
              <a href="#about" className="cursor-pointer text-lg md:text-xl xl:text-2xl xl:py-3 2xl:font-bold md:pl-4">
                ABOUT
              </a>
              <a href="#services" className="cursor-pointer text-lg md:text-xl xl:text-2xl xl:py-3 2xl:font-bold md:pl-4">
                SERVICES
              </a>
              <a href="#work" className="cursor-pointer text-lg md:text-xl xl:text-2xl xl:py-3 2xl:font-bold md:pl-4">
                WORK
              </a>
              <a href="#client" className="cursor-pointer text-lg md:text-xl xl:text-2xl xl:py-3 2xl:font-bold md:pl-4">
                CLIENTS
              </a>
              <a href="#contact" className="cursor-pointer text-lg md:text-xl xl:text-2xl xl:py-3 2xl:font-bold md:pl-4">
                CONTACT
              </a>
              <a href="#blogs" className="cursor-pointer text-lg md:text-xl xl:text-2xl xl:py-3 2xl:font-bold md:pl-4">
                BLOGS
              </a>
            </div>
          </div>
          <div className="flex justify-between py-5 lg:py-8 ">
            <p className="text-3xl font-bold cursor-pointer 2xl:text-5xl">
              Fasih<b className="text-glintGreen">.</b>
            </p>
            <div className="fixed right-6 z-50 lg:right-10 2xl:right-20" onClick={() => setToggle(!toggle)}>
              {!toggle ? (
                <div className="lg:flex lg:justify-end lg:items-center lg:border-2 lg:border-black lg:bg-black lg:px-3 lg:py-2">
                  <p className="hidden lg:block lg:px-5 text-xl text-glintGreen">Menu</p>
                  <HiMenu className="text-4xl cursor-pointer relative z-50 2xl:text-5xl text-gray-300"              // transform: toggle ? "translateX(30rem)" : "translateX(-10rem)",
                />
                </div>
              ) : (
                <div className="lg:flex lg:justify-end lg:items-center">
                  <p className="hidden lg:block lg:px-5 text-xl text-glintGreen">Navigation</p>
                  <AiOutlineClose className="text-4xl cursor-pointer relative z-50 2xl:text-5xl" />
                </div>
              )}
            </div>
          </div>
          {/* otherthan navbar but in nav section  */}
          <div className="my-10 sm:flex sm:justify-between sm:items-center py-5 lg:py-5 h-[80%]">
            <div
              className="my-5 md:w-[60%] lg:w-[70%] mx-auto lg:pr-80"
              id="animation-first-navbar"
            >
              <div className="text-center lg:text-start">
                <h1 className="text-2xl md:text-3xl lg:text-2xl">WELCOME,</h1>
                <p className="py-14 text-3xl leading-snug font-bold sm:leading-normal md:text-4xl lg:text-[40px] lg:my-5 lg:font-bold xl:text-5xl 2xl:leading-normal">
                I'm technically-astute business professional with over 7 years of diverse, cross-functional experience in four industries. 
                </p>
              </div>
              <div className="flex flex-col text-sm w-[70%] mx-auto lg:w-full lg:flex-row lg:justify-start xl:text-lg">
                <input
                  className="border-2 py-3 border-white hover:bg-white hover:text-black hover:duration-500 my-3 lg:px-5 lg:py-2"
                  type="button"
                  value="START A PROJECT"
                />
                <input
                  className="border-2 py-3 border-white hover:bg-white hover:text-black hover:duration-500 my-3 lg:px-5 lg:py-2 lg:mx-5 xl:mx-10"
                  type="button"
                  value="MORE ABOUT US"
                />
              </div>
            </div>
            {/* icons */}
            <div>
              <div className="hidden sm:block">
                <span>
                  <IoLogoFacebook className="my-2 h-10 w-10 mx-3 md:h-12 md:w-12 lg:h-8 lg:w-8 cursor-pointer xl:my-5 2xl:my-10" />
                </span>
                <span>
                  <RxTwitterLogo className="my-2 h-10 w-10 mx-3 md:h-12 md:w-12 lg:h-8 lg:w-8 cursor-pointer xl:my-5 2xl:my-10" />
                </span>
                <span>
                  <GrInstagram className="my-2 h-10 w-10 mx-3 md:h-12 md:w-12 lg:h-8 lg:w-8 cursor-pointer xl:my-5 2xl:my-10" />
                </span>
                <span>
                  <BsGithub className="my-2 h-10 w-10 mx-3 md:h-12 md:w-12 lg:h-8 lg:w-8 cursor-pointer xl:my-5 2xl:my-10" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
