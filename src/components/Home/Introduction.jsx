import React from 'react'
import Balls from './Balls'

function Introduction() {
  return (
    <div className='flex flex-col gap-12'>
         <div id='about' className='container mx-auto flex justify-center items-start flex-col py-12'>
            <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>INTRODUCTION</p>
            <p className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Overview.</p>
            <p  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>Hello my name is Pavle and i'm a software developer with advanced experience in Javascript and expertise in frameworks like React and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
        </div>

        <Balls/>
    </div>
   
  )
}

export default Introduction
