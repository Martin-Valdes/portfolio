import React from 'react'
import { Link } from 'react-router-dom'

import "./IconosSocials.scss"

const IconosSocials = () => {
  return (
    <section className='sectionLogos'>
      <div className='icoGit'>
        <Link to="https://github.com/Martin-Valdes?tab=repositories"><img src="/img/signo-de-github.png" alt="logo github" /></Link>
      </div>
      <div>
        <Link to="https://www.instagram.com/martinvpee?utm_source=qr&igsh=MXA0NGZ0MG1mdnVmeQ=="><img src="/img/instagram.png" alt="logo instagram" /></Link>
      </div>
      <div>
        <Link to="https://wa.me/+59899275858?text=Buen dia!"><img src="/img/social.png" alt="icono watsapp" /></Link>
      </div>
      <div>
        <Link to="https://www.linkedin.com/in/fernando-martin-valdes-notrica"><img src="../../../img/linkedin.png" alt="" /></Link>
      </div>
    </section>
    
  )
}

export default IconosSocials
