import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

function Contact({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:dnurullayev99@gmai?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

    return (
        <div className='relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 tracking-[20px] uppercase text-2xl text-gray-500'>Contact</h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what you need.{" "}
                    <span className='underline decoration-[#f7ab0a]/50'>Lets Talk.</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='h-6 w-6 animate-pulse text-[#f7ab0a]' />
                        <p className='text-2xl'>+999 (99) 999-99-99</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='h-6 w-6 animate-pulse text-[#f7ab0a]' />
                        <p className='text-2xl'>dnurullayev99@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='h-6 w-6 animate-pulse text-[#f7ab0a]' />
                        <p className='text-2xl'>123 Developer Lane</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>

                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button type='submit' className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
