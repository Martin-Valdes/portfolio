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
            </section>
            
          <section className='sectionCard'>
            <div data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              class=" card bg-black shadow-md rounded-md p-4">
              
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
                data-aos-easing="ease-in-sine" className='logo' src="../../img/sass.svg" alt="" />
              <div className='symbol' ><BackReact /></div>
            </div>
          </section>  
          <section className='sectionCard'>
            <div data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              class=" card bg-black shadow-md rounded-md p-4">
              <h3 class="text-lg font-bold mb-2">Título de la Tarjeta</h3>
              <p class="text-gray-700 mb-4">Contenido de la tarjeta...</p>
            </div>
          </section>
          <section className='sectionCard'>
            <div data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              class=" card bg-white shadow-md rounded-md p-4">
              <h3 class="text-lg font-bold mb-2">Título de la Tarjeta</h3>
              <p class="text-gray-700 mb-4">Contenido de la tarjeta...</p>
            </div>
          </section>
          
        </section>
        
    </div>
  )
}

export default MyWorks
