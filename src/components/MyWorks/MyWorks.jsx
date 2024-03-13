import React from 'react'
import AOS from 'aos';
import BackReact from "../BackReact/BackReact"
import { Link } from 'react-router-dom'

import './MyWorks.scss'

AOS.init();

const MyWorks = () => {


  return (
    <div  className="worksContainer">
        
        <section className='cardsWorks'>
       
            <section className='sectionCard'>
              <Link to="https://automotora-prueba.com/">
              <div data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                class=" card bg-black shadow-md rounded-md p-4">
                
                <img src="../../img/automotora.gif" alt="" />
              </div>
              </Link>
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
                    <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">Automotora</h2>
                    <p className="mt-4 text-white-500">
                      Este sitio cuenta con autenticacion de usuarios y de administrador con perisos especiales para la edicion de galeria de vehiculos.
                    </p>
                    <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-1">
                        <div  className="border-t border-gray-200 pt-4">
                        </div>
                    </dl>
                  </div>
                </div>
              </div>
            </section>
            
          <section className='sectionCard'>
          <Link to="https://ecommercelectronics.netlify.app">
            <div data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              class=" card bg-black shadow-md rounded-md p-4">
              
              <img src="../../img/ecommerce.gif" alt="" />
            </div>
            </Link>
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
                    <p className="mt-4 text-white-500">
                    Poyecto eCommerce con carro de compras aplicando firebase para guardar los pedidos y darles un tratamiento.
                    </p>
                    <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-1">
                        <div  className="border-t border-gray-200 pt-4">
                          
                        </div>
                    </dl>
                  </div>
                </div>
              </div>
          </section>  
          
          
        </section>
        
    </div>
  )
}

export default MyWorks
