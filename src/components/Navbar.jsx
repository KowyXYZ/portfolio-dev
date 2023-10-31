import React, { useState } from 'react'
import logo from '../Assets/logo.jpeg'
import { Link } from 'react-router-dom'
import close from '../Assets/close.svg'
import menu from '../Assets/menu.svg'
import github from '../Assets/github.png'
function Navbar() {

  const [toggle, setToggle] = useState(false)
  return (
    <div className='container mx-auto flex flex-row justify-center sm:justify-between items-center mt-4 sm:flex-row  gap-12  text-[18px]'>
      
      <div>
        <Link to='/' className='flex items-end justify-center font-black text-[24px]'>
          <img className='w-12 invert' src={logo} alt="" />
          <p>Kowy</p>
        </Link>
        
      </div>

      <div className='hidden sm:flex gap-12'>
        <a className='hover:border-purple-500 border-b-2 border-transparent transition-all delay-75 ease-in-out' href='#about'>About</a>
        <a className='hover:border-purple-500 border-b-2 border-transparent transition-all delay-75 ease-in-out' href='#work'>Recent Work</a>
        <a className='hover:border-purple-500 border-b-2 border-transparent transition-all delay-75 ease-in-out' href='#contact'>Contact</a>
        <a href='https://github.com/KowyXYZ'> <img className='w-8' src={github} alt=""  /></a>
       
      </div>

       <div className='sm:hidden flex flex-1 justify-end items-center'>
            
              <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] cursor-pointer object-contain' onClick={() => setToggle(!toggle)}/>
              <div className={`${!toggle ? 'hidden' : 'flex'} bg-[#050505] p-6 border-2 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <div className='list-none flex flex-col items-start justify-end gap-4'>
                <a className='hover:border-purple-500 border-b-2 border-transparent transition-all delay-75 ease-in-out' href='#about'>About</a>
                <a className='hover:border-purple-500 border-b-2 border-transparent transition-all delay-75 ease-in-out' href='#work'>Recent Work</a>
                <a className='hover:border-purple-500 border-b-2 border-transparent transition-all delay-75 ease-in-out' href='#contact'>Contact</a>
                <a href='https://github.com/KowyXYZ'> <img className='w-8' src={github} alt=""  /></a>
              </div>
              </div>
            </div>
      
    </div>
  )
}

export default Navbar
