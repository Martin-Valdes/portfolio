import React from 'react'
import { Link } from 'react-router-dom'

import "./IconosSocials.scss"

const IconosSocials = () => {
  return (
    <section className='sectionLogos'>
      <div className='icoGit icons'>
        <Link className='icons' to="https://github.com/Martin-Valdes?tab=repositories"><img src="/img/signo-de-github.png" alt="logo github" /></Link>
      </div>
      <div className='icons'>
        <Link className='icons' to="https://www.linkedin.com/in/fernando-martin-valdes-notrica"><img src="../../../img/linkedin.png" alt="" /></Link>
      </div>
    </section>
    
  )
}

export default IconosSocials
