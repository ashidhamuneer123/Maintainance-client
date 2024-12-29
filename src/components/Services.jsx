import React, { useEffect, useState } from 'react'
import { assets, servicesData } from '../assets/assets'
import { motion } from "motion/react"
const Services = () => {
    const [currentIndex,setCurrentIndex]=useState(0)
    const [cardsToShow,setCardsToShow] = useState(1)
    useEffect(()=>{
        const updateCardsToShow=()=>{
            if(window.innerWidth>=1024){
                setCardsToShow(servicesData.length)
            }else{
                setCardsToShow(1)
            }
        }
            updateCardsToShow()
            window.addEventListener('resize',updateCardsToShow);
            return ()=>window.removeEventListener('resize',updateCardsToShow)
       
    },[])
    const nextService = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex +1) % servicesData.length)
    }
    const prevService = ()=>{
        setCurrentIndex((prevIndex)=>prevIndex === 0 ? servicesData.length -1 :prevIndex - 1)
    }
  return (
    <motion.div
    initial={{ opacity: 0 , x:-200}}
    transition={{duration:1.5}}
    whileInView={{ opacity: 1 , x:0}}
    viewport={{once:true}}
    className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Services'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Our <span className='underline underline-offset-4 decoration-1 under font-light'>SERVICES</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>In ABCD, we offer following services .</p>
        {/* {slider buttons} */}
        <div className='flex justify-end items-center mb-8'>
            <button onClick={prevService} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Service'>
                <img src={assets.left_arrow} alt="Previous" />
            </button>
            <button onClick={nextService} className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Service'>
                <img src={assets.right_arrow} alt="Next" />
            </button>
        </div>
        {/* {slider container} */}
<div className="overflow-hidden">
    <div className="flex gap-8 transition-transform duration-500 ease-in-out" style={{transform : `translateX(-${(currentIndex*100)/cardsToShow}%)`}}>
        {servicesData.map((service, index) => (
            <div className="relative flex-shrink-0 w-full sm:w-1/4" key={index}>
                <div className="relative">
                    {/* Image Container */}
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-60 object-cover rounded-md"
                    />
                    {/* Title and Description */}
                    <div className="absolute left-0 right-0 bottom-0 bg-white bg-opacity-80 px-4 py-2 shadow-md">
                        <h2 className="text-lg font-semibold text-gray-800">{service.title}</h2>
                        <p className="text-gray-500 text-sm">{service.description}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

    </motion.div>
  )
}

export default Services
