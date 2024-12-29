import React, { useEffect, useState } from 'react';
import { assets, clientsData } from '../assets/assets';
import { motion } from "motion/react"
const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(clientsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextClient = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clientsData.length);
  };

  const prevClient = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? clientsData.length - 1 : prevIndex - 1));
  };

  return (
    <motion.div 
    initial={{ opacity: 0 , x:200}}
    transition={{duration:1.5}}
    whileInView={{ opacity: 1 , x:0}}
    viewport={{once:true}}
    className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Clients'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-6 text-center'>
        Our <span className='underline underline-offset-4 decoration-1 font-light'>Clients</span>
      </h1>
      {/* {slider buttons} */}
      <div className='flex justify-end items-center mb-8'>
        <button onClick={prevClient} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Client'>
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextClient} className='p-3 bg-gray-200 rounded' aria-label='Next Client'>
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      {/* {slider container} */}
      <div className="overflow-hidden">
        <div className="flex gap-8 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}>
          {clientsData.map((client, index) => (
            <div className="relative flex-shrink-0 w-full sm:w-1/4" key={index}>
              <div className="relative flex flex-col items-center">
                {/* Circular Image Container */}
                <div className="w-40 h-40 rounded-full bg-gray-100 shadow-md flex items-center justify-center overflow-hidden">
                  <img
                    src={client.image}
                    alt={client.title}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
                {/* Title */}
                <div className="mt-4 text-center">
                  <h2 className="text-lg font-semibold text-gray-800">{client.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Clients;
