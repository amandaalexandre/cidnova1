import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import '../assets/styles/Contato.css'
import {IoIosSend} from 'react-icons/io'

function Contato() {
   // EmailJS
   const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs.sendForm('service_c8hnpx5', 'portfolio', form.current, 'R2WL_K0GmVashq23k')
       .then((result) => {
         // Shows confirmation message
         alert("Mensagem enviada com sucesso!")
 
       }, (error) => {
         // Shows error message:
         alert("Erro ao enviar mensagem. Por favor, tente de novo")
 
       });
 
     //   Reset fields of form after it's sent
     e.target.reset();
   };

  return (
    <main className='contato'>
      <h1>CONTATO</h1>
      {/* Contact form */}
      <form ref={form} onSubmit={sendEmail} id="contact-form" className='contato__form'>
                <label>Nome</label>
                <input type="text" name="user_name" placeholder='Nome'/>
                <label>Email</label>
                <input type="email" name="user_email" placeholder='E-mail' />
                <label>Telefone</label>
                <input type="phone" name="user_phone" placeholder='(xx) xx xxxx-xxxx'/>
                <label>Mensagem</label>
                <textarea name="message" placeholder='Diga oi!'/>
                <button type="submit" value="Enviar">
                    <IoIosSend/>
                    &nbsp; Enviar
                </button>
            </form>
    </main>
  )
}

export default Contato