import React, {useState} from 'react';
import CountrySelect from '../CountrySelect/CountrySelect';
import appFirebase from '../../data/ConfigFirebase.js'
import { getFirestore, collection, addDoc} from 'firebase/firestore'

import "./Contact.scss"

import { MailIcon } from '@heroicons/react/solid';
const db = getFirestore(appFirebase)
const Contact = () => {

    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        country: '',
        message: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {

            
            await addDoc(collection(db, 'portfolio'),{
                ...formData
              })
            alert('Datos enviados correctamente a Firebase');
          } catch (error) {
            console.error('Error al enviar datos a Firebase:', error);
            
          }
          setFormData({
              email: '',
              phone: '',
              country: '',
              message: ''
            });
      };
      

  return (
    <>  
        <section className='title'>
            <MailIcon className='w-10 inline-block mb-4'/>
            <h1>Contacto</h1>
        </section>
        <div className='contact'>
            <section className='form'>
                <form className='containerForm' onSubmit={handleSubmit}>
                    <input className='conatinerMessage2' value={formData.email} onChange={handleChange} type="email" name="email" placeholder='Ingresa tu Email' required/>
                    <input className='conatinerMessage2' value={formData.phone} onChange={handleChange} type="text" name="phone"  placeholder='Numero telefonico' />
                    <CountrySelect
                        value={formData.country}
                        onChange={(selectedOption) => setFormData({ ...formData, country: selectedOption })}
                    />
                    <textarea className='conatinerMessage' value={formData.message} type="text" name="message" onChange={handleChange} placeholder='Ingresa tu mensage' required></textarea>
                    <button className='buttonSend' type='submit'>Enviar</button>
                </form>
            </section>
        </div>
    </>
  )
}

export default Contact
