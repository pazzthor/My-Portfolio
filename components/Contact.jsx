
import React, { useState } from 'react'
import Image from 'next/image'
import getintouch from '../public/getintouch.jpeg'
import {FaGithub} from 'react-icons/fa'
import {BsMessenger, BsFillPersonLinesFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import Link from 'next/link'


const Contact = () => {

    const [values, setValues] = useState({
        name:'',
        phone:'',
        email:'',
        subject:'',
        message:'',
    });

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }



  return (
    <section id='contact' className='w-full lg:h-screen via-black'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase '>
                Contact
            </p>
            <h2 className='py-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-300'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image src={getintouch} className='rounded-xl hover:scale-105 ease-in duration-300'  alt='/'/>
                        </div>
                        <div>
                            <h2 className='py-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-300'>Xyrez Jemerson</h2>
                            <p>Front-End Developer</p>
                            <p className='py-4 text-slate-200'>
                                I am a aspiring front-end developer and enchancing my skills. How's my code?
                            </p>
                        </div>
                        <div className='pt-14'>
                            <p className='uppercase pt-8'>Connect With Me</p>
                            <div className='flex items-center justify-between py-4 reflect'>
                                <a href="/" target='' rel='noreferrer'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaGithub size={20}/>
                                    </div>
                                </a>

                                <a href="/" target='' rel='noreferrer'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <BsMessenger size={20}/>
                                    </div>
                                </a>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <AiOutlineMail size={20} />
                                </div>
                                <Link href='/resume'>
                                    <a>
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <BsFillPersonLinesFill size={20} />
                                        </div>
                                    </a>
                                 </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right */}
                <aside className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form  action='https://getform.io/f/ba763f3a-2eeb-452b-8781-163a872b5f1c'  method='POST' encType='multipart/form-data' >
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col '>
                                    <label className='uppercase text-md py-4'>Name</label>
                                    <input 
                                    onChange={(e) => setValues(e.target.value)}
                                    className='border-2 rounded-lg p-3 flex border-teal-300 text-black text-lg' 
                                    type="text" 
                                    name='name'
                                    value={values.name}
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label className='uppercase text-base py-4'>Phone Number</label>
                                    <input 
                                    onChange={(e) => setValues(e.target.value)}
                                    className='border-2 rounded-lg p-3 flex border-teal-300 text-black text-lg' 
                                    type="text" 
                                    name='phone' 
                                    value={values.phone}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                    <label className='uppercase text-m py-4'>Email</label>
                                    <input 
                                    onChange={(e) => setValues(e.target.value)}
                                    className='border-2 rounded-lg p-3 flex border-teal-300 text-black text-lg' 
                                    type="email" 
                                    name='email'
                                    value={values.email}
                                    />
                            </div>

                            <div className='flex flex-col'>
                                <label className='uppercase text-m py-4'>Subject</label>
                                <input 
                                onChange={(e) => setValues(e.target.value)}
                                className='border-2 rounded-lg p-3 flex border-teal-300 text-black text-lg' 
                                type="text" 
                                name='subject'
                                value={values.subject}
                                />
                            </div>

                            <div className='flex flex-col py-2'>
                            <label className='uppercase text-m py-4'>Mesasge</label>
                            <textarea 
                            onChange={(e) => setValues(e.target.value)}
                            className='border-2 rounded-lg p-3 border-teal-300 text-black text-lg'
                            name="message" 
                            rows="10"
                            value={values.message}
                            ></textarea>
                            </div>
                            <button  type='submit' className='w-full mt-4 shadow-xl shadow-cyan-400 rounded-full text-sm py-4 px-2 uppercase bg-gradient-to-r from-[#4f4aee] to-[#e01ac2] text-white'>Send Message</button>
                        </form>
                    </div>

                </aside>
            </div>
        </div>

    </section>
  )
}

export default Contact