import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex relative flex-col text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-6 md:top-36 xl:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.2,
                }}
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
                src="https://cdn.sanity.io/images/ltuexkre/production/ac8058b25cc880765f6549dd27223349f37a7c2f-1173x1458.jpg"
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#f7ab0a]'>little</span> background </h4>
                <p className='text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illum, earum expedita similique perferendis recusandae mollitia sequi placeat quibusdam corporis quos autem voluptatem, aliquid tempore, obcaecati optio labore magni ab sed tenetur! Aut voluptatem nam voluptate praesentium inventore ad iusto officiis impedit modi nesciunt iste accusamus adipisci, hic unde vero reprehenderit omnis dolor provident dolorem pariatur recusandae eum non error distinctio. In qui iste assumenda, velit voluptate delectus ducimus natus placeat adipisci, vel numquam quas autem fugiat maiores, eum illum quia incidunt totam aliquam aperiam? Officiis repellendus asperiores in a ut sunt at, doloremque itaque reiciendis rem praesentium sint vitae blanditiis earum quasi est, numquam ipsum, architecto optio. Maiores totam ipsa quas repudiandae dolores sit omnis? Nisi, eligendi doloribus cum nam quos labore cumque ducimus soluta suscipit, veritatis, quaerat architecto.
                </p>
            </div>
        </motion.div>
    )
}