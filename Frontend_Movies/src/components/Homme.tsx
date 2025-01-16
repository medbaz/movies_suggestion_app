import React from 'react'
import { hotel_options } from '../config/movies_options_config'
export default function 
Homme() {
  return (
    // <div className='flex flex-col ml-4  w-auto items-center  h-[100vh] '>
    // <div className='flex  mt-10 items-center justify-center text-xl font-bold bg-[#343434] w-[395px] h-12 rounded-lg'>Pic your favorite genre . </div>
    // <div className=' flex flex-wrap justify-center max-w-[1000px] mt-10  '>
    <div className='flex flex-col ml-4  w-auto items-center  h-[100vh] '>
        <div className='flex  sm:mt-10 mt-8 items-center justify-center text-xl font-semibold bg-[#343434] w-[395px] h-12 rounded-lg'>Pic your favorite genre </div>
        <div className=' flex flex-wrap justify-center lg:max-w-[1000px] max-w-[820px] mt-10  '>
            { 
            hotel_options.map((option)=><div className='lg:px-5 px-4 lg:py-2 py-1 lg:text-xl text-lg font-semibold rounded-lg mx-[17px]  md:my-[20px] my-[10px] bg-[#CAA5A5]'>{option}</div>)
            }

        </div>
    </div>
  )
}
