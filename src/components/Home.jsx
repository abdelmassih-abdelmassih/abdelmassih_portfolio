import { HiArrowNarrowRight } from 'react-icons/hi'
import Profile from '../assets/profile.jpeg'
import GradProfile from '../assets/GradProfile.jpg'
import { Link } from "react-scroll";


export default function Home() {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f] flex justify-center items-center'>

            <div className='h-full max-w-[1000px] flex flex-col lg:flex-row justify-center items-center'>

                {/* logo or image */}
                <div className="text-[#0a192f] w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[450px] lg:h-[450px] flex justify-center items-center">
                    <img src={Profile} className='rounded-3xl' />
                </div>

                <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">

                    <p className='text-[#2d71d5]'>
                        Hi, my name is
                    </p>
                    <h1 className='text-4xl sm:text-7xl font-bold text-[#e3e7ed]'>
                        Abdelmassih Abdelmassih
                    </h1>
                    <h2 className='text-4xl sm:text-7xl font-bold text-[#8d949c]'>
                        I'm a Computer Software Engineer
                    </h2>
                    <p className='text-[#8892b0] py-4 max-w-[700px]'>
                        I'm a Computer Engineer with a strong foundation in
                        Software Development, currently working as a Full-Stack
                        developer. My proficiency lies in Web Technology and AI.
                    </p>
                    <div>
                        <Link to="work" smooth={true} duration={500}>
                            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#2d71d5] hover:border-[#2d71d5] duration-200'>
                                View Work
                                <span className='group-hover:rotate-90 duration-300'>
                                    <HiArrowNarrowRight className='ml-3' />
                                </span>
                            </button>
                        </Link>
                    </div>

                </div>

            </div>



        </div>
    )
}
