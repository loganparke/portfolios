import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import sideLogo from '../assets/sideLogo.png'
import home from '../assets/home.png'


const Vacanze = () => {

  return(
    <div className='w-screen bg-white'>
      <header className='w-screen h-screen bg-white'>
        <div className='w-[115%] h-[145%] coolHeader grid grid-cols-4 gap-0 relative sm:right-20 bottom-28 bg-gray-800'>
          <div className='bg-gradient-to-r to-cyan-700 from-gray-800 mb-[-2px] mr-[-2px]'></div>
          <div className='bg-gradient-to-r from-cyan-700 to-gray-800 mb-[-2px]'></div>
          <div className=''></div>
          <div className='bg-gradient-to-r to-cyan-700 from-gray-800 mr-[-2px]'></div>
          <div className='bg-gradient-to-r to-cyan-700 from-gray-800 mb-[-2px] mr-[-2px]'></div>
          <div className='bg-gradient-to-r from-cyan-700 to-gray-800 mb-[-2px]'></div>
          <div className=''></div>
          <div className='bg-gradient-to-r to-cyan-700 from-gray-800 mr-[-2px]'></div>
          <div className='bg-gradient-to-r to-cyan-700 from-gray-800 mr-[-2px]'></div>
          <div className='bg-gradient-to-r from-cyan-700 to-gray-800'></div>
          <div className=''></div>
          <div className='bg-gradient-to-r to-cyan-700 from-gray-800 mr-[-2px]'></div>
        </div>
        
        <div className='w-screen absolute top-40 text-white flex'>
        
        <div className='w-full ml-auto b'>
        <Link to='/' className='text-3xl font-bold relative bottom-20 mr-auto right-60'> ← Back to Home</Link>
          <div className='w-2/3 m-auto'>
            <img src={sideLogo} className=' text-7xl font-bold w-fit z-10 text-left w-1/2 mr-auto mb-8'/>
          </div>

          <p className='text-4xl text-left w-2/3 m-auto mb-8'>An application that lets Airbnb hosts show off their property to guests by building a custom app.</p>
          
          <ul className='text-left w-2/3 m-auto mb-20 list-disc pl-6 text-xl'>
            <li>Share info about your rental</li>
            <li>Use the built in Google Map to show guests any locations you want.  From restaurants and hiking spots and more!</li>
          </ul>
          <a target='_blank' href='https://vacanze.herokuapp.com/' className='border-2 border-white rounded-full px-8 py-2 pb-3 text-3xl font-semibold mr-12 hover:underline'>
            Go To Vacanze
          </a>
          <a target='_blank' href='https://vacanze.herokuapp.com/user/63d9d428f366de6c77a3f86c/guide/63e5195afc37c32a6db18017' className='border-2 border-white rounded-full px-8 py-2 pb-3 text-3xl font-semibold hover:underline'>
            See Example App
          </a>
        </div>
        <div className='w-2/5'><img className='mr-auto' src={home} /></div>
        </div>
      </header>
      <div className='flex w-screen mt-20'>
        
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Vacanze;