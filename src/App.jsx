import { useState } from 'react'
import Equipe from './components/Equipe'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Siga from './components/Siga'
import './App.css'

function App() {

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Equipe/>
      <Siga/>
      <Footer/>
    </div>
  )
}

export default App
