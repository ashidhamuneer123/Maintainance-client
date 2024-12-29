import React from 'react'
import { assets} from '../assets/assets'
import { motion } from "motion/react"
const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0 , x:200}}
    transition={{duration:1.5}}
    whileInView={{ opacity: 1 , x:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>ABCD</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>At ABCD, we specialize in providing top-notch maintenance services tailored to meet your needs. From quick repairs to comprehensive upkeep, our skilled team ensures your spaces remain functional, safe, and efficient. With a commitment to quality and customer satisfaction, we deliver solutions you can trust.</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>5+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>50+</p>
                        <p>Clients</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>65+</p>
                        <p>Projects completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>80+</p>
                        <p>On going services</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg'> popular belief, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,</p>
                <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
            </div>
      </div>
    </motion.div>
  )
}

export default About
