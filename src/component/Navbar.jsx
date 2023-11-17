import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-between  '>
        <h1 className='font-semibold text-xl'>AIPatrn</h1>
         <div className='flex justify-between items-start   w-[40%] '>
            <div className='grid gap-2'>
                <p className='font-semibold text-gray-400 cursor-pointer hover:text-black' >Home Page </p>
                <p className='font-semibold text-gray-400 cursor-pointer hover:text-black' >Generator</p>
                <p className='font-semibold text-gray-400 cursor-pointer hover:text-black' >Pricing-Plan</p>
                <p className='font-semibold text-gray-400 cursor-pointer hover:text-black' >Blog - News</p>
            </div>
            <div className='grid gap-2'>
                <p className='font-semibold text-gray-400 cursor-pointer hover:text-black' >About us</p>
                <p className='font-semibold text-gray-400 cursor-pointer hover:text-black' >Features</p>
                <p className='font-semibold text-gray-400 cursor-pointer hover:text-black' >Collection-2023</p>
                <p className='font-semibold text-gray-400 cursor-pointer hover:text-black' >Career</p>
            </div>
            <button className='px-4 py-2 rounded-lg w-10 border-gray-400 border-solid ' >Menu</button>
         </div>
    </div>
  )
}
