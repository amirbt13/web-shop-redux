import React from 'react'
import Typewriter from 'typewriter-effect'

import "../fonts/Dancing_Script/DancingScript-VariableFont_wght.ttf"
import "../fonts/Dancing_Script/static/DancingScript-Bold.ttf"


const Landing = () => {
  

  return (
    <div className="w-full h-[94vh] bg-gradient-to-r from-cyan-500 to-indigo-700">
        <div>
            <h2 className='relative top-96 ml-10 text-4xl md:text-[5rem] font-[dancing-bold]'>
              <Typewriter 
                  options={{
                    loop: true,
                    cursor: ''
                  }}
                  onInit={(typewriter) => {
                    return typewriter.typeString('WEB-SHOP')
                    .pauseFor(3000)
                    .deleteAll()
                    .start()
                  }}
              />
            </h2>
        </div>
    </div>
  )
} 

export default Landing
