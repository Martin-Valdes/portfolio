import React from 'react'
import BackReact from '../BackReact/BackReact'
import IconosSocials from '../IconosSocials/IconosSocials'
import MyWorks from '../MyWorks/MyWorks'
import { useTranslation } from 'react-i18next';
import { BriefcaseIcon } from "@heroicons/react/solid";

import './HomeContainer.scss'
import Skills from '../Skills/Skills';

const HomeContainer = () => {
  
 const {t} = useTranslation();

  return (
    <div className='appContainer'>
      <div className= 'new'>
        <div className='textImgMedia'>
            <img className='imgPerfil' src="../../img/imgProfile.webp" alt="img-perfil" />
            <section className='secText'>
                <h1 className='pName'>Fernando Valdés </h1>
                <p className='nFront'>Frontend Web Developer</p>
            </section> 
          </div>
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
              <div>
                <span>M</span>
                <span>i</span>
                <span>s</span>
                <span className='space'></span>
                <span>P</span>
                <span>r</span>
                <span>o</span>
                <span>y</span>
                <span>e</span>
                <span>c</span>
                <span>t</span>
                <span>o</span>
                <span>s</span>
              </div>
              <img className='arrowHome' src="../../img/flechadown.png" alt="" />
            </div>
        </div>
        <div className='sectionParrafoHome'>
          <address className='iconsSocial'>
            <IconosSocials/>
          </address>
           <section className='pPresent'>
            <h2 className='titlepParrapf'>¡Bienvenido a mi portfolio!</h2>
              <p className='pDescription'> 
                {t('presentationOne')}
                <br  /><br />{t('presentationTwo')}
              </p>
          </section>
        </div>
      </div>
      <BackReact/>
      <section className='sectionProyects'>
        <BriefcaseIcon class="h-32 w-10 text-white" />
      <h1 className='titleWorks'>Mis proyectos</h1>
        <section  className='sectionWorks'>
          <MyWorks/>
        </section>
        <div className='skillsContainer'>
          <Skills/>
        </div>
      </section>
      
      </div>
    </div>
  )
}

export default HomeContainer
