import { motion } from 'framer-motion'
import React from 'react'
import Skill1 from './skill/Skill1'
import Skill2 from './skill/Skill2'
import Skill4 from './skill/Skill4'
import Skill6 from './skill/Skill6'
import Skill7 from './skill/Skill7'
import Skill8 from './skill/Skill8'
import Skill9 from './skill/Skill9'
import Skill10 from './skill/Skill10'
import Skill11 from './skill/Skill11'


type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
    initial={{
      opacity: 0
    }}
    whileInView={{
      opacity: 1
    }}
    transition={{
      duration: 1.5
    }}
    className=' flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>Skills</h3>

    <h3 className='absolute top-36 uppercase tracking-[3px]'>Hover over a skill for currency profieciency</h3>

    <div className='grid grid-cols-3 gap-5 '>
        <Skill1 />
        <Skill2 />
        <Skill4 />
        <Skill6 />
        <Skill7 />
        <Skill8 />
        <Skill9 />
        <Skill10 />
        <Skill11 />
    </div>
    </motion.div>
  )
}