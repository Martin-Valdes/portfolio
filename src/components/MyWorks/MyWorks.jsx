import React from 'react'
import AOS from 'aos';
import BackReact from "../BackReact/BackReact"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import './MyWorks.scss'

AOS.init();

const MyWorks = () => {

  const {t} = useTranslation();

  return (
    <div  className="worksContainer">
        
        <section className='cardsWorks'>
        
            <section className='sectionCard automotora'>
              <Link to="https://spautos.com.uy/">
              <h2 className="class768 text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">{t("automotive")}</h2>
              <div data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                className=" card ">
                <img src="../../img/automotora.gif" alt="" />
              </div>
              <div className='divIcons'>
                <img data-aos="fade-left"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine" className='logo' src="../../img/jsLogo.png" alt="" />
                <img data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine" className='logo' src="../../img/html-5.png" alt="" />
                <img data-aos="fade-down"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine" className='logo' src="../../img/sass.svg" alt="" />
                <img data-aos="fade-down"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine" className='logo' src="../../img/firebase.png" alt="" />
                  <img data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine" className='logo' src="../../img/tailwind.png" alt="" /> 
                <div className='symbol'><BackReact /></div>
              </div>
              <div className=" infoCard bg-grey">
                <div className="description ">
                  <div className='fontCards'>
                    <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">{t("automotive")}</h2>
                    <p className="mt-1 text-white-500">
                      {t("automotiveText")}
                    </p>
                    <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-1">
                        <div  className="border-t border-gray-200 pt-4">
                        </div>
                    </dl>
                  </div>
                </div>
              </div></Link>
            </section>            
          <section className='sectionCard ecommerce'>
            <Link to="https://ecommercedwsite.netlify.app">
            <h2 className="class768 text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">eCommerce</h2>
              <div data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                className=" card">
                <img src="../../img/ecommerce.gif" alt="" />
              </div>
              <div className='divIcons'>
                 <img data-aos="fade-left"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine" className='logo' src="../../img/jsLogo.png" alt="" />
                <img data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine" className='logo' src="../../img/html-5.png" alt="" />
                  <img data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine" className='logo' src="../../img/firebase.png" alt="" />
                <img data-aos="fade-down"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine" className='logo' src="../../img/sass.svg" alt="" />
                <div className='symbol' ><BackReact /></div>
              </div>
              <div className=" infoCard bg-grey">
                  <div className="description ">
                    <div className='fontCards'>
                      <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">eCommerce</h2>
                      <p className="mt-1 text-white-500">
                        {t("ecommerceText")}
                      </p>
                      <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-1">
                          <div  className="border-t border-gray-200 pt-4">
                          </div>
                      </dl>
                    </div>
                  </div>
                </div>
                </Link>
          </section>  
          <section className='sectionCard feminnova'>
            <Link to="https://feminnova.com.ar/">
            <h2 className="class768 text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">Feminnova</h2>
              <div data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                className=" card ">
                <img src="../../img/feminnova.gif" alt="" />
              </div>
              <div className='divIcons'>
                <img data-aos="fade-left"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine" className='logo' src="../../img/jsLogo.png" alt="" />
                <img data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine" className='logo' src="../../img/html-5.png" alt="" />
                <img data-aos="fade-down"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine" className='logo' src="../../img/sass.svg" alt="" />
                <img data-aos="fade-down"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine" className='logo' src="../../img/firebase.png" alt="" />
                  <img data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine" className='logo' src="../../img/bootstrap.png" alt="" /> 
                <div className='symbol'><BackReact /></div>
              </div>
              <div className=" infoCard bg-grey">
                <div className="description ">
                  <div className='fontCards'>
                    <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">Feminnova</h2>
                    <p className="mt-1 text-white-500">
                      {t("femiText")}
                    </p>
                    <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-1">
                        <div  className="border-t border-gray-200 pt-4">
                        </div>
                    </dl>
                  </div>
                </div>
              </div>
              </Link>
            </section>
            <section className='sectionCard backend'>
            <Link to="https://github.com/Martin-Valdes/ecommerce-preeentregaUno.git">
            <h2 className="class768 text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">eCommerce Backend Js</h2>
              <div data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                className=" card">
                <img src="../../img/backImg.webp" alt="" />
              </div>
              <div className='divIcons'>
                <img data-aos="fade-left"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine" className='logo' src="../../img/jsLogo.png" alt="" />
                <img data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine" className='logo' src="../../img/html-5.png" alt="" />
                <img data-aos="fade-down"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine" className='logo' src="../../img/sass.svg" alt="" />
                <img data-aos="fade-down"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine" className='logo' src="../../img/nodejs.png" alt="" />
                  <img data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine" className='logo' src="../../img/mongodb.png" alt="" /> 
              </div>
              <div className=" infoCard bg-grey">
                <div className="description ">
                  <div className='fontCards'>
                    <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">eCommerce Backend Js</h2>
                    <p className="mt-1 text-white-500">
                      {t("backText")}
                    </p>
                    <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-1">
                        <div  className="border-t border-gray-200 pt-4">
                        </div>
                    </dl>
                  </div>
                </div>
              </div>
              </Link>
            </section>
          
        </section>
        
        
    </div>
  )
}

export default MyWorks
