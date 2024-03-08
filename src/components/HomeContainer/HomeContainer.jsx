import React from 'react'
import BackReact from '../BackReact/BackReact'
import IconosSocials from '../IconosSocials/IconosSocials'
import MyWorks from '../MyWorks/MyWorks'

import './HomeContainer.scss'

const HomeContainer = () => {
  return (
    <div className='appContainer'>
      <div className= 'new'>
         <div className='homeContainer'>
        <div className='sectionImg'>
            <div className='textImg'>
                <img className='imgPerfil' src="../../img/imgProfile.webp" alt="img-perfil" />
                <section className='secText'>
                    <h1 className='pName'>Fernando Valdés </h1>
                    <p className='nFront'>Frontend Web Developer</p>
                </section> 
            </div>
            <div className='titleWork'>
              <span>M</span>
              <span>y</span>
              <span>W</span>
              <span>o</span>
              <span>r</span>
              <span>k</span>
              <span>s</span>
              <img className='arrowHome' src="../../img/flechadown.png" alt="" />
            </div>
            
        </div>
        
        <div>
        <address className='iconsSocial'>
          <IconosSocials/>
        </address>
           <section className='pPresent'>
              <p className='pDescription'>Bienvenido a mi porfolio. Soy un apasionado desarrollador front-end con un enfoque en la creación de experiencias web cautivadoras y funcionales. Mi objetivo es combinar mi creatividad y habilidades técnicas para construir sitios web que no solo sean visualmente atractivos, sino también intuitivos y accesibles para todos los usuarios.
                <br  /><br />Estoy ansioso por colaborar en proyectos apasionantes y desafiantes, donde pueda utilizar mis habilidades para hacer una diferencia real. Si estás buscando a alguien que no solo tenga las habilidades técnicas necesarias, sino también la pasión y la dedicación para crear experiencias web excepcionales, ¡no dudes en ponerte en contacto conmigo!
              </p>
          </section>
        </div>
      </div>
      <BackReact/>
        <section  className='sectionWorks'>
          <MyWorks/>
        </section>
      </div>
    </div>
  )
}

export default HomeContainer
