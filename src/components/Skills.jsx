import ReactIcon from "../assets/react.png"
import JavaScriptIcon from "../assets/javascript.png"
import PythonIcon from "../assets/python.png"
import NodeIcon from "../assets/node.png"
import FirebaseIcon from "../assets/firebase.png"
import TailWindIcon from "../assets/tailwind.png"
import openAi from '../assets/openai.png'


export default function Skills() {
    return (
        <div id="skills" className="bg-[#0a192f] w-full h-screen">

            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#2d71d5]">Skills</p>
                    <p className="py-4">* Technologies I am Proficient in</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-[80px] mx-auto" src={ReactIcon} alt="React Icon"/>
                        <p className="my-4">React</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-[80px] mx-auto" src={NodeIcon} alt="React Icon"/>
                        <p className="my-4">NodeJS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-[80px] mx-auto" src={FirebaseIcon} alt="React Icon"/>
                        <p className="my-4">Firebase</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-[80px] mx-auto" src={PythonIcon} alt="React Icon"/>
                        <p className="my-4">Python</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-[80px] mx-auto" src={JavaScriptIcon} alt="React Icon"/>
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-[80px] mx-auto" src={TailWindIcon} alt="React Icon"/>
                        <p className="my-4">TailWind</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-[80px] mx-auto" src={openAi} alt="React Icon"/>
                        <p className="my-4">OpenAI</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
