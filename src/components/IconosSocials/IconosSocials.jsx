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
        <Link to=""><img src="/img/instagram.png" alt="logo instagram" /></Link>
      </div>
      <div>
        <Link to=""><img src="/img/social.png" alt="" /></Link>
      </div>
    </section>
    
  )
}

export default IconosSocials
