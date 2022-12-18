import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  directionleft?: boolean;
}

export default function Skills({ directionleft }: Props) {
  return <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

    <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency profieciency</h3>

    <div className='grid grid-cols-4 gap-5'>
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionleft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src='https://cdn.sanity.io/images/ltuexkre/production/6077d4327de2a7b28008b4235fa6c6dd5d381e7e-500x500.png'
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>10%</p>
          </div>
        </div>
      </div>
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionleft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src='https://cdn.sanity.io/images/ltuexkre/production/3b6be32275d8b7ff5fb3b20275fd3e0f35a27609-600x315.png'
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>15%</p>
          </div>
        </div>
      </div>
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionleft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://cdn.sanity.io/images/ltuexkre/production/26444e46fd9284f0920dc1352331cf8c5c3fd9a9-512x512.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>0%</p>
          </div>
        </div>
      </div>
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionleft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src='https://cdn.sanity.io/images/ltuexkre/production/c4f385a736afb18e7cb37277d966f5b0b89b7c77-506x470.png'
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>90%</p>
          </div>
        </div>
      </div>
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionleft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://cdn.sanity.io/images/ltuexkre/production/9c1587d869001b2a2e479b5fdf92a4c14d3cfd6f-500x500.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>30%</p>
          </div>
        </div>
      </div>
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionleft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src='https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png'
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>70%</p>
          </div>
        </div>
      </div>
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionleft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src='https://cdn.sanity.io/images/ltuexkre/production/5ca925937ccd56e069dd6f7cf8c5c7853542603f-500x500.png
            '
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>50%</p>
          </div>
        </div>
      </div>
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionleft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src='https://cdn.sanity.io/images/ltuexkre/production/1c91bdb96211632d51af6a853efceb3976785e3d-500x500.png
            '
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>60%</p>
          </div>
        </div>
      </div>
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionleft ? 200 : -200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://cdn.sanity.io/images/ltuexkre/production/28cdc2c56750f218336fa8f3a528b5c6935c8f43-500x500.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>80%</p>
          </div>
        </div>
      </div>
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionleft ? 200 : -200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>95%</p>
          </div>
        </div>
      </div>
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionleft ? 200 : -200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://cdn.sanity.io/images/ltuexkre/production/19c3754580996e50daf37261462d9f5c01795d54-1200x1200.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>40%</p>
          </div>
        </div>
      </div>
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionleft ? 200 : -200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://cdn.sanity.io/images/ltuexkre/production/df2fb90aec55dc3d8df7544efeb4a476508b0029-500x500.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>100%</p>
          </div>
        </div>
      </div>
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionleft ? 200 : -200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://cdn.sanity.io/images/ltuexkre/production/4d05ea180968c83605afe80a2617de5fb71744e2-500x500.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>95%</p>
          </div>
        </div>
      </div>
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionleft ? 200 : -200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src='https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png
            '
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>85%</p>
          </div>
        </div>
      </div>
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionleft ? 200 : -200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://cdn.sanity.io/images/ltuexkre/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>70%</p>
          </div>
        </div>
      </div>
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionleft ? 200 : -200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://cdn.sanity.io/images/ltuexkre/production/da55259f760c8c5606b1cab6e6a9f61bbc60bf0d-500x500.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>80%</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
}