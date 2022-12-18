import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function WorkExperience({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

      <div className='w-full flex space-x-5 p-10 snap-x snap-mandatory overflow-x-scroll'>
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src="https://cdn.sanity.io/images/ltuexkre/production/050ee674d199aa8d254af2b5ea480d3dc320cbb1-1240x1440.png" alt="" />

          <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of PAPAFAM</h4>
            <p className='font-bold text-2xl mt-1'>PAPAFAM</p>
            <div className='flex space-x-2 my-2'>
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/5ca925937ccd56e069dd6f7cf8c5c7853542603f-500x500.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/da55259f760c8c5606b1cab6e6a9f61bbc60bf0d-500x500.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/c4f385a736afb18e7cb37277d966f5b0b89b7c77-506x470.png" alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>

            <ul className='list-disc space-y-5 ml-5 text-lg'>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
            </ul>
          </div>
        </article>
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src="https://cdn.sanity.io/images/ltuexkre/production/9498d51c38123b1af0bdf52739ed7e4afe287244-3083x3222.jpg" alt="" />

          <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of PAPAFAM</h4>
            <p className='font-bold text-2xl mt-1'>PAPAFAM</p>
            <div className='flex space-x-2 my-2'>
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/da55259f760c8c5606b1cab6e6a9f61bbc60bf0d-500x500.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/6077d4327de2a7b28008b4235fa6c6dd5d381e7e-500x500.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/c4f385a736afb18e7cb37277d966f5b0b89b7c77-506x470.png" alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>

            <ul className='list-disc space-y-5 ml-5 text-lg'>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
            </ul>
          </div>
        </article>
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src="https://cdn.sanity.io/images/ltuexkre/production/eb88fe060dcfb376d2c47c810889da93c62b1bf2-800x800.png" alt="" />

          <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of PAPAFAM</h4>
            <p className='font-bold text-2xl mt-1'>PAPAFAM</p>
            <div className='flex space-x-2 my-2'>
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/df2fb90aec55dc3d8df7544efeb4a476508b0029-500x500.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/df2fb90aec55dc3d8df7544efeb4a476508b0029-500x500.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/19a30950e8bb4ce1c2155bde79a02626202b173c-500x500.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png" alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>

            <ul className='list-disc space-y-5 ml-5 text-lg'>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
            </ul>
          </div>
        </article>
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src="https://cdn.sanity.io/images/ltuexkre/production/3dd89cb2c4a16e85f5960e22a96261427d37da99-991x1801.png" alt="" />

          <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of PAPAFAM</h4>
            <p className='font-bold text-2xl mt-1'>PAPAFAM</p>
            <div className='flex space-x-2 my-2'>
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/1c91bdb96211632d51af6a853efceb3976785e3d-500x500.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/28cdc2c56750f218336fa8f3a528b5c6935c8f43-500x500.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/26444e46fd9284f0920dc1352331cf8c5c3fd9a9-512x512.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/9c1587d869001b2a2e479b5fdf92a4c14d3cfd6f-500x500.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/19c3754580996e50daf37261462d9f5c01795d54-1200x1200.png" alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>

            <ul className='list-disc space-y-5 ml-5 text-lg'>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
            </ul>
          </div>
        </article>
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src="https://cdn.sanity.io/images/ltuexkre/production/90b42ec9f4f479773ffa7fdb808a3f83135db88f-1080x1080.png" alt="" />

          <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of PAPAFAM</h4>
            <p className='font-bold text-2xl mt-1'>PAPAFAM</p>
            <div className='flex space-x-2 my-2'>
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/6077d4327de2a7b28008b4235fa6c6dd5d381e7e-500x500.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/9c1587d869001b2a2e479b5fdf92a4c14d3cfd6f-500x500.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/1c91bdb96211632d51af6a853efceb3976785e3d-500x500.png" alt="" />
              <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/5ca925937ccd56e069dd6f7cf8c5c7853542603f-500x500.png" alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>

            <ul className='list-disc space-y-5 ml-5 text-lg'>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
              <li>Sumary points Sumary points Sumary points Sumary points Sumary points </li>
            </ul>
          </div>
        </article>
      </div>
    </motion.div>
  )
}