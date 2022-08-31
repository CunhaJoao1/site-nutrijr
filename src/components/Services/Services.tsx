import React from 'react'
import { Card } from './Card'
//CRIAR OBJETO DE AREAS
export function Services() {
  return (
    <section className='flex flex-col items-center bg-[#B1D7B4] py-8 px-8 mt-10 absolute w-full 2xl:h-96'>
        <h2 className='text-3xl  border-b-4 mb-20 border-brand-h2'>SERVIÇOS</h2>
        <div>
          <div className=' grid gap-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 2xl:relative '>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>        
        </div>
        
    </section>
  )
}
