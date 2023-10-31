import React from 'react'
import { github } from '../../Assets'

import ecommm from '../../Assets/ecomm.jpg'
import recipe from '../../Assets/recipeapp.jpg'
import weatherapp from '../../Assets/weatherapp.jpg'
import imobile from '../../Assets/imobile.jpg'
function Projects() {
  return (
    <div id='work' className='container mx-auto flex flex-col gap-12 mt-24 mb-12'>
         <div id='about' className='container mx-auto flex justify-center items-start flex-col py-10'>
            <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>My Work</p>
            <p className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Projects.</p>
            <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'> Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.</p>
        </div>
        <div className='flex gap-12'>
        <div className='bg-[#050505] p-5  rounded-2xl sm:w-[360px] w-full'>
       <div className='relative w-full h-[230px]'>
            <img src={ecommm} alt='ecommm' className='w-full h-full object-cover rounded-2xl' />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div onClick={() => window.open('https://github.com/KowyXYZ/e-commerce-repository-two', 'blank')} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
               <img src={github} alt="github" className='object-contain bg-[black] rounded-2xl'/>
              </div>
            </div>
          </div>  

         <div className='mt-5 '>
          <h3 className='text-white font-bold text-[24px]'>E-Commerce App</h3>
          <p className='mt-2 text-secondary text-[14px]'>E-Commerce application, that allows users to list through products, with specific categories and list and grid system, users can add their items to cart or even login to their account.</p>
         </div>

         <div className='mt-4 flex flex-wrap gap-2'>
          <p className='text-blue-500'>#react</p>
          <p className='text-lime-500'>#tailwindcss</p>
          <p className='text-red-600'>#api</p>
         </div>
       </div>

       <div className='bg-[#050505] p-5  rounded-2xl sm:w-[360px] w-full'>
       <div className='relative w-full h-[230px]'>
            <img src={weatherapp} alt='ecommm' className='w-full h-full object-cover rounded-2xl' />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div onClick={() => window.open('https://github.com/KowyXYZ/weather-app', 'blank')} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
               <img src={github} alt="github" className='object-contain bg-[black] rounded-2xl'/>
              </div>
            </div>
          </div>  

         <div className='mt-5 '>
          <h3 className='text-white font-bold text-[24px]'>Weather App</h3>
          <p className='mt-2 text-secondary text-[14px]'>Weather Application where users can check weater or specific temperature of their city / town or country at the moment, i used openweatherapi for this app and it showed very well.</p>
         </div>

         <div className='mt-4 flex flex-wrap gap-2'>
          <p className='text-blue-500'>#react</p>
          <p className='text-lime-500'>#tailwindcss</p>
          <p className='text-red-600'>#api</p>
         </div>
       </div>

       <div className='bg-[#050505] p-5  rounded-2xl sm:w-[360px] w-full'>
       <div className='relative w-full h-[230px]'>
            <img src={recipe} alt='ecommm' className='w-full h-full object-cover rounded-2xl' />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div onClick={() => window.open('https://github.com/KowyXYZ/recipe-app', 'blank')} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
               <img src={github} alt="github" className='object-contain bg-[black] rounded-2xl'/>
              </div>
            </div>
          </div>  

         <div className='mt-5 '>
          <h3 className='text-white font-bold text-[24px]'>Recipe  App</h3>
          <p className='mt-2 text-secondary text-[14px]'>Recipe Application, users can check most recipes for specific food they are looking for, they can also add their favorite food to the list and check ingredients and nutrients for specific food.</p>
         </div>

         <div className='mt-4 flex flex-wrap gap-2'>
          <p className='text-blue-500'>#react</p>
          <p className='text-lime-500'>#tailwindcss</p>
          <p className='text-red-600'>#api</p>
         </div>
       </div>

       <div className='bg-[#050505] p-5  rounded-2xl sm:w-[360px] w-full'>
       <div className='relative w-full h-[230px]'>
            <img src={imobile} alt='ecommm' className='w-full h-full object-cover rounded-2xl' />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div onClick={() => window.open('https://github.com/KowyXYZ/room-chat-app', 'blank')} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
               <img src={github} alt="github" className='object-contain bg-[black] rounded-2xl'/>
              </div>
            </div>
          </div>  

         <div className='mt-5 '>
          <h3 className='text-white font-bold text-[24px]'>Room Chat App</h3>
          <p className='mt-2 text-secondary text-[14px]'>Room Chat Application, users can login with their google accounts and make a chat room, after making a chat room anyone can join them and they can chat between themselfs.</p>
         </div>

         <div className='mt-4 flex flex-wrap gap-2'>
          <p className='text-blue-500'>#react</p>
          <p className='text-lime-500'>#tailwindcss</p>
          <p className='text-orange-500'>#firebase</p>
         </div>
       </div>

        </div>
       
    </div>
  )
}

export default Projects
