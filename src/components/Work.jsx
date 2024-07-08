import { useMemo, useState } from 'react'
import WorkCard from '../utils/WorkCard';
import ChatImg from '../assets/ChatImg.png'
import JumpingJacks from '../assets/JumpingJacks.png'
import ExpenseTracker from '../assets/expensetracker.png'
import Countries from '../assets/countires.png'
import ReactIcon from "../assets/react.png"
import JavaScriptIcon from "../assets/javascript.png"
import PythonIcon from "../assets/python.png"
import NodeIcon from "../assets/node.png"
import FirebaseIcon from "../assets/firebase.png"
import TailWindIcon from "../assets/tailwind.png"
import openAi from '../assets/openai.png'

export default function Work() {
    const [cards, setCards] = useState([
        {
            imgSrc: ChatImg,
            title: "Chat Auto-Translator",
            description: "Chatting app that lets you choose the language you want your messages to be translated to.",
            url: "https://chat-translator-2023.web.app/",
            icons: [
                ReactIcon,
                NodeIcon,
                FirebaseIcon,
                'https://firebasestorage.googleapis.com/v0/b/abdelmassih-portfolio.appspot.com/o/socketio.png?alt=media&token=3795f5c6-e18f-41ca-bcec-405b76d74b67',
                'https://firebasestorage.googleapis.com/v0/b/countries-2023.appspot.com/o/openai.svg?alt=media&token=e3d5fa7e-1eb3-40bc-ad1d-4716d4684d58',

            ],
            video: 'https://www.loom.com/embed/240c97813aae479190614a91d4fb416d?sid=7d19cf4e-a9a6-4d39-8b21-b70b81da16bd'
        },
        {
            imgSrc: JumpingJacks,
            title: "AI Fitness Trainer",
            description: "Built with React Native this Mobile App uses the phone's camera to count your reps and give you feedback using Machine Vision",
            url: "https://drive.google.com/file/d/1G9Klgc7-EQ4x88vOi7PLRUbLHaWt6yib/view?usp=sharing",
            icons: [
                'https://firebasestorage.googleapis.com/v0/b/abdelmassih-portfolio.appspot.com/o/React_native.png?alt=media&token=3cf39606-28bb-4882-ae16-ada016a247b1',
                'https://firebasestorage.googleapis.com/v0/b/abdelmassih-portfolio.appspot.com/o/Tensorflow.png?alt=media&token=d77d9407-cd7e-4454-94ff-90f2b0007a70',

            ],
            video: "https://firebasestorage.googleapis.com/v0/b/abdelmassih-portfolio.appspot.com/o/iphone_demo.mp4?alt=media&token=e2917888-6f01-484e-8438-8cc216fb0deb"
        },
        {
            imgSrc: ExpenseTracker, title: "Expense Tracker",
            description: "Helps people manage their expenses and income and the ability to sort them via categories. Also, there is chart representations to better visualize everything",
            url: "https://expensetracker-a672e.web.app/",
            icons:[
                ReactIcon,
                FirebaseIcon,
                NodeIcon
            ],
            video: 'https://www.loom.com/embed/0af38c320f2f4c2a8b29b5e4def70b0a?sid=9df1a2ef-6530-47bc-8360-4339244d03ba'
        },
        {
            imgSrc: Countries,
            title: "AI Atlas",
            description: "AI powered Atlas with the ability to ask for information about countries in plain english",
            url: "https://countries-2023.web.app/",
            icons: [
                ReactIcon,
                'https://firebasestorage.googleapis.com/v0/b/countries-2023.appspot.com/o/openai.svg?alt=media&token=e3d5fa7e-1eb3-40bc-ad1d-4716d4684d58',
                NodeIcon
            ],
            video: 'https://www.loom.com/embed/525420fe62b5420d8f800a630f8b8ea1?sid=7b288227-daaa-4dae-943e-50928766e27e'
        }
    ]);

    const renderedCards = useMemo(() => {
        return cards.map((card) => <WorkCard cardDetails={card} />)
    }, [cards])

    return (
        <div id="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#2d71d5]'>Work</p>
                    <p className='py-6'>* Check out my newest creations</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {renderedCards}
                </div>
            </div>
        </div>
    )
}
