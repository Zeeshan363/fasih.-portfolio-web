import { IoLogoFacebook } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { RxTwitterLogo } from "react-icons/rx";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BlogsArea = () => {
  return (
    <>
      <div id="blogsarea">
        <div className="bg-[#111111]" >
          <div className="w-[90%] mx-auto text-center py-16 xl:py-20">
            <h1 className="text-2xl text-glintGreen font-bold md:text-3xl xl:text-4xl">
              UNCATEGORIZED
            </h1>
            <p className="text-lg py-5 text-white font-bold md:text-xl xl:text-2xl xl:py-8">
              National Language Processing (NLP)
            </p>
          </div>
        </div>
        <div className="lg:flex lg:w-[80%] mx-auto 2xl:w-[70%] my-5 lg:my-10 2xl:my-14">
          {/* created for display flex */}
          <div className="lg:w-[75%]">
            <div className="w-[90%] mx-auto py-10">
              <p className="my-5 md:text-lg xl:text-xl">
                Natural Language Processing (NLP) is a field of artificial
                intelligence (AI) that focuses on enabling computers to
                understand, interpret, and generate human language. It involves
                the use of computational techniques to process and analyze large
                amounts of natural language data, such as speech and text, in
                order to extract useful insights and information.
              </p>
              <p className="my-5 md:text-lg xl:text-xl">
                One of the key goals of NLP is to enable computers to
                communicate with humans in a natural and intuitive way. This
                includes tasks such as language translation, text summarization,
                sentiment analysis, and text generation.
              </p>
              <p className="my-5 md:text-lg xl:text-xl">
                In conclusion, NLP is a key area of AI research that has the
                potential to revolutionize the way we communicate with computers
                and enable a wide range of applications in various industries.
              </p>
              <p className="my-5 md:text-lg xl:text-xl">
                #NaturalLanguageProcessing #NLP #AI #MachineLearning
                #DeepLearning #LanguageTranslation #Chatbots #VoiceAssistants
              </p>
            </div>
            <div className="w-[90%] mx-auto ">
              <div>
                <p className="text-xl font-bold py-5">Leave a Reply</p>
              </div>
              <label htmlFor="">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="border-2 w-full xl:text-lg xl:pl-5"
                ></textarea>
                <input
                  className="border my-2 w-full xl:text-lg xl:pl-5 py-2 px-1"
                  placeholder="Name"
                  type="text"
                  name=""
                  id=""
                />
                <input
                  className="border my-2 w-full xl:text-lg xl:pl-5 py-2 px-1"
                  placeholder="Email"
                  type="email"
                  name=""
                  id=""
                />
                <input
                  className="border my-2 w-full xl:text-lg xl:pl-5 py-2 px-1"
                  placeholder="Website"
                  type="text"
                />
                <div className="flex justify-start items-center py-5">
                  <input
                    className="block h-6 w-6"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p className="px-4 xl:text-lg">Save Details</p>
                </div>
                <input
                  className="border my-2 w-[80%] py-2 px-1 sm:w-[50%] md:w-[40%] hover:bg-glintGreen hover:text-white hover:font-bold xl:py-3 xl:text-lg cursor-pointer"
                  type="button"
                  value="Post Comment"
                />
              </label>
            </div>
          </div>
          {/* created for display flex  */}
          <div>
            <div className="w-[90%] mx-auto py-10 lg:my-5 lg:flex">
              <div className="">
                <div className="pb-5 xl:pt-5 xl:pb-6">
                  <h1 className="text-xl font-bold lg:w-36">WRITTEN BY</h1>
                  <p className="hover:text-glintGreen hover:text-xl hover:font-bold text-lg">fasih31</p>
                </div>
                <div className="pb-5">
                  <h1 className="text-xl font-bold lg:w-36">POSTED ON</h1>
                  <p className="text-lg">Dec 3, 2022</p>
                </div>
              </div>
              <div>
                <div className="flex justify-start lg:flex-col xl:mt-3">
                  <a href="" className="cursor-pointer">
                    <IoLogoFacebook className="my-2 h-8 w-8 mx-3 md:h-12 md:w-12 lg:h-8 lg:w-8 cursor-pointer" />
                  </a>
                  <a href="" className="cursor-pointer">
                    <RxTwitterLogo className="my-2 h-8 w-8 mx-3 md:h-12 md:w-12 lg:h-8 lg:w-8 cursor-pointer" />
                  </a>
                  <a href="" className="cursor-pointer">
                    <GrInstagram className="my-2 h-8 w-8 mx-3 md:h-12 md:w-12 lg:h-8 lg:w-8 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
};

export default BlogsArea;
