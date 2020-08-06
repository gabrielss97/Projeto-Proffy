import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'


function TeacherItem() {
    return (
        <article className="teacher-item">
              <header>
                  <img src="https://avatars3.githubusercontent.com/u/43815745?s=460&u=e473c063cd32d5c4b89aaca081b1ed604b95eaac&v=4" alt="Gabriel Salvador"/>
                  <div>
                      <strong>Gabriel Salvador</strong>
                      <span>Quimica</span>

                  </div>
              </header>

              <p>
              Entusiasta das melhores tecnologias de química avançada.
              <br/><br/>
              Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
              </p>

              <footer>
                  <p>
                      Preço/hora
                      <strong>R$80,00</strong>
                  </p>
                  <button type="button">
                      <img src={whatsappIcon} alt="Wpp"/>
                      Entrar em contato
                  </button>
              </footer>
          </article>
    )
}

export default TeacherItem

