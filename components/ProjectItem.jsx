import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl group hover:bg-gradient-to-r from-purple-600 to-teal-300 rounded-2xl'>
        <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] '>
            <h3 className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-black mx-2 tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-slate-300 text-center underline'>{tech}</p>
            <Link href={projectUrl}>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItem