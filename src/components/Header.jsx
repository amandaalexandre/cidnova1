import React from 'react'
import '../assets/styles/Header.css'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className='header__title'>
        <img src={Logo} className='header__logo' />
        <h2 className='header__nome'>NOVA CIDADE</h2>
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

    <div class="lg:hidden flex items-center">
      <button class="outline-none mobile-menu-button">
        <svg
          class="w-6 h-6 text-white"
          x-show="!showMenu"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    </header>
  )
}

export default Header