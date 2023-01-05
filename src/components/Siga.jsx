import React from 'react'
import '../assets/styles/Siga.css'
import Logo from '../assets/images/logo.png'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'

function Siga() {
  return (
    <section className='Siga'>
      <div className='siga__grid'>
        
        <div className='siga__endereco'>
          <h2>ENDEREÇO</h2>
          <p>
          Residencial Vitória São Luís - Estrada de Ribamar, S/N, Km. 03. Bloco. B10B. AP. 37. Cep:65.054-005 - São Luís-MA. 
          </p>

          <p>Telefone: (98) 98202-9185</p>
        </div>

        <img src={Logo} className="siga__logo" />

        <div className='siga__redes'>
          <h2>REDES SOCIAIS</h2>
          <br/>
          <span className='siga__botoes'>
            <a href="#"><FaFacebookF className='siga__botoes_redes'/></a>
            <a href="#"><FaInstagram className='siga__botoes_redes'/></a>
          </span>
          
        </div>
      </div>
    </section>
  )
}

export default Siga