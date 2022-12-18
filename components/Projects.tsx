import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function Projects({ }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex oveflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
          <motion.img 
            initial={{
              y: -300,
              opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png" alt="" />
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#f7ab0a]/50'>Case Study 1 of 3:</span> Netflix Clone
            </h4>

            <div className='flex justify-center items-center'>
              <img className='w-[40px] h-[40px] ml-[8px]' src="https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png" alt="" />
              <img className='w-[40px] h-[40px] ml-[8px]' src="https://cdn.sanity.io/images/ltuexkre/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png" alt="" />
            </div>

            <p className='text-lg text-center md:text-left'>
              Netflix 2.0 app that has a Log In and Log Out Authentication with Google. It has a beautiful Home Screen with all the movies looking just like Netflix. There is also a subscription page where you can see your active monthly subscription. We also use Stripe Payments for the monthly Netflix Subscriptions!
            </p>
          </div>
        </div>
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
          <motion.img 
            initial={{
              y: -300,
              opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://cdn.sanity.io/images/ltuexkre/production/7dbf115f800ec6f566dd7177728ebe22f861ccaf-666x375.png" alt="" />
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#f7ab0a]/50'>Case Study 2 of 3:</span> Restaurant Menu
            </h4>

            <div className='flex justify-center items-center'>
              <img className='w-[40px] h-[40px] ml-[8px]' src="https://cdn.sanity.io/images/ltuexkre/production/3b6be32275d8b7ff5fb3b20275fd3e0f35a27609-600x315.png" alt="" />
              <img className='w-[40px] h-[40px] ml-[8px]' src="https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png" alt="" />
              <img className='w-[40px] h-[40px] ml-[8px]' src="https://cdn.sanity.io/images/ltuexkre/production/6077d4327de2a7b28008b4235fa6c6dd5d381e7e-500x500.png" alt="" />
              <img className='w-[40px] h-[40px] ml-[8px]' src="https://cdn.sanity.io/images/ltuexkre/production/28cdc2c56750f218336fa8f3a528b5c6935c8f43-500x500.png" alt="" />
              <img className='w-[40px] h-[40px] ml-[8px]' src="https://cdn.sanity.io/images/ltuexkre/production/df2fb90aec55dc3d8df7544efeb4a476508b0029-500x500.png" alt="" />
              <img className='w-[40px] h-[40px] ml-[8px]' src="https://cdn.sanity.io/images/ltuexkre/production/4d05ea180968c83605afe80a2617de5fb71744e2-500x500.png" alt="" />
            </div>

            <p className='text-lg text-center md:text-left'>
              This is a beautiful restaurant menu template that contains an artistic design. The hero page consists of a beautiful demo of the restaurant along with its various cuisine items. We have the menu in the next section along with a nv bar that helps navigate the webpage with ease. This template makes for an amazing UI / UX experience for the user who is ordering food!
            </p>
          </div>
        </div>
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
          <motion.img 
            initial={{
              y: -300,
              opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://cdn.sanity.io/images/ltuexkre/production/12a197bf792bfdd9bc77af33ec4157538a83a1a7-666x375.png" alt="" />
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#f7ab0a]/50'>Case Study 3 of 3:</span> Google Clone
            </h4>

            <div className='flex justify-center items-center'>
              <img className='w-[40px] h-[40px] ml-[8px]' src="https://cdn.sanity.io/images/ltuexkre/production/19a30950e8bb4ce1c2155bde79a02626202b173c-500x500.png" alt="" />
              <img className='w-[40px] h-[40px] ml-[8px]' src="https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png" alt="" />
              <img className='w-[40px] h-[40px] ml-[8px]' src="https://cdn.sanity.io/images/ltuexkre/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png" alt="" />
              <img className='w-[40px] h-[40px] ml-[8px]' src="https://cdn.sanity.io/images/ltuexkre/production/5ca925937ccd56e069dd6f7cf8c5c7853542603f-500x500.png" alt="" />
              <img className='w-[40px] h-[40px] ml-[8px]' src="https://cdn.sanity.io/images/ltuexkre/production/28cdc2c56750f218336fa8f3a528b5c6935c8f43-500x500.png" alt="" />
              <img className='w-[40px] h-[40px] ml-[8px]' src="https://cdn.sanity.io/images/ltuexkre/production/da55259f760c8c5606b1cab6e6a9f61bbc60bf0d-500x500.png" alt="" />
            </div>

            <p className='text-lg text-center md:text-left'>
              Yes, this is a Google clone and not the real Google webpage. You can search and find several results in milliseconds with this clone. It is faster than Google itself as this clone uses Next.js with Server Side Rendering!
            </p>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects