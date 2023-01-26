import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Jogadores from './pages/Jogadores'
import Diretoria from './pages/Diretoria'
import Contato from './pages/Contato'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header/>  
      <main>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/jogadores" element={<Jogadores/>} exact />
          <Route path="/diretoria" element={<Diretoria/>} exact />
          <Route path="/contato" element={<Contato/>} exact />
          <Route element={Error} />
        </Routes>
      </main>
        
      <Footer/>
    </div>
  )
}

export default App
