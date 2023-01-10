import React from 'react'
import { diretoria } from './diretoria'
import '../assets/styles/Diretoria.css'
import DiretoriaCard from '../components/DiretoriaCard'

function Diretoria() {
  const membros = diretoria.map((membro) => {
      return <DiretoriaCard key={membro.id} {...membro} />
    })
  

  return (
    <main className='diretoria'>
      <h1>DIRETORIA</h1>

      <div className='diretoria__grid'>
      {membros}
      </div>

    </main>
  )
}

export default Diretoria