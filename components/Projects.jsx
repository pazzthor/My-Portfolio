
import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import xvresort from '../public/projects/XVresort.png'
import itcoder from '../public/projects/It-coder.png'
import property from '../public/projects/property.png'
import crypto from '../public/projects/crypto.png'
import ProjectItem from './ProjectItem';


const Projects = () => {

  return (
    <div id='project' className='flex items-center justify-center flex-col h-[90vh] '>
        <span className='font-bold text-2xl'>Portfolio</span>
        <span className='font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-300'>Recently Project</span>

        {/* slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          autoplay={{delay:5000}}
          pagination={{ clickable: true }}
          className='mt-3 w-full overflow-visible'>
          <SwiperSlide className='w-[20rem] ' >

            <ProjectItem 
            title='XVresort'
            backgroundImg={xvresort}
            projectUrl='/xvresort'
            tech='NextJS/TailWind' />

          </SwiperSlide>
          <SwiperSlide className='w-[20rem]' >

            <ProjectItem 
            title='It-Coder'
            backgroundImg={itcoder}
            projectUrl='/xvresort'
            tech='ReactJS/TailWind' />

          </SwiperSlide>
          <SwiperSlide className='w-[20rem]' >
            
            <ProjectItem 
            title='Crypto UI'
            backgroundImg={crypto}
            projectUrl='/xvresort'
            tech='ReactJS/TailWind/API' />

          </SwiperSlide>
          <SwiperSlide className='w-[20rem]' >

            <ProjectItem 
            title='KMC '
            backgroundImg={property}
            projectUrl='/xvresort'
            tech='NextJS/TailWind' />

          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Projects