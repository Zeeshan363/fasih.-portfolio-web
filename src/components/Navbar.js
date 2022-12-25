import { HiMenu } from 'react-icons/hi'
import { IoLogoFacebook } from 'react-icons/io'
import {GrInstagram} from 'react-icons/gr'
import {RxTwitterLogo} from 'react-icons/rx'
import {BsGithub} from 'react-icons/bs'
import "./Animation.css"

const Navbar = () => {
  return (
    <>
      <div className="bg-[url('https://preview.colorlib.com/theme/glint/images/hero-bg.jpg.webp')] bg-cover h-screen text-white">
      <div className="w-[90%] mx-auto lg:w-[95%]">
        {/* navbar  */}
        <div className="flex justify-between py-5 lg:py-8">
          <p className="text-3xl font-bold cursor-pointer">
            Gentium<b className="text-glintGreen">.</b>
          </p>
          <div>
            <HiMenu className="text-4xl cursor-pointer" />
          </div>
        </div>
        {/* otherthan navbar but in nav section  */}
        <div className='my-10 sm:flex sm:justify-between sm:items-center py-5 lg:py-5'>
          <div className="my-5 md:w-[60%] lg:w-[70%] mx-auto lg:pr-80" id="animation-first-navbar">
            <div className="text-center lg:text-start">
              <h1 className="text-2xl md:text-3xl lg:text-2xl">WELCOME,</h1>
              <p className="py-14 text-4xl leading-snug font-bold sm:leading-normal md:text-5xl lg:my-5 lg:font-bold xl:text-6xl 2xl:leading-normal">
                We are a creative group of people who design influential brands
                and digital experiences.
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
              <span >
                <IoLogoFacebook className="my-2 h-10 w-10 mx-3 md:h-12 md:w-12 lg:h-8 lg:w-8 cursor-pointer" />
              </span>
              <span >
                <RxTwitterLogo className="my-2 h-10 w-10 mx-3 md:h-12 md:w-12 lg:h-8 lg:w-8 cursor-pointer" />
              </span>
              <span >
                <GrInstagram className="my-2 h-10 w-10 mx-3 md:h-12 md:w-12 lg:h-8 lg:w-8 cursor-pointer" />
              </span>
              <span >
                <BsGithub className="my-2 h-10 w-10 mx-3 md:h-12 md:w-12 lg:h-8 lg:w-8 cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Navbar
