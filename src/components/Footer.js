import { BsFacebook } from "react-icons/bs";
import {RiTwitterLine} from "react-icons/ri"
import {GrInstagram } from "react-icons/gr"
import {BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
    <>
      <div className="bg-[#111111] text-white">
        <div className="w-[90%] mx-auto sm:w-[80%] lg:w-[70%] lg:flex lg:justify-around">
          <div className="text-center py-10 lg:w-[50%]">
            <h1 className="text-3xl py-3 font-bold text-glintGreen md:text-4xl cursor-pointer">
              Gentium.
            </h1>
            <p className="text-xl text-start md:text-2xl lg:text-2xl xl:leading-relaxed 2xl:leading-relaxed 2xl:text-3xl">
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Mauris blandit aliquet elit,
              eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
              tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas
              autem necessitatibus vitae aut.
            </p>
          </div>
          <div className="text-center lg:w-[45%] lg:my-10">
            <div className="">
              <h1 className="text-xl font-bold py-5 md:text-2xl">FOLLOW ME</h1>
              <div className="flex justify-center items-center xl:py-10">
                <span>
                  <BsFacebook className="h-10 w-10 border border-white rounded-[50%] mx-3 md:h-12 md:w-12 cursor-pointer" />
                </span>
                <span>
                  <RiTwitterLine className="h-1ti-10 border border-white rounded-[50%] mx-3 md:h-12 md:w-12 cursor-pointer" />
                </span>
                <span>
                  <GrInstagram className="h-10 w-10 border border-white rounded-[50%] mx-3 md:h-12 md:w-12 cursor-pointer" />
                </span>
                <span>
                  <BsGithub className="h-10 w-10 border border-white rounded-[50%] mx-3 md:h-12 md:w-12 cursor-pointer" />
                </span>
              </div>
            </div>
            <div className="flex justify-around my-5 md:text-xl">
              <span className="cursor-pointer"><b className="md:text-2xl">Email: </b> fasih31@gmai.com</span>
              <span><b className="md:text-2xl">Contact No.</b> +92425692172</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-5 text-center sm:flex sm:justify-around w-[90%] mx-auto sm:w-[80%] lg:w-[70%]">
            
            <div className="cursor-pointer"> 2017 © fasih ur rehman</div>
            <div className="sm:flex sm:justify-around">
                <p className="px-3 md:px-5 lg:px-8 cursor-pointer">Terms of use</p>
                <p className="px-3 md:px-5 lg:px-8 cursor-pointer">Privacy policy</p>
                <p className="px-3 md:px-5 lg:px-8 cursor-pointer">cookie policy</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
