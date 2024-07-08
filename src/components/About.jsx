export default function About() {
    return (
        <div id="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#2d71d5]'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>
                            Hello, its nice to have you here
                        </p>
                    </div>
                    <div>
                        <p>
                            I am passionate about building solutions to people problems. I specialize
                            in building Web and Mobile Applications for small businesses and individuals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
