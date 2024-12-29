import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  const [showMobMenu,setShowMobMenu] = useState(false)
  useEffect(()=>{
    if(showMobMenu){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    return ()=>{
      document.body.style.overflow = 'auto'
    }
  },[showMobMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
    <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
      <img src={assets.logo} alt="" />
      <ul className='hidden md:flex gap-7 text-black font-bold'>
        <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
        <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
        <a href="#Services" className='cursor-pointer hover:text-gray-400'>Services</a>
        <a href="#Contact" className='cursor-pointer hover:text-gray-400'>Contact</a>
      </ul>
      <button className='hidden md:block bg-black text-white px-8 py-2 rounded-full'>Staff Login</button>
      <img onClick={()=>setShowMobMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
    </div>
    {/* ---mobile menu--- */}
    <div className={`${showMobMenu ? 'fixed w-full' : 'h-0 w-0'}md:hidden right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
      <div className='flex justify-end p-6 cursor-pointer'>
        <img onClick={()=>setShowMobMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
      </div>
      <ul className='flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium'>
        <a onClick={()=>setShowMobMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
        <a onClick={()=>setShowMobMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
        <a onClick={()=>setShowMobMenu(false)} href="#Services" className='px-4 py-2 rounded-full inline-block'>Services</a>
        <a onClick={()=>setShowMobMenu(false)} href="#Contact" className='px-4 py-2 rounded-full inline-block'>Contact</a>
      </ul>
    </div>
   </div>
  )
}

export default Navbar





