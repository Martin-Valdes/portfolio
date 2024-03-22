import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Añade los idiomas y traducciones aquí
const resources = {
  en: {
    translation: {
      greeting: 'Wellcome',
      goodbye: 'Goodbye',
      presentationOne: "I am an electronics engineer and a passionate web developer with a focus on creating sites that have engaging and functional experiences. My goal is to combine my creativity and technical skills to build websites that are not only visually appealing, but also intuitive and accessible to all users.",
      presentationTwo:   "I am eager to collaborate on exciting and challenging projects, where I can use my skills to make a real difference. If you're looking for someone who not only has the necessary technical skills, but also the passion and dedication to creating exceptional web experiences, don't hesitate to contact me!"  
    },
  },
  es: {
    translation: {
      greeting: 'Bienvenido',
      goodbye: 'Adiós',
      presentationOne: "Soy ingeniero en electronica y un apasionado desarrollador web con un enfoque en la creación de sitios que cuentan con experiencias cautivadoras y funcionales. Mi objetivo es combinar mi creatividad y habilidades técnicas para construir sitios web que no solo sean visualmente atractivos, sino también intuitivos y accesibles para todos los usuarios.",
      presentationTwo: "Estoy ansioso por colaborar en proyectos apasionantes y desafiantes, donde pueda utilizar mis habilidades para hacer una diferencia real. Si estás buscando a alguien que no solo tenga las habilidades técnicas necesarias, sino también la pasión y la dedicación para crear experiencias web excepcionales, ¡no dudes en ponerte en contacto conmigo!"
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Idioma de respaldo en caso de que no se pueda determinar el idioma
    interpolation: {
      escapeValue: false, // No necesitas escapar valores para la interpolación
    },
    detection: {
      order: ['navigator', 'htmlTag'], // Define el orden de detección (puedes personalizarlo según tus necesidades)
    },
  });

export default i18n;
