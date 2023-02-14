import React from 'react'
import '../assets/styles/Descricao.css'
import ImgClube from '../assets/images/diretores_reunidos.jpg'
import { Link } from 'react-router-dom'

function Descricao() {
  return (
    <section className='Descricao py-6'>
        

        <div className='flex flex-row max-lg:flex-col gap-6'>
   
            <div className='basis-1/3 grow-0'>   
            <img src={ImgClube} className='descricao__img w-auto justify-center' alt='Diretoria do Esporte Clube Nova Cidade São Luís'/>
            </div>
            
            <div className='basis-2/3 grow'>
            <h1>SOBRE O CLUBE</h1>
            <p className='text-left max-lg:text-center'>O Esporte Clube Nova Cidade foi fundado no final de 2022 por Jorge Honorato e recruta meninos na área da Grande São Luís. Se você está interessado em se juntar ao clube, <Link to="/contato">entre em contato com a gente</Link>.</p>
            </div>
            
        </div>

    </section>
  )
}

export default Descricao