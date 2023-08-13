import { useEffect,  useRef, useState } from "react"
import { useScreenScroll } from "../hooks/useScreenScroll"
import { Logo } from "./Logo"

export const Header = () => {
  return (
    <header className="p-5 flex justify-between items-center">
      <Logo />
      <nav className=''>
        <ul className='flex gap-4 text-lg'>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Sobre</a></li>  
        </ul>
      </nav>
    </header>
  )
}