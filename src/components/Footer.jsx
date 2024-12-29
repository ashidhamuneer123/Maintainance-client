import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logo_dark} alt="" />
            <p className='text-gray-400 mt-4 '>You can always count on our Experts to get to you fast and get the job done right the first time.</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <a className='hover:text-white' href="#Header">Home</a>
                <a className='hover:text-white' href="#About">About us</a>
                <a className='hover:text-white' href="#Contact">Contact us</a>
                <a className='hover:text-white' href="#Privacy">Privacy Policy</a>
            </ul>
        </div>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
             <h3 className='text-white text-lg font-bold mb-4'>Get in touch with us!!</h3>
                <p className='hover:text-white  text-gray-400'>Our Contact Phone:</p>
                <p>
                     <a className='text-white' href="tel:+971526500000">+971526500000</a>
                </p>
                <p className='hover:text-white  text-gray-400'>Our Contact Email:</p>
                <p>
                    <a className='text-white' href="mailto:aaa@gmail.com">aaa@gmail.com</a>
                </p>
        </div>
        <div className='w-full md:w-1/3'>
             <h3 className='text-white text-lg font-bold mb-4'>Address</h3>
                <p className='hover:text-white  text-gray-400'>Office Num:5</p>
                <p className='hover:text-white  text-gray-400'>Building:67</p>
                <p className='hover:text-white  text-gray-400'>Dubai</p>
        </div>
    </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
     Copyright © {new Date().getFullYear()} ashDevelopments. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
