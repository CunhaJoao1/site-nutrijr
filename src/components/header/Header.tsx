import React, { useState } from 'react'
import logo from "../../assets/logo02.png"
import Hamburger from 'hamburger-react'
import { MobileNavigation } from './MobileNavigation'
import useWindowDimensions from '../../lib/WindowsDimentions'
import { DescktopNavigarion } from './DescktopNavigarion'




export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const {height, width} = useWindowDimensions()

  return (
    <header className={`absolute w-full z-10  lg:px-[15%]`}>
      <div className='flex items-center justify-between mx-5 mt-2'>
        <img src={logo} alt="" className='w-28 cursor-pointer'/>


        { //cria uma condicional onde se a tela for menor que 768px renderiza o hamburger menu
          width < 768?
            <div className='absolute z-20 right-5' onClick={()=>setIsOpen(!isOpen)}><Hamburger color='#2e612f'/></div>
            : <DescktopNavigarion/>
        }

        {
          isOpen? <MobileNavigation isOpenMenu={isOpen}/> : null
        }
      </div>
      
    </header>
  )
}
