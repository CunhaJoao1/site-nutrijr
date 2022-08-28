import React, { useState } from 'react'
import logo from "../../assets/logo01.png"
import Hamburger from 'hamburger-react'
import { MobileNavigation } from './MobileNavigation'
import useWindowDimensions from '../../lib/WindowsDimentions'




export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const {height, width} = useWindowDimensions()

  return (
    <header className='fixed w-full z-10  lg:px-[10%] 2xl:px-[20%]'>
      <div className='flex items-center justify-between mx-5 mt-8'>
        <img src={logo} alt="" className='w-28 cursor-pointer'/>


        { //cria uma condicional onde se a tela for menor que 768px renderiza o hamburger menu
          width < 768?
            <div className='absolute z-20 right-5' onClick={()=>setIsOpen(!isOpen)}><Hamburger color='#2e612f'/></div>
            : null
        }

        {
          isOpen? <MobileNavigation isOpenMenu={isOpen}/> : null
        }
      </div>
      
    </header>
  )
}
