import React from 'react'

type CardProps = {
  Title: string,
  Description: string,
  Image?: Node, 
}

export function Card(props: CardProps) {
  return (
    <div className='flex flex-col items-center min-h-[30rem] max-w-72 w-full bg-[#14161B]  lg:max-w-[15rem]'>
        <h3 className='text-white text-2xl mt-32 text-center'>{props.Title}</h3>
        <p className='text-center text-white mt-8 line-clamp-6 px-10'>{props.Description}</p>
        <button className='font-base bg-brand-h2 py-2 px-8 mt-2 text-white'> SAIBA MAIS</button>
    </div>
  )
}
