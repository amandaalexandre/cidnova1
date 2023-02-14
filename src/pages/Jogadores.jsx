import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Jogadores.css'
import jogador1 from '../assets/images/jogador1.jpg'
import jogador2 from '../assets/images/jogador2.jpg'
import jogador3 from '../assets/images/jogador3.jpg'
import jogador4 from '../assets/images/jogador4.jpg'
import jogador5 from '../assets/images/jogador5.jpg'
import jogador6 from '../assets/images/jogador6.jpg'
import jogador7 from '../assets/images/jogador7.jpg'
import jogador8 from '../assets/images/jogador8.jpg'
import jogadores from '../assets/images/jogadores.jpg'

function Jogadores() {
  return (
    <main className='jogadores'>
      <h1>JOGADORES</h1>
      
      <div className='grid grid-cols-2 grid-flow-row my-3 max-lg:flex max-lg:flex-col'>
        <img src={jogador1} className='w-auto p-3' />
        <img src={jogador2} className='w-auto p-3' />
        <img src={jogador3} className='w-auto p-3' />
        <img src={jogador4} className='w-auto p-3' />

        <div>
        <img src={jogador5} className='w-full p-3' />
        Riam<br/>
        17 anos
        </div>
        <img src={jogador6} className='w-auto p-3' />
        <img src={jogador7} className='w-auto p-3' />
        <img src={jogador8} className='w-auto p-3' />
        <img src={jogadores} className='w-auto p-3' />
      </div>
      
      <h3>Quer se juntar ao nosso time? <Link to="/contato">FALE COM A GENTE.</Link></h3>
      </main>
  )
}

export default Jogadores