import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Sobre Mim
      </h3>

      <div className="space-y-10 px-0 md:px-10">
        <p className="text-base md:px-10 ">
          {' '}
          Olá, meu nome é <strong>Jhonattan Ferri</strong> e sou apaixonado por
          tecnologia. Meu primeiro contato com a programação foi em 2021, quando
          ainda não sabia o que queria fazer, mas gostei da área. Só comecei a
          dar foco em 2022, quando um parente meu que estudava muito e depois
          começou a trabalhar como programador, me apresentou o{' '}
          <strong>Desenvolvimento de software</strong>.
        </p>
        <p className="text-base md:px-10">
          {' '}
          Hoje já entendo de tecnologias voltadas para o{' '}
          <strong>Front-End</strong> e <strong>Back-End</strong>, além de gostar
          de "brincar" com outros projetos, refazendo-os do meu jeito e
          entendendo melhor o que estou aprendendo com eles.
        </p>
        <p className="text-base md:px-10">
          {' '}
          Tenho experiência com <strong>ReactJS</strong> e{' '}
          <strong>NextJS</strong> para construção de interfaces de usuário
          modernas e dinâmicas.
        </p>
        <p className="text-base md:px-10">
          {' '}
          Também tenho conhecimentos em <strong>NodeJS</strong> para criação de
          aplicativos do lado do servidor e integração de sistemas. Além disso,
          sou familiarizado com o uso do <strong>Docker</strong> para criação e
          gerenciamento de contêineres. Estou entusiasmado em aplicar essas
          habilidades em um ambiente profissional e continuar aprendendo e me
          desenvolvendo na área.
        </p>
      </div>
    </motion.div>
  )
}
