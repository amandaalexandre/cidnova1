import React from 'react'
import '../assets/styles/Header.css'
import { useState } from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

function Header() {
  const [isMobileShowing, setIsMobileShowing] = useState(false);
 
  return (
    <div>
    <header>
      <div className='header__title'>
      <Link to="/"><img src={Logo} className='header__logo' /></Link>
        <h2 className='header__nome'><Link to="/">NOVA CIDADE</Link></h2>
      </div>
      
      <nav className='max-lg:hidden'>
        <ul className='header__menu'>
          
          <li className='header__link'>
            <Link to="/">HOME</Link>
          </li>
          <li className='header__link'>
            <Link to="/jogadores">JOGADORES</Link>
          </li>
          <li className='header__link'>
            <Link to="/diretoria">DIRETORIA</Link>
          </li>
          <li className='header__link'>
            <Link to="/contato">CONTATO</Link>
          </li>
        </ul>
      </nav>

    <div className="lg:hidden flex items-center cursor-pointer">
      <FaBars onClick={() => setIsMobileShowing(!isMobileShowing)}/>
    </div>

    

    </header>

    {/* Mobile menu */}
    <div className={isMobileShowing ? "header__mobile" : "hidden"}>
      <ul>
        <li className="active">
        <Link to="/" className="block text-xl px-2 py-4 text-white bg-red-500 font-semibold">HOME</Link>
        </li>

        <li>
          <Link to="/jogadores" className="block text-xl px-2 py-4 hover:bg-red-500 transition duration-300">JOGADORES</Link>
          </li>
        <li>
        <Link to="/diretoria" className="block text-xl px-2 py-4 hover:bg-red-500 transition duration-300">DIRETORIA</Link>
          </li>
        <li>
        <Link to="/contato" className="block text-xl px-2 py-4 hover:bg-red-500 transition duration-300">CONTATO</Link>
          </li>
      </ul>
    </div>

    </div>
  )
}

export default Header