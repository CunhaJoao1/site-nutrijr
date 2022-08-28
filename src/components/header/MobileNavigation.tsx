import React from 'react'

export function MobileNavigation() {
  return (
    <nav className='absolute w-full h-screen bg-[#F0E9E9] inset-0'>
        <ul className='items-center flex flex-col mt-40 gap-5'>
            <li>INÍCIO</li>
            <li>A EMPRESA</li>
            <li>SERVIÇOS</li>
            <li>NOTÍCIAS E ATUALIZAÇÕES</li>
            <li>CONTATO</li>
        </ul>
    </nav>
  )
}
