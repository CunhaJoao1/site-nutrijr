import React from 'react'
import logo from "../../assets/logo01.png"
import Hamburger from 'hamburger-react'

export function Header() {
  return (
    <header className='fixed w-full z-10'>
      <div className='flex items-center justify-between mx-5 mt-14'>
        <img src={logo} alt="" className='w-28 cursor-pointer'/>
        <div><Hamburger color='#2e612f'/></div>
      </div>
      
    </header>
  )
}
