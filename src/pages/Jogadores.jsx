import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Jogadores.css'
import jogador1 from '../assets/images/jogador1.jpg'
import jogador2 from '../assets/images/jogador2.jpg'
import jogador3 from '../assets/images/jogador3.jpg'
import jogador4 from '../assets/images/jogador4.jpg'
import jogador5 from '../assets/images/riam-meia-sub-17.jpg'

function Jogadores() {
  return (
    <main className='jogadores'>
      <h1>JOGADORES</h1>
      
      <div className='grid grid-cols-2 grid-flow-row my-3'>
        <img src={jogador1} className='w-auto p-3' />
        <img src={jogador2} className='w-auto p-3' />
        <img src={jogador3} className='w-auto p-3' />
        <img src={jogador4} className='w-auto p-3' />
        <div>
        <img src={jogador5} className='w-auto p-3' />
        Riam<br/>
        17 anos
        </div>
      </div>
      
      <h2>Quer se juntar ao nosso time? <Link to="/contato">FALE COM A GENTE.</Link></h2>
      </main>
  )
}

export default Jogadores