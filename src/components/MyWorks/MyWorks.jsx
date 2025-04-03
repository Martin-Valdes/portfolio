import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import  {SwiperComponent}  from "../swiper/swiper.jsx";

import "./MyWorks.scss";

const dataObjet = [{
  gif:"backImg.webp",
  title:"Automotora",
  text:"Este sitio cuenta con autenticación de usuarios y de administrador con permisos especiales para la edición de galería de vehículos.",
  link: "https://automotora-dwsite.netlify.app",
},{
  gif:"backImg.webp",
  title:"eCommerce",
  text:"En este proyecto se realizo un e-commerce de venta de productos de tecnología, con la posibilidad de agregar productos al carrito, eliminarlos y realizar la compra de los mismos.",
  link: "https://ecommercedwsite.netlify.app",
},{
  gif:"feminnova.webp",
  title:"Feminnova",
  text:"Sitio creado para una consultora de RRHH Argentina el cual tenia requerimientos de trduccion al ingles del sitio, responsivo, enlazado con google forms y firebase.",
  link: "https://feminnova.com.ar/",
},{
  gif:"backImg.webp",
  title:"eCommerce Backend Js",
  text:"Desarrollo utilizando servidor Express. Basado en la simulacion de un sitio el cual administra sus productos y carrito de compras.",  
  link: "",
},{
  gif:"backImg.webp",
  title:"BSwap",
  text:"Desarrollo utilizando servidor Express. Basado en la simulacion de un sitio el cual administra sus productos y carrito de compras.",  
  link: "",
},{
  gif:"backImg.webp",
  title:"Iupi",
  text:"Desarrollo utilizando servidor Express. Basado en la simulacion de un sitio el cual administra sus productos y carrito de compras.",  
  link: "",
}

];



const MyWorks = () => {
  const { t } = useTranslation();

  return (
    <div className="worksContainer">
      <SwiperComponent props={dataObjet} />
    </div>
  );
};

export default MyWorks;
