import React from 'react'
import '../assets/styles/Diretoria.css'

function DiretoriaCard(props) {

  return (
    <div className='diretor'>
        <img src={props.imagem} className="diretor__imagem" alt={props.nome} />
        <div className='diretor__descricao'>
            <h3>{props.nome}</h3> 
            <p>{props.cargo}</p>
        </div>
        
    </div>
    
  )
}

export default DiretoriaCard