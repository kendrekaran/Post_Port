"use client"
import React from 'react'
import { GlareCardDemo } from './magicui/Cards'
import { motion } from 'framer-motion'


const Plans = () => {
  return (
    <div className="h-full py-20 xl:h-screen w-full flex-col items-center justify-center md:justify-between px-6 md:px-20 gap-6 overflow-hidden">
      <motion.h2
          className="text-4xl px-10 pb-10 sm:pb-0 sm:pt-14 lg:text-7xl font-bold  text-center bg-gradient-to-r from-[#f1f5f966] via-[#f1f5f9] via-51% to-[#f1f5f966] text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Pricing <span className="text-blue-500">Plans</span>
        </motion.h2>
      < GlareCardDemo/>
    </div>
  
  )
}

export default Plans
