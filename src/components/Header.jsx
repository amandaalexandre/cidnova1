import React from 'react'
import '../assets/styles/Header.css'
import Logo from '../assets/images/logo.png'

function Header() {
  return (
    <header>
      <div className='header__logo'>
        <img src={Logo} width='128px' />
        <h2>CIDADE NOVA</h2>
      </div>
      
      <div className='header__menu'>
        HOME
        JOGADORES
        DIRETORIA
        CONTATO
      </div>
    </header>
  )
}

export default Header