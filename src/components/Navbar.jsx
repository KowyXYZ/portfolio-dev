import React, { useState } from 'react'
import logo from '../Assets/logo.jpeg'
import { Link } from 'react-router-dom'
import github from '../Assets/github.png'
function Navbar() {

  const [toggle, setToggle] = useState(false)
  return (
    <div className='container mx-auto flex justify-between items-center mt-4 sm:flex-row flex-col gap-12  text-[18px]'>
      
      <div>
        <Link to='/' className='flex items-end justify-center font-black text-[24px]'>
          <img className='w-12 invert' src={logo} alt="" />
          <p>Kowy</p>
        </Link>
        
      </div>

      <div className='hidden sm:flex gap-12'>
        <a className='hover:border-purple-500 border-b-2 border-transparent transition-all delay-75 ease-in-out' href='#about'>About</a>
        <a className='hover:border-purple-500 border-b-2 border-transparent transition-all delay-75 ease-in-out' href='#work'>Recent Work</a>
        <p className='hover:border-purple-500 border-b-2 border-transparent transition-all delay-75 ease-in-out' href='#'>Contact</p>
        <a href='https://github.com/KowyXYZ'> <img className='w-8' src={github} alt=""  /></a>
       
      </div>
      
    </div>
  )
}

export default Navbar
