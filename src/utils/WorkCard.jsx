import { useState } from "react";


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

    const iconsRender = () => {
        return icons?.map((icon)=><img className="w-[50px] h-[50px]" src={icon}/>)
    }

    return (
        <div
            style={{
                backgroundImage: `url(${imgSrc})`
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
                            onClick={() => setShowDemo(!showDemo)}
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
                    ></iframe>
                </div>
            )}
        </div>
    )
}
