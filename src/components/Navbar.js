import { HiMenu } from 'react-icons/hi'
import { IoLogoFacebook } from 'react-icons/io'
import {GrInstagram} from 'react-icons/gr'
import {RxTwitterLogo} from 'react-icons/rx'
import {BsGithub} from 'react-icons/bs'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState( )

  return (
    <>
      <div className="bg-[url('https://preview.colorlib.com/theme/glint/images/hero-bg.jpg.webp')] bg-cover text-white">
      <div className="w-[90%] mx-auto lg:w-[95%]">
        {/* navbar  */}
        <div className="flex justify-between py-5">
          <p className="text-3xl font-bold">
            Gentium<b className="text-glintGreen">.</b>
          </p>
          <div>
          <HiMenu className="block text-4xl"  />
          </div>
        </div>
        {/* otherthan navbar but in nav section  */}
        <div className='sm:flex sm:justify-between sm:items-center py-5 lg:py-10'>
          <div className="my-10 md:w-[60%] lg:w-[70%] mx-auto lg:pr-80">
            <div className="text-center lg:text-start">
              <h1 className="text-lg md:text-xl">WELCOME,</h1>
              <p className="py-10 text-2xl md:text-3xl lg:text-4xl lg:font-bold">
                We are a creative group of people who design influential brands
                and digital experiences.
              </p>
            </div>
            <div className="flex flex-col text-sm w-[70%] mx-auto lg:w-full lg:justify-start lg:items-start">
              <input
                className="border-2 border-white hover:bg-white hover:text-black hover:duration-500 my-3 lg:px-5 lg:py-2"
                type="button"
                value="START A PROJECT"
              />
              <input
                className="border-2 border-white hover:bg-white hover:text-black hover:duration-500 my-3 lg:px-5 lg:py-2"
                type="button"
                value="MORE ABOUT US"
              />
            </div>
          </div>
          {/* icons */}
          <div>
            <div className="hidden sm:block">
              <span >
                <IoLogoFacebook className="my-2 h-10 w-10 mx-3 md:h-12 md:w-12" />
              </span>
              <span >
                <RxTwitterLogo className="my-2 h-10 w-10 mx-3 md:h-12 md:w-12" />
              </span>
              <span >
                <GrInstagram className="my-2 h-10 w-10 mx-3 md:h-12 md:w-12" />
              </span>
              <span >
                <BsGithub className="my-2 h-10 w-10 mx-3 md:h-12 md:w-12" />
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
