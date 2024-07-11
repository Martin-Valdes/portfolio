import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      greeting: 'Wellcome',
      goodbye: 'Goodbye',
      presentationOne: "¡Hola! Soy [Tu Nombre], ingeniero en electrónica y desarrollador front end con una sólida pasión por la tecnología y la programación. Mi formación en electrónica me ha proporcionado una base técnica robusta, que complemento con mis habilidades en desarrollo web, creando experiencias de usuario interactivas y eficientes. Actualmente, estoy ampliando mis horizontes profesionales estudiando para convertirme en desarrollador backend. Esta nueva faceta me permitirá tener una visión integral del desarrollo de software, abarcando tanto el diseño de interfaces atractivas como la construcción de sistemas robustos y escalables.",
      presentationTwo:   "I am eager to collaborate on exciting and challenging projects, where I can use my skills to make a real difference. If you're looking for someone who not only has the necessary technical skills, but also the passion and dedication to creating exceptional web experiences, don't hesitate to contact me!",
      a:"M", b:"y", c:"", d:"P", e:"r", f:"o", g:"y", h:"e", i:"c", j:"t", k:"s", l:"",
      welcome:"Welcome to my portfolio",
      automotive: "Automotive",
      automotiveText:"This site has user and administrator authentication with special permissions for vehicle gallery editing.",
      ecommerceText:"ECommerce project with shopping cart using Firebase to save orders and process them.",
      femiText:"Site created for an Argentine HR consultancy which had requirements for English translation of the site, responsive, linked to Google Forms and Firebase.",
      backText:"Development using Express server. Based on the simulation of a site which manages its products and shopping cart.",
      myProyects:"My Proyects",
      send:"Send",
      skills:"Skills and Technologies",
      contact:"Contact",
      email:"Your Email",
      tel:"Phone",
      message:"Your message"

    },
  },
  es: {
    translation: {
      greeting: 'Bienvenido',
      goodbye: 'Adiós',
      presentationOne: "¡Hola! Soy Fernando, ingeniero en electrónica y desarrollador front end con una sólida pasión por la tecnología y la programación.Actualmente, estoy ampliando mis horizontes profesionales estudiando para convertirme en desarrollador backend. Esta nueva faceta me permitirá tener una visión integral del desarrollo de software, abarcando tanto el diseño de interfaces atractivas como la construcción de sistemas robustos y escalables.",
      presentationTwo: "Soy una persona comprometida con el aprendizaje continuo y la mejora constante, siempre buscando nuevos desafíos que me permitan crecer profesionalmente. En mi portfolio, encontrarás una selección de mis proyectos más destacados que reflejan mi dedicación, habilidades y enfoque en la calidad.Gracias por visitar mi portfolio. Estoy entusiasmado por compartir mis proyectos y colaborar en nuevas oportunidades. ¡No dudes en contactarme para discutir cómo puedo contribuir a tu próximo proyecto!",
      a:"M", b:"i", c:"s", d:"P", e:"r", f:"o", g:"y", h:"e", i:"c", j:"t", k:"o", l:"s",
      welcome:"Bienvenido a mi portfolio",
      automotive:"Automotora",
      automotiveText:"Este sitio cuenta con autenticación de usuarios y de administrador con permisos especiales para la edición de galería de vehículos.",
      ecommerceText:"Poyecto eCommerce con carro de compras aplicando firebase para guardar los pedidos y darles un tratamiento.",
      femiText:"Sitio creado para una consultora de RRHH Argentina el cual tenia requerimientos de trduccion al ingles del sitio, responsivo, enlazado con google forms y firebase.",
      backText:"Desarrollo utilizando servidor Express. Basado en la simulacion de un sitio el cual administra sus productos y carrito de compras.",
      myProyects:"Mis Proyectos",
      send:"Enviar",
      skills:"Skills y Tecnologías",
      contact:"Contacto",
      email:"Email",
      phone:"Teléfono",
      message:"Mensaje",

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
