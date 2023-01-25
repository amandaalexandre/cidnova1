import React from 'react'
/* import Jogadores from '../assets/images/card_01.png'
import Diretoria from '../assets/images/card_02.png' */
import '../assets/styles/Equipe.css'
import { Link } from 'react-router-dom'

function Equipe() {
  return (
    <section className='Equipe'>
      <Link to="/jogadores">
        <div className='equipe__card equipe__jogadores'>
          <h3 className='equipe__titulo'>&nbsp; JOGADORES &nbsp;</h3>
          {/* <img src={Jogadores} className='equipe__imagem' alt="" /> */}
        </div>
      </Link>
      
      <Link to="/diretoria">
        <div className='equipe__card equipe__diretoria'>
      {/*     <img src={Diretoria} className='equipe__imagem' alt="" /> */}
          <h3 className='equipe__titulo'>&nbsp; DIRETORIA &nbsp;</h3>
        </div>
      </Link>
    </section>
  )
}

export default Equipe