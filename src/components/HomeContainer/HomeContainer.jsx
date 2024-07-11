import React from 'react'
import BackReact from '../BackReact/BackReact'
import IconosSocials from '../IconosSocials/IconosSocials'
import MyWorks from '../MyWorks/MyWorks'
import Contact from '../Contact/Contact'
import { useTranslation } from 'react-i18next';
import { BriefcaseIcon } from "@heroicons/react/solid";
import Skills from '../Skills/Skills';

import './HomeContainer.scss'

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
                <span>{t("a")}</span>
                <span>{t("b")}</span>
                <span>{t("c")}</span>
                <span className='space'></span>
                <span>{t("d")}</span>
                <span>{t("e")}</span>
                <span>{t("f")}</span>
                <span>{t("g")}</span>
                <span>{t("h")}</span>
                <span>{t("i")}</span>
                <span>{t("j")}</span>
                <span>{t("k")}</span>
                <span>{t("l")}</span>
              </div>
              <img className='arrowHome' src="../../img/flechadown.png" alt="" />
            </div>
        </div>
        <div className='sectionParrafoHome'>
          <address className='iconsSocial'>
            <IconosSocials/>
          </address>
           <section className='pPresent'>
            <h2 className='titlepParrapf'>¡{t("welcome")}!</h2>
              <p className='pDescription'> 
                {t('presentationOne')}
                <br  /><br />{t('presentationTwo')}
              </p>
          </section>
        </div>
      </div>
      <BackReact/>
      <section className='sectionProyects'>
        <BriefcaseIcon class="h-10 w-10 text-white" />
      <h1 className='titleWorks'>{t("myProyects")}</h1>
        <section  className='sectionWorks'>
          <MyWorks/>
        </section>
        <div className='skillsContainer'>
          <Skills/>
        </div>
      </section>
      <div className='contactContaier'>
        <Contact/>
      </div>
      </div>
    </div>
  )
}

export default HomeContainer
