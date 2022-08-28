import React, { useState } from 'react'
import logo from "../../assets/logo01.png"
import Hamburger from 'hamburger-react'
import { MobileNavigation } from './MobileNavigation'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='fixed w-full z-10'>
      <div className='flex items-center justify-between mx-5 mt-14'>
        <img src={logo} alt="" className='w-28 cursor-pointer'/>
        <div className='absolute z-20 right-5' onClick={()=>setIsOpen(!isOpen)}><Hamburger color='#2e612f'/></div>
        {
          isOpen? <MobileNavigation/> : null
        }
      </div>
      
    </header>
  )
}
