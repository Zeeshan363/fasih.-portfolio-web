import { AiOutlineFormatPainter } from "react-icons/ai";
import { IoMdGlobe } from "react-icons/io";
import { BsBox } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="w-[70%] mx-auto sm:w-[80%] " id="services">
        <div className="text-center my-10" data-aos="fade-up">
          <h1 className="text-lg font-bold text-glintGreen md:text-xl xl:text-2xl">
            WHAT WE DO
          </h1>
          <p className="text-black text-3xl md:text-5xl font-bold">
            We have got everything you need to launch and grow your business
          </p>
        </div>
        <div className="md:flex md:flex-wrap">
          <div
            className="flex flex-col items-center my-10 md:w-[45%] mx-auto lg:flex-none xl:w-[40%]"
            data-aos="fade-up"
          >
            <div>
              <AiOutlineFormatPainter className="h-16 w-16 md:h-20 md:w-20 text-glintGreen" />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold py-5 sm:text-2xl xl:text-3xl 2xl:py-10">
                Brand Identity
              </h1>
              <p className="text-lg sm:text-xl xl:text-2xl">
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center my-10 md:w-[45%] mx-auto lg:flex-none xl:w-[40%]"
            data-aos="fade-up"
          >
            <div>
              <IoMdGlobe className="h-16 w-16 md:h-20 md:w-20 text-glintGreen" />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold py-5 sm:text-2xl xl:text-3xl 2xl:py-10">
                Ecommerce
              </h1>
              <p className="text-lg sm:text-xl xl:text-2xl">
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center my-10 md:w-[45%] mx-auto lg:flex-none xl:w-[40%]"
            data-aos="fade-up"
          >
            <div>
              <BsBox className="h-16 w-16 md:h-20 md:w-20 text-glintGreen" />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold py-5 sm:text-2xl xl:text-3xl 2xl:py-10">
                App Development
              </h1>
              <p className="text-lg sm:text-xl xl:text-2xl">
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center my-10 md:w-[45%] mx-auto lg:flex-none xl:w-[40%]"
            data-aos="fade-up"
          >
            <div>
              <AiOutlineFormatPainter className="h-16 w-16 md:h-20 md:w-20 text-glintGreen" />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold py-5 sm:text-2xl xl:text-3xl 2xl:py-10">
                Business Consultation
              </h1>
              <p className="text-lg sm:text-xl xl:text-2xl">
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center my-10 md:w-[45%] mx-auto lg:flex-none xl:w-[40%]"
            data-aos="fade-up"
          >
            <div>
              <IoMdGlobe className="h-16 w-16 md:h-20 md:w-20 text-glintGreen" />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold py-5 sm:text-2xl xl:text-3xl 2xl:py-10">
                Website Development
              </h1>
              <p className="text-lg sm:text-xl xl:text-2xl">
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center my-10 md:w-[45%] mx-auto lg:flex-none xl:w-[40%]"
            data-aos="fade-up"
          >
            <div>
              <BsBox className="h-16 w-16 md:h-20 md:w-20 text-glintGreen" />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold py-5 sm:text-2xl xl:text-3xl 2xl:py-10">
                Product Development
              </h1>
              <p className="text-lg sm:text-xl xl:text-2xl">
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
