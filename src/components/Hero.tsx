import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgrohundCircles from './BackgrohundCircles'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Oi, eu sou  JHONATTAN '],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgrohundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://meu-portifolio-jhonattan-ferri.netlify.app/assets/img/Minhafoto.jpg"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Desenvolvedor Full-Stack
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">Sobre mim</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Habilidades</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projetos</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
