import React from 'react'
import aboutImage from "../../assets/about.jpg"

export function About() {
  return (
    <section className='mt-8 flex justify-center flex-col items-center md:flex-row'>
        <div className='min-w-72 mx-3 max-w-[50rem]'>
            <img src={aboutImage} alt="imagem de pessoas olhando para a tela de um notebook e rindo" 
            className='w-full'
            />
        </div>
        <div className='min-w-64 max-w-xl border-8 border-lime-900  p-4 m-4  lg:p-12'>
            <h3 className='font-medium font-title text-xl max-w-[15rem] mb-4 lg:text-3xl lg:max-w-[20rem] '>
            Uma empresa especializada em renovar o seu negócio
            </h3>
            <p className='text-left text-brand-text'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis perferendis atque reiciendis natus recusandae praesentium suscipit nisi quod iure repellendus. Quaerat harum ut ipsa molestias ratione magni commodi nemo numquam?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quae corrupti laborum quia fugit fuga! Accusantium molestias nemo, saepe vitae id consectetur dignissimos magnam labore iste quae aut corporis a.
            </p>
        </div>
    </section>
  )
}
