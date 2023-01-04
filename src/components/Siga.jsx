import React from 'react'
import '../assets/styles/Siga.css'
import Logo from '../assets/images/logo.png'

function Siga() {
  return (
    <section className='Siga'>
      <h2>Siga-nos</h2>
      <div className='siga__grid'>
        <div className='siga__form'>
          Nome:
          <input type="text" className='siga__input' />
          <br/>
          E-mail:
          <input type="text" className='siga__input' />
          <br/>
          Mensagem:
          <textarea className='siga__input' />
          <br/>
          <div className='siga__botoes'>
            <button className='siga__botao'>ENVIAR</button>
            <button className='siga__botao'>LIMPAR</button>
          </div>
          
        </div>

        <img src={Logo} className="siga__logo" />

      </div>
    </section>
  )
}

export default Siga