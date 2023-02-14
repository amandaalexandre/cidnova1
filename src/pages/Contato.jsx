import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import '../assets/styles/Contato.css'
import {IoIosSend} from 'react-icons/io'
import {RxReset} from 'react-icons/rx'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

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

      <p>Se você quiser entrar em contato com a gente, pode <a href="https://wa.me/559881433881?text=Olá!%20Quero%20falar%20com%20o%20clube%20Nova%20Cidade.">nos falar pelo WhastApp</a>, preencher este formulário que ou enviar mensagem pelo <a href="https://www.facebook.com/novacidadeslz" target="_blank">Facebook</a> ou <a href="https://www.instagram.com/novacidadeslz/" target="_blank">Instagram</a>.</p>

      <br/>
      
      {/* Botão do WhatsApp */}
      <a href="https://wa.me/559881433881?text=Olá!%20Quero%20falar%20com%20o%20clube%20Nova%20Cidade.">
        <div className='botao__whatsapp'>
        <BsWhatsapp/>
        
        Falar pelo WhatsApp</div>
      </a>

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
                <div className='w-full flex flex-row justify-center gap-2'>
                  <button type="submit" value="Enviar">
                      <IoIosSend/> Enviar
                  </button>

                  <button type='reset' value="Limpar">
                    <RxReset/> Limpar
                  </button>
                </div>
                
            </form>

            <h2>OU NOS ALCANCE NAS REDES SOCIAIS</h2>
            <div className='flex flex-row w-auto gap-3 py-4 justify-center items-center '>
              <a href="https://www.facebook.com/novacidadeslz" target="_blank"> 
                <FaFacebookF className='siga__botoes_redes'/>
              </a>            
              <a href="https://www.instagram.com/novacidadeslz/" target="_blank"> 
                <FaInstagram className='siga__botoes_redes'/>
              </a>
            </div>
    </main>
  )
}

export default Contato