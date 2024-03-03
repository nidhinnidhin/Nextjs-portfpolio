import React from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion'

type Props = {}

function Skills({}: Props) {
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
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute top-16 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>
        <div className="flex justify-start">
            <Skill />
        </div>
    </motion.div>
  )
}

export default Skills