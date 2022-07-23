import React from 'react'
import Link from 'next/link'
import {SiSololearn, SiFreecodecamp, SiYoutube} from 'react-icons/si'
import me2 from '../public/me2.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-black via-black to-teal-300'>
        <div className='max-w-screen-lg mx-auto flex flex-col  items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full mx-4  '>
                <h2 className='text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-300 '>
                    I'm a Front-End Developer
                </h2>
                <p className='text-slate-300 py-4 max-w-lg'>
                        I have 8 years of experience building and desgining software.
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, Next JS and GraphQL.
                </p>

                <div className='text-center'>
                    <p>I learn Web developing thru this:</p>
                    <div className='flex justify-evenly p-2 i-icons reflect'>
                        <SiSololearn className='rounded-full ' size={30} />
                        <SiFreecodecamp className='rounded-full ' size={30} />
                        <SiYoutube className='rounded-full ' size={30}/>
                    </div>
                </div>
                
            </div>
            <div className='-mt-10 md:mt-5 '>
                <div className='bg-gradient-to-r from-purple-600 to-teal-300 pt-2 pb-1 px-2 rounded-lg cursor-pointer hover:scale-105'>
                <Image className='rounded-2xl mx-auto w-2/3 md:w-full ' src={me2} width='200px' height='200px'/>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Hero