import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import '../assets/styles/Contato.css'
import {IoIosSend} from 'react-icons/io'
import {RxReset} from 'react-icons/rx'

function Contato() {
   // EmailJS
   const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs.sendForm('service_aeq0uqs', 'template_w0m4ijo', form.current, 'R2WL_K0GmVashq23k')
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
                <div className='flex flex-row gap-2'>
                  <button type="submit" value="Enviar">
                      <IoIosSend/> Enviar
                  </button>

                  <button type='reset' value="Limpar">
                    <RxReset/> Limpar
                  </button>
                </div>
                
            </form>
    </main>
  )
}

export default Contato