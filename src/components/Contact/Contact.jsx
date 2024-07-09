import React from 'react';

import "./Contact.scss"

import { MailIcon } from '@heroicons/react/solid';
const Contact = () => {
  return (
    <div className='contact'>
        <MailIcon className='w-10 inline-block mb-4 '/>
        <h1>Contacto</h1>
        <section className='form'>
            <form className='containerForm' action="">
            <input type="text" name="" id="" placeholder='Ingresa tu Email' />
            <input type="text" name="" id="" placeholder='Numero telefonico' />
            <input className='conatinerMessage' type="text" name="" id="" placeholder='Ingresa tu mensage'/>
            <button>Click</button>
        </form>
        </section>
        
    </div>
  )
}

export default Contact
