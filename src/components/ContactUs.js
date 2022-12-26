import React from 'react'

import me from '../me.JPEG'

const ContactUs = () => {
  return (
    <div className='flex items-center sm:items-start lg:items-center justify-center h-[80vh]'>
        <div className=' bg-slate-50 lg:w-1/2 sm:w-4/12 w-1/2 flex flex-col lg:flex-row-reverse  justify-between rounded-lg overflow-hidden shadow-2xl' >
            <div className='hidden sm:block'>
                <img className=' lg:w-64 w-full' src={me} alt="me" />
            </div>
            <div className='my-4 mx-2 ml-3'>
                <h3 className=' font-semiboldx text-xl mb-3'><span className='block'>Developed by: </span>Amir Mohammad Basirati</h3>
                <p>Address: Jannat Abad / Tehran / Iran</p>
                <p><span>Phone Num: </span>+989358710605</p>
                <p><span>E-Mail: </span><span className=' text-xs xs:text-base'>amirbasirati13@gmail.com</span></p>
                <p className='bg-black text-center  rounded-md text-white xs:inline-block block px-2 mt-2'><a href='https://github.com/amirbt13' target='_blank' rel='noreferrer'>GitHub</a></p>
            </div>
        </div>
    </div>
  )
}

export default ContactUs