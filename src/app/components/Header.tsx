import { useEffect,  useRef, useState } from "react"
import { useScreenScroll } from "../hooks/useScreenScroll"
import { Logo } from "./Logo"
import { MenuButton } from "./MenuButton";

export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <header className="p-10 flex justify-between items-center">
      <Logo />

      <MenuButton 
        isOpened={isMenuOpened}
        onClick={() => setIsMenuOpened(prev => !prev)}
      />

      <nav className='md:block hidden'>
        <ul className='flex gap-4 text-lg'>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Sobre</a></li>  
        </ul>
      </nav>
    </header>
  )
}