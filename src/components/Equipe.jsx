import React from 'react'
import Jogadores from '../assets/images/jogadores.png'
import Diretoria from '../assets/images/honorato-presidente.png'
import '../assets/styles/Equipe.css'

function Equipe() {
  return (
    <section className='Equipe'>
      <div className='equipe__card equipe__jogadores'>
        <h3>JOGADORES</h3>
        <img src={Jogadores} className='equipe__imagem' alt="" />
      </div>
      
      <div className='equipe__card equipe__diretoria'>
        <img src={Diretoria} className='equipe__imagem' alt="" />
        <h3>DIRETORIA</h3>
      </div>
    </section>
  )
}

export default Equipe