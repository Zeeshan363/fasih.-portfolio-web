import {FaArrowRight} from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom";
import aos from "aos";


const Blogs = () => {
    // const navigate = useNavigate()

    // const GoToBlogs = () => {
    //         navigate("/blogsarea")
    // }

  return (
    <>
        <div className='w-full bg-glintGreen pt-[90%] sm:pt-[40%] md:pt-[30%] lg:pt-[20%] hover:bg-gray-900 hover:text-glintGreen' id="blogs">
            <div className="w-[85%] mx-auto text-center">
                <div>
                    <h1 className="text-4xl font-bold md:text-5xl tracking-wide">LATEST BLOGS</h1>
                    <p className="text-lg py-3 text-white font-bold md:text-xl 2xl:py-5 2xl:text-2xl tracking-wide hover:text-gray-400">Check Out Some Of My Thinking</p>
                </div>
                <div className="flex flex-col items-center py-10 xl:py-8">
                    <h1 className="text-2xl font-bold md:text-3xl tracking-wide">UNCATEGORIZED</h1>
                    <p className="text-lg py-3 text-white font-bold md:text-xl 2xl:py-5 2xl:text-2xl tracking-wide hover:text-gray-400">National Language Processing (NLP)</p>
                    <Link to="/blogsarea#blogsarea" className="cursor-pointer" id="arrow">
                        <FaArrowRight className="h-6 w-6 xl:h-10 xl:w-10 xl:my-3 hover:text-white"/>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blogs
