import React, {useState} from 'react'
import Html from '../public/skills/html.png'
import Css from '../public/skills/css.png'
import Javascript from '../public/skills/javascript.png'
import react from '../public/skills/react.png'
import Next from '../public/skills/nextjs.png'
import Tailwind from '../public/skills/tailwind.png'
import Node from '../public/skills/node.png'
import Image from 'next/image'



const About = () => {

    const [skill, setSkill] = useState(false);
  
  const handleSkill = () => {
      setSkill(!skill)
  }

  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 flex-col custom-img bg-cover'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 '>
            <div className='col-span-2 bg-black/30 p-4 rounded-xl shadow-xl shadow-gray-400'>
                <h3 className='uppercase text-xl tracking-widest  '>
                    --About 
                </h3>
                <h2 className='py-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-300'>Who I am</h2>
                <p className='py-2 text-purple-600'>Aspiring to be Front-End Developer</p>
                <p className='text-slate-200'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, omnis minima. Inventore quis consectetur hic eveniet, odit possimus eos nostrum quisquam ducimus repudiandae ullam culpa exercitationem minima ipsam reiciendis voluptatum!
                </p>
                <p className='text-slate-200 py-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste laudantium in rem modi quisquam. Quaerat, tenetur explicabo doloremque perferendis quasi voluptates numquam animi aut blanditiis suscipit, cupiditate repudiandae ex laudantium at, tempora sint debitis ea? Totam recusandae quod tenetur.
                </p>
            </div>
            <div>
                <div className=' md:-mt-14 p-2'>
                    <div className='text-center bg-black/40 tracking-widest rounded-xl shadow-xl shadow-gray-400'>
                        <h2 className='uppercase text-2xl py-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-300' >My Arsenal</h2>
                        
                        <div>
                            <div className='grid grid-cols-2 gap-1 justify-center items-center py-1 hover:scale-125 cursor-pointer'>
                                <div className='m-auto '>
                                    <Image src={Html} width='54px' height='54px' alt='/' />
                                </div>
                                <div className='text-orange-500'>
                                    <h3>HTML</h3>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-1 justify-center items-center py-1 hover:scale-125 cursor-pointer'>
                                <div className='m-auto '>
                                    <Image src={Css} width='54px' height='54px' alt='/' />
                                </div>
                                <div className='text-blue-500'>
                                    <h3>CSS</h3>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-1 justify-center items-center py-1 hover:scale-125 cursor-pointer'>
                                <div className='m-auto '>
                                    <Image src={Javascript} width='54px' height='54px' alt='/' />
                                </div>
                                <div className='text-yellow-400'>
                                    <h3>Javascript</h3>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-1 justify-center items-center py-1 hover:scale-125 cursor-pointer'>
                                <div className='m-auto '>
                                    <Image src={react} width='54px' height='54px' alt='/' />
                                </div>
                                <div className='text-cyan-500'>
                                    <h3>ReactJS</h3>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-1 justify-center items-center py-1 hover:scale-125 cursor-pointer'>
                                <div className='m-auto '>
                                    <Image src={Next} width='54px' height='54px' alt='/' />
                                </div>
                                <div className='text-gray-400'>
                                    <h3>NextJS</h3>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-1 justify-center items-center py-1 hover:scale-125 cursor-pointer'>
                                <div className='m-auto '>
                                    <Image src={Tailwind} width='54px' height='54px' alt='/' />
                                </div>
                                <div className='text-teal-300'>
                                    <h3>Tailwind</h3>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-1 justify-center items-center py-1 hover:scale-125 cursor-pointer'>
                                <div className='m-auto '>
                                    <Image src={Node} width='54px' height='54px' alt='/' />
                                </div>
                                <div className='text-lime-500'>
                                    <h3>NodeJS</h3>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About