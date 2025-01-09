import React, {useState} from 'react';
import CountrySelect from '../CountrySelect/CountrySelect';
import { MailIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';
import emailjs from "@emailjs/browser";

import "./Contact.scss"

const Contact = () => {

  const {t} = useTranslation();

  const initialFormData = {
    email: '',
    phone: '',
    country: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        await
        emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormData(initialFormData);
          },
          (error) => {
            console.log(error);
          }
        );
      };
    

  return (
    <>  
        <section className='title'>
            <MailIcon className='w-10 inline-block mb-4'/>
            <h1>{t("contact")}</h1>
        </section>
        <div className='contact'>
            <section className='form'>
                <form className='containerForm' onSubmit={handleSubmit}>
                    <input className='conatinerMessage2' value={formData.email} onChange={handleChange} type="email" name="email" placeholder={t("email")} required/>
                    <input className='conatinerMessage2' value={formData.phone} onChange={handleChange} type="text" name="phone"  placeholder={t('tel')} />
                    <CountrySelect
                        value={formData.country}
                        onChange={(selectedOption) => setFormData({ ...formData, country: selectedOption })}
                    />
                    <textarea className='conatinerMessage' value={formData.message} type="text" name="message" onChange={handleChange} placeholder={t("message")} required></textarea>
                    <button className='buttonSend' type='submit'>{t("send")}</button>
                </form>
            </section>
        </div>
    </>
  )
}

export default Contact
