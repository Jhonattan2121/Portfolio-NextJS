import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

const Projects = (props: Props) => {
  const projects = [1,2,3,4,5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projetos</h3>

       <div className='relative w-full flex overflow-x-scroll overflow-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, i) => {
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
            className='w-screen flex-shrink-0 snap-center flex flex-col 
            space-y-5 items-center justify-center p-20 md:p-44 h-screen'>

              <motion.img 
              initial={{
                y: -300,
                opacity: 0
              }}
              transition={{
                duration: 1.2
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              src="data:image/png;base64,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" alt="" />
              
              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>Projeto Ignite Timer {i + 1} of {projects.length}</span>
              </h4>
              <p className='text-lg text-center md:text-left'>O Ignite Timer nada mais é que um projeto que 
              permite ao usuário cronometrar as suas tarefas no dia a dia, além de le permite 
              ver um histórico de todos as tarefas já realizadas.
              </p>
              </div>
            </motion.div>
          )
        })}
       </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'
      >

      </div>
    </div>
  )
}

export default Projects