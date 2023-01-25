import React from 'react'
import '../assets/styles/Siga.css'
import Logo from '../assets/images/logo.png'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'

function Siga() {
  return (
    <section className='Siga'>
      <h1>SIGA-NOS</h1>
      <br/>
      <div className='siga__grid flex flex-row  max-md:flex-col gap-2 max-md: gap-4'>
        
        <div className='siga__endereco basis-1/3 grow text-left max-md:text-center'>
          <h2>ENDEREÇO</h2>
          <p>
          Residencial Vitória São Luís - Estrada de Ribamar, S/N, Km. 03. Bloco. B10B. AP. 37. Cep:65.054-005 - São Luís-MA. 
          </p>

          <p>Telefone: (98) 98202-9185</p>
        </div>

        <img src={Logo} className="siga__logo basis-1/3 place-self-center" />

        <div className='siga__redes basis-1/3 grow text-right max-md:text-center'>
          <h2>REDES SOCIAIS</h2>
          <br/>
          <span className='siga__botoes max-md:justify-center'>
            <a href="https://www.facebook.com/novacidadeslz"><FaFacebookF className='siga__botoes_redes'/></a>
            <a href="https://www.instagram.com/novacidadeslz/"><FaInstagram className='siga__botoes_redes'/></a>
          </span>
          
        </div>
      </div>
    </section>
  )
}

export default Siga