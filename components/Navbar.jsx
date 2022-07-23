import React, { useState } from 'react'
import Link from 'next/link'
import {BsFacebook , BsGithub, BsYoutube, BsFillPersonLinesFill} from 'react-icons/bs'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import Toggle from './Toggle'
import Image from 'next/image';




const Navbar = () => {

  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
      setNav(!nav)
  }
  
  
  return (
    <div className='fixed left-0 top-0 w-full h-[20px] z-10 ease-in duration-300  mx-auto p-4 bg-black/30 '>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-teal-300'>
        <Link href='/'>
          <h1 className='font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-300 mx-2'>XV Porfolio</h1>
        </Link>

        <div className='flex md:gap-6 mx-4 '>
          <ul className='hidden md:flex flex-row gap-6 text-left font-bold mx-4 custom '>
          <Link href='/'><li >
              Home
            </li></Link>
            <Link href='/#about'><li >
              About
            </li></Link>
            <Link href='/#project'><li >
              Projects
            </li></Link>
            <Link href='/#contact'><li >
              Contact
            </li></Link>
          </ul>

          <div className='hidden md:flex flex-row gap-4 font-semibold items-center i-icons '>
            <BsFacebook size={20}  className='rounded-full'/>
            <BsGithub size={20}  className='rounded-full'/>
            <BsYoutube  size={20} className='rounded-full'/>
          </div>
          {/* <Toggle /> */}
        </div>

        {/* Menu bar */}
        <div onClick={handleNav} className='block md:hidden z-10'>
          {
            nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />
          }
        </div>
        
        
        <div className={nav ? 'md:hidden fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in duration-500':' fixed right-[-100%] top-0  p-10 ease-in duration-500'}>
            <div>
                <div className='flex w-full items-center justify-between'>
                    <Link href='/'>
                    <h1 className='font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-300 mx-2 reflect'>XV Porfolio</h1>
                    </Link>
                </div>
                <div className='border-b border-slate-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together</p>
                </div>
            </div>
            
            
            <div className='py-4 flex'>
                <ul className='custom-mobile my-2 uppercase'>
                  <Link href='/'>
                    <li onClick={() => setNav(false)} className='py-4'>Home</li>
                  </Link>
                  <Link href='/#about'>
                    <li onClick={() => setNav(false)} className='py-4'>About</li>
                  </Link>
                  <Link href='/#project'>
                    <li onClick={() => setNav(false)} className='py-4'>Project</li>
                  </Link>
                  <Link href='/#contact'>
                    <li onClick={() => setNav(false)} className='py-4'>Contact</li>
                  </Link>
                </ul>
            </div>
            
            <div>
              <p className='uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-300 font-bold text-center'>Let's Connect</p>
            </div>
            
            <div className='flex items-center justify-between my-4 w-full sm:w-[100%] p-4 gap-6 text-bottom i-icons reflect'>
              <div className='rounded-full shadow-xl shadow-slate-300 cursor-pointer '>
                <BsFacebook  size={30} />
              </div>
              <div className='rounded-full shadow-xl shadow-slate-300 cursor-pointer '>
                <BsGithub  size={30} />
              </div>
              <div className='rounded-full shadow-xl shadow-slate-300 cursor-pointer '>
                <BsYoutube  size={30} />
              </div>
            </div>
            
            
            
            
          
          
        </div>
        
        {/* <div onClick={handleNav} className='block md:hidden z-10'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div> */}
        
        

        


            
      </div>
    </div>
  )
}

export default Navbar