import React from 'react'
import Equipe from '../components/Equipe'
import Hero from '../components/Hero'
import Siga from '../components/Siga'
import Descricao from '../components/Descricao'

function Home() {
  return (
    <div>
        <Hero/>
        <Equipe/>
        <Descricao/>
        <Siga/>
    </div>
  )
}

export default Home