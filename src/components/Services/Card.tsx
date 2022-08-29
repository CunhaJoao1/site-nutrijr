import React from 'react'

export function Card() {
  return (
    <div className='flex flex-col items-center min-h-[30rem] max-w-72 w-full bg-[#14161B]  lg:max-w-[15rem]'>
        <h3 className='text-white text-2xl mt-32'>Ficha técnica</h3>
        <p className='text-center text-white mt-8 line-clamp-6 px-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed repudiandae magnam iusto fugiat dolores, debitis eveniet iste consectetur optio molestias hic, ut provident ad obcaecati blanditiis amet dignissimos! Eveniet, explicabo.</p>
        <button className='font-base bg-brand-h2 py-2 px-8 mt-2 text-white'> SAIBA MAIS</button>
    </div>
  )
}
