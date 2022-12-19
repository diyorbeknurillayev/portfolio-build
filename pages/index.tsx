import type { NextPage } from 'next';
import Head from 'next/head'
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero'
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] h-[100%] text-white snap-y snap-mandatory z-0 overflow-x-hidden">
      <Head>
        <title>Diyorbekk Nurllayev - Portfolio</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>
    </div>
  )
}
