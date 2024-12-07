import React from 'react'
import '../app/globals.css';
import { SafariDemo } from './magicui/safari';
import Link from 'next/link';
import { MeteorDemo } from './magicui/meteors';
import { Spotlight } from './ui/spotlight';
import { TypewriterEffectSmoothDemo } from './magicui/TypeWriter';


const Hero = () => {
  return (
    <div id='hero' className="md:min-h-screen h-screen w-full px-4 md:px-16 lg:px-72 py-10 md:py-44 ">
      <div className=''>
      <Spotlight className='top-16  left-10 md:left-32 md:top-20 h-screen' fill="white"/>
      </div>
      <div className="flex items-start justify-start">
        <MeteorDemo />
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center md:gap-10 sm:py-4 items-center mt-8 md:mt-0">
        <div className="text-center md:text-left md:px-4 md:w-1/2">
          <div className='className="text-sm px-2 sm:px-0 font-normal text-white dark:text-white'
          >I'm a 21-year-old BCS student and aspiring full-stack developer. I’m skilled in React, Node.js, and the MERN stack, with a passion for building creative and efficient applications. Currently, I’m focused on honing my development skills and exploring new skills."
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <img
            className="rounded-full h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44 object-cover"
            src="https://i.pinimg.com/736x/d2/f2/08/d2f2086efdf6950a384bbf40c152992f.jpg"
            alt="profile_pic"
          />
        </div>
      </div>

      <div>
          <TypewriterEffectSmoothDemo/>
      </div>
     
      {/* <div className='py-32 flex items-center justify-center'>
        <Link href="https://bento.me/karan-dev"><SafariDemo/></Link>
      </div> */}
      
    </div>

  )
}

export default Hero