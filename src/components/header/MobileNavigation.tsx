import React from 'react'


type mobileProps ={
    isOpenMenu:boolean;
}
export function MobileNavigation(props: mobileProps) {
  return (
    <nav className={`absolute w-full h-screen bg-[#F0E9E9] inset-0 ${props.isOpenMenu? 'transalte-x-0': 'translate-x-full'} ease-in-out duration-300`}>
        <ul className='items-center grid text-center mt-40 gap-5 mx-10 divide-solid divide-y divide-y-reverse divide-gray-400'>
            <li></li>
            <li className='p-2 text-brand-h2'>INÍCIO</li>
            <li className='p-2'>A EMPRESA</li>
            <li className='p-2'>SERVIÇOS</li>
            <li className='p-2'>NOTÍCIAS E ATUALIZAÇÕES</li>
            <li className='p-2'>CONTATO</li>
        </ul>
    </nav>
  )
}
