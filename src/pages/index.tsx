import type { NextPage } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>Meu Portifolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

     
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      <section id='contact' className='snap-center'>
        <Contact />
      </section>
    </div>
  )
}

export default Home
