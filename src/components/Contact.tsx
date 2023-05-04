import React from 'react'
import {AiTwotoneMail} from 'react-icons/ai'
import {useForm, SubmitHandler} from 'react-hook-form'

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}

type Props = {}

export default function Contact({}: Props) {
        const {
            register, 
            handleSubmit,
        } = useForm<Inputs>();

        const obSubmit: SubmitHandler<Inputs> = (formData) => {
            window.location.href = `mailto:devferri22@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
        }
        return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contato
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                
            Qualquer duvida, ou dica pra me ajudar no codigo{" "}
                <span className='underline decoration-[#F7AB0A]/50'>Vamos conversar</span>
            </h4>


            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
               <AiTwotoneMail className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
               <p className='text-2xl'>devferri22@gmail.com</p>

                </div>
            </div>

            <form onSubmit={handleSubmit(obSubmit)} 
            className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2 '>
                    <input {...register('name')} placeholder='Nome' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type='email'/>
                </div>
                <input {...register('subject')} placeholder='Assunto'  className='contactInput' type="text" />

                <textarea {...register('message')} placeholder='Mensagem' className='contactInput'  />
                <button type='submit' 
                className='bg-[#F7AB0A] 
                py-5 px-10 rounded-md text-black font-bold text-lg'>
                    Submit
                </button>
            </form>
        </div>    
    </div>
  )
}
