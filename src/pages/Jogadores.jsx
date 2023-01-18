import React from 'react'
import '../assets/styles/Jogadores.css'
import jogador1 from '../assets/images/jogador1.jpg'
import jogador2 from '../assets/images/jogador2.jpg'
import jogador3 from '../assets/images/jogador3.jpg'
import jogador4 from '../assets/images/jogador4.jpg'

function Jogadores() {
  return (
    <main className='jogadores'>
      <h1>JOGADORES</h1>
      
      <div className='grid grid-cols-2 grid-flow-row'>
        <img src={jogador1} className='w-auto p-3' />
        <img src={jogador2} className='w-auto p-3' />
        <img src={jogador3} className='w-auto p-3' />
        <img src={jogador4} className='w-auto p-3' />
      </div>
      
      </main>
  )
}

export default Jogadores