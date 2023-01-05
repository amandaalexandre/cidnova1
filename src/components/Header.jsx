import React from 'react'
import '../assets/styles/Header.css'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className='header__title'>
        <img src={Logo} className='header__logo' />
        <h2>NOVA CIDADE</h2>
      </div>
      
      <nav >
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
    </header>
  )
}

export default Header