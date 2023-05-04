import React from 'react'
import { motion } from 'framer-motion'
import { GrReactjs } from 'react-icons/gr'
import { SiStyledcomponents, SiTypescript, SiVite } from 'react-icons/si'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center
     bg-[#292929] p-10 hover:opacity-100 opacity-40cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://github.com/BrunoBecoski/Ignite-ReactJS-02-Ignite-Timer/raw/main/.github/capa.png"
        alt="Foto do projeto"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Ignite Timer</h4>
        <p className="font-bold text-2xl mt-1">bla bla bla </p>
        <div className="flex space-x-2 my-2">
          <GrReactjs className="h-10 w-10 rounded-full" />
          <SiVite className="h-10 w-10 rounded-full" />
          <SiTypescript className="h-10 w-10 rounded-full" />
          <SiStyledcomponents className="h-10 w-10 rounded-full" />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work.... - Ended....
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab repellendus iste voluptatem pariatur reiciendis, repellat, itaque explicabo atque iure ad soluta aliquam eaque ipsum accusantium quis? Sint ratione consequatur officia!</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi deserunt error explicabo mollitia, laborum a? Atque sed non ullam et? Id vitae voluptatibus mollitia incidunt maiores eveniet eum deserunt minima. </li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, architecto sint officiis repellat, qui fugiat itaque reprehenderit quo quos suscipit, excepturi id provident possimus officia quibusdam veniam facere dolore! Quam.</li>
        </ul>
      </div>
    </article>
  )
}
