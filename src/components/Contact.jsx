import React from 'react'

export default function Contact() {
    return (
        <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method="POST" action="https://getform.io/f/qbloomza" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#2d71d5] text-gray-300'>
                        Contact
                    </p>
                    <p className='text-gray-300 p-4'>
                        * Submit the form or send me an email - abdelmassih.abedalmassih@gmail.com
                    </p>
                </div>
                <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Name' id="name" name="name" />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' id="email" name="email"/>
                <textarea className='bg-[#ccd6f6] p-2' id="message" name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-[#2d71d5] hover:border-[#2d71d5] px-4 py-4 my-8 mx-auto flex items-center'>
                    Let's Collaborate
                </button>
            </form>
        </div>
    )
}
