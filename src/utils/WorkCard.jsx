import { useEffect, useState } from "react";


export default function WorkCard({ cardDetails }) {
    const {
        imgSrc,
        title,
        url,
        video,
        description,
        icons
    } = cardDetails;
    const [showDemo, setShowDemo] = useState(false);
    const [videoLoading, setVideoLoading] = useState(false);

    const iconsRender = () => {
        return icons?.map((icon) => <img className="w-[50px] h-[50px]" src={icon} />)
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Escape' && showDemo){
            setShowDemo(false);
        }
    }

    useEffect(()=>{
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    })

    return (
        <div
            style={{
                backgroundImage: `url(${imgSrc}), linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4))`,
                backgroundBlendMode: 'overlay'
            }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
            <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center content-around gap-[10px]'>
                <span className='text-xl font-bold text-white tracking-wider'>
                    {title}
                </span>
                <p className="text-white text-center text-wrap">
                    {description}
                </p>
                <div className="flex items-center content-around gap-[3px] flex-wrap">
                    {iconsRender()}
                </div>
                <div className="text-center">
                    {video && (
                        <button
                            className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'
                            onClick={() => {
                                setShowDemo(!showDemo);
                                setVideoLoading(true);
                            }}
                        >
                            {showDemo ? 'Hide Demo' : 'Show Demo'}
                        </button>
                    )}
                    {url &&
                        <a>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={() => {
                                window.open(url, '_blank');
                            }}>Try it</button>
                        </a>
                    }
                </div>
            </div>
            {/* const buttonStyle = {
        width: '80px',
        height: '35px',
        zIndex: 999,
        color: "black",
        backgroundColor: "white",
        border: "2px solid #2d71d5",
        borderRadius: "10px"
    } */}
            {showDemo && video && (
                <div style={{ padding: "20px", borderRadius: "20px", top: "102.5vh", left: '2.5vw', position: 'absolute', height: "95vh", width: "95vw", backgroundColor: 'rgba(255,255,255,0.6)' }}>
                    <button className="hover:text-gray-300 hover:bg-[#2d71d5] w-[80px] h-[35px] z-[999] text-black bg-white border-[#2d71d5] border-2 rounded-xl duration-200" onClick={() => setShowDemo(false)}>
                        Close
                    </button>
                    <iframe
                        src={video}
                        frameBorder="0"
                        webkitAllowFullScreen
                        mozAllowFullScreen
                        allowFullScreen
                        style={{ position: 'absolute', top: "10%", left: "10%", width: '80%', height: '80%' }}
                        onLoad={() => setVideoLoading(false)}
                    ></iframe>
                    {
                        videoLoading &&
                        <div role="status" className="fixed top-[50%] left-[50%]">
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    }
                </div>
            )}
        </div>
    )
}
