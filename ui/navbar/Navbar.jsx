import React from 'react'
import {BsCart3, BsSearch} from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className='flex  justify-between text-xl p-4  gap-x-10'>
      <div className='flex  flex-1 flex-grow-0  relative'>
        <input className='p-2' type="text" name="search" id="search" placeholder='Search Items' />
        <BsSearch className="absolute right-10 top-1/2 -translate-y-1/2"/>
      </div>
      <div className=' flex-1 font-bold text-4xl  text-center flex justify-center items-center'>
        LOGO
      </div>
      <div className='flex flex-grow-0  justify-between items-center gap-x-2'>
        <div>Register</div>
        <div>Sign In</div>
        <div className=' relative'>  
         <BsCart3 className="text-3xl" />
         <div className='p-2 h-3 w-3 rounded-full text-xs text-white flex items-center justify-center bg-red-600 absolute right-0 top-0 -translate-y-1 '>1</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar