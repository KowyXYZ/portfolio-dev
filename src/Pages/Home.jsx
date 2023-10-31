import React from 'react'
import heroimg from '../Assets/heroimg.png'
import Introduction from '../components/Home/Introduction'
import {motion} from 'framer-motion'
import Projects from '../components/Home/Projects'
import Contact from '../components/Home/Contact'

function Home() {
  return (
    <div className=''>
        <div className='container relative h-screen mx-auto flex justify-center items-center gap-24 '>
        <div className='flex flex-col gap-4 items-start'>
            <p className='w-[300px] sm:w-[700px] text-[56px] font-black'>Hi, I am <span className='text-purple-500'>Kowy</span>, Frontend Developer from Serbia.</p>
            <p className='w-[300px] sm:w-[500px] text-[20px]'>I develop user interfaces, some of 3d visuals and most important web applications.</p>
            <button className='bg-purple-500 py-2 px-6 font-semibold rounded-2xl text-[20px]'>Download Resume</button>
        </div>

        <div>
            <img className='w-[500px] rounded-full' src={heroimg} alt="heroimg" />
        </div>
        </div>

        <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center '>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y:  [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}  

                className='w-3 h-3 rounded-full bg-white mb-1'
              />
          </div>
        </a>
      </div>

        <Introduction/>
        <Projects/>
        <Contact/>
    </div>
    
  )
}

export default Home
