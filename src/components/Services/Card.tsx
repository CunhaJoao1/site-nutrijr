import React from 'react'

type CardProps = {
  Title: string,
  Description: string,
  Image?: string, 
  color: string,
}

export function Card(props: CardProps) {
  return (
    <div className={`flex flex-col items-center min-h-[30rem] max-w-72 w-full lg:max-w-[15rem]`} style={{backgroundColor: props.color}}>
        <img src={`${props.Image}`} alt="" className='mt-10 mb-10'/>
        <h3 className='text-white text-2xl text-center'>{props.Title}</h3>
        <p className='text-center text-white mt-8 line-clamp-6 px-10'>{props.Description}</p>
        <button className='font-base bg-brand-h2 py-2 px-8 mt-2 text-white'> SAIBA MAIS</button>
    </div>
  )
}
